import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Stats from "../Landing_page/home/Stats";

describe("Stats component", () => {
  test("renders pricing headline and CTA", () => {
    render(<Stats />);

    expect(
      screen.getByRole("heading", { name: /unbeatable pricing/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /see pricing/i })).toBeInTheDocument();
  });

  test("lists the three pricing highlights", () => {
    render(<Stats />);

    expect(screen.getByText(/free account opening/i)).toBeInTheDocument();
    expect(
      screen.getByText(/free equity delivery and direct mutual funds/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/intraday and f&o/i)).toBeInTheDocument();
  });
});
