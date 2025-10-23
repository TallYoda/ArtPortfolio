import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import artworksData from "../data/artworks.json";

interface Artwork {
  title: string;
  slug: string;
  image: string;
  medium: string;
  year: string;
  size: string;
}

const Portfolio: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  useEffect(() => {
    // static import already works, but this simulates loading
    setArtworks(artworksData);
  }, []);

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Portfolio</h2>
        <div className="row">
          {artworks.map((artwork) => (
            <PortfolioCard key={artwork.slug} artwork={artwork} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
