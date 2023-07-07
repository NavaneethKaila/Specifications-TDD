import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SignUpForm from "./SignUpForm";

describe("SignUpForm", () => {
  test("renders sign-up form correctly", () => {
    render(<SignUpForm />);

    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign Up" })).toBeInTheDocument();
  });

  test("shows error message when form is submitted with missing fields", () => {
    render(<SignUpForm />);

    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      screen.getByText("Please fill in all the fields.")
    ).toBeInTheDocument();
  });

  test("shows error message when form is submitted with mismatched passwords", () => {
    render(<SignUpForm />);

    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: "password1" }
    });
    fireEvent.change(screen.getByPlaceholderText("Confirm Password"), {
      target: { value: "password2" }
    });
    fireEvent.click(screen.getByRole("button", { name: "Sign Up" }));

    expect(
      screen.getByText("Password and confirm password do not match.")
    ).toBeInTheDocument();
  });
});
