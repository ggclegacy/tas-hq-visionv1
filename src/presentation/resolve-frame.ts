import type { DirectorSnapshot } from "../director";
import type {
  CaptionCue,
  CameraInstruction,
  CueDefinition,
  InterfaceChoreography,
  PresentationManifest,
  QualityTier,
  SceneDefinition,
  ShotCameraState,
  ShotDefinition,
  ShotLayerDefinition,
  ShotLightingState,
  TransitionDefinition,
  ViewportClass,
} from "./types";

export interface ResolveFrameOptions {
  readonly quality: QualityTier;
  readonly reducedMotion: boolean;
  readonly captionsEnabled: boolean;
  readonly viewport?: ViewportClass;
}

export interface ResolvedShotFrame {
  readonly shot: ShotDefinition;
  readonly localTimeMs: number;
  readonly progress: number;
  readonly phase: "entrance" | "hold" | "exit";
  readonly camera: ShotCameraState;
  readonly layers: readonly ShotLayerDefinition[];
  readonly lighting: ShotLightingState;
  readonly transition: {
    readonly kind: ShotDefinition["transitionOut"]["kind"];
    readonly progress: number;
  };
  readonly viewport: ViewportClass;
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
  readonly shot: ResolvedShotFrame | null;
}

export function resolvePresentationFrame(
  manifest: PresentationManifest,
  snapshot: DirectorSnapshot,
  options: ResolveFrameOptions,
): ResolvedPresentationFrame {
  const timeMs = clamp(snapshot.timeMs, 0, manifest.metadata.durationMs);
  const shot = resolveShot(manifest, timeMs, options);
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
    shot,
  };
}

function resolveShot(
  manifest: PresentationManifest,
  timeMs: number,
  options: ResolveFrameOptions,
): ResolvedShotFrame | null {
  const definition = manifest.shots?.find(
    (shot) =>
      timeMs >= shot.startMs &&
      (timeMs < shot.endMs ||
        (timeMs === manifest.metadata.durationMs && shot.endMs === timeMs)),
  );
  if (!definition) return null;
  const viewport = options.viewport ?? "desktop";
  const duration = definition.endMs - definition.startMs;
  const localTimeMs = clamp(timeMs - definition.startMs, 0, duration);
  const progress = duration === 0 ? 1 : localTimeMs / duration;
  const override = definition.viewports[viewport];
  const camera = options.reducedMotion
    ? definition.reducedMotion.camera
    : interpolateCamera(
        definition.camera.from,
        definition.camera.to,
        progress,
        override,
      );
  const phase =
    timeMs < definition.entranceEndMs
      ? "entrance"
      : timeMs >= definition.exitStartMs
        ? "exit"
        : "hold";
  const transitionDuration = options.reducedMotion
    ? 0
    : definition.transitionOut.durationMs;
  const transitionProgress =
    transitionDuration === 0
      ? 0
      : clamp((timeMs - definition.exitStartMs) / transitionDuration, 0, 1);
  return {
    shot: definition,
    localTimeMs,
    progress,
    phase,
    camera,
    layers: definition.layers.filter((layer) =>
      layer.qualityTiers.includes(options.quality),
    ),
    lighting: interpolateLighting(
      definition.lighting.from,
      definition.lighting.to,
      progress,
    ),
    transition: {
      kind: options.reducedMotion
        ? definition.reducedMotion.transition
        : definition.transitionOut.kind,
      progress: transitionProgress,
    },
    viewport,
  };
}

function interpolateCamera(
  from: ShotCameraState,
  to: ShotCameraState,
  progress: number,
  override: import("./types").ShotViewportOverride,
): ShotCameraState {
  const mix = (a: number, b: number) => a + (b - a) * progress;
  const intensity = override.motionIntensity ?? 1;
  return {
    focalSubject: to.focalSubject,
    focalX: override.focalX ?? mix(from.focalX, to.focalX),
    focalY: override.focalY ?? mix(from.focalY, to.focalY),
    scale:
      override.scale ??
      from.scale + (to.scale - from.scale) * progress * intensity,
    depth: mix(from.depth, to.depth) * intensity,
    driftX: mix(from.driftX, to.driftX) * intensity,
    driftY: mix(from.driftY, to.driftY) * intensity,
    lens: to.lens,
  };
}

function interpolateLighting(
  from: ShotLightingState,
  to: ShotLightingState,
  progress: number,
): ShotLightingState {
  const mix = (a: number, b: number) => a + (b - a) * progress;
  return {
    key: progress < 0.5 ? from.key : to.key,
    intensity: mix(from.intensity, to.intensity),
    warmth: mix(from.warmth, to.warmth),
    atmosphere: mix(from.atmosphere, to.atmosphere),
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
    shot: null,
  };
}

function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}
