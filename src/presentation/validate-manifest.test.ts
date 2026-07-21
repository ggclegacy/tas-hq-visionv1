import { describe, expect, it } from "vitest";

import { foundationManifest } from "./sample-manifest";
import { validateManifest } from "./validate-manifest";

function cloneManifest(): Record<string, unknown> {
  return structuredClone(foundationManifest);
}

function firstScene(
  manifest: Record<string, unknown>,
): Record<string, unknown> {
  const acts = manifest.acts as Record<string, unknown>[];
  const chapters = acts[0]?.chapters as Record<string, unknown>[];
  const scenes = chapters[0]?.scenes as Record<string, unknown>[];
  const scene = scenes[0];
  if (!scene) throw new Error("Foundation fixture is missing its first scene.");
  return scene;
}

describe("validateManifest", () => {
  it("accepts the foundation sample manifest", () => {
    expect(validateManifest(foundationManifest)).toEqual({
      ok: true,
      manifest: foundationManifest,
    });
  });

  it("reports duplicate IDs, invalid ranges, and chapter duration mismatches", () => {
    const manifest = cloneManifest();
    const scene = firstScene(manifest);
    scene.id = "foundation-chapter-a";
    scene.endMs = 5_000;
    const result = validateManifest(manifest);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.issues.map((issue) => issue.code)).toEqual(
        expect.arrayContaining(["duplicate_id", "chapter_duration_mismatch"]),
      );
    }
  });

  it("reports overlapping ranges", () => {
    const manifest = cloneManifest();
    const acts = manifest.acts as Record<string, unknown>[];
    const chapters = acts[0]?.chapters as Record<string, unknown>[];
    if (!chapters[1]) throw new Error("Fixture is missing its second chapter.");
    chapters[1].startMs = 5_000;
    const result = validateManifest(manifest);

    expect(result.ok).toBe(false);
    if (!result.ok)
      expect(
        result.issues.some((issue) => issue.code === "overlapping_ranges"),
      ).toBe(true);
  });

  it("reports unsupported cues, missing references, and missing motion alternatives", () => {
    const manifest = cloneManifest();
    const scene = firstScene(manifest);
    scene.captionTrackIds = ["missing-captions"];
    scene.cues = [
      {
        id: "unsupported-cue",
        type: "sparkle",
        startMs: 0,
        endMs: 100,
        requiresMotion: true,
      },
    ];
    const result = validateManifest(manifest);

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.issues.map((issue) => issue.code)).toEqual(
        expect.arrayContaining([
          "unsupported_cue_type",
          "missing_reference",
          "missing_reduced_motion",
        ]),
      );
    }
  });
});
