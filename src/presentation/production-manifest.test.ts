import { describe, expect, it } from "vitest";

import type { DirectorSnapshot } from "../director";
import {
  productionManifest,
  PRODUCTION_DURATION_MS,
} from "./production-manifest";
import { resolvePresentationFrame } from "./resolve-frame";
import { validateManifest } from "./validate-manifest";

function snapshot(timeMs: number): DirectorSnapshot {
  return {
    state: timeMs === PRODUCTION_DURATION_MS ? "completed" : "playing",
    presentationId: productionManifest.metadata.id,
    timeMs,
    durationMs: PRODUCTION_DURATION_MS,
    progress: timeMs / PRODUCTION_DURATION_MS,
    currentActId: null,
    currentChapterId: null,
    currentSceneId: null,
    error: null,
    revision: 1,
  };
}

const options = {
  quality: "cinematic" as const,
  reducedMotion: false,
  captionsEnabled: true,
};

describe("production manifest", () => {
  it("validates contiguous Prologue, Act I, and Act II timing", () => {
    expect(validateManifest(productionManifest).ok).toBe(true);
    expect(
      productionManifest.acts.map(({ startMs, endMs }) => [startMs, endMs]),
    ).toEqual([
      [0, 54_000],
      [54_000, 114_000],
      [114_000, 174_000],
    ]);
  });

  it.each([
    [53_999, "act-one-handoff"],
    [54_000, "act-1-standard"],
    [66_000, "act-1-trust"],
    [82_000, "act-1-knowledge"],
    [98_000, "act-1-synthesis"],
    [114_000, "act-2-continuity"],
    [128_000, "act-2-knowledge"],
    [144_000, "act-2-standards"],
    [160_000, "act-2-leadership"],
    [174_000, "act-2-leadership"],
  ])("resolves canonical boundary %ims", (timeMs, sceneId) => {
    expect(
      resolvePresentationFrame(productionManifest, snapshot(timeMs), options)
        .scene?.id,
    ).toBe(sceneId);
  });

  it("source-maps every substantive act scene and displays no data", () => {
    const scenes = productionManifest.acts
      .slice(1)
      .flatMap((act) => act.chapters.flatMap((chapter) => chapter.scenes));
    expect(scenes.every((scene) => scene.sourceRefs?.length === 1)).toBe(true);
    expect(scenes.every((scene) => scene.dataClassification === "none")).toBe(
      true,
    );
  });
});
