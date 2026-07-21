import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { App } from "./App";

describe("App", () => {
  it("mounts the temporary runtime stage in a ready state", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: "Foundation runtime" }),
    ).toBeInTheDocument();
    expect(screen.getByText("ready")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Begin" })).toBeEnabled();
  });
});
