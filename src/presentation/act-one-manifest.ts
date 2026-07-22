import type { ActDefinition, SceneDefinition, ShotDefinition } from "./types";

export const ACT_ONE_START_MS = 40_000;
export const ACT_ONE_END_MS = 102_000;
export const ACT_ONE_DURATION_MS = ACT_ONE_END_MS - ACT_ONE_START_MS;

const tiers = ["essential", "enhanced", "cinematic"] as const;
const viewports = {
  mobile: {
    focalX: 52,
    focalY: 43,
    textAlign: "start" as const,
    textWidth: 84,
    motionIntensity: 0.4,
    safeInset: 7,
  },
  tablet: {
    focalX: 49,
    focalY: 48,
    textAlign: "start" as const,
    textWidth: 60,
    motionIntensity: 0.7,
    safeInset: 6,
  },
  desktop: {
    focalX: 46,
    focalY: 50,
    textAlign: "start" as const,
    textWidth: 44,
    motionIntensity: 1,
    safeInset: 5,
  },
};

const specs = [
  [
    "act1-threshold-recognition",
    40_000,
    47_000,
    [
      "Act I",
      "The Standard",
      "What Blair and Bailey built lives in the people who carry it.",
    ],
    "Recognition",
    "gold",
  ],
  [
    "act1-trust",
    47_000,
    55_000,
    ["Trust", "Earned in every interaction."],
    "Trust has human weight",
    "gold",
  ],
  [
    "act1-knowledge",
    55_000,
    63_000,
    ["Knowledge", "Made valuable when it is shared."],
    "Knowledge moves through people",
    "green",
  ],
  [
    "act1-culture",
    63_000,
    71_000,
    ["Culture", "The standard people carry when no one is watching."],
    "Culture remains embedded",
    "balanced",
  ],
  [
    "act1-people",
    71_000,
    79_000,
    ["People", "The human system behind every experience."],
    "People carry the standard",
    "balanced",
  ],
  [
    "act1-leadership",
    79_000,
    88_000,
    ["Leadership", "Clarity. Stewardship. Continuity."],
    "Leadership provides continuity",
    "gold",
  ],
  [
    "act1-synthesis",
    88_000,
    96_000,
    ["What has been built here is more than a business.", "It is a standard."],
    "One institutional standard",
    "green",
  ],
  [
    "act1-challenge-threshold",
    96_000,
    102_000,
    ["Act II", "The Challenge"],
    "Create truthful forward tension",
    "darkness",
  ],
] as const;

export const actOneScenes: readonly SceneDefinition[] = specs.map(
  ([id, startMs, endMs, content]) => ({
    id: `${id}-scene`,
    title: content[0],
    kind: id.includes("threshold") ? "future-handoff" : "act-chapter",
    content,
    sourceRefs: ["approved-phase-2-language"],
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
          description: "Hold the complete authored composition.",
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
  }),
);

export const actOneShots: readonly ShotDefinition[] = specs.map(
  ([id, startMs, endMs, content, intent, light], index) => {
    const from = {
      focalSubject: id,
      focalX: 48,
      focalY: 50,
      scale: 1.035,
      depth: 0.4,
      driftX: index % 2 ? -0.4 : 0.4,
      driftY: 0,
      lens: "wide" as const,
    };
    const to = {
      ...from,
      scale: 1,
      depth: 0.78,
      driftX: -from.driftX,
      driftY: -0.25,
      lens: "intimate" as const,
    };
    return {
      id,
      parentSceneId: `${id}-scene`,
      intent,
      startMs,
      endMs,
      camera: { from, to },
      layers: [
        {
          id: "act-world",
          plane: "environment",
          kind: "field",
          decorative: true,
          depth: 0,
          qualityTiers: tiers,
          fallback: "field",
        },
        {
          id: "act-structure",
          plane: "architecture",
          kind: "architecture",
          decorative: true,
          depth: 0.3,
          qualityTiers: tiers,
          fallback: "field",
        },
        {
          id: "continuity-light",
          plane: "atmosphere",
          kind: "light",
          decorative: true,
          depth: 0.5,
          qualityTiers: ["enhanced", "cinematic"],
          fallback: "hide",
        },
        {
          id: "principle-copy",
          plane: "typography",
          kind: "copy",
          content,
          decorative: false,
          meaning: content.join(". "),
          depth: 0.8,
          qualityTiers: tiers,
          fallback: "copy",
        },
        {
          id: "human-scale",
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
          intensity: 0.34,
          warmth: light === "gold" ? 0.85 : 0.35,
          atmosphere: 0.35,
        },
        to: {
          key: light,
          intensity: light === "darkness" ? 0.2 : 0.72,
          warmth: light === "gold" ? 0.9 : 0.45,
          atmosphere: 0.65,
        },
      },
      entranceEndMs: startMs + 1_400,
      exitStartMs: endMs - 1_200,
      transitionOut: {
        kind:
          index === 2
            ? "light-wipe"
            : index === 3
              ? "occlusion"
              : "precision-lock",
        durationMs: 1_200,
      },
      viewports,
      reducedMotion: {
        camera: { ...to, depth: 0, driftX: 0, driftY: 0 },
        transition: "dissolve",
      },
      accessibility: { label: `${intent}: ${content.join(" ")}` },
      continuityCarrier:
        index % 3 === 0 ? "architecture" : index % 3 === 1 ? "light" : "camera",
      overlapMs: 800,
      fullLegibilityMs: startMs + 700,
      emblem: "none",
    };
  },
);

export const actOneDefinition: ActDefinition = {
  id: "act-one-standard",
  title: "The Standard",
  startMs: ACT_ONE_START_MS,
  endMs: ACT_ONE_END_MS,
  chapters: actOneScenes.map((scene, index) => ({
    id: `act-one-chapter-${index + 1}`,
    title: scene.title,
    startMs: scene.startMs,
    endMs: scene.endMs,
    scenes: [scene],
  })),
};
