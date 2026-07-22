import type {
  PresentationManifest,
  ReducedMotionAlternative,
  ShotDefinition,
} from "./types";

const crossfade: ReducedMotionAlternative = {
  mode: "crossfade",
  description:
    "Show the complete static composition with an opacity crossfade.",
};

const staticState: ReducedMotionAlternative = {
  mode: "static",
  description: "Show the complete static composition without spatial motion.",
};

export const PROLOGUE_DURATION_MS = 40_000;

const tiers = ["essential", "enhanced", "cinematic"] as const;
const camera = (
  subject: string,
  fromScale: number,
  toScale: number,
  driftX = 0,
) => ({
  from: {
    focalSubject: subject,
    focalX: 50,
    focalY: 50,
    scale: fromScale,
    depth: 0.35,
    driftX: 0,
    driftY: 0,
    lens: "wide" as const,
  },
  to: {
    focalSubject: subject,
    focalX: 50,
    focalY: 50,
    scale: toScale,
    depth: 0.7,
    driftX,
    driftY: -0.35,
    lens: "intimate" as const,
  },
});
const viewports = {
  mobile: {
    focalX: 54,
    focalY: 45,
    textAlign: "start" as const,
    textWidth: 78,
    motionIntensity: 0.45,
    safeInset: 6,
  },
  tablet: {
    focalX: 50,
    focalY: 48,
    textAlign: "start" as const,
    textWidth: 58,
    motionIntensity: 0.72,
    safeInset: 5,
  },
  desktop: {
    focalX: 48,
    focalY: 50,
    textAlign: "start" as const,
    textWidth: 42,
    motionIntensity: 1,
    safeInset: 4,
  },
};

function authoredShot(
  id: string,
  parentSceneId: string,
  intent: string,
  startMs: number,
  endMs: number,
  content: readonly string[],
  assetId?: "gac-logo" | "tas-hq-logo",
  light: "darkness" | "gold" | "green" | "balanced" = "balanced",
): ShotDefinition {
  const shotCamera = camera(
    assetId ?? "typography",
    1.045,
    1,
    id.includes("dedication") ? -1.2 : 0.6,
  );
  return {
    id,
    parentSceneId,
    intent,
    startMs,
    endMs,
    camera: shotCamera,
    layers: [
      {
        id: "world",
        plane: "environment",
        kind: "field",
        decorative: true,
        depth: 0,
        qualityTiers: tiers,
        fallback: "field",
      },
      {
        id: "architecture",
        plane: "architecture",
        kind: "architecture",
        decorative: true,
        depth: 0.25,
        qualityTiers: tiers,
        fallback: "field",
      },
      {
        id: "light",
        plane: "atmosphere",
        kind: "light",
        decorative: true,
        depth: 0.45,
        qualityTiers: ["enhanced", "cinematic"],
        fallback: "hide",
      },
      ...(assetId
        ? [
            {
              id: "mark",
              plane: "subject" as const,
              kind: "image" as const,
              assetId,
              decorative: false,
              meaning:
                assetId === "gac-logo" ? "Gent Ascend Collective" : "TAS HQ",
              depth: 0.68,
              qualityTiers: tiers,
              fallback: "copy" as const,
            },
          ]
        : []),
      ...(content.length
        ? [
            {
              id: "copy",
              plane: "typography" as const,
              kind: "copy" as const,
              content,
              decorative: false,
              meaning: content.join(". "),
              depth: 0.78,
              qualityTiers: tiers,
              fallback: "copy" as const,
            },
          ]
        : []),
      {
        id: "occlusion",
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
        key: startMs === 0 ? "darkness" : light,
        intensity: startMs === 0 ? 0.05 : 0.35,
        warmth: light === "gold" ? 0.8 : 0.35,
        atmosphere: 0.2,
      },
      to: {
        key: light,
        intensity: light === "darkness" ? 0.12 : 0.72,
        warmth: light === "gold" ? 0.9 : 0.45,
        atmosphere: 0.62,
      },
    },
    entranceEndMs: Math.min(startMs + 1_800, endMs),
    exitStartMs: Math.max(endMs - 1_200, startMs),
    transitionOut: {
      kind:
        id === "shot-opening-scale"
          ? "light-wipe"
          : id === "shot-dedication"
            ? "occlusion"
            : "precision-lock",
      durationMs: Math.min(1_200, endMs - startMs),
    },
    viewports,
    reducedMotion: {
      camera: { ...shotCamera.to, driftX: 0, driftY: 0, depth: 0 },
      transition: "dissolve",
    },
    accessibility: { label: intent },
    continuityCarrier: assetId ? "emblem" : "architecture",
    overlapMs: 900,
    fullLegibilityMs: startMs + 700,
    emblem:
      assetId === "gac-logo"
        ? "gac"
        : assetId === "tas-hq-logo"
          ? "tas-hq"
          : "none",
  };
}

export const prologueShots: readonly ShotDefinition[] = [
  authoredShot(
    "shot-opening-scale",
    "opening-stillness",
    "Establish quiet architectural scale before identity appears.",
    0,
    3_000,
    [],
    undefined,
    "darkness",
  ),
  authoredShot(
    "shot-gac-credit",
    "gac-presenting-credit",
    "Present Gent Ascend Collective with restrained authority.",
    3_000,
    10_000,
    ["Gent Ascend Collective presents"],
    "gac-logo",
    "gold",
  ),
  authoredShot(
    "shot-dedication",
    "exclusive-dedication",
    "Make the invitation feel private, specific, and consequential.",
    10_000,
    19_000,
    [
      "Created exclusively for",
      "Blair Vidrine",
      "Bailey Soileau",
      "The Apothecary Shoppe",
    ],
    undefined,
    "balanced",
  ),
  authoredShot(
    "shot-tas-entry",
    "tas-hq-reveal",
    "Cross into the TAS HQ world and resolve the system emblem.",
    19_000,
    31_000,
    ["TAS HQ", "An Executive Vision Experience"],
    "tas-hq-logo",
    "green",
  ),
  authoredShot(
    "shot-standard-threshold",
    "act-one-handoff",
    "Hold the audience at the deliberate threshold of The Standard.",
    31_000,
    40_000,
    ["Act I", "The Standard"],
    "tas-hq-logo",
    "balanced",
  ),
];

export const prologueManifest: PresentationManifest = {
  metadata: {
    id: "tas-hq-prologue",
    title: "TAS HQ Executive Vision Experience — Prologue",
    version: "3.0.0",
    durationMs: PROLOGUE_DURATION_MS,
    defaultQuality: "cinematic",
  },
  assets: [
    {
      id: "gac-logo",
      src: "/assets/gac-logo.png",
      kind: "image",
      qualityTiers: ["essential", "enhanced", "cinematic"],
      alt: "Gent Ascend Collective",
      availability: "available",
      purpose: "Presenting-credit sequence only.",
    },
    {
      id: "tas-hq-logo",
      src: "/assets/tas-hq-logo.png",
      kind: "image",
      qualityTiers: ["essential", "enhanced", "cinematic"],
      alt: "TAS HQ",
      availability: "available",
      purpose: "Emblem reveal and Prologue handoff only.",
    },
    {
      id: "prologue-onyx-narration",
      src: "/assets/pending/prologue-onyx-narration.mp3",
      kind: "audio",
      qualityTiers: ["essential", "enhanced", "cinematic"],
      availability: "pending",
      purpose: "Replaceable hook for the future approved Onyx voice recording.",
    },
    {
      id: "prologue-architectural-ambience",
      src: "/assets/pending/prologue-architectural-ambience.mp3",
      kind: "audio",
      qualityTiers: ["enhanced", "cinematic"],
      availability: "pending",
      purpose:
        "Replaceable hook for approved original or license-safe ambience.",
    },
  ],
  narrationTracks: [
    {
      id: "prologue-temporary-narration",
      assetId: "prologue-onyx-narration",
      startMs: 3_500,
      endMs: 40_000,
      transcript:
        "What Blair and Bailey built lives in the people who carry it. The knowledge behind every confident answer. The care behind every patient interaction. A standard protected by leadership, and carried forward through growth. Gent Ascend Collective presents a vision created exclusively for Blair Vidrine, Bailey Soileau, and The Apothecary Shoppe. This is TAS HQ. Act I. The Standard.",
    },
  ],
  captionTracks: [
    {
      id: "prologue-captions-en",
      language: "en-US",
      cues: [
        {
          id: "caption-people-carry-it",
          startMs: 3_500,
          endMs: 8_000,
          text: "What Blair and Bailey built lives in the people who carry it.",
        },
        {
          id: "caption-knowledge-guidance",
          startMs: 8_000,
          endMs: 13_000,
          text: "The knowledge behind every confident answer.",
        },
        {
          id: "caption-patient-care",
          startMs: 13_000,
          endMs: 18_000,
          text: "The care behind every patient interaction.",
        },
        {
          id: "caption-standard-growth",
          startMs: 18_000,
          endMs: 24_000,
          text: "A standard protected by leadership, and carried forward through growth.",
        },
        {
          id: "caption-exclusive-lead",
          startMs: 24_000,
          endMs: 27_000,
          text: "Gent Ascend Collective presents a vision created exclusively for",
        },
        {
          id: "caption-exclusive-names",
          startMs: 27_000,
          endMs: 31_000,
          text: "Blair Vidrine, Bailey Soileau, and The Apothecary Shoppe.",
        },
        {
          id: "caption-tas",
          startMs: 31_000,
          endMs: 36_000,
          text: "This is TAS HQ.",
        },
        {
          id: "caption-standard",
          startMs: 36_000,
          endMs: 40_000,
          text: "Act I. The Standard.",
        },
      ],
    },
  ],
  acts: [
    {
      id: "prologue-act",
      title: "Prologue",
      startMs: 0,
      endMs: 40_000,
      chapters: [
        {
          id: "prologue-chapter",
          title: "Created Exclusively",
          startMs: 0,
          endMs: 40_000,
          scenes: [
            scene(
              "opening-stillness",
              "Opening stillness",
              "stillness",
              0,
              3_000,
              [],
              "fade",
            ),
            scene(
              "gac-presenting-credit",
              "Presenting credit",
              "presenting-credit",
              3_000,
              10_000,
              ["Gent Ascend Collective presents"],
              "dissolve",
              "gac-logo",
            ),
            scene(
              "exclusive-dedication",
              "Exclusive dedication",
              "dedication",
              10_000,
              19_000,
              [
                "Created exclusively for",
                "Blair Vidrine",
                "Bailey Soileau",
                "The Apothecary Shoppe",
              ],
              "dissolve",
            ),
            scene(
              "tas-hq-reveal",
              "TAS HQ reveal",
              "emblem-reveal",
              19_000,
              31_000,
              ["TAS HQ", "An Executive Vision Experience"],
              "dissolve",
              "tas-hq-logo",
            ),
            scene(
              "act-one-handoff",
              "Act I threshold",
              "act-handoff",
              31_000,
              40_000,
              ["Act I", "The Standard"],
              "dissolve",
              "tas-hq-logo",
            ),
          ],
        },
      ],
    },
  ],
  shots: prologueShots,
};

function scene(
  id: string,
  title: string,
  kind: NonNullable<
    PresentationManifest["acts"][number]["chapters"][number]["scenes"][number]["kind"]
  >,
  startMs: number,
  endMs: number,
  content: readonly string[],
  transition: "fade" | "dissolve",
  assetId?: "gac-logo" | "tas-hq-logo",
): PresentationManifest["acts"][number]["chapters"][number]["scenes"][number] {
  return {
    id,
    title,
    kind,
    content,
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
        requiresMotion: kind !== "stillness",
        reducedMotion: staticState,
      },
      ...(assetId
        ? [
            {
              id: `${id}-asset`,
              type: "media" as const,
              assetId,
              action: "play" as const,
              startMs,
              endMs,
            },
          ]
        : []),
    ],
    narrationTrackIds:
      startMs < 40_000 && endMs > 3_500 ? ["prologue-temporary-narration"] : [],
    captionTrackIds:
      startMs < 40_000 && endMs > 3_500 ? ["prologue-captions-en"] : [],
    cameraInstructions: [],
    ambientAudio: [],
    interfaceChoreography: [],
    enterTransition: {
      kind: transition,
      durationMs: 700,
      reducedMotion: crossfade,
    },
    exitTransition: {
      kind: transition,
      durationMs: 800,
      reducedMotion: crossfade,
    },
  };
}
