import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";

const Options = ({
  options,
  selectedOption,
  onOptionSelect,
  onMarkForReview,
  isMarked,
  disabledOptions,
  onCheckboxChange,
}) => {
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

  const handleToggleCheckboxVisibility = () => {
    setIsCheckboxVisible(!isCheckboxVisible);
  };

  return (
    <div className="ms-4 mt-3 col-5">
      <div className="col-12 d-flex justify-content-between mb-3">
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
        </button>
        <button
          className="btn btn-outline-secondary btn-sm text-decoration-line-through"
          onClick={handleToggleCheckboxVisibility}
        >
          ABC
        </button>
      </div>
      {options.map((option) => (
        <div className="row col-12 " key={option.id}>
          <div
            className={`p-3 border rounded mb-2 d-flex align-items-center ${
              selectedOption === option.id ? "bg-light border-primary" : ""
            } ${
              disabledOptions[option.id]
                ? "text-decoration-line-through disabled"
                : ""
            } ${isCheckboxVisible ? "col-11" : "col-12"}`}
            style={{ cursor: "pointer" }}
            onClick={() =>
              !disabledOptions[option.id] && onOptionSelect(option.id)
            }
          >
            <span className="fw-medium me-2">{option.id})</span>
            {option.text}
          </div>
          <div className="col-1">
            {isCheckboxVisible && (
              <input
                type="checkbox"
                className="me-2"
                checked={!!disabledOptions[option.id]}
                onChange={() => onCheckboxChange(option.id)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
