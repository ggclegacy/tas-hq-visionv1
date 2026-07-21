import type { DirectorSnapshot } from "../director";
import type {
  CaptionCue,
  CameraInstruction,
  CueDefinition,
  InterfaceChoreography,
  PresentationManifest,
  QualityTier,
  SceneDefinition,
  TransitionDefinition,
} from "./types";

export interface ResolveFrameOptions {
  readonly quality: QualityTier;
  readonly reducedMotion: boolean;
  readonly captionsEnabled: boolean;
}

export interface ResolvedTransition {
  readonly kind: TransitionDefinition["kind"];
  readonly phase: "enter" | "hold" | "exit";
  readonly progress: number;
}

export interface ResolvedPresentationFrame {
  readonly scene: SceneDefinition | null;
  readonly localTimeMs: number;
  readonly sceneProgress: number;
  readonly cues: readonly CueDefinition[];
  readonly camera: readonly CameraInstruction[];
  readonly interface: readonly InterfaceChoreography[];
  readonly caption: CaptionCue | null;
  readonly transition: ResolvedTransition | null;
  readonly quality: QualityTier;
  readonly reducedMotion: boolean;
}

export function resolvePresentationFrame(
  manifest: PresentationManifest,
  snapshot: DirectorSnapshot,
  options: ResolveFrameOptions,
): ResolvedPresentationFrame {
  const timeMs = clamp(snapshot.timeMs, 0, manifest.metadata.durationMs);
  const scenes = manifest.acts.flatMap((act) =>
    act.chapters.flatMap((chapter) => chapter.scenes),
  );
  const scene =
    scenes.find(
      (candidate) =>
        timeMs >= candidate.startMs &&
        (timeMs < candidate.endMs ||
          (timeMs === manifest.metadata.durationMs &&
            candidate.endMs === manifest.metadata.durationMs)),
    ) ?? null;

  if (!scene) return emptyFrame(options);

  const localTimeMs = clamp(
    timeMs - scene.startMs,
    0,
    scene.endMs - scene.startMs,
  );
  const sceneDurationMs = scene.endMs - scene.startMs;
  const active = <T extends { startMs: number; endMs: number }>(item: T) =>
    timeMs >= item.startMs &&
    (timeMs < item.endMs ||
      (timeMs === manifest.metadata.durationMs &&
        item.endMs === manifest.metadata.durationMs));
  const captionTracks = manifest.captionTracks.filter((track) =>
    scene.captionTrackIds.includes(track.id),
  );
  const caption = options.captionsEnabled
    ? (captionTracks.flatMap((track) => track.cues).find(active) ?? null)
    : null;

  return {
    scene,
    localTimeMs,
    sceneProgress: sceneDurationMs === 0 ? 1 : localTimeMs / sceneDurationMs,
    cues: scene.cues
      .filter(active)
      .map((cue) =>
        options.reducedMotion && cue.reducedMotion
          ? { ...cue, requiresMotion: false }
          : cue,
      ),
    camera: scene.cameraInstructions.filter(active),
    interface: scene.interfaceChoreography.filter(active),
    caption,
    transition: resolveTransition(scene, localTimeMs, options.reducedMotion),
    quality: options.quality,
    reducedMotion: options.reducedMotion,
  };
}

function resolveTransition(
  scene: SceneDefinition,
  localTimeMs: number,
  reducedMotion: boolean,
): ResolvedTransition {
  const duration = scene.endMs - scene.startMs;
  const enterDuration = reducedMotion ? 0 : scene.enterTransition.durationMs;
  const exitDuration = reducedMotion ? 0 : scene.exitTransition.durationMs;
  if (enterDuration > 0 && localTimeMs < enterDuration) {
    return {
      kind: scene.enterTransition.kind,
      phase: "enter",
      progress: clamp(localTimeMs / enterDuration, 0, 1),
    };
  }
  if (exitDuration > 0 && localTimeMs > duration - exitDuration) {
    return {
      kind: scene.exitTransition.kind,
      phase: "exit",
      progress: clamp((duration - localTimeMs) / exitDuration, 0, 1),
    };
  }
  return { kind: "cut", phase: "hold", progress: 1 };
}

function emptyFrame(options: ResolveFrameOptions): ResolvedPresentationFrame {
  return {
    scene: null,
    localTimeMs: 0,
    sceneProgress: 0,
    cues: [],
    camera: [],
    interface: [],
    caption: null,
    transition: null,
    quality: options.quality,
    reducedMotion: options.reducedMotion,
  };
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}
