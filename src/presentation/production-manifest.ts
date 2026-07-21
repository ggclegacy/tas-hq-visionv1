import { prologueManifest } from "./prologue-manifest";
import type {
  ActDefinition,
  PresentationManifest,
  SceneDefinition,
} from "./types";

export const PRODUCTION_DURATION_MS = 174_000;

const source = "project-owner-approved-prologue-language";
const reducedMotion = {
  mode: "static" as const,
  description: "Show the complete static composition without spatial motion.",
};
const crossfade = {
  mode: "crossfade" as const,
  description: "Show the complete composition with a short opacity crossfade.",
};

function actScene(
  id: string,
  title: string,
  startMs: number,
  endMs: number,
  content: readonly string[],
  kind: "act-chapter" | "future-handoff" = "act-chapter",
): SceneDefinition {
  return {
    id,
    title,
    kind,
    content,
    sourceRefs: [source],
    dataClassification: "none",
    startMs,
    endMs,
    cues: [
      {
        id: `${id}-visual`,
        type: "visual",
        target: id,
        action: "show",
        startMs,
        endMs,
        requiresMotion: true,
        reducedMotion,
      },
    ],
    narrationTrackIds: [],
    captionTrackIds: [],
    cameraInstructions: [],
    ambientAudio: [],
    interfaceChoreography: [],
    enterTransition: {
      kind: "dissolve",
      durationMs: 1_200,
      reducedMotion: crossfade,
    },
    exitTransition: {
      kind: "dissolve",
      durationMs: 1_200,
      reducedMotion: crossfade,
    },
  };
}

function chapter(id: string, title: string, scene: SceneDefinition) {
  return {
    id,
    title,
    startMs: scene.startMs,
    endMs: scene.endMs,
    scenes: [scene],
  };
}

const firstActScenes = [
  actScene("act-1-standard", "The Standard", 54_000, 66_000, [
    "Act I",
    "The Standard",
    "More than systems",
  ]),
  actScene("act-1-trust", "Trust", 66_000, 82_000, ["Trust", "The foundation"]),
  actScene("act-1-knowledge", "Knowledge", 82_000, 98_000, [
    "Knowledge",
    "Carried forward",
  ]),
  actScene(
    "act-1-synthesis",
    "The Standard",
    98_000,
    114_000,
    ["Standards", "Leadership", "People", "The Standard"],
    "future-handoff",
  ),
] as const;

const secondActScenes = [
  actScene("act-2-continuity", "Carried Forward", 114_000, 128_000, [
    "Act II",
    "Carried Forward",
  ]),
  actScene("act-2-knowledge", "Knowledge", 128_000, 144_000, [
    "Knowledge",
    "Shared with clarity",
  ]),
  actScene("act-2-standards", "Standards", 144_000, 160_000, [
    "Standards",
    "Held with consistency",
  ]),
  actScene(
    "act-2-leadership",
    "The Future Standard",
    160_000,
    174_000,
    [
      "Leadership",
      "Carried forward by people",
      "Act III",
      "The Future Standard",
    ],
    "future-handoff",
  ),
] as const;

const firstAct: ActDefinition = {
  id: "first-act",
  title: "The Standard",
  startMs: 54_000,
  endMs: 114_000,
  chapters: firstActScenes.map((scene, index) =>
    chapter(`act-1-chapter-${index + 1}`, scene.title, scene),
  ),
};

const secondAct: ActDefinition = {
  id: "second-act",
  title: "Carried Forward",
  startMs: 114_000,
  endMs: 174_000,
  chapters: secondActScenes.map((scene, index) =>
    chapter(`act-2-chapter-${index + 1}`, scene.title, scene),
  ),
};

export const productionManifest: PresentationManifest = {
  ...prologueManifest,
  metadata: {
    ...prologueManifest.metadata,
    id: "tas-hq-executive-vision",
    title: "TAS HQ Executive Vision Experience",
    version: "4.0.0",
    durationMs: PRODUCTION_DURATION_MS,
  },
  acts: [prologueManifest.acts[0]!, firstAct, secondAct],
};
