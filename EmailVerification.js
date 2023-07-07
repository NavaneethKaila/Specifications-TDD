import React, { useState } from "react";

function EmailVerification({ onPreviousStep, onNextStep }) {
  const [verificationCode, setVerificationCode] = useState("");
  const [verificationError, setVerificationError] = useState("");

  const handleVerification = (e) => {
    e.preventDefault();
    setVerificationError("");

    // Perform form validation
    if (!verificationCode) {
      setVerificationError("Please enter the verification code.");
      return;
    }

    // Proceed to the next step
    onNextStep("totp");
  };

  return (
    <form className="form-container" onSubmit={handleVerification}>
      {/* Verification Code Input */}
      <input
        type="text"
        value={verificationCode}
        onChange={(e) => setVerificationCode(e.target.value)}
        placeholder="Verification Code"
      />

      {/* Previous Step Button */}
      <button type="button" onClick={() => onPreviousStep("signup")}>
        Previous
      </button>

      {/* Verify Email Button */}
      <button type="submit">Verify Email</button>

      {/* Verification Error */}
      {verificationError && <p className="form-error">{verificationError}</p>}
    </form>
  );
}

export default EmailVerification;
