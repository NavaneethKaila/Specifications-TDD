import React, { useState } from "react";

function Login({ onPreviousStep }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");

    // Perform form validation
    if (!email || !password) {
      setLoginError("Please fill in both email and password fields.");
      return;
    }

    // Simulate login success
    alert("Login successful!");

    // Clear the form
    setEmail("");
    setPassword("");
  };

  return (
    <form className="form-container" onSubmit={handleLogin}>
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

      {/* Previous Step Button */}
      <button type="button" onClick={() => onPreviousStep("totp")}>
        Previous
      </button>

      {/* Login Button */}
      <button type="submit">Login</button>

      {/* Login Error */}
      {loginError && <p className="form-error">{loginError}</p>}
    </form>
  );
}

export default Login;
