import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("mounts the cinematic Prologue launch state", () => {
    render(<App />);

    expect(screen.getByRole("heading", { name: "TAS HQ" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Begin the Presentation" }),
    ).toBeEnabled();
    expect(screen.queryByText("Foundation runtime")).not.toBeInTheDocument();
  });
});
