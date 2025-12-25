import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hide as soon as the user scrolls down a few pixels
      setScrolled(window.scrollY > 5);
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
       {/*<h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>*/}
        <p className="display-4 fw-bold">Artworks, Murals, and Visual Explorations</p>

        <blockquote className="hero-quote">
          "We are alone in the darkness. And then we are not alone. And that is why we must love and support 
          and be tender with one another—not because we are alike, but because we are not. The danger, in the case of most of us, is not 
          that we will see the other person and attack him, but that we will fail to see him at all. For community, real community, is not built 
          on the false ground of sameness, but on the terrifying and essential ground of our shared, fragile humanity."
          <br />
          <span className="hero-quote-author">— James Baldwin, from a 1960 address titled "The New Lost Generation," later published in Esquire (July 1961)</span>
        </blockquote>
      </div>
    </section>
  );
};

export default Hero;