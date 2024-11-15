import Timer from "../timer/Timer";

const SectionHeader = ({
  sectionNumber,
  title,
  description,
  isDirectionsVisible,
  onToggleDirections,
  onTimeUp,
  isQuizSubmitted,
  quizId,
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
        <Timer
          quizId={quizId}
          onTimeUp={onTimeUp}
          isQuizSubmitted={isQuizSubmitted}
        />
        <button className="btn btn-outline-secondary">Hide</button>
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
