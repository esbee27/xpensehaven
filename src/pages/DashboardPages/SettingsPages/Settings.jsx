import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons // Import collapse icons
import Logo from "../../../components/Logo"; //  relative path
import { useCurrency } from "../../../context/currencyContext"; // Use the Currency context
import "./Settings.css"; // Import styles
import { useAuth } from "../../../context/AuthContext"; // Import useAuth

function SettingsPage() {
  const { user, updateUser } = useAuth(); // Access user and updateUser from context
  const [username, setUsername] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // For manual navigation
  const [activeTab, setActiveTab] = useState("general"); // Default tab is 'general'
  const [isCollapsed, setIsCollapsed] = useState(false); // Track collapse state// Collapse state
  const { currency, changeCurrency } = useCurrency(); // Access the current currency and the function to change it

  const handleProfileUpdate = () => {
    // Update user profile dynamically
    const updatedData = { name: username, email };
    updateUser(updatedData); // Update the context with new data
  };
  // Parse the query parameter to set the active tab
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tab = queryParams.get("tab"); // Get 'tab' parameter from URL
    if (tab) {
      setActiveTab(tab); // Set active tab based on query param
    }
  }, [location.search]); // Re-run effect when location changes

  // Handle tab switching manually
  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    navigate(`/settings?tab=${tab}`); // Update the URL with the selected tab
  };

  const toggleCollapse = () => {
    setIsCollapsed((prevState) => !prevState); // Toggle collapse state
  };

  // Handle the currency change
  const handleCurrencyChange = (event) => {
    changeCurrency(event.target.value); // Update the currency context when selected
  };

  return (
    <div className="settings-page">
      {/* Header Section */}
      <div className="settings-header">
        <h2>Settings</h2>
        <Logo className="logo-settings" />
        <button className="collapse-btn" onClick={toggleCollapse}>
          {isCollapsed ? <FiChevronDown /> : <FiChevronUp />}
        </button>
      </div>

      {/* Main Section with Side Panel and Content */}
      <div className={`settings-main ${isCollapsed ? "collapsed" : ""}`}>
        {/* Side Panel with Tabs */}
        <div className={`side-panel ${isCollapsed ? "collapsed" : ""}`}>
          <button
            className={activeTab === "general" ? "active" : ""}
            onClick={() => handleTabSwitch("general")}
          >
            General
          </button>
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => handleTabSwitch("profile")}
          >
            Profile
          </button>

          <button
            className={activeTab === "financial-data" ? "active" : ""}
            onClick={() => handleTabSwitch("financial-data")}
          >
            Financial Data
          </button>
        </div>

        {/* Divider between Side Panel and Content */}
        <div className="divider"></div>

        {/* Main Content Area */}
        {!isCollapsed && (
          <div className="settings-content">
            {activeTab === "general" && (
              <div className="general-settings">
                <p>Select Currency:</p>
                <select value={currency} onChange={handleCurrencyChange}>
                  <option value="₦">Naira (₦)</option>
                  <option value="$">USD ($)</option>
                  <option value="€">Euro (€)</option>
                  {/* add more currencies if need be */}
                </select>
              </div>
            )}
            {activeTab === "profile" && (
              <div className="profile-content">
                <h3>Profile Settings</h3>
                <div className="profile-photo">
                  <div className="photo-circle"></div>
                  <button className="change-photo-btn">Change Photo</button>
                </div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button
                  className="save-changes-btn"
                  onClick={handleProfileUpdate}
                >
                  Save Changes
                </button>
              </div>
            )}
            {activeTab === "financial-data" && (
              <div className="financial-tab-content">
                <h3>Account</h3>
                <hr className="underline" />
                <p>
                  Automate account balance and transaction updates by linking
                  your account with xpensehaven.
                </p>
                <button className="link-bank-btn">Link Bank Account</button>

                <h3>Transactions</h3>
                <hr className="underline" />
                <p>Export or upload your transactions as xslx or csv.</p>
                <div className="transaction-buttons">
                  <button className="download-btn">
                    Download Transactions
                  </button>
                  <button className="upload-btn">Upload Transactions</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default SettingsPage;
