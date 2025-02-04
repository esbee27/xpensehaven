// src/pages/login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./auth.css";
import Logo from "../components/Logo";
import googleIcon from "../assets/images/google-icon.png";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [identifier, setIdentifier] = useState(""); // State for email/username input
  const [password, setPassword] = useState(""); // State for password input
  const { handleLogin, loading, error } = useAuth(); // Access AuthContext

  // Handle the login form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await handleLogin(identifier, password); // Use the context's handleLogin function
    if (!error) toast.success("Welcome back!"); // Notify on success
  };

  return (
    <div className="auth-container">
      {/* Application logo */}
      <Logo />
      <h1 className="auth-title">Login</h1>
      <div className="auth-wrapper">
        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Input field for email or username */}
          <input
            type="text"
            placeholder="Enter Username or Email"
            className="auth-input"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          {/* Input field for password */}
          <input
            type="password"
            placeholder="Enter Password"
            className="auth-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* Submit button */}
          <button type="submit" className="auth-button primary">
            {loading ? "Loading..." : "Sign in"}
          </button>
          {/* Divider between options */}
          <div className="auth-divider">
            <span>or</span>
          </div>
          {/* Google Sign-In button */}
          <button type="button" className="auth-button google">
            <img src={googleIcon} alt="Google" className="google-icon" />
            Sign in with Google
          </button>
        </form>
        {/* Link to signup page */}
        <p className="auth-footer">
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
