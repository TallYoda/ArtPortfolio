import React from "react";

interface Artwork {
  title: string;
  image: string;
  medium: string;
  year: string;
  size: string;
}

const PortfolioCard: React.FC<{ artwork: Artwork }> = ({ artwork }) => {
  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="card border-0 shadow-sm mb-4">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="card-img-top"
          style={{ objectFit: "cover", height: "300px" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{artwork.title}</h5>
          <p className="card-text small text-muted">
            {artwork.medium} <br />
            {artwork.size} <br />
            {artwork.year}
          </p>
          <a href={`/art/${artwork.slug}`} className="btn btn-outline-dark btn-sm">
            View Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
