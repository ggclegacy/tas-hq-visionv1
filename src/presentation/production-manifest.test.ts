import { describe, expect, it } from "vitest";
import type { DirectorSnapshot } from "../director";
import {
  actOneShots,
  ACT_ONE_END_MS,
  ACT_ONE_START_MS,
} from "./act-one-manifest";
import { productionManifest } from "./production-manifest";
import {
  actTwoShots,
  ACT_TWO_END_MS,
  ACT_TWO_START_MS,
} from "./act-two-manifest";
import { resolvePresentationFrame } from "./resolve-frame";
import { validateManifest } from "./validate-manifest";

const snapshot = (timeMs: number): DirectorSnapshot => ({
  state: timeMs === ACT_TWO_END_MS ? "completed" : "playing",
  presentationId: productionManifest.metadata.id,
  timeMs,
  durationMs: ACT_TWO_END_MS,
  progress: timeMs / ACT_TWO_END_MS,
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

describe("production manifest through Act II", () => {
  it("validates unchanged Prologue/Act I plus 90-second Act II", () => {
    expect(validateManifest(productionManifest).ok).toBe(true);
    expect(productionManifest.metadata.durationMs).toBe(226_000);
    expect(
      productionManifest.acts.map(({ startMs, endMs }) => [startMs, endMs]),
    ).toEqual([
      [0, 54_000],
      [54_000, 136_000],
      [136_000, 226_000],
    ]);
    expect(ACT_ONE_END_MS - ACT_ONE_START_MS).toBe(82_000);
    expect(ACT_TWO_END_MS - ACT_TWO_START_MS).toBe(90_000);
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

  it.each(actTwoShots.map((shot) => [shot.startMs, shot.id] as const))(
    "resolves Challenge shot boundary %ims",
    (timeMs, id) => {
      expect(
        resolvePresentationFrame(productionManifest, snapshot(timeMs), options)
          .shot?.shot.id,
      ).toBe(id);
    },
  );

  it("holds the inert Act III threshold at completion", () => {
    const frame = resolvePresentationFrame(
      productionManifest,
      snapshot(226_000),
      options,
    );
    expect(frame.shot?.shot.id).toBe("act2-vision-threshold");
    expect(
      frame.shot?.shot.layers.find((layer) => layer.kind === "copy")?.content,
    ).toEqual(["Act III", "The Vision"]);
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
