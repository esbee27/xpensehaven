import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CurrencyProvider } from "./context/currencyContext"; // Import CurrencyProvider to manage global currency state
import LandingPage from "./pages/LandingPage"; // Import Landing page
import About from "./pages/AboutPage"; // Import About page
import DashboardPage from "./pages/DashboardPages/MainDashboard"; // Import Dashboard page component
import TransactionPage from "./pages/TransactionPage";
import SettingsPage from "./pages/DashboardPages/SettingsPages/Settings"; // Import SettingsPage
import Login from "./pages/login";
import Signup from "./pages/signup";
import Budget from "./pages/budgetPage";
import { GlobalProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";
function App() {
  return (
    <GlobalProvider>
      <AuthProvider>
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

                {/* The Dashboard component is displayed for the /trnsaction page path */}
                <Route path="/transactions" element={<TransactionPage />} />

                {/* The Settings component is displayed for the /settings path */}
                <Route path="/settings" element={<SettingsPage />} />

                {/* The Login Page is displayed for the /login path */}
                <Route path="/login" element={<Login />} />

                {/* The Signup Page is displayed for the /signup path */}
                <Route path="/signup" element={<Signup />} />

                {/* The Budget Page is displayed for the /budget path */}
                <Route path="/budget" element={<Budget />} />
              </Routes>
            </div>
          </Router>
        </CurrencyProvider>
      </AuthProvider>
    </GlobalProvider>
  );
}

export default App;
