import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import NotFound from "../Landing_page/NotFound";

describe("NotFound component", () => {
  test("renders 404 copy and a home link", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: /404 error!/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/the page you are trying to search is not here/i)
    ).toBeInTheDocument();

    const homeLink = screen.getByRole("link", { name: /go home/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
