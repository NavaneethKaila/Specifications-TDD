import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TOTPRegistration from "./TOTPRegistration";

describe("TOTPRegistration", () => {
  test("renders TOTP registration form correctly", () => {
    render(<TOTPRegistration />);

    expect(screen.getByPlaceholderText("TOTP Code")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Register TOTP" })
    ).toBeInTheDocument();
  });

  test("shows error message when form is submitted with missing TOTP code", () => {
    render(<TOTPRegistration />);

    fireEvent.click(screen.getByRole("button", { name: "Register TOTP" }));

    expect(screen.getByText("Please enter the TOTP code.")).toBeInTheDocument();
  });
});
