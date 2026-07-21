export { foundationManifest } from "./sample-manifest";
export {
  ACT_ONE_DURATION_MS,
  ACT_ONE_END_MS,
  ACT_ONE_START_MS,
  actOneDefinition,
  actOneScenes,
  actOneShots,
} from "./act-one-manifest";
export {
  PROLOGUE_DURATION_MS,
  prologueManifest,
  prologueShots,
} from "./prologue-manifest";
export {
  PRODUCTION_DURATION_MS,
  productionManifest,
} from "./production-manifest";
export { resolvePresentationFrame } from "./resolve-frame";
export type {
  ResolvedPresentationFrame,
  ResolvedTransition,
  ResolveFrameOptions,
} from "./resolve-frame";
export { validateManifest } from "./validate-manifest";
export type {
  ActDefinition,
  AmbientAudioDefinition,
  AssetRequirement,
  CameraInstruction,
  CaptionTrack,
  ChapterDefinition,
  CueDefinition,
  InterfaceChoreography,
  NarrationTrack,
  PresentationManifest,
  PresentationMetadata,
  QualityTier,
  ReducedMotionAlternative,
  SceneDefinition,
  ShotCameraState,
  ShotDefinition,
  ShotLayerDefinition,
  ShotLightingState,
  ShotViewportOverride,
  TransitionDefinition,
  ValidationIssue,
  ValidationResult,
  ViewportClass,
} from "./types";
