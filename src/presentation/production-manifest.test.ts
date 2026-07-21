import { describe, expect, it } from "vitest";
import type { DirectorSnapshot } from "../director";
import {
  actOneShots,
  ACT_ONE_END_MS,
  ACT_ONE_START_MS,
} from "./act-one-manifest";
import { productionManifest } from "./production-manifest";
import { resolvePresentationFrame } from "./resolve-frame";
import { validateManifest } from "./validate-manifest";

const snapshot = (timeMs: number): DirectorSnapshot => ({
  state: timeMs === ACT_ONE_END_MS ? "completed" : "playing",
  presentationId: productionManifest.metadata.id,
  timeMs,
  durationMs: ACT_ONE_END_MS,
  progress: timeMs / ACT_ONE_END_MS,
  currentActId: null,
  currentChapterId: null,
  currentSceneId: null,
  error: null,
  revision: 1,
});
const options = {
  quality: "cinematic" as const,
  reducedMotion: false,
  captionsEnabled: true,
  viewport: "desktop" as const,
};

describe("production Act I manifest", () => {
  it("validates one contiguous Prologue and 82-second Act I timeline", () => {
    expect(validateManifest(productionManifest).ok).toBe(true);
    expect(productionManifest.metadata.durationMs).toBe(136_000);
    expect(
      productionManifest.acts.map(({ startMs, endMs }) => [startMs, endMs]),
    ).toEqual([
      [0, 54_000],
      [54_000, 136_000],
    ]);
    expect(ACT_ONE_END_MS - ACT_ONE_START_MS).toBe(82_000);
  });

  it.each(actOneShots.map((shot) => [shot.startMs, shot.id] as const))(
    "resolves shot boundary %ims",
    (timeMs, id) => {
      expect(
        resolvePresentationFrame(productionManifest, snapshot(timeMs), options)
          .shot?.shot.id,
      ).toBe(id);
    },
  );

  it("holds the inert Act II threshold at completion", () => {
    const frame = resolvePresentationFrame(
      productionManifest,
      snapshot(136_000),
      options,
    );
    expect(frame.shot?.shot.id).toBe("act1-challenge-threshold");
    expect(
      frame.shot?.shot.layers.find((layer) => layer.kind === "copy")?.content,
    ).toEqual(["Act II", "The Challenge"]);
  });

  it.each(["mobile", "tablet", "desktop"] as const)(
    "reconstructs Act I for %s",
    (viewport) => {
      expect(
        resolvePresentationFrame(productionManifest, snapshot(97_000), {
          ...options,
          viewport,
        }).shot?.viewport,
      ).toBe(viewport);
    },
  );
});
