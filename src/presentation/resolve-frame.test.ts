import { describe, expect, it } from "vitest";
import type { DirectorSnapshot } from "../director";
import { prologueManifest } from "./prologue-manifest";
import { resolvePresentationFrame } from "./resolve-frame";

const options = {
  quality: "cinematic" as const,
  reducedMotion: false,
  captionsEnabled: true,
  viewport: "desktop" as const,
};
const snapshot = (timeMs: number): DirectorSnapshot => ({
  state: timeMs === 40_000 ? "completed" : "playing",
  presentationId: "tas-hq-prologue",
  timeMs,
  durationMs: 40_000,
  progress: timeMs / 40_000,
  currentActId: null,
  currentChapterId: null,
  currentSceneId: null,
  error: null,
  revision: 1,
});

describe("unified Prologue frame resolution", () => {
  it.each([
    [0, "shot-opening-scale"],
    [3_000, "shot-gac-credit"],
    [10_000, "shot-dedication"],
    [19_000, "shot-tas-entry"],
    [31_000, "shot-standard-threshold"],
    [40_000, "shot-standard-threshold"],
  ] as const)("resolves boundary %ims", (timeMs, id) =>
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(timeMs), options).shot
        ?.shot.id,
    ).toBe(id),
  );
  it.each(["mobile", "tablet", "desktop"] as const)(
    "resolves %s composition",
    (viewport) =>
      expect(
        resolvePresentationFrame(prologueManifest, snapshot(6_000), {
          ...options,
          viewport,
        }).shot?.viewport,
      ).toBe(viewport),
  );
  it.each(["essential", "enhanced", "cinematic"] as const)(
    "filters %s layers",
    (quality) => {
      const layers =
        resolvePresentationFrame(prologueManifest, snapshot(22_000), {
          ...options,
          quality,
        }).shot?.layers ?? [];
      expect(layers.some((layer) => layer.id === "world")).toBe(true);
      expect(layers.some((layer) => layer.id === "occlusion")).toBe(
        quality === "cinematic",
      );
    },
  );
  it("reconstructs backward seek, reduced motion, completion, and overlap", () => {
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(16_000), options).shot
        ?.shot.id,
    ).toBe("shot-dedication");
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(5_000), options).shot
        ?.shot.id,
    ).toBe("shot-gac-credit");
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(16_000), {
        ...options,
        reducedMotion: true,
      }).shot?.camera.driftX,
    ).toBe(0);
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(40_000), options).shot
        ?.progress,
    ).toBe(1);
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(9_500), options).shot
        ?.overlap?.nextShotId,
    ).toBe("shot-dedication");
  });
  it("keeps reconstructed captions aligned through the handoff", () => {
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(4_000), options)
        .caption?.id,
    ).toBe("caption-people-carry-it");
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(32_000), options)
        .caption?.id,
    ).toBe("caption-tas");
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(39_000), options)
        .caption?.id,
    ).toBe("caption-standard");
  });
});
