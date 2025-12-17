import React, { useEffect, useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Lightbox from "./Lightbox";
import artworksData from "../data/artworks.json";

export interface Artwork {
  title: string;
  slug: string;
  image: string;
  medium: string;
  year: string;
  size: string;
  forSale?: boolean;
}

const PortfolioGrid: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setArtworks(artworksData);
  }, []);

  useEffect(() => {
    console.log(`activeIndex changed: ${activeIndex}`); // Log state changes
  }, [activeIndex]);

  console.log(`PortfolioGrid rendered with activeIndex: ${activeIndex}`);

  const openLightbox = (index: number) => {
    console.log(`Opening lightbox for index: ${index}`); // Debugging log
    setActiveIndex(index);
  };

  const closeLightbox = () => {
    console.log("Closing lightbox");
    setActiveIndex(null);
  };

  const next = () => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const nextIndex = (prev + 1) % artworks.length;
      console.log(`Next index: ${nextIndex}`);
      return nextIndex;
    });
  };

  const prev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const prevIndex = (prev - 1 + artworks.length) % artworks.length;
      console.log(`Previous index: ${prevIndex}`);
      return prevIndex;
    });
  };

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Portfolio</h2>

        <div className="row">
          {artworks.map((artwork, index) => (
            <PortfolioCard
              key={artwork.slug}
              artwork={artwork}
              onOpen={() => openLightbox(index)}
            />
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          artworks={artworks} // Pass the entire artworks array
          currentIndex={activeIndex} // Pass the active index
          onClose={closeLightbox}
          onNext={next}
          onPrev={prev}
        />
      )}
    </section>
  );
};

export default PortfolioGrid;
