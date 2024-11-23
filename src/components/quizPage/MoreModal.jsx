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

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MoreModal;
