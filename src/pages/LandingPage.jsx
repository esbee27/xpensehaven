import React from "react";
import Nav from "../features/nav/nav";
import CTA from "../features/CTASection/CTASection";
import Hero from "../features/HeroSection/HeroSection";
import Footer from "../features/Footer/Footer";

function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;
