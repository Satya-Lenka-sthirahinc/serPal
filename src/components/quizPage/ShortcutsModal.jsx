import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

const ShortcutsModal = () => {
  const [activeKey, setActiveKey] = useState([]);
  console.log(activeKey);

  const handleToggle = (key) => {
    setActiveKey(
      activeKey.includes(key)
        ? activeKey.filter((d) => d !== key)
        : [...activeKey, key]
    );
  };
  return (
    <Accordion className="helpAccordion" defaultActiveKey={"0"} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => handleToggle("0")}>
          <span>Zoom and Magnification</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("0") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p className="text-secondary">
              The following keyboard shortcuts have been configured to navigate
              to important features and actions available in the system:
            </p>
            <table className="table table-bordered text-secondary">
              <thead className="table-dark">
                <tr>
                  <th>Action</th>
                  <th>Shortcut</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Open/Close Keyboard Shortcuts</td>
                  <td>F1</td>
                </tr>
                <tr>
                  <td>Navigate Exam Regions</td>
                  <td>Shift + F6</td>
                </tr>
                <tr>
                  <td>Zoom In</td>
                  <td>Control + Plus (+)</td>
                </tr>
                <tr>
                  <td>Zoom Out</td>
                  <td>Control + Minus (-)</td>
                </tr>
                <tr>
                  <td>Zoom Back to 100%</td>
                  <td>Control + 0</td>
                </tr>
                <tr>
                  <td>Back</td>
                  <td>Control + B</td>
                </tr>
                <tr>
                  <td>Next</td>
                  <td>Control + N</td>
                </tr>
                <tr>
                  <td>Open/Close Question Menu</td>
                  <td>Control + Alt + Q</td>
                </tr>
                <tr>
                  <td>Help</td>
                  <td>Control + Shift + D</td>
                </tr>
                <tr>
                  <td>Open/Close Directions</td>
                  <td>Control + Alt + H</td>
                </tr>
                <tr>
                  <td>Open/Close Line Reader</td>
                  <td>Control + Alt + T</td>
                </tr>
                <tr>
                  <td>Hide/Show Timer or Close 5-Minute Message</td>
                  <td>Control + Alt + T</td>
                </tr>
                <tr>
                  <td>Pause Timer (Worktime accommodation only)</td>
                  <td>Control + Alt + P</td>
                </tr>
                <tr>
                  <td>Mark for Review</td>
                  <td>Control + Alt + V</td>
                </tr>
                <tr>
                  <td>Highlights & Notes</td>
                  <td>Control + Alt + H</td>
                </tr>
                <tr>
                  <td>Open/Close Calculator</td>
                  <td>Control + Alt + C</td>
                </tr>
              </tbody>
            </table>
            <p className="text-secondary mt-3">
              Note: For more detailed updates, refer to the guide for your exam.
            </p>

            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead className="table-dark">
                  <tr>
                    <th>Action</th>
                    <th>Shortcut</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bold</td>
                    <td>Control + B</td>
                  </tr>
                  <tr>
                    <td>Italics</td>
                    <td>Control + I</td>
                  </tr>
                  <tr>
                    <td>Underline</td>
                    <td>Control + U</td>
                  </tr>
                  <tr>
                    <td>Superscript</td>
                    <td>Control + Shift + Plus (+)</td>
                  </tr>
                  <tr>
                    <td>Action</td>
                    <td>Control + 0</td>
                  </tr>
                  <tr>
                    <td>Zoom Back to 100%</td>
                    <td>Control + Alt + B</td>
                  </tr>
                  <tr>
                    <td>Back</td>
                    <td>Control + B</td>
                  </tr>
                  <tr>
                    <td>Next</td>
                    <td>Control + N</td>
                  </tr>
                  <tr>
                    <td>Open/Close Question Menu</td>
                    <td>Control + Alt + G</td>
                  </tr>
                  <tr>
                    <td>Help</td>
                    <td>Control + Alt + H</td>
                  </tr>
                  <tr>
                    <td>Open/Close Directions</td>
                    <td>Control + Alt + Shift + D</td>
                  </tr>
                  <tr>
                    <td>Open/Close Line Reader</td>
                    <td>Control + Alt + T</td>
                  </tr>
                  <tr>
                    <td>Hide/Show Timer or Close 5-Minute Message</td>
                    <td>Control + Alt + T</td>
                  </tr>
                  <tr>
                    <td>Pause Timer (w/certain accommodations only)</td>
                    <td>Control + Alt + P</td>
                  </tr>
                  <tr>
                    <td>Mark for Review</td>
                    <td>Control + Alt + V</td>
                  </tr>
                  <tr>
                    <td>Highlights & Notes</td>
                    <td>Control + H</td>
                  </tr>
                  <tr>
                    <td>Open/Close Calculator</td>
                    <td>Control + Alt + C</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted  mt-3">
              Note: For multiselect options, use the space bar to make your
              selection.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default ShortcutsModal;
