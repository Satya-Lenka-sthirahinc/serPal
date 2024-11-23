import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { BsList } from "react-icons/bs";
import { FaCalculator, FaHighlighter } from "react-icons/fa";

const HelpAccordion = () => {
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
    <Accordion className="helpAccordion" alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header onClick={() => handleToggle("0")}>
          <span>Zoom and Magnification</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("0") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <h4 className="fw-bold">Chromebook Zoom and Magnification</h4>
            <p>
              To zoom in/out, press <kbd>Control</kbd> + <kbd>+/−</kbd>. To
              reset zoom, press <kbd>Control</kbd> + <kbd>0</kbd>.
            </p>
            <p>For touchscreen and touchpad, pinch in/out.</p>
            <p>
              To use the magnification feature, select the options from the
              floating accessibility menu:
            </p>
            <ul>
              <li>
                Full-screen magnifier (<kbd>Search</kbd> + <kbd>Ctrl</kbd> +{" "}
                <kbd>M</kbd>) - whole-screen magnification
                <ul>
                  <li>
                    Adjust the full-screen magnifier from the floating
                    Accessibility menu <br />
                    <strong>
                      Settings &gt; Display and magnification &gt; Full screen
                      magnifier
                    </strong>{" "}
                    &gt; select any of these options:
                    <ul>
                      <li>Move screen continuously as mouse moves</li>
                      <li>Move screen keeping mouse at center of screen</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header onClick={() => handleToggle("1")}>
          <span>In-App Calculator</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("1") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <h5 className="fw-bold">
              <FaCalculator className="me-2" />
              Calculator
            </h5>
            <p>
              On math questions, you will have access to a graphing calculator
              built into the app. You can also use your own approved calculator.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header onClick={() => handleToggle("2")}>
          <span>Testing Timers</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("2") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              During testing, a timer will let you know how much time remains
              for each module or part of the test. At the end of section 1,
              you'll have a short break. During the break, we'll show you a
              timer counting down to the beginning of section 2. When time runs
              out on section 2, the test will end, and your answers will be
              automatically submitted.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header onClick={() => handleToggle("3")}>
          <span>Highlights & Notes</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("3") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <h5 className="fw-bold">
              <FaHighlighter className="me-2" />
              Highlights & Notes
            </h5>
            <p>
              On all non-math questions, you can highlight text and leave
              yourself notes.
            </p>
            <ul>
              <li>
                Click on <strong>Highlights & Notes</strong> from the top right
                of the screen.
              </li>
              <li>Select some text to highlight.</li>
              <li>
                You can change the highlight color, add an underline, make a
                note, or delete the highlight.
              </li>
              <li>You can click on a highlight any time to edit it.</li>
              <li>When you're done, simply click outside the highlight.</li>
            </ul>
            <p>
              You cannot annotate pictures, buttons, answer content, or text
              that you enter. If the content you annotate is shared across
              multiple questions, you'll see your annotations on all of those
              questions. Your annotations will not be graded.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header onClick={() => handleToggle("4")}>
          <span>Line reader</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("4") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <h5 className="fw-bold">
              <BsList className="me-2" />
              Line Reader
            </h5>
            <p>
              This tool helps you focus as you're reading test content. Click
              the six dots at the top of the line reader to move it up and down
              using your keyboard arrows. If you're on a touch screen device,
              you can also move it with your finger. To see more than one line
              of text at a time, use the arrow button at the bottom of the line
              reader to change the number of visible lines.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header onClick={() => handleToggle("5")}>
          <span>Option Eliminator</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("5") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              On any multiple-choice question, you can use{" "}
              <strong>Option Eliminator</strong> mode to cross out any answer
              options you think are wrong. Above the answer, click the{" "}
              <strong>ABC</strong> button, then you'll see a button next to each
              answer option, allowing you to cross it out. You can always undo
              this action.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header onClick={() => handleToggle("6")}>
          <span>Mark For Review</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("6") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              Use the <strong>Mark for Review</strong> tool to flag any question
              you want to come back to later.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="12">
        <Accordion.Header onClick={() => handleToggle("12")}>
          <span>Question Menu</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("12") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              At the bottom of each testing screen, you'll find a menu that
              allows you to navigate to any question in the section. You'll see
              which questions you've answered, which you haven't, and any that
              you've marked for review.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header onClick={() => handleToggle("7")}>
          <span>No Panelty For Guessing</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("7") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              Points are never deducted for wrong answers. So, it's always
              better to guess than to leave an answer blank.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header onClick={() => handleToggle("8")}>
          <span>Restarting the App</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("8") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              If the exam app crashes during your exam, just relaunch it and hit
              <strong>Resume</strong> Testing to get back to the question you
              were on. The testing timer will be paused until you resume
              testing.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header onClick={() => handleToggle("9")}>
          <span>Submitting Your Answers</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("9") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              During testing, the app will save all your work. When the exam is
              over, your answers will be submitted automatically. If you're
              still working when time expires, your responses will be
              automatically saved and submitted. If your device is offline or
              your submission fails for any reason, you'll have time to
              reconnect and submit your work.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="10">
        <Accordion.Header onClick={() => handleToggle("10")}>
          <span>Screen Readers</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("10") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              During testing, use the typical/native key commands that you
              normally use to navigate a webpage with your screen reader. Most
              exam pages are structured with the following regions/landmarks:
            </p>
            <ul>
              <li>For touchscreen and touchpad, pinch in/out.</li>
            </ul>
            <p>
              To use the magnification feature, select the options from the
              floating accessibility menu:
            </p>
            <ul>
              <li>Exam Player Controls</li>
              <ul>
                <li>Test Timer</li>
                <li>Test Tools</li>
              </ul>
              <li>Exam Stimulus/Passage</li>
              <ul>
                <li>Footnotes</li>
                <li>Long Description</li>
              </ul>
              <li>Exam Question</li>
              <ul>
                <li>Question</li>
                <li>Answer Options</li>
                <li>Long Description</li>
              </ul>
              <li>Exam Navigation</li>
            </ul>
            <p>
              In general, the following test components are structured with a
              heading:
            </p>
            <ul>
              <li>Test Name</li>
              <li>Passage Title/Source Documents, etc.</li>
            </ul>
            <h5>Configuration</h5>
            <p>
              Configure the settings for your assistive technology before you
              open the exam app preview and before check-in on exam day. These
              settings may include verbosity, punctuation, text processing, and
              other settings as needed. On exam day, once you start check-in you
              won't be able to adjust your settings as the digital testing
              application is locked down.
            </p>
            <p>
              Configuration steps should be taken each time you take a digital
              practice or use the app demo, and on exam day before you check in
              for each exam.
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="11">
        <Accordion.Header onClick={() => handleToggle("11")}>
          <span>Screen Magnification</span>
          <span className="ms-auto accPlusIcon">
            {activeKey.includes("11") ? "-" : "+"}
          </span>
        </Accordion.Header>
        <Accordion.Body>
          <div className="container mt-4">
            <p>
              Screen magnification technology enlarges the content displayed on
              the computer screen in order to assist students with visual
              impairments. Although the exam app supports some non-embedded
              screen magnifier tools from third parties, all users can zoom
              using their device's native controls (Control +/- on a PC; Command
              +/- on a Mac; pinch and zoom on an iPad).
            </p>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default HelpAccordion;
