import { IoIosArrowUp } from "react-icons/io";
import Button from "../butoon/Button";
import { useState } from "react";
import ReadingAndWritingModal from "./ReadingAndWritingModal";

const BottomSection = ({
  currentQuestion,
  totalQuestions,
  onPrevious,
  onNext,
  disablePrev,
  disableNext,
  userName,
  markedQuestions,
  selectedAnswers,
  setCurrentQuestion,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    // <div className="d-flex justify-content-between align-items-center  p-3  rounded test_navigation">
    //   <div className="small">
    //     Question {currentQuestion} of {totalQuestions}
    //   </div>
    //   <div className="d-flex gap-2">
    //     <button
    //       className="btn btn-outline-primary"
    //       onClick={onPrevious}
    //       disabled={disablePrev}
    //     >
    //       Back
    //     </button>
    //     <button
    //       className="btn btn-primary"
    //       onClick={onNext}
    //       disabled={disableNext}
    //     >
    //       Next
    //     </button>
    //   </div>
    // </div>
    <div className="d-flex justify-content-between align-items-center test_navigation py-3 position-relative">
      <div className="text-gray-700 font-medium fw-bold">{userName}</div>
      <div
        onClick={handleShow}
        className="bg-dark text-white px-3 p-2 rounded-lg flex items-center gap-1 rounded QnumBtn"
      >
        <span>Question</span> <span>{currentQuestion}</span> <span>of</span>{" "}
        <span>{totalQuestions}</span> <IoIosArrowUp className="w-4 h-4 ml-1" />
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={onPrevious}
          className={`mx-2 ${disablePrev && "disabledBtn"}`}
        >
          Back
        </Button>
        <Button
          onClick={onNext}
          className={`mx-2 ${disableNext && "disabledBtn"}`}
        >
          Next
        </Button>
      </div>
      <ReadingAndWritingModal
        show={show}
        handleClose={handleClose}
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
        markedQuestions={markedQuestions}
        selectedAnswers={selectedAnswers}
        setCurrentQuestion={setCurrentQuestion}
      />
    </div>
  );
};

export default BottomSection;
