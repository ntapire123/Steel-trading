import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "../Landing_page/home/Hero";

describe("Hero component", () => {
  test("renders the headline and signup button", () => {
    render(<Hero />);

    expect(
      screen.getByRole("heading", { name: /invest in the steel/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /sign up for free/i })
    ).toBeInTheDocument();
  });

  test("renders the dashboard hero image", () => {
    render(<Hero />);

    const image = screen.getByAltText("Dashboard Hero");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/assets/homeHero.png");
  });
});
