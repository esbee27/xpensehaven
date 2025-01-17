import React from "react";
import "./auth.css"; // Shared styles for Login and Signup
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import googleIcon from "../assets/images/google-icon.png";

const Signup = () => (
  <div className="auth-container">
    <Logo />
    <h1 className="auth-title">Sign Up</h1>
    <form className="auth-form">
      <input type="text" placeholder="Enter Username" className="auth-input" />
      <input type="email" placeholder="Enter Email" className="auth-input" />
      <input
        type="password"
        placeholder="Enter Password"
        className="auth-input"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="auth-input"
      />
      <button type="submit" className="auth-button primary">
        Sign Up with Email
      </button>
      <div className="auth-divider">
        <span>or</span>
      </div>
      <button type="button" className="auth-button google">
        <img src={googleIcon} alt="Google" className="google-icon" />
        Sign up with Google
      </button>
    </form>
    <p className="auth-footer">
      Already have an account? <Link to="/login">Login</Link>
    </p>
  </div>
);

export default Signup;
