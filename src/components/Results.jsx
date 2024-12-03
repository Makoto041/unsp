import PropTypes from "prop-types";
/* eslint-disable react/prop-types */
const Results = ({ photo }) => {
  return (
    <div className="photo-list">
      {photo.map((photos, index) => (
        <a
          href={photos.links.html}
          key={index}
          target="_blank"
          rel="noopener noreferrer"
          className="photo-card"
        >
          <img
            src={photos.urls.regular}
            alt={photos.alt_description || "Photo"}
            className="photo-image"
          />
          <div className="photo-overlay">
            <p className="photo-title">{photos.alt_description || "Untitled"}</p>
          </div>
        </a>
      ))}
    </div>
  );
};
// PropTypesを使用してpropsの型を定義
Results.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      links: PropTypes.shape({
        html: PropTypes.string.isRequired,
      }),
      urls: PropTypes.shape({
        regular: PropTypes.string.isRequired,
      }),
      alt_description: PropTypes.string,
    })
  ).isRequired,
};


export default Results;
