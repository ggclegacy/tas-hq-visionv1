import { describe, expect, it } from "vitest";

import { PROLOGUE_DURATION_MS, prologueManifest } from "./prologue-manifest";
import { validateManifest } from "./validate-manifest";

describe("Prologue manifest", () => {
  it("validates the approved 54-second authored slice", () => {
    const result = validateManifest(prologueManifest);
    expect(result.ok).toBe(true);
    expect(prologueManifest.metadata.durationMs).toBe(PROLOGUE_DURATION_MS);
    expect(prologueManifest.acts[0]?.chapters[0]?.scenes).toHaveLength(5);
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
