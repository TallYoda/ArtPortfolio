import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero-section d-flex align-items-center justify-content-center text-center">
      <div className="hero-content text-white">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">Artworks, murals, and visual explorations</p>
      </div>
    </section>
  );
};

export default Hero;
