import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import AboutHero from "../Landing_page/about/Hero";

describe("About Hero component", () => {
  test("renders the company quote", () => {
    render(<AboutHero />);

    expect(
      screen.getByRole("heading", {
        name: /we pioneered the discount broking model in india/i,
      })
    ).toBeInTheDocument();
  });

  test("mentions founding history and client scale", () => {
    render(<AboutHero />);

    expect(screen.getByText(/15th of august, 2010/i)).toBeInTheDocument();
    expect(screen.getByText(/1\.6\+ crore clients/i)).toBeInTheDocument();
    expect(screen.getByText(/rainmatter/i)).toBeInTheDocument();
  });
});
