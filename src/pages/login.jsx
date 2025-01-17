import React from "react";
import "./auth.css"; // Shared styles for Login and Signup
import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import googleIcon from "../assets/images/google-icon.png";

const Login = () => {
  return (
    <div className="auth-container">
      <Logo />
      <h1 className="auth-title">Login</h1>
      <form className="auth-form">
        <input
          type="text"
          placeholder="Enter Username or Email"
          className="auth-input"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="auth-input"
        />
        <button type="submit" className="auth-button primary">
          Sign in
        </button>
        <div className="auth-divider">
          <span>or</span>
        </div>
        <button type="button" className="auth-button google">
          <img src={googleIcon} alt="Google" className="google-icon" />
          Sign in with Google
        </button>
      </form>
      <p className="auth-footer">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
};

export default Login;
