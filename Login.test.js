import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";

describe("Login", () => {
  test("renders login form correctly", () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  test("shows error message when form is submitted with missing email and password", () => {
    render(<Login />);

    fireEvent.click(screen.getByRole("button", { name: "Login" }));

    expect(
      screen.getByText("Please fill in both email and password fields.")
    ).toBeInTheDocument();
  });
});
