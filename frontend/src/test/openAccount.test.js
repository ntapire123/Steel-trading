import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import OpenAccount from "../Landing_page/OpenAccount";

describe("OpenAccount component", () => {
  test("renders placeholder copy", () => {
    render(<OpenAccount />);

    expect(screen.getByText("OpenAccount")).toBeInTheDocument();
  });
});
