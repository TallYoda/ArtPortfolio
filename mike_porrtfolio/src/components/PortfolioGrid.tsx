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
  forSale: boolean;
}

type Filter = "all" | "forSale";

const imageModules = import.meta.glob("../assets/img/portfolio/*.{webp,jpg,jpeg,png,avif}", { as: "url" });

const PortfolioGrid: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [resolvedImages, setResolvedImages] = useState<Record<string, string>>({});
  const [filter, setFilter] = useState<Filter>("all");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    setArtworks(artworksData);

    // resolve local asset URLs for any artworks that reference /assets/img/portfolio/...
    (async () => {
      const map: Record<string, string> = {};
      const entries = Object.entries(imageModules);
      await Promise.all(
        entries.map(async ([path, resolver]) => {
          try {
            const url = await (resolver as () => Promise<string>)();
            // path is like '../assets/img/portfolio/name.webp' — extract filename
            const match = path.match(/portfolio\/([^\/]+)$/);
            if (match) map[match[1]] = url;
          } catch (e) {
            // ignore
          }
        })
      );
      setResolvedImages(map);
    })();
  }, []);

  useEffect(() => {
    console.log(`activeIndex changed: ${activeIndex}`); // Log state changes
  }, [activeIndex]);

  console.log(`PortfolioGrid rendered with activeIndex: ${activeIndex}`);

  const openLightbox = (index: number) => {
    if (index < 0) return;
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

        {/* Filter buttons */}
        <div className="d-flex justify-content-center mb-4 gap-3">
          <button
            className={`btn ${filter === "all" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>

          <button
            className={`btn ${filter === "forSale" ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setFilter("forSale")}
          >
            Available for Sale
          </button>
        </div>

        <div className="row">
          {(
            filter === "all" ? artworks : artworks.filter((a) => a.forSale)
          ).map((artwork) => {
            const originalIndex = artworks.findIndex((a) => a.slug === artwork.slug);
            // try match filename from artwork.image
            const filename = artwork.image.split("/").pop() || "";
            const imageSrc = resolvedImages[filename];
            return (
              <PortfolioCard
                key={artwork.slug}
                artwork={artwork}
                imageSrc={imageSrc}
                onOpen={() => openLightbox(originalIndex)}
              />
            );
          })}
        </div>
      </div>

      {activeIndex !== null && (
        (() => {
          // Try to resolve a local image URL for the currently active artwork
          const art = artworks[activeIndex];
          let currentImageSrc: string | undefined;
          if (art) {
            const filename = art.image.split("/").pop() || "";
            currentImageSrc = resolvedImages[filename];
          }

          return (
            <Lightbox
              artworks={artworks} // Pass the entire artworks array
              currentIndex={activeIndex} // Pass the active index
              imageSrc={currentImageSrc}
              onClose={closeLightbox}
              onNext={next}
              onPrev={prev}
            />
          );
        })()
      )}
    </section>
  );
};

export default PortfolioGrid;
