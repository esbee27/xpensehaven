import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/about"; //  About page

function App() {
  return (
    <Router>
      <div>
        {/* Define the routes */}
        <Routes>
          {/* The LandingPage component is displayed for the root path */}
          <Route path="/" element={<LandingPage />} />

          {/* The About component is displayed for the /about path */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
