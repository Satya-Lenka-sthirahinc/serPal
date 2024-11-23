import Timer from "../timer/Timer";
import { LuPencilLine } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import { RxStopwatch } from "react-icons/rx";
import { GiHelp } from "react-icons/gi";
import { FaRegKeyboard } from "react-icons/fa";
import { MdOutlineLineStyle } from "react-icons/md";
import { IoAccessibilityOutline } from "react-icons/io5";
import { TfiSave } from "react-icons/tfi";
import MoreModal from "./MoreModal";

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
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "" });

  // Function to handle modal opening
  const handleShowModal = (title) => {
    setModalContent({ title });
    setShowModal(true);
  };

  // Function to close the modal
  const handleCloseModal = () => setShowModal(false);
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
              Directions
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

          <div
            className="d-flex align-items-center flex-column  gap-2 nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <BsThreeDotsVertical size={16} />
            <span> More</span>
            <ul className="dropdown-menu more_dropDown">
              <li onClick={() => handleShowModal("Help")}>
                <a className="dropdown-item" href="#">
                  <GiHelp /> <span className="mx-2"> Help</span>
                </a>
              </li>
              <li onClick={() => handleShowModal("Keyboard Shortcuts")}>
                <a className="dropdown-item" href="#">
                  <FaRegKeyboard /> <span className="mx-2">Shortcuts</span>
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                  <MdOutlineLineStyle />{" "}
                  <span className="mx-2">Line Reacder</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item more_inactive" href="#">
                  <IoAccessibilityOutline />
                  <span className="mx-2"> Assistive Technology</span>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <TfiSave /> <span className="mx-2">Save and Exit</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MoreModal
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        modalContent={modalContent}
      />
      {isDirectionsVisible && (
        <div className="mt-3 p-3 bg-light rounded">
          <p className="mb-0">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
