import SectionHeader from "./SectionHeader";
import Question from "./Question";
import BottomSection from "./BottomSection";
import { useState } from "react";
import Options from "./Options";
import { useParams } from "react-router-dom";
import "./quiz.css";
import resizeImg from "../../assets/images/vector.png";

const quizData = {
  sections: [
    {
      id: 1,
      title: "Reading Comprehension",
      description: "Test your understanding of written passages",
      questions: [
        {
          id: 1,
          text: "Based on the given passage about renewable energy, what is the author's main argument?",
          options: [
            { id: "A", text: "Economic benefits outweigh initial costs" },
            { id: "B", text: "Technology is not yet ready" },
            { id: "C", text: "Environmental impact is minimal" },
            { id: "D", text: "Implementation is straightforward" },
          ],
        },
        {
          id: 2,
          text: "Which evidence best supports the author's conclusion?",
          options: [
            { id: "A", text: "Statistical data" },
            { id: "B", text: "Expert opinions" },
            { id: "C", text: "Historical examples" },
            { id: "D", text: "Case studies" },
          ],
        },
        {
          id: 3,
          text: "What is the tone of the passage?",
          options: [
            { id: "A", text: "Persuasive" },
            { id: "B", text: "Neutral" },
            { id: "C", text: "Optimistic" },
            { id: "D", text: "Pessimistic" },
          ],
        },
        {
          id: 4,
          text: "What is the author's intended audience?",
          options: [
            { id: "A", text: "Policy makers" },
            { id: "B", text: "Environmentalists" },
            { id: "C", text: "General public" },
            { id: "D", text: "Industry professionals" },
          ],
        },
        {
          id: 5,
          text: "What is the primary purpose of the passage?",
          options: [
            { id: "A", text: "To inform" },
            { id: "B", text: "To persuade" },
            { id: "C", text: "To entertain" },
            { id: "D", text: "To criticize" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Mathematical Reasoning",
      description: "Solve problems using logical thinking",
      questions: [
        {
          id: 1,
          text: "If Pattern A increases by 3 and Pattern B doubles each step, what comes next?",
          options: [
            { id: "A", text: "15 and 32" },
            { id: "B", text: "18 and 64" },
            { id: "C", text: "21 and 128" },
            { id: "D", text: "24 and 256" },
          ],
        },
        {
          id: 2,
          text: "Solve for x: 5x + 3 = 23",
          options: [
            { id: "A", text: "4" },
            { id: "B", text: "5" },
            { id: "C", text: "6" },
            { id: "D", text: "7" },
          ],
        },
        {
          id: 3,
          text: "A train travels 60 miles in 90 minutes. What is its average speed in miles per hour?",
          options: [
            { id: "A", text: "30 mph" },
            { id: "B", text: "40 mph" },
            { id: "C", text: "45 mph" },
            { id: "D", text: "50 mph" },
          ],
        },
        {
          id: 4,
          text: "What is the value of the expression: (8 + 2) × (5 − 3)?",
          options: [
            { id: "A", text: "10" },
            { id: "B", text: "16" },
            { id: "C", text: "20" },
            { id: "D", text: "24" },
          ],
        },
        {
          id: 5,
          text: "A rectangle has a length of 10 and a width of 4. What is its area?",
          options: [
            { id: "A", text: "20" },
            { id: "B", text: "30" },
            { id: "C", text: "40" },
            { id: "D", text: "50" },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "English Literature",
      description: "Solve problems using literature thinking",
      questions: [
        {
          id: 1,
          text: "Which of the following pieces of literature was NOT a book in its original format?",
          options: [
            { id: "A", text: "Seven" },
            { id: "B", text: "Hitchhiker’s Guide to the Galaxy" },
            { id: "C", text: "Call Me By Your Name" },
            { id: "D", text: "Lincoln Rhyme" },
          ],
        },
        {
          id: 2,
          text: "Who wrote 'Pride and Prejudice'?",
          options: [
            { id: "A", text: "Charlotte Brontë" },
            { id: "B", text: "Jane Austen" },
            { id: "C", text: "Emily Dickinson" },
            { id: "D", text: "Virginia Woolf" },
          ],
        },
        {
          id: 3,
          text: "What is the theme of George Orwell's '1984'?",
          options: [
            { id: "A", text: "Love and betrayal" },
            { id: "B", text: "Totalitarianism and surveillance" },
            { id: "C", text: "Freedom and rebellion" },
            { id: "D", text: "War and peace" },
          ],
        },
        {
          id: 4,
          text: "What is the title of Shakespeare's play about two star-crossed lovers?",
          options: [
            { id: "A", text: "Hamlet" },
            { id: "B", text: "Macbeth" },
            { id: "C", text: "Romeo and Juliet" },
            { id: "D", text: "Othello" },
          ],
        },
        {
          id: 5,
          text: "What is the setting of 'The Great Gatsby'?",
          options: [
            { id: "A", text: "London" },
            { id: "B", text: "West Egg and East Egg, New York" },
            { id: "C", text: "Paris" },
            { id: "D", text: "San Francisco" },
          ],
        },
      ],
    },
  ],
};

const Quiz = () => {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isDirectionsVisible, setIsDirectionsVisible] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState([]);
  const [disabledOptionsPerQuestion, setDisabledOptionsPerQuestion] = useState(
    {}
  );
  const [isQuizSubmitted, setIsQuizSubmitted] = useState(false);

  const currentDisabledOptions =
    disabledOptionsPerQuestion[currentQuestion] || {};

  const section = quizData.sections.find((sec) => sec.id === parseInt(id));

  if (!section) {
    return <div>Section not found</div>;
  }

  const question = section.questions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < section.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleOptionSelect = (optionId) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [`${id}-${currentQuestion}`]: optionId,
    });
  };

  // Function to toggle mark for review
  const handleMarkForReview = () => {
    const questionId = `${id}-${currentQuestion}`;
    setMarkedQuestions((prev) =>
      prev.includes(questionId)
        ? prev.filter((qid) => qid !== questionId)
        : [...prev, questionId]
    );
  };

  console.log(disabledOptionsPerQuestion);

  const handleCheckboxChange = (optionId) => {
    setDisabledOptionsPerQuestion((prev) => ({
      ...prev,
      [currentQuestion]: {
        ...prev[currentQuestion],
        [optionId]: !prev[currentQuestion]?.[optionId],
      },
    }));
  };

  const handleTimeUp = () => {
    alert("Time is up!");
    setIsQuizSubmitted(true);
    console.log("Auto-submitting quiz as time is up.");
  };

  return (
    <div className=" quiz_page">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <div className="card row  align-items-center">
            <SectionHeader
              sectionNumber={section.id}
              title={section.title}
              description={section.description}
              isDirectionsVisible={isDirectionsVisible}
              onToggleDirections={() =>
                setIsDirectionsVisible(!isDirectionsVisible)
              }
              onTimeUp={handleTimeUp}
              isQuizSubmitted={isQuizSubmitted}
              quizId={id}
            />
            <div className="quiz_banner d-flex justify-content-center align-items-center">
              this is a practice test
            </div>

            <div className="card-body ">
              <div className="mb-4 d-flex col-12 ">
                <div
                  style={{ borderRight: "5px solid #8e8e8e" }}
                  className="d-flex  align-items-start flex-column mb-3 col-6 px-5"
                >
                  <div className="d-flex  justify-content-end relative w-100 mb-2 resizeImage_box">
                    <img src={resizeImg} alt="Resize" />
                  </div>
                  <Question questionText={question.text} />
                </div>
                <div className="col-6">
                  <Options
                    questionNumber={currentQuestion + 1}
                    options={question.options}
                    selectedOption={selectedAnswers[`${id}-${currentQuestion}`]}
                    onOptionSelect={handleOptionSelect}
                    isMarked={markedQuestions.includes(
                      `${id}-${currentQuestion}`
                    )}
                    onMarkForReview={handleMarkForReview}
                    disabledOptions={currentDisabledOptions}
                    onCheckboxChange={handleCheckboxChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <BottomSection
            currentQuestion={currentQuestion + 1}
            totalQuestions={section.questions.length}
            onPrevious={handlePrev}
            onNext={handleNext}
            disablePrev={currentQuestion === 0}
            disableNext={currentQuestion === section.questions.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default Quiz;
