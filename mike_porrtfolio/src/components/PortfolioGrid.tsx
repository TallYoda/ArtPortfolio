// src/components/PortfolioGrid.tsx
import React, { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import Lightbox from "./Lightbox";
import artworks from "../data/artworks.json";

const PortfolioGrid: React.FC = () => {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="row">
        {artworks.map((artwork, i) => (
          <div key={artwork.slug} onClick={() => setIndex(i)} style={{ cursor: "pointer" }}>
            <PortfolioCard artwork={artwork} />
          </div>
        ))}
      </div>

      {index !== null && (
        <Lightbox
          artworks={artworks}
          currentIndex={index}
          onClose={() => setIndex(null)}
          onNext={() => setIndex((index + 1) % artworks.length)}
          onPrev={() =>
            setIndex((index - 1 + artworks.length) % artworks.length)
          }
        />
      )}
    </>
  );
};

export default PortfolioGrid;
