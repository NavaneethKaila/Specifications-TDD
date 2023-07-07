import React, { useState } from "react";

function TOTPRegistration({ onPreviousStep, onNextStep }) {
  const [totpCode, setTOTPCode] = useState("");
  const [totpError, setTOTPError] = useState("");

  const handleTOTPRegistration = (e) => {
    e.preventDefault();
    setTOTPError("");

    // Perform form validation
    if (!totpCode) {
      setTOTPError("Please enter the TOTP code.");
      return;
    }

    // Proceed to the next step
    onNextStep("login");
  };

  return (
    <form className="form-container" onSubmit={handleTOTPRegistration}>
      {/* TOTP Code Input */}
      <input
        type="text"
        value={totpCode}
        onChange={(e) => setTOTPCode(e.target.value)}
        placeholder="TOTP Code"
      />

      {/* Previous Step Button */}
      <button type="button" onClick={() => onPreviousStep("verification")}>
        Previous
      </button>

      {/* Register TOTP Button */}
      <button type="submit">Register TOTP</button>

      {/* TOTP Error */}
      {totpError && <p className="form-error">{totpError}</p>}
    </form>
  );
}

export default TOTPRegistration;
