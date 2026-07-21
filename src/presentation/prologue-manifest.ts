import type { PresentationManifest, ReducedMotionAlternative } from "./types";

const crossfade: ReducedMotionAlternative = {
  mode: "crossfade",
  description:
    "Show the complete static composition with an opacity crossfade.",
};

const staticState: ReducedMotionAlternative = {
  mode: "static",
  description: "Show the complete static composition without spatial motion.",
};

export const PROLOGUE_DURATION_MS = 54_000;

export const prologueManifest: PresentationManifest = {
  metadata: {
    id: "tas-hq-prologue",
    title: "TAS HQ Executive Vision Experience — Prologue",
    version: "2.0.0",
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
      startMs: 5_000,
      endMs: 43_000,
      transcript:
        "Every organization is built on more than systems. It is built on trust. Knowledge. Standards. Leadership. And the people who carry them forward. Gent Ascend Collective presents a vision created exclusively for Blair Vidrine, Bailey Soileau, and The Apothecary Shoppe. This is TAS HQ.",
    },
  ],
  captionTracks: [
    {
      id: "prologue-captions-en",
      language: "en-US",
      cues: [
        {
          id: "caption-systems",
          startMs: 5_000,
          endMs: 10_000,
          text: "Every organization is built on more than systems.",
        },
        {
          id: "caption-trust",
          startMs: 10_000,
          endMs: 13_000,
          text: "It is built on trust.",
        },
        {
          id: "caption-knowledge",
          startMs: 13_000,
          endMs: 15_500,
          text: "Knowledge.",
        },
        {
          id: "caption-standards",
          startMs: 15_500,
          endMs: 18_000,
          text: "Standards.",
        },
        {
          id: "caption-leadership",
          startMs: 18_000,
          endMs: 20_500,
          text: "Leadership.",
        },
        {
          id: "caption-people",
          startMs: 20_500,
          endMs: 25_500,
          text: "And the people who carry them forward.",
        },
        {
          id: "caption-exclusive",
          startMs: 25_500,
          endMs: 38_500,
          text: "Gent Ascend Collective presents a vision created exclusively for Blair Vidrine, Bailey Soileau, and The Apothecary Shoppe.",
        },
        {
          id: "caption-tas",
          startMs: 38_500,
          endMs: 43_000,
          text: "This is TAS HQ.",
        },
      ],
    },
  ],
  acts: [
    {
      id: "prologue-act",
      title: "Prologue",
      startMs: 0,
      endMs: 54_000,
      chapters: [
        {
          id: "prologue-chapter",
          title: "Created Exclusively",
          startMs: 0,
          endMs: 54_000,
          scenes: [
            scene(
              "opening-stillness",
              "Opening stillness",
              "stillness",
              0,
              4_000,
              [],
              "fade",
            ),
            scene(
              "gac-presenting-credit",
              "Presenting credit",
              "presenting-credit",
              4_000,
              14_000,
              ["Gent Ascend Collective presents"],
              "dissolve",
              "gac-logo",
            ),
            scene(
              "exclusive-dedication",
              "Exclusive dedication",
              "dedication",
              14_000,
              27_000,
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
              27_000,
              43_000,
              ["TAS HQ", "An Executive Vision Experience"],
              "dissolve",
              "tas-hq-logo",
            ),
            scene(
              "act-one-handoff",
              "Act I threshold",
              "act-handoff",
              43_000,
              54_000,
              ["Act I", "The Standard"],
              "dissolve",
              "tas-hq-logo",
            ),
          ],
        },
      ],
    },
  ],
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
      startMs < 43_000 && endMs > 5_000 ? ["prologue-temporary-narration"] : [],
    captionTrackIds:
      startMs < 43_000 && endMs > 5_000 ? ["prologue-captions-en"] : [],
    cameraInstructions: [],
    ambientAudio: [],
    interfaceChoreography: [],
    enterTransition: {
      kind: transition,
      durationMs: 1_200,
      reducedMotion: crossfade,
    },
    exitTransition: {
      kind: transition,
      durationMs: 1_200,
      reducedMotion: crossfade,
    },
  };
}
