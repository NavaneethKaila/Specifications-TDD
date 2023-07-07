import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EmailVerification from "./EmailVerification";

describe("EmailVerification", () => {
  test("renders email verification form correctly", () => {
    render(<EmailVerification />);

    expect(
      screen.getByPlaceholderText("Verification Code")
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Verify Email" })
    ).toBeInTheDocument();
  });

  test("shows error message when form is submitted with missing verification code", () => {
    render(<EmailVerification />);

    fireEvent.click(screen.getByRole("button", { name: "Verify Email" }));

    expect(
      screen.getByText("Please enter the verification code.")
    ).toBeInTheDocument();
  });
});
