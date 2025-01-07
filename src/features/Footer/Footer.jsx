import React from "react";
import "./Footer.css";
import Logo from "../../components/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-logo">
        <Logo />
      </p>
      <p className="footer-copyright">&copy; 2024 XpenseHaven.</p>
    </footer>
  );
};

export default Footer;
