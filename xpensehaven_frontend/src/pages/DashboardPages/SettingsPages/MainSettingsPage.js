import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Import icons // Import collapse icons
import Logo from "../../../components/Logo"; //  relative path
import { useCurrency } from "../../../context/currencyContext"; // Use the Currency context
import "./MainSettingsPage.css"; // Import styles
import ProfileSettings from "../../../components/ProfileSettings";

function SettingsPage() {
  const location = useLocation(); // Get current location
  const navigate = useNavigate(); // For manual navigation
  const [activeTab, setActiveTab] = useState("general"); // Default tab is 'general'
  const [isCollapsed, setIsCollapsed] = useState(false); // Track collapse state// Collapse state
  const { currency, changeCurrency } = useCurrency(); // Access the current currency and the function to change it

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
    navigate(`/settings?tab=${tab}`);
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
            {activeTab === "profile" && <ProfileSettings />}
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
