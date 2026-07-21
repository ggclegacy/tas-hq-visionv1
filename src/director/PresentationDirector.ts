import type {
  ChapterDefinition,
  PresentationManifest,
  SceneDefinition,
} from "../presentation";
import type {
  DirectorDependencies,
  DirectorSnapshot,
  DirectorState,
} from "./types";

type Subscriber = (snapshot: DirectorSnapshot) => void;

export class DirectorTransitionError extends Error {
  constructor(command: string, state: DirectorState) {
    super(`Cannot ${command} while the Presentation Director is ${state}.`);
    this.name = "DirectorTransitionError";
  }
}

export class PresentationDirector {
  readonly #manifest: PresentationManifest;
  readonly #dependencies: DirectorDependencies;
  readonly #subscribers = new Set<Subscriber>();
  #state: DirectorState = "idle";
  #timeMs = 0;
  #anchorClockMs = 0;
  #anchorPresentationMs = 0;
  #activeScene: SceneDefinition | null = null;
  #error: string | null = null;
  #revision = 0;
  #disposed = false;
  #snapshot: DirectorSnapshot;

  constructor(
    manifest: PresentationManifest,
    dependencies: DirectorDependencies,
  ) {
    this.#manifest = manifest;
    this.#dependencies = dependencies;
    this.#snapshot = this.#createSnapshot();
  }

  getSnapshot = (): DirectorSnapshot => this.#snapshot;

  subscribe = (subscriber: Subscriber): (() => void) => {
    this.#assertNotDisposed();
    this.#subscribers.add(subscriber);
    return () => this.#subscribers.delete(subscriber);
  };

  prepare(): void {
    this.#requireState("prepare", ["idle", "error", "completed"]);
    this.#cleanupActiveScene();
    this.#dependencies.media.prepare(this.#manifest);
    this.#timeMs = 0;
    this.#state = "ready";
    this.#error = null;
    this.#syncScene();
    this.#emit();
  }

  begin(): void {
    this.#requireState("begin", ["ready"]);
    this.#startPlaying();
  }

  play(): void {
    this.#requireState("play", ["ready", "paused"]);
    this.#startPlaying();
  }

  pause(): void {
    this.#requireState("pause", ["playing"]);
    this.#captureTime();
    this.#state = "paused";
    this.#dependencies.media.pause();
    this.#updateActiveScene();
    this.#emit();
  }

  resume(): void {
    this.#requireState("resume", ["paused"]);
    this.#startPlaying();
  }

  seek(timeMs: number): void {
    this.#requireState("seek", [
      "ready",
      "playing",
      "paused",
      "interrupted",
      "completed",
    ]);
    const returnState: DirectorState =
      this.#state === "playing" ? "playing" : "paused";
    if (this.#state === "playing") this.#captureTime();
    this.#state = "seeking";
    this.#emit();
    this.#timeMs = this.#clampTime(timeMs);
    this.#dependencies.media.seek(this.#timeMs);
    this.#anchorPresentationMs = this.#timeMs;
    this.#anchorClockMs = this.#dependencies.clock.now();
    this.#state =
      this.#timeMs >= this.#manifest.metadata.durationMs
        ? "completed"
        : returnState;
    this.#syncScene();
    this.#updateActiveScene();
    this.#emit();
  }

  skipChapter(): void {
    this.#requireState("skip chapter", [
      "ready",
      "playing",
      "paused",
      "interrupted",
    ]);
    if (this.#state === "playing") this.#captureTime();
    const chapters = this.#chapters();
    const nextChapter = chapters.find(
      (chapter) => chapter.startMs > this.#timeMs,
    );
    if (!nextChapter) {
      this.complete();
      return;
    }
    const wasPlaying = this.#state === "playing";
    this.#timeMs = nextChapter.startMs;
    this.#anchorPresentationMs = this.#timeMs;
    this.#anchorClockMs = this.#dependencies.clock.now();
    this.#dependencies.media.seek(this.#timeMs);
    this.#syncScene();
    this.#updateActiveScene();
    if (!wasPlaying && this.#state === "interrupted") this.#state = "paused";
    this.#emit();
  }

  restart(): void {
    this.#requireState("restart", [
      "ready",
      "playing",
      "paused",
      "interrupted",
      "completed",
      "error",
    ]);
    this.#dependencies.media.stop();
    this.#cleanupActiveScene();
    this.#timeMs = 0;
    this.#anchorPresentationMs = 0;
    this.#state = "ready";
    this.#error = null;
    this.#dependencies.media.seek(0);
    this.#syncScene();
    this.#emit();
  }

  handleVisibilityInterruption(): void {
    this.#requireState("handle visibility interruption", ["playing"]);
    this.#captureTime();
    this.#state = "interrupted";
    this.#dependencies.media.pause();
    this.#updateActiveScene();
    this.#emit();
  }

  recover(): void {
    this.#requireState("recover", ["interrupted", "error"]);
    if (this.#state === "error") {
      this.prepare();
      return;
    }
    this.#state = "paused";
    this.#error = null;
    this.#emit();
  }

  complete(): void {
    this.#requireState("complete", [
      "ready",
      "playing",
      "paused",
      "interrupted",
      "seeking",
    ]);
    if (this.#state === "playing") this.#captureTime();
    this.#timeMs = this.#manifest.metadata.durationMs;
    this.#state = "completed";
    this.#dependencies.media.stop();
    this.#exitActiveScene();
    this.#emit();
  }

  fail(error: unknown): void {
    this.#requireState("fail", [
      "idle",
      "ready",
      "playing",
      "paused",
      "seeking",
      "interrupted",
    ]);
    if (this.#state === "playing") this.#captureTime();
    this.#state = "error";
    this.#error = error instanceof Error ? error.message : String(error);
    this.#dependencies.media.pause();
    this.#cleanupActiveScene();
    this.#emit();
  }

  tick(): void {
    this.#requireState("tick", ["playing"]);
    this.#captureTime();
    if (this.#timeMs >= this.#manifest.metadata.durationMs) {
      this.complete();
      return;
    }
    this.#syncScene();
    this.#updateActiveScene();
    this.#emit();
  }

  dispose(): void {
    if (this.#disposed) return;
    this.#dependencies.media.stop();
    this.#cleanupActiveScene();
    this.#dependencies.media.cleanup();
    this.#subscribers.clear();
    this.#disposed = true;
  }

  #startPlaying(): void {
    this.#anchorClockMs = this.#dependencies.clock.now();
    this.#anchorPresentationMs = this.#timeMs;
    this.#state = "playing";
    this.#dependencies.media.play();
    this.#syncScene();
    this.#updateActiveScene();
    this.#emit();
  }

  #captureTime(): void {
    this.#timeMs = this.#clampTime(
      this.#anchorPresentationMs +
        (this.#dependencies.clock.now() - this.#anchorClockMs),
    );
  }

  #clampTime(timeMs: number): number {
    if (!Number.isFinite(timeMs))
      throw new TypeError("Presentation time must be finite.");
    return Math.min(Math.max(timeMs, 0), this.#manifest.metadata.durationMs);
  }

  #chapters(): readonly ChapterDefinition[] {
    return this.#manifest.acts.flatMap((act) => act.chapters);
  }

  #sceneAt(timeMs: number): SceneDefinition | null {
    return (
      this.#chapters()
        .flatMap((chapter) => chapter.scenes)
        .find((scene) => timeMs >= scene.startMs && timeMs < scene.endMs) ??
      null
    );
  }

  #syncScene(): void {
    const nextScene = this.#sceneAt(this.#timeMs);
    if (nextScene?.id === this.#activeScene?.id) return;
    this.#exitActiveScene();
    this.#activeScene = nextScene;
    if (this.#activeScene)
      this.#dependencies.lifecycle?.enter(
        this.#activeScene,
        this.#createSnapshot(),
      );
  }

  #updateActiveScene(): void {
    if (!this.#activeScene) return;
    this.#dependencies.lifecycle?.update(
      this.#activeScene,
      this.#timeMs - this.#activeScene.startMs,
      this.#createSnapshot(),
    );
  }

  #exitActiveScene(): void {
    if (!this.#activeScene) return;
    const scene = this.#activeScene;
    this.#dependencies.lifecycle?.exit(scene, this.#createSnapshot());
    this.#dependencies.lifecycle?.cleanup(scene);
    this.#activeScene = null;
  }

  #cleanupActiveScene(): void {
    if (!this.#activeScene) return;
    this.#dependencies.lifecycle?.cleanup(this.#activeScene);
    this.#activeScene = null;
  }

  #createSnapshot(): DirectorSnapshot {
    const act =
      this.#manifest.acts.find(
        (item) => this.#timeMs >= item.startMs && this.#timeMs < item.endMs,
      ) ?? null;
    const chapter =
      act?.chapters.find(
        (item) => this.#timeMs >= item.startMs && this.#timeMs < item.endMs,
      ) ?? null;
    return Object.freeze({
      state: this.#state,
      presentationId: this.#manifest.metadata.id,
      timeMs: this.#timeMs,
      durationMs: this.#manifest.metadata.durationMs,
      progress:
        this.#manifest.metadata.durationMs === 0
          ? 0
          : this.#timeMs / this.#manifest.metadata.durationMs,
      currentActId: act?.id ?? null,
      currentChapterId: chapter?.id ?? null,
      currentSceneId:
        this.#activeScene?.id ?? this.#sceneAt(this.#timeMs)?.id ?? null,
      error: this.#error,
      revision: this.#revision,
    });
  }

  #emit(): void {
    this.#revision += 1;
    this.#snapshot = this.#createSnapshot();
    this.#subscribers.forEach((subscriber) => subscriber(this.#snapshot));
  }

  #requireState(command: string, allowed: readonly DirectorState[]): void {
    this.#assertNotDisposed();
    if (!allowed.includes(this.#state))
      throw new DirectorTransitionError(command, this.#state);
  }

  #assertNotDisposed(): void {
    if (this.#disposed)
      throw new Error("Presentation Director has been disposed.");
  }
}
