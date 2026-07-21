import type { PresentationManifest, SceneDefinition } from "../presentation";

export type DirectorState =
  | "idle"
  | "ready"
  | "playing"
  | "paused"
  | "seeking"
  | "interrupted"
  | "completed"
  | "error";

export interface DirectorSnapshot {
  readonly state: DirectorState;
  readonly presentationId: string;
  readonly timeMs: number;
  readonly durationMs: number;
  readonly progress: number;
  readonly currentActId: string | null;
  readonly currentChapterId: string | null;
  readonly currentSceneId: string | null;
  readonly error: string | null;
  readonly revision: number;
}

export interface DirectorClock {
  now(): number;
}

export interface MediaAdapter {
  prepare(this: void, manifest: PresentationManifest): void;
  play(this: void): void;
  pause(this: void): void;
  seek(this: void, timeMs: number): void;
  stop(this: void): void;
  cleanup(this: void): void;
}

export interface SceneLifecycle {
  enter(this: void, scene: SceneDefinition, snapshot: DirectorSnapshot): void;
  update(
    this: void,
    scene: SceneDefinition,
    localTimeMs: number,
    snapshot: DirectorSnapshot,
  ): void;
  exit(this: void, scene: SceneDefinition, snapshot: DirectorSnapshot): void;
  cleanup(this: void, scene: SceneDefinition): void;
}

export interface DirectorDependencies {
  readonly clock: DirectorClock;
  readonly media: MediaAdapter;
  readonly lifecycle?: SceneLifecycle;
}
