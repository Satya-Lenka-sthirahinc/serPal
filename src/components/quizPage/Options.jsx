import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { useState } from "react";
import { TbCircleHalfVertical } from "react-icons/tb";
import disableBtn from "../../assets/images/notabc.png";
import { GoCircle } from "react-icons/go";

const Options = ({
  options,
  selectedOption,
  onOptionSelect,
  onMarkForReview,
  isMarked,
  disabledOptions,
  onCheckboxChange,
  questionNumber,
  inputEnable,
}) => {
  const [isCheckboxVisible, setIsCheckboxVisible] = useState(false);

  const handleToggleCheckboxVisibility = () => {
    setIsCheckboxVisible(!isCheckboxVisible);
  };

  return (
    <div className="ms-4 mt-3 ">
      <div className="col-12 d-flex justify-content-between mb-3 option_header">
        <div className="d-flex">
          <span
            className="bg-dark text-white  d-flex align-items-center justify-content-center font-weight-bold"
            style={{ width: "32px", height: "32px", minWidth: "32px" }}
          >
            {questionNumber}
          </span>
          <button
            className={`btn btn-sm mx-2 markForReviewBtn `}
            onClick={onMarkForReview}
            // ${
            //   isMarked ? "btn-secondary" : "btn-outline-secondary"
            // }
          >
            {isMarked ? (
              <>
                <IoBookmark size={25} color="#c43e36" /> <span> UnMark</span>
              </>
            ) : (
              <>
                <IoBookmarkOutline size={25} />{" "}
                <span style={{ color: "gray" }}> Mark For Review</span>
              </>
            )}
          </button>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={handleToggleCheckboxVisibility}
        >
          <img src={disableBtn} alt="Disable btn" />
        </div>
      </div>

      {options.map((option) => (
        <div className="row col-12 align-items-center" key={option.id}>
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
            <span className="fw-medium me-2 position-relative d-flex align-items-center justify-content-center m-2 px-2 ">
              <GoCircle size={30} className="position-absolute" /> {option.id}
            </span>
            {option.text}
          </div>
          <div className="col-1 ">
            {isCheckboxVisible && (
              <div
                className="mx-2"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => onCheckboxChange(option.id)}
              >
                {disabledOptions[option.id] ? (
                  <span
                    style={{
                      fontSize: "0.8rem",
                      textDecoration: "underline",
                    }}
                  >
                    {" "}
                    Undo{" "}
                  </span>
                ) : (
                  <TbCircleHalfVertical size={25} />
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
