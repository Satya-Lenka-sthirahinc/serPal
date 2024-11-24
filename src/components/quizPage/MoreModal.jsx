import { Modal, Button } from "react-bootstrap";
import HelpAccordion from "./HelpAccordion";
import ShortcutsModal from "./ShortcutsModal";

const MoreModal = ({ showModal, handleCloseModal, modalContent }) => {
  return (
    <Modal
      className="moreModal"
      show={showModal}
      size="lg"
      onHide={handleCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalContent.title}</Modal.Title>
      </Modal.Header>
      {modalContent.title === "Help" && (
        <Modal.Body>
          <HelpAccordion />
        </Modal.Body>
      )}
      {modalContent.title === "Keyboard Shortcuts" && (
        <Modal.Body>
          <ShortcutsModal />
        </Modal.Body>
      )}
      {modalContent.title === "Directions" && (
        <Modal.Body>
          <div className="container mt-4">
            <p>
              The questions in this section address a number of important
              reading and writing skills. Each question includes one or more
              passages, which may include a table or graph. Read each passage
              and question carefully, and then choose the best answer to the
              question based on the passage(s).
              <br /> All questions in this section are multiple-choice with four
              answer choices. Each question has a single best answer.
            </p>
          </div>
        </Modal.Body>
      )}

      <Modal.Footer>
        <Button
          variant="warning rounded-pill border border-dark"
          onClick={handleCloseModal}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreModal;
