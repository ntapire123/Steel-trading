import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Footer from "../Landing_page/Footer";

describe("Footer component", () => {
  test("renders brand name and section headings", () => {
    render(<Footer />);

    expect(screen.getByText("STEEL TRADING")).toBeInTheDocument();
    expect(screen.getByText("Account")).toBeInTheDocument();
    expect(screen.getByText("Support")).toBeInTheDocument();
    expect(screen.getByText("Company")).toBeInTheDocument();
    expect(screen.getByText("Quick links")).toBeInTheDocument();
  });

  test("renders social links with accessible labels", () => {
    render(<Footer />);

    expect(screen.getByLabelText("X")).toBeInTheDocument();
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument();
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument();
    expect(screen.getByLabelText("LinkedIn")).toBeInTheDocument();
  });

  test("shows the market-risk disclaimer", () => {
    render(<Footer />);

    expect(
      screen.getByText(/investments in securities market are subject to market risks/i)
    ).toBeInTheDocument();
  });
});
