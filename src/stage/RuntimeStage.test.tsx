import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  PresentationDirector,
  type DirectorClock,
  type MediaAdapter,
} from "../director";
import { foundationManifest } from "../presentation";
import { RuntimeStage } from "./RuntimeStage";

class StageClock implements DirectorClock {
  time = 0;
  now(): number {
    return this.time;
  }
}

const media: MediaAdapter = {
  prepare: () => undefined,
  play: () => undefined,
  pause: () => undefined,
  seek: () => undefined,
  stop: () => undefined,
  cleanup: () => undefined,
};

function createDirector() {
  const clock = new StageClock();
  const director = new PresentationDirector(foundationManifest, {
    clock,
    media,
  });
  director.prepare();
  return { clock, director };
}

describe("RuntimeStage integration", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "requestAnimationFrame",
      vi.fn(() => 1),
    );
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
  });

  afterEach(() => vi.unstubAllGlobals());

  it("runs the manifest-to-director-to-renderer playback path", async () => {
    const user = userEvent.setup();
    const { clock, director } = createDirector();
    render(<RuntimeStage director={director} />);

    await user.click(screen.getByRole("button", { name: "Begin" }));
    expect(screen.getByText("playing")).toBeInTheDocument();
    expect(screen.getByText("foundation-scene-a")).toBeInTheDocument();

    act(() => {
      clock.time = 1_200;
      director.tick();
    });
    expect(screen.getByText("1.200s / 12.000s")).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Pause" }));
    expect(screen.getByText("paused")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Resume" }));
    expect(screen.getByText("playing")).toBeInTheDocument();

    fireEvent.change(screen.getByRole("slider", { name: "Seek" }), {
      target: { value: "6500" },
    });
    expect(screen.getByText("foundation-scene-b")).toBeInTheDocument();
    expect(screen.getByText("6.500s / 12.000s")).toBeInTheDocument();
  });

  it("pauses on visibility interruption and recovers without clock drift", async () => {
    const user = userEvent.setup();
    const { clock, director } = createDirector();
    render(<RuntimeStage director={director} />);
    await user.click(screen.getByRole("button", { name: "Begin" }));
    clock.time = 900;

    const visibility = vi
      .spyOn(document, "visibilityState", "get")
      .mockReturnValue("hidden");
    void act(() => {
      document.dispatchEvent(new Event("visibilitychange"));
    });
    expect(screen.getByText("interrupted")).toBeInTheDocument();
    expect(screen.getByText(/document became hidden/i)).toBeInTheDocument();

    clock.time = 5_000;
    expect(director.getSnapshot().timeMs).toBe(900);
    await user.click(screen.getByRole("button", { name: "Recover" }));
    expect(screen.getByText("paused")).toBeInTheDocument();
    visibility.mockRestore();
  });
});
