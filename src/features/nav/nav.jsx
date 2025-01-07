import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import "./nav.css";
import Logo from "../../components/Logo";

const Nav = () => {
  return (
    <nav className="navbar">
      <Logo />
      <ul className="nav-links">
        <li>
          <Link to="/about" className="nav-link">
            About Us
          </Link>
          {/* Link instead of a */}
        </li>
      </ul>
      <div className="nav-buttons">
        {/* Add Links for Signup and Login */}
        <Link to="/signup">
          <button className="nav-button">Signup</button>
        </Link>
        <Link to="/login">
          <button className="nav-button">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
