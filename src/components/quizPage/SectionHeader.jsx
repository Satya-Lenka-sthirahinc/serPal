import Timer from "../timer/Timer";
import { LuPencilLine } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { RxStopwatch } from "react-icons/rx";

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
  const [hideTimer, setHideTimer] = useState(false);
  return (
    <div className="card-header  ">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="h4 mb-1 subject_heading">
            Section {sectionNumber}: {title}
          </h2>
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={onToggleDirections}
              className="btn direction_text  p-0 text-decoration-none"
            >
              Directions{" "}
              {isDirectionsVisible ? <IoIosArrowForward /> : <IoIosArrowDown />}
            </button>
          </div>
        </div>
        <div style={{ marginRight: "15%" }} className="text-center">
          {hideTimer ? (
            <RxStopwatch className="my-2" size={22} />
          ) : (
            <Timer
              quizId={quizId}
              onTimeUp={onTimeUp}
              isQuizSubmitted={isQuizSubmitted}
            />
          )}

          <button
            onClick={() => setHideTimer(!hideTimer)}
            className="rounded-pill btn btn-outline-dark hide_btn "
          >
            {hideTimer ? "Show" : "Hide"}
          </button>
        </div>
        <div className="d-flex align-items-center gap-3  py-2 px-3 ">
          <div className="d-flex align-items-center flex-column  gap-2 ">
            <LuPencilLine size={16} />

            <span> Highlight & Notes</span>
          </div>

          <div className="d-flex align-items-center flex-column  gap-2 ">
            <BsThreeDotsVertical size={16} />
            <span> More</span>
          </div>
        </div>
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
