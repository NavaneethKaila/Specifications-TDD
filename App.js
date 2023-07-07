import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import EmailVerification from "./EmailVerification";
import TOTPRegistration from "./TOTPRegistration";
import Login from "./Login";
import "./App.css";

function App() {
  const [currentStep, setCurrentStep] = useState("signup");

  const handleNextStep = (nextStep) => {
    setCurrentStep(nextStep);
  };

  const handlePreviousStep = (previousStep) => {
    setCurrentStep(previousStep);
  };

  return (
    <div className="app-container">
      <h1>Multi-Step Registration</h1>
      {currentStep === "signup" && <SignUpForm onNextStep={handleNextStep} />}
      {currentStep === "verification" && (
        <EmailVerification
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
      )}
      {currentStep === "totp" && (
        <TOTPRegistration
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
      )}
      {currentStep === "login" && (
        <Login
          onPreviousStep={handlePreviousStep}
          onNextStep={handleNextStep}
        />
      )}
    </div>
  );
}

export default App;
