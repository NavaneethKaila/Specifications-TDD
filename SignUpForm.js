import React, { useState } from "react";

function SignUpForm({ onNextStep }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    setFormError("");

    // Perform form validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setFormError("Please fill in all the fields.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Password and confirm password do not match.");
      return;
    }

    // Proceed to the next step
    onNextStep("verification");
  };

  return (
    <form className="form-container" onSubmit={handleSignUp}>
      {/* First Name Input */}
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
      />

      {/* Last Name Input */}
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
      />

      {/* Email Input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      {/* Password Input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />

      {/* Confirm Password Input */}
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      />

      {/* Sign Up Button */}
      <button type="submit">Sign Up</button>

      {/* Form Error */}
      {formError && <p className="form-error">{formError}</p>}
    </form>
  );
}

export default SignUpForm;
