import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const SectionHeader = ({
  sectionNumber,
  title,
  description,
  isDirectionsVisible,
  onToggleDirections,
  onMarkForReview,
  isMarked,
}) => {
  return (
    <div className="card-header border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="h4 mb-1">
            Section {sectionNumber}: {title}
          </h2>
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={onToggleDirections}
              className="btn btn-link p-0 text-decoration-none"
            >
              Directions {isDirectionsVisible ? "▼" : "▶"}
            </button>
          </div>
        </div>
        <strong className="text-muted">0:00</strong>
        <button
          className={`btn btn-sm ${
            isMarked ? "btn-secondary" : "btn-outline-secondary"
          }`}
          onClick={onMarkForReview}
        >
          {isMarked ? (
            <>
              <IoBookmark /> UnMark
            </>
          ) : (
            <>
              <IoBookmarkOutline /> Mark for Review
            </>
          )}
          {/* <IoBookmarkOutline /> {isMarked ? "Unmark" : "Mark for Review"} */}
        </button>
      </div>

      {isDirectionsVisible && (
        <div className="mt-3 p-3 bg-light rounded">
          <p className="mb-0">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
