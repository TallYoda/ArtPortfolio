import React from "react";
import type { Artwork } from "./PortfolioGrid";

interface Props {
  artwork: Artwork;
  onOpen: () => void;
  imageSrc?: string;
}

const PortfolioCard: React.FC<Props> = ({ artwork, onOpen, imageSrc }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="card border-0 shadow-sm mb-4">
        <img
          src={imageSrc ?? artwork.thumbnail}
          alt={artwork.title}
          className="card-img-top"
          loading="lazy"
          style={{ objectFit: "cover", height: "300px", cursor: "pointer" }}
          onClick={() => {
            console.log(`PortfolioCard clicked: ${artwork.title}`);
            onOpen();
          }}
        />

        <div className="card-body text-center">
          <h5 className="card-title">{artwork.title}</h5>
          <p className="card-text small text-muted">
            {artwork.medium}
            <br />
            {artwork.size}
            <br />
            {artwork.year}
          </p>

          <button
            className="btn btn-outline-dark btn-sm"
            onClick={onOpen}
          >
            Get a Closer Look
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;

