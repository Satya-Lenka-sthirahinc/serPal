import { Modal } from "react-bootstrap";
import { GrLocation } from "react-icons/gr";
import { IoBookmark } from "react-icons/io5";
import { LuBoxSelect } from "react-icons/lu";
import { useParams } from "react-router-dom";

const ReadingAndWritingModal = ({
  show,
  handleClose,
  currentQuestion,
  totalQuestions,
  markedQuestions,
  selectedAnswers,
  setCurrentQuestion,
}) => {
  const { id } = useParams();

  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="navigationModal"
      backdropClassName="bg-transparent"
      dialogClassName="bg-transparent"
    >
      <Modal.Header className="flex-column" closeButton>
        <Modal.Title>
          Section 1, Module 2: Reading and Writing Questions
        </Modal.Title>

        <div className="d-flex w-100 justify-content-evenly myDirections">
          <div>
            <GrLocation /> <span> Current</span>
          </div>
          <div>
            <LuBoxSelect /> <span> Unanswered</span>
          </div>
          <div>
            <IoBookmark size={25} color="#c43e36" /> <span> For review</span>
          </div>
        </div>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-wrap justify-content-center ">
          {[...Array(totalQuestions)].map((_, index) => (
            <div
              key={index + 1}
              className={`mx-2 my-3 p-2 directions_box ${
                selectedAnswers[`${id}-${index}`] ? "bg-success " : "text-dark"
              }`}
              onClick={() => setCurrentQuestion(index)}
            >
              <div
                className={`mark_review ${
                  markedQuestions.includes(`${id}-${index}`) ? "show" : "hide"
                }`}
              >
                <IoBookmark size={15} color="#c43e36" />
              </div>
              <div
                className={`curent_position ${
                  index + 1 === currentQuestion ? "show" : "hide"
                }`}
              >
                <GrLocation size={20} />
              </div>
              {index + 1}
            </div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ReadingAndWritingModal;
