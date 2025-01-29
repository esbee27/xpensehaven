import React from "react";
import LandingNav from "../features/NavbarArea/LandingNav";
import CTA from "../features/CTA/CTA";
import Hero from "../features/Hero/Hero";
import Footer from "../features/Footer/Footer";

function LandingPage() {
  return (
    <>
      <LandingNav />
      <Hero />
      <CTA />
      <Footer />
    </>
  );
}

export default LandingPage;
