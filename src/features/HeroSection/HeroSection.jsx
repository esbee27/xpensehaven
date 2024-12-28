import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Feel <span className="hero-phrase">comfortable</span> managing your
          expenses.
        </h1>
        <video className="hero-video" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
