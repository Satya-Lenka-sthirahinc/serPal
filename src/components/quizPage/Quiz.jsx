import SectionHeader from "./SectionHeader";
import Question from "./Question";
import BottomSection from "./BottomSection";
import { useState } from "react";
import Options from "./Options";
import { useParams } from "react-router-dom";

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
      ],
    },
    {
      id: 3,
      title: "English ",
      description: "Solve problems using literature thinking",
      questions: [
        {
          id: 1,
          text: "Which of the following pieces of literature was NOT a book in its original format; ‘Gone with the Wind’, ‘Hitchhiker’s Guide to the Galaxy’, ‘Oh, the Places You’ll Go!’ or ‘Where the Crawdads Sing’? ",
          options: [
            { id: "A", text: "Seven" },
            { id: "B", text: "Hitchhiker’s Guide to the Galaxy" },
            { id: "C", text: "Call Me By Your Name" },
            { id: "D", text: "Lincoln Rhyme" },
          ],
        },
        {
          id: 2,
          text: "Which of the following pieces of literature was NOT a book in its original format; ‘Gone with the Wind’, ",
          options: [
            { id: "A", text: "Seven" },
            { id: "B", text: "Hitchhiker’s Guide to the Galaxy" },
            { id: "C", text: "Call Me By Your Name" },
            { id: "D", text: "Lincoln Rhyme" },
          ],
        },
      ],
    },
  ],
};

const Quiz = () => {
  const { id } = useParams(); // Fetch the id from URL parameters
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isDirectionsVisible, setIsDirectionsVisible] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [markedQuestions, setMarkedQuestions] = useState([]); // State for marked questions

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
  console.log(selectedAnswers);

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

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-12 ">
          <div className="card">
            <SectionHeader
              sectionNumber={section.id}
              title={section.title}
              description={section.description}
              isDirectionsVisible={isDirectionsVisible}
              onToggleDirections={() =>
                setIsDirectionsVisible(!isDirectionsVisible)
              }
              isMarked={markedQuestions.includes(`${id}-${currentQuestion}`)} // Pass marked status
              onMarkForReview={handleMarkForReview} // Pass handler
            />

            <div className="card-body ">
              <div className="mb-4 d-flex col-12">
                <div className="d-flex justify-content-between align-items-start mb-3 col-6">
                  <Question
                    questionNumber={currentQuestion + 1}
                    questionText={question.text}
                  />
                </div>
                <div style={{ borderLeft: "1.5px solid grey" }}></div>
                <Options
                  options={question.options}
                  selectedOption={selectedAnswers[`${id}-${currentQuestion}`]}
                  onOptionSelect={handleOptionSelect}
                />
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
