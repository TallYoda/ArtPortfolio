interface Artwork {
  title: string;
  slug: string; // Added slug field to match Portfolio.tsx
  image: string;
  medium: string;
  year: string;
  size: string;
}

const PortfolioCard: React.FC<{
  artwork: Artwork;
  onOpen: () => void;
}> = ({ artwork, onOpen }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="card border-0 shadow-sm mb-4">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="card-img-top"
          style={{ height: "300px", objectFit: "cover", cursor: "pointer" }}
          onClick={onOpen}
        />

        <div className="card-body text-center">
          <h5>{artwork.title}</h5>
          <button className="btn btn-outline-dark btn-sm" onClick={onOpen}>
            Get a Closer Look
          </button>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
