import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hide as soon as the user scrolls down a few pixels
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`hero-section ${scrolled ? "scrolled" : ""}`}
      style={{
        backgroundImage: `url(/img/hero-bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content" aria-hidden={scrolled}>
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="lead">Artworks, murals, and visual explorations</p>

        <blockquote className="hero-quote">
          "Try to forget what objects you have before you—a tree, a house, a
          field, or whatever. Merely think, here is a little square of blue,
          here an oblong of pink, here a streak of yellow, and paint it just as
          it looks to you."
          <br />
          <span className="hero-quote-author">— Claude Monet</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;