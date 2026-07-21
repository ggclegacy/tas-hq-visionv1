export interface TimeRange {
  readonly startMs: number;
  readonly endMs: number;
}

export interface PresentationMetadata {
  readonly id: string;
  readonly title: string;
  readonly version: string;
  readonly durationMs: number;
  readonly defaultQuality: QualityTier;
}

export type QualityTier = "essential" | "enhanced" | "cinematic";

export interface ReducedMotionAlternative {
  readonly mode: "static" | "crossfade" | "instant";
  readonly description: string;
}

export interface AssetRequirement {
  readonly id: string;
  readonly src: string;
  readonly kind: "image" | "audio" | "video" | "font" | "model";
  readonly qualityTiers: readonly QualityTier[];
  readonly alt?: string;
}

export interface TransitionDefinition {
  readonly kind: "cut" | "fade" | "dissolve";
  readonly durationMs: number;
  readonly reducedMotion?: ReducedMotionAlternative;
}

export interface CameraInstruction extends TimeRange {
  readonly id: string;
  readonly kind: "hold" | "pan" | "push" | "orbit";
  readonly target: string;
  readonly reducedMotion?: ReducedMotionAlternative;
}

export interface NarrationTrack extends TimeRange {
  readonly id: string;
  readonly assetId: string;
  readonly transcript: string;
}

export interface CaptionCue extends TimeRange {
  readonly id: string;
  readonly text: string;
}

export interface CaptionTrack {
  readonly id: string;
  readonly language: string;
  readonly cues: readonly CaptionCue[];
}

export interface AmbientAudioDefinition extends TimeRange {
  readonly id: string;
  readonly assetId: string;
  readonly gain: number;
}

export interface InterfaceChoreography extends TimeRange {
  readonly id: string;
  readonly target: string;
  readonly action: "reveal" | "emphasize" | "dismiss";
  readonly reducedMotion?: ReducedMotionAlternative;
}

interface BaseCue extends TimeRange {
  readonly id: string;
  readonly reducedMotion?: ReducedMotionAlternative;
}

export interface VisualCue extends BaseCue {
  readonly type: "visual";
  readonly target: string;
  readonly action: "show" | "hide" | "emphasize";
  readonly requiresMotion?: boolean;
}

export interface MediaCue extends BaseCue {
  readonly type: "media";
  readonly assetId: string;
  readonly action: "play" | "stop";
}

export interface CaptionDisplayCue extends BaseCue {
  readonly type: "caption";
  readonly captionTrackId: string;
}

export interface CameraCue extends BaseCue {
  readonly type: "camera";
  readonly cameraInstructionId: string;
  readonly requiresMotion?: boolean;
}

export interface InterfaceCue extends BaseCue {
  readonly type: "interface";
  readonly choreographyId: string;
  readonly requiresMotion?: boolean;
}

export type CueDefinition =
  VisualCue | MediaCue | CaptionDisplayCue | CameraCue | InterfaceCue;

export interface SceneDefinition extends TimeRange {
  readonly id: string;
  readonly title: string;
  readonly cues: readonly CueDefinition[];
  readonly narrationTrackIds: readonly string[];
  readonly captionTrackIds: readonly string[];
  readonly cameraInstructions: readonly CameraInstruction[];
  readonly ambientAudio: readonly AmbientAudioDefinition[];
  readonly interfaceChoreography: readonly InterfaceChoreography[];
  readonly enterTransition: TransitionDefinition;
  readonly exitTransition: TransitionDefinition;
}

export interface ChapterDefinition extends TimeRange {
  readonly id: string;
  readonly title: string;
  readonly scenes: readonly SceneDefinition[];
}

export interface ActDefinition extends TimeRange {
  readonly id: string;
  readonly title: string;
  readonly chapters: readonly ChapterDefinition[];
}

export interface PresentationManifest {
  readonly metadata: PresentationMetadata;
  readonly assets: readonly AssetRequirement[];
  readonly narrationTracks: readonly NarrationTrack[];
  readonly captionTracks: readonly CaptionTrack[];
  readonly acts: readonly ActDefinition[];
}

export interface ValidationIssue {
  readonly path: string;
  readonly code: string;
  readonly message: string;
}

export type ValidationResult =
  | { readonly ok: true; readonly manifest: PresentationManifest }
  | { readonly ok: false; readonly issues: readonly ValidationIssue[] };
