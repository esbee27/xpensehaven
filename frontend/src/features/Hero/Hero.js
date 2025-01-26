import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          Feel <span className="hero-phrase">comfortable</span> managing your
          expenses.
        </h1>
        {/* Button Above the Video */}
        <video className="hero-video" controls>
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default Hero;
