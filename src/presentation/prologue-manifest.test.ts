import { describe, expect, it } from "vitest";

import { PROLOGUE_DURATION_MS, prologueManifest } from "./prologue-manifest";
import { validateManifest } from "./validate-manifest";

describe("Prologue manifest", () => {
  it("validates the approved 50-second authored slice", () => {
    const result = validateManifest(prologueManifest);
    expect(result.ok).toBe(true);
    expect(prologueManifest.metadata.durationMs).toBe(PROLOGUE_DURATION_MS);
    expect(prologueManifest.acts[0]?.chapters[0]?.scenes).toHaveLength(6);
    expect(prologueManifest.shots).toHaveLength(6);
    expect(
      prologueManifest.shots?.map((shot) => shot.continuityCarrier),
    ).toEqual([
      "light",
      "emblem",
      "occlusion",
      "architecture",
      "emblem",
      "emblem",
    ]);
    expect(
      prologueManifest.shots?.every((shot) => shot.overlapMs === 900),
    ).toBe(true);
  });

  it("marks unavailable audio as pending and preserves both approved logos", () => {
    expect(
      prologueManifest.assets.filter(
        (asset) => asset.availability === "pending",
      ),
    ).toHaveLength(2);
    expect(
      prologueManifest.assets
        .filter((asset) => asset.kind === "image")
        .map((asset) => asset.id),
    ).toEqual(["gac-logo", "tas-hq-logo"]);
  });
});
