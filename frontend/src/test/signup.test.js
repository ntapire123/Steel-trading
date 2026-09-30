import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import Signup from "../Landing_page/signup/Signup";

jest.mock("axios", () => ({
  post: jest.fn(),
}));

const renderSignup = () =>
  render(
    <MemoryRouter>
      <Signup />
    </MemoryRouter>
  );

describe("Signup component", () => {
  test("renders signup form fields", () => {
    renderSignup();

    expect(screen.getByRole("heading", { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText("Username")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /create account/i })
    ).toBeInTheDocument();
  });

  test("renders username, email, and password inputs", () => {
    const { container } = renderSignup();
    const inputs = container.querySelectorAll("input");

    expect(inputs).toHaveLength(3);
    expect(inputs[1]).toHaveAttribute("type", "email");
    expect(inputs[2]).toHaveAttribute("type", "password");
  });

  test("links to the login page", () => {
    renderSignup();

    expect(screen.getByRole("link", { name: /log in/i })).toHaveAttribute(
      "href",
      "/login"
    );
  });
});
