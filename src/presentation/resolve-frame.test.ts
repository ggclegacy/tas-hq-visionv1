import { describe, expect, it } from "vitest";

import type { DirectorSnapshot } from "../director";
import { prologueManifest } from "./prologue-manifest";
import { resolvePresentationFrame } from "./resolve-frame";

const options = {
  quality: "cinematic" as const,
  reducedMotion: false,
  captionsEnabled: true,
};

function snapshot(timeMs: number): DirectorSnapshot {
  return {
    state: timeMs === 54_000 ? "completed" : "playing",
    presentationId: "tas-hq-prologue",
    timeMs,
    durationMs: 54_000,
    progress: timeMs / 54_000,
    currentActId: "prologue-act",
    currentChapterId: "prologue-chapter",
    currentSceneId: null,
    error: null,
    revision: 1,
  };
}

describe("resolvePresentationFrame", () => {
  it.each([
    [0, "opening-stillness"],
    [3_999, "opening-stillness"],
    [4_000, "gac-presenting-credit"],
    [14_000, "exclusive-dedication"],
    [27_000, "tas-hq-reveal"],
    [43_000, "act-one-handoff"],
    [54_000, "act-one-handoff"],
  ])("uses deterministic half-open boundaries at %ims", (timeMs, sceneId) => {
    expect(
      resolvePresentationFrame(prologueManifest, snapshot(timeMs), options)
        .scene?.id,
    ).toBe(sceneId);
  });

  it("is stable across backward seeks and repeated resolution", () => {
    const later = resolvePresentationFrame(
      prologueManifest,
      snapshot(40_000),
      options,
    );
    const earlier = resolvePresentationFrame(
      prologueManifest,
      snapshot(8_000),
      options,
    );
    expect(later.scene?.id).toBe("tas-hq-reveal");
    expect(earlier).toEqual(
      resolvePresentationFrame(prologueManifest, snapshot(8_000), options),
    );
  });

  it("resolves captions and removes transition motion when requested", () => {
    const moving = resolvePresentationFrame(
      prologueManifest,
      snapshot(5_000),
      options,
    );
    const reduced = resolvePresentationFrame(
      prologueManifest,
      snapshot(5_000),
      { ...options, reducedMotion: true },
    );
    expect(moving.caption?.id).toBe("caption-systems");
    expect(moving.transition?.phase).toBe("enter");
    expect(reduced.transition).toEqual({
      kind: "cut",
      phase: "hold",
      progress: 1,
    });
  });

  it("handles a large jump directly at the final hold", () => {
    const frame = resolvePresentationFrame(
      prologueManifest,
      snapshot(54_000),
      options,
    );
    expect(frame.scene?.content).toEqual(["Act I", "The Standard"]);
    expect(frame.sceneProgress).toBe(1);
  });
});
