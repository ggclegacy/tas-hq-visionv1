import { ACT_ONE_END_MS } from "./act-one-manifest";
import type { ActDefinition, SceneDefinition, ShotDefinition } from "./types";

export const ACT_TWO_START_MS = ACT_ONE_END_MS;
export const ACT_TWO_END_MS = 170_000;
export const ACT_TWO_DURATION_MS = ACT_TWO_END_MS - ACT_TWO_START_MS;
const tiers = ["essential", "enhanced", "cinematic"] as const;
const viewports = {
  mobile: {
    focalX: 53,
    focalY: 42,
    textAlign: "start" as const,
    textWidth: 86,
    motionIntensity: 0.36,
    safeInset: 7,
  },
  tablet: {
    focalX: 50,
    focalY: 47,
    textAlign: "start" as const,
    textWidth: 62,
    motionIntensity: 0.66,
    safeInset: 6,
  },
  desktop: {
    focalX: 45,
    focalY: 50,
    textAlign: "start" as const,
    textWidth: 46,
    motionIntensity: 0.9,
    safeInset: 5,
  },
};
const specs = [
  [
    "act2-expansion",
    [
      "Act II",
      "The Challenge",
      "Growth changes the distance everything must travel.",
    ],
    "Continuity expands into distance",
    "balanced",
    1,
  ],
  [
    "act2-knowledge-distance",
    ["Knowledge", "More people. More moments. More places."],
    "Knowledge travels farther",
    "green",
    2,
  ],
  [
    "act2-knowledge-scatter",
    ["What was once shared naturally begins to scatter."],
    "Distribution becomes visible",
    "green",
    3,
  ],
  [
    "act2-training-transfer",
    ["Training", "A standard repeated is not always a standard received."],
    "Faithful transfer crosses distance",
    "gold",
    3,
  ],
  [
    "act2-leadership-relay",
    [
      "Leadership",
      "The most important messages must be carried again and again.",
    ],
    "Responsible guidance repeats",
    "balanced",
    4,
  ],
  [
    "act2-communication-paths",
    [
      "Communication",
      "More channels create more paths—and more interpretation.",
    ],
    "Valid paths multiply",
    "green",
    5,
  ],
  [
    "act2-standards-scale",
    ["Standards", "Consistency becomes harder to hold at scale."],
    "Alignment spans greater distance",
    "gold",
    5,
  ],
  [
    "act2-growth-safeguard",
    [
      "This is not a failure of culture.",
      "It is the natural complexity of growth.",
    ],
    "Remove blame and reveal the pattern",
    "balanced",
    4,
  ],
  [
    "act2-forward-question",
    [
      "The question is not whether to grow.",
      "The question is how to carry the standard forward.",
    ],
    "Turn pressure into possibility",
    "green",
    3,
  ],
  [
    "act2-vision-threshold",
    ["Act III", "The Vision"],
    "Release tension without revealing solution",
    "darkness",
    1,
  ],
] as const;
const durations = [6_000, 7_000, 6_000, 7_000, 7_000, 7_000, 7_000, 7_000, 7_000, 7_000] as const;
const startAt = (index: number) => ACT_TWO_START_MS + durations.slice(0, index).reduce((sum, value) => sum + value, 0);

export const actTwoScenes: readonly SceneDefinition[] = specs.map(
  ([id, content], index) => {
  const startMs = startAt(index),
    endMs = startMs + durations[index]!;
    return {
      id: `${id}-scene`,
      title: content[0],
      kind: id.includes("threshold") ? "future-handoff" : "act-chapter",
      content,
      sourceRefs: ["authorized-conceptual-growth-dynamic"],
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
          reducedMotion: {
            mode: "static",
            description:
              "Show the complete relationship without spatial motion.",
          },
        },
      ],
      narrationTrackIds: [],
      captionTrackIds: [],
      cameraInstructions: [],
      ambientAudio: [],
      interfaceChoreography: [],
      enterTransition: { kind: "cut", durationMs: 0 },
      exitTransition: { kind: "cut", durationMs: 0 },
    };
  },
);

export const actTwoShots: readonly ShotDefinition[] = specs.map(
  ([id, content, intent, light, density], index) => {
  const startMs = startAt(index),
    endMs = startMs + durations[index]!;
    const from = {
      focalSubject: id,
      focalX: 47,
      focalY: 50,
      scale: 1.025,
      depth: density / 6,
      driftX: index % 2 ? -0.5 : 0.5,
      driftY: 0,
      lens: "wide" as const,
    };
    const to = {
      ...from,
      scale: 1,
      depth: density / 5,
      driftX: -from.driftX,
      driftY: -0.2,
      lens: "normal" as const,
    };
    return {
      id,
      parentSceneId: `${id}-scene`,
      intent: `${intent}; conceptual-growth-dynamic; not company-specific`,
      startMs,
      endMs,
      camera: { from, to },
      layers: [
        {
          id: "challenge-world",
          plane: "environment",
          kind: "field",
          decorative: true,
          depth: 0,
          qualityTiers: tiers,
          fallback: "field",
        },
        {
          id: `density-${density}`,
          plane: "architecture",
          kind: "architecture",
          decorative: true,
          depth: density / 6,
          qualityTiers: tiers,
          fallback: "field",
        },
        {
          id: "path-light",
          plane: "atmosphere",
          kind: "light",
          decorative: true,
          depth: 0.52,
          qualityTiers: ["enhanced", "cinematic"],
          fallback: "hide",
        },
        {
          id: "challenge-copy",
          plane: "typography",
          kind: "copy",
          content,
          decorative: false,
          meaning: `Conceptual growth dynamic: ${content.join(" ")}`,
          depth: 0.82,
          qualityTiers: tiers,
          fallback: "copy",
        },
        {
          id: "context-occlusion",
          plane: "foreground",
          kind: "occlusion",
          decorative: true,
          depth: 1,
          qualityTiers: ["cinematic"],
          fallback: "hide",
        },
      ],
      lighting: {
        from: {
          key: light,
          intensity: 0.32,
          warmth: light === "gold" ? 0.82 : 0.32,
          atmosphere: density / 8,
        },
        to: {
          key: light,
          intensity: light === "darkness" ? 0.18 : 0.68,
          warmth: light === "gold" ? 0.9 : 0.42,
          atmosphere: density / 7,
        },
      },
      entranceEndMs: startMs + 1_300,
      exitStartMs: endMs - 1_100,
      transitionOut: {
        kind:
          index === 2
            ? "occlusion"
            : index === 5
              ? "light-wipe"
              : "precision-lock",
        durationMs: 1_100,
      },
      viewports,
      reducedMotion: {
        camera: { ...to, depth: density / 8, driftX: 0, driftY: 0 },
        transition: "dissolve",
      },
      accessibility: {
        label: `Universal organizational dynamic, not a company claim. ${content.join(" ")}`,
      },
      continuityCarrier: index % 3 === 0 ? "architecture" : index % 3 === 1 ? "light" : "occlusion",
      overlapMs: 750,
      fullLegibilityMs: startMs + 650,
      emblem: "none",
    };
  },
);

export const actTwoDefinition: ActDefinition = {
  id: "act-two-challenge",
  title: "The Challenge",
  startMs: ACT_TWO_START_MS,
  endMs: ACT_TWO_END_MS,
  chapters: actTwoScenes.map((scene, index) => ({
    id: `act-two-chapter-${index + 1}`,
    title: scene.title,
    startMs: scene.startMs,
    endMs: scene.endMs,
    scenes: [scene],
  })),
};
