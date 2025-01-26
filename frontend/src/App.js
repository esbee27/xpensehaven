import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalContext";
import { CurrencyProvider } from "./context/currencyContext"; // Import CurrencyProvider to manage global currency state
import { AuthProvider } from "./context/AuthContext";
import LandingPage from "./pages/LandingPage"; // Import Landing page
import About from "./pages/AboutPage"; // Import About page
import Login from "./pages/login";
import Signup from "./pages/signup";
import DashboardPage from "./pages/DashboardPages/MainDashboard"; // Import Dashboard page component
import TransactionPage from "./pages/TransactionPage";
import BudgetPage from "./pages/budgetPage";
import SettingsPage from "./pages/DashboardPages/SettingsPages/Settings"; // Import SettingsPage
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <AuthProvider>
      <GlobalProvider>
        <CurrencyProvider>
          {" "}
          {/* Wrap the app with CurrencyProvider to make the currency state accessible */}
          <Router>
            <div>
              {/* Define the routes */}
              <Routes>
                {/* The LandingPage component is displayed for the root path */}
                <Route path="/" element={<LandingPage />} />

                {/* The About component is displayed for the /about path */}
                <Route path="/about" element={<About />} />

                {/* The Dashboard component is displayed for the /dashboard path */}
                <Route path="/dashboard" element={<DashboardPage />} />

                {/* The Dashboard component is displayed for the /transaction page path */}
                <Route path="/transactions" element={<TransactionPage />} />

                {/* The Dashboard component is displayed for the /Budget page path */}
                <Route path="/budget" element={<BudgetPage />} />

                {/* The Settings component is displayed for the /settings path */}
                <Route path="/settings" element={<SettingsPage />} />
                {/* The Login Page is displayed for the /login path */}
                <Route path="/login" element={<Login />} />

                {/* The Signup Page is displayed for the /signup path */}
                <Route path="/signup" element={<Signup />} />
              </Routes>
              <ToastContainer />
            </div>
          </Router>
        </CurrencyProvider>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
