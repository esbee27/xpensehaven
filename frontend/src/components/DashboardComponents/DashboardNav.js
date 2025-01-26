import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBell, FaRegUserCircle, FaSun, FaSignOutAlt } from "react-icons/fa";
import { BsSun } from "react-icons/bs";
import Logo from "../Logo";
import "./DashboardNav.css";
import { useAuth } from "../../context/AuthContext";

function DashboardNav() {
  const { user } = useAuth(); // Get user data from context
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  const toggleMenu = () => setShowMenu((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="dashboard-nav">
      <Logo />
      <ul className="dash-nav">
        <li>
          <Link
            to="/dashboard"
            className={isActive("/dashboard") ? "active" : ""}
            aria-label="Dashboard"
          >
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/budget"
            className={isActive("/budget") ? "active" : ""}
            aria-label="Budgets"
          >
            Budgets
          </Link>
        </li>
        <li>
          <Link
            to="/transactions"
            className={isActive("/transactions") ? "active" : ""}
            aria-label="Transactions"
          >
            Transactions
          </Link>
        </li>
      </ul>
      <div className="icons">
        <FaBell size={20} aria-label="Notifications" />
        <div
          className="profile"
          onClick={toggleMenu}
          ref={menuRef}
          aria-label="Profile"
        >
          <div className="profile-icon">
            {user?.photo ? (
              <img
                src={user.photo}
                alt="Profile"
                className="dashboard-profile-pic"
              />
            ) : (
              <FaRegUserCircle size={20} className="user-icon" />
            )}
          </div>

          {showMenu && (
            <div className="profile-menu">
              <p className="profile-info">
                <div className="profile-icon">
                  {user?.photo ? (
                    <img
                      src={user.photo}
                      alt="Profile"
                      className="profile-pic-large"
                    />
                  ) : (
                    <FaRegUserCircle size={40} className="user-icon-large" />
                  )}
                </div>

                <strong>{user?.name || "Guest"}</strong>
              </p>
              <p className="email-text">{user?.email || "guest@example.com"}</p>
              <hr />
              <p>
                <BsSun size={16} color="B2BEB5" /> Light mode
              </p>
              <Link to="/settings" className="settings-link">
                <p>
                  <FaSun size={16} /> Settings
                </p>
              </Link>
              <p>
                <FaSignOutAlt size={16} /> Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default DashboardNav;
