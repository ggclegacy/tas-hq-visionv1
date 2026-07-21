import { describe, expect, it, vi } from "vitest";

import { foundationManifest } from "../presentation";
import {
  DirectorTransitionError,
  PresentationDirector,
} from "./PresentationDirector";
import type { DirectorClock, MediaAdapter, SceneLifecycle } from "./types";

class FakeClock implements DirectorClock {
  time = 1_000;
  now(): number {
    return this.time;
  }
  advance(milliseconds: number): void {
    this.time += milliseconds;
  }
}

function createHarness() {
  const clock = new FakeClock();
  const media: MediaAdapter = {
    prepare: vi.fn(),
    play: vi.fn(),
    pause: vi.fn(),
    seek: vi.fn(),
    stop: vi.fn(),
    cleanup: vi.fn(),
  };
  const lifecycle: SceneLifecycle = {
    enter: vi.fn(),
    update: vi.fn(),
    exit: vi.fn(),
    cleanup: vi.fn(),
  };
  const director = new PresentationDirector(foundationManifest, {
    clock,
    media,
    lifecycle,
  });
  return { clock, director, lifecycle, media };
}

describe("PresentationDirector", () => {
  it("follows the main valid transition path", () => {
    const { director } = createHarness();
    expect(director.getSnapshot().state).toBe("idle");
    director.prepare();
    expect(director.getSnapshot().state).toBe("ready");
    director.begin();
    expect(director.getSnapshot().state).toBe("playing");
    director.pause();
    expect(director.getSnapshot().state).toBe("paused");
    director.resume();
    director.complete();
    expect(director.getSnapshot()).toMatchObject({
      state: "completed",
      timeMs: 12_000,
    });
  });

  it("rejects invalid transitions with actionable errors", () => {
    const { director } = createHarness();
    expect(() => director.begin()).toThrow(DirectorTransitionError);
    expect(() => director.pause()).toThrow(
      "Cannot pause while the Presentation Director is idle.",
    );
  });

  it("keeps canonical time continuous across pause and resume", () => {
    const { clock, director } = createHarness();
    director.prepare();
    director.begin();
    clock.advance(500);
    director.tick();
    clock.advance(200);
    director.pause();
    expect(director.getSnapshot().timeMs).toBe(700);
    clock.advance(5_000);
    expect(director.getSnapshot().timeMs).toBe(700);
    director.resume();
    clock.advance(300);
    director.tick();
    expect(director.getSnapshot().timeMs).toBe(1_000);
  });

  it("seeks deterministically and skips to the next chapter", () => {
    const { director, media } = createHarness();
    director.prepare();
    director.seek(2_500);
    expect(director.getSnapshot()).toMatchObject({
      state: "paused",
      timeMs: 2_500,
    });
    director.skipChapter();
    expect(director.getSnapshot()).toMatchObject({
      timeMs: 6_000,
      currentChapterId: "foundation-chapter-b",
    });
    expect(media.seek).toHaveBeenLastCalledWith(6_000);
  });

  it("restarts with cleanup and a ready snapshot", () => {
    const { director, lifecycle, media } = createHarness();
    director.prepare();
    director.begin();
    director.restart();
    expect(director.getSnapshot()).toMatchObject({
      state: "ready",
      timeMs: 0,
      error: null,
    });
    expect(lifecycle.cleanup).toHaveBeenCalled();
    expect(media.stop).toHaveBeenCalled();
  });

  it("freezes on visibility interruption and requires explicit recovery", () => {
    const { clock, director, media } = createHarness();
    director.prepare();
    director.begin();
    clock.advance(750);
    director.handleVisibilityInterruption();
    clock.advance(2_000);
    expect(director.getSnapshot()).toMatchObject({
      state: "interrupted",
      timeMs: 750,
    });
    expect(media.pause).toHaveBeenCalled();
    director.recover();
    expect(director.getSnapshot().state).toBe("paused");
  });

  it("cleans up on failure, disposal, and completion", () => {
    const failed = createHarness();
    failed.director.prepare();
    failed.director.fail(new Error("media unavailable"));
    expect(failed.director.getSnapshot()).toMatchObject({
      state: "error",
      error: "media unavailable",
    });
    expect(failed.lifecycle.cleanup).toHaveBeenCalled();
    failed.director.recover();
    failed.director.dispose();
    expect(failed.media.cleanup).toHaveBeenCalled();

    const completed = createHarness();
    completed.director.prepare();
    completed.director.begin();
    completed.clock.advance(12_000);
    completed.director.tick();
    expect(completed.director.getSnapshot().state).toBe("completed");
    expect(completed.lifecycle.exit).toHaveBeenCalled();
  });

  it("notifies subscribers with read-only snapshots", () => {
    const { director } = createHarness();
    const subscriber = vi.fn();
    const unsubscribe = director.subscribe(subscriber);
    director.prepare();
    expect(subscriber).toHaveBeenCalledWith(
      expect.objectContaining({ state: "ready" }),
    );
    expect(Object.isFrozen(director.getSnapshot())).toBe(true);
    unsubscribe();
    director.begin();
    expect(subscriber).toHaveBeenCalledTimes(1);
  });
});
