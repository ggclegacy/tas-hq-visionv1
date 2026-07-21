import { act, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import {
  PresentationDirector,
  type DirectorClock,
  type MediaAdapter,
} from "../director";
import { productionManifest } from "../presentation";
import { RuntimeStage } from "./RuntimeStage";

class StageClock implements DirectorClock {
  time = 0;
  now(): number {
    return this.time;
  }
}

const media: MediaAdapter = {
  prepare: vi.fn(),
  play: vi.fn(),
  pause: vi.fn(),
  seek: vi.fn(),
  stop: vi.fn(),
  cleanup: vi.fn(),
};

function createDirector() {
  const clock = new StageClock();
  const director = new PresentationDirector(productionManifest, {
    clock,
    media,
  });
  director.prepare();
  return { clock, director };
}

describe("Prologue and Act I stage integration", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "requestAnimationFrame",
      vi.fn(() => 1),
    );
    vi.stubGlobal("cancelAnimationFrame", vi.fn());
    vi.stubGlobal(
      "matchMedia",
      vi.fn(() => ({
        matches: false,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    );
  });

  afterEach(() => vi.unstubAllGlobals());

  it("launches the approved production experience without developer controls", async () => {
    const user = userEvent.setup();
    const { director } = createDirector();
    render(<RuntimeStage director={director} />);

    expect(screen.getByRole("heading", { name: "TAS HQ" })).toBeInTheDocument();
    expect(screen.queryByText("Shot inspector")).not.toBeInTheDocument();
    await user.click(
      screen.getByRole("button", { name: "Begin the Presentation" }),
    );
    expect(director.getSnapshot().state).toBe("playing");
    expect(
      screen.getByLabelText("TAS HQ Executive Vision Experience"),
    ).toBeInTheDocument();
  });

  it("reconstructs Prologue, Act I, and the final threshold after seeks", async () => {
    const user = userEvent.setup();
    const { director } = createDirector();
    render(<RuntimeStage director={director} debug />);
    await user.click(
      screen.getByRole("button", { name: "Begin the Presentation" }),
    );

    const seek = screen.getByRole("slider", { name: "Seek" });
    fireEvent.change(seek, { target: { value: "5000" } });
    expect(
      screen.getByText("Gent Ascend Collective presents"),
    ).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "15000" } });
    expect(screen.getByText("Blair Vidrine")).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "30000" } });
    expect(
      screen.getByText("An Executive Vision Experience"),
    ).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "54000" } });
    expect(screen.getByText("The Standard")).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "75000" } });
    expect(screen.getByText("Knowledge")).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "95000" } });
    expect(screen.getByText("People")).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "150000" } });
    expect(screen.getByText("Knowledge")).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "185000" } });
    expect(screen.getByText("Communication")).toBeInTheDocument();
    fireEvent.change(seek, { target: { value: "226000" } });
    expect(screen.getByText("The Vision")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Replay Experience" }),
    ).toBeEnabled();
  });

  it("pauses on visibility interruption and recovers without clock drift", async () => {
    const user = userEvent.setup();
    const { clock, director } = createDirector();
    render(<RuntimeStage director={director} />);
    await user.click(
      screen.getByRole("button", { name: "Begin the Presentation" }),
    );
    clock.time = 900;

    const visibility = vi
      .spyOn(document, "visibilityState", "get")
      .mockReturnValue("hidden");
    void act(() => document.dispatchEvent(new Event("visibilitychange")));
    expect(director.getSnapshot().state).toBe("interrupted");
    expect(screen.getByText(/out of view/i)).toBeInTheDocument();
    clock.time = 5_000;
    expect(director.getSnapshot().timeMs).toBe(900);
    await user.click(
      screen.getByRole("button", { name: "Recover presentation" }),
    );
    expect(director.getSnapshot().state).toBe("paused");
    visibility.mockRestore();
  });

  it("offers timed captions while remaining explicit about silent mode", async () => {
    const user = userEvent.setup();
    const { director } = createDirector();
    render(<RuntimeStage director={director} debug />);
    await user.click(
      screen.getByRole("button", { name: "Begin the Presentation" }),
    );
    await user.click(screen.getByRole("button", { name: "Captions off" }));
    fireEvent.change(screen.getByRole("slider", { name: "Seek" }), {
      target: { value: "6000" },
    });
    expect(
      screen.getByText("Every organization is built on more than systems."),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/audio unavailable/i)).toHaveTextContent(
      "Silent mode",
    );
  });

  it("continues when fullscreen is denied", async () => {
    const user = userEvent.setup();
    const requestFullscreen = vi
      .fn<() => Promise<void>>()
      .mockRejectedValue(new Error("Denied"));
    Object.defineProperty(document.documentElement, "requestFullscreen", {
      configurable: true,
      value: requestFullscreen,
    });
    const { director } = createDirector();
    render(<RuntimeStage director={director} />);
    await user.click(
      screen.getByRole("button", { name: "Begin the Presentation" }),
    );
    expect(requestFullscreen).toHaveBeenCalledOnce();
    expect(director.getSnapshot().state).toBe("playing");
    Object.defineProperty(document.documentElement, "requestFullscreen", {
      configurable: true,
      value: undefined,
    });
  });
});
