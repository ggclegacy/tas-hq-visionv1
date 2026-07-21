import type { PresentationManifest } from "./types";

const staticAlternative = {
  mode: "static",
  description: "Render the final composed state without spatial motion.",
} as const;

export const foundationManifest = {
  metadata: {
    id: "foundation-test",
    title: "Foundation Runtime Test",
    version: "0.1.0",
    durationMs: 12_000,
    defaultQuality: "essential",
  },
  assets: [
    {
      id: "tas-hq-logo",
      src: "/assets/tas-hq-logo.png",
      kind: "image",
      qualityTiers: ["essential", "enhanced", "cinematic"],
      alt: "TAS HQ",
    },
  ],
  narrationTracks: [],
  captionTracks: [
    {
      id: "foundation-captions",
      language: "en",
      cues: [
        {
          id: "caption-ready",
          startMs: 0,
          endMs: 4_000,
          text: "Foundation ready",
        },
      ],
    },
  ],
  acts: [
    {
      id: "foundation-act",
      title: "Foundation Act",
      startMs: 0,
      endMs: 12_000,
      chapters: [
        {
          id: "foundation-chapter-a",
          title: "Runtime A",
          startMs: 0,
          endMs: 6_000,
          scenes: [
            {
              id: "foundation-scene-a",
              title: "Director input A",
              startMs: 0,
              endMs: 6_000,
              cues: [
                {
                  id: "cue-foundation-logo",
                  type: "visual",
                  target: "foundation-label",
                  action: "show",
                  startMs: 0,
                  endMs: 6_000,
                  requiresMotion: true,
                  reducedMotion: staticAlternative,
                },
                {
                  id: "cue-foundation-caption",
                  type: "caption",
                  captionTrackId: "foundation-captions",
                  startMs: 0,
                  endMs: 4_000,
                },
              ],
              narrationTrackIds: [],
              captionTrackIds: ["foundation-captions"],
              cameraInstructions: [],
              ambientAudio: [],
              interfaceChoreography: [],
              enterTransition: { kind: "cut", durationMs: 0 },
              exitTransition: {
                kind: "fade",
                durationMs: 300,
                reducedMotion: staticAlternative,
              },
            },
          ],
        },
        {
          id: "foundation-chapter-b",
          title: "Runtime B",
          startMs: 6_000,
          endMs: 12_000,
          scenes: [
            {
              id: "foundation-scene-b",
              title: "Director input B",
              startMs: 6_000,
              endMs: 12_000,
              cues: [],
              narrationTrackIds: [],
              captionTrackIds: [],
              cameraInstructions: [],
              ambientAudio: [],
              interfaceChoreography: [],
              enterTransition: { kind: "cut", durationMs: 0 },
              exitTransition: { kind: "cut", durationMs: 0 },
            },
          ],
        },
      ],
    },
  ],
} as const satisfies PresentationManifest;
