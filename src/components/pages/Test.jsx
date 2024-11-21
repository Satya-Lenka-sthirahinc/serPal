import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // useNavigate instead of useHistory
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css'; // Custom CSS for styling

const Test = () => {
  const { testId } = useParams(); // Get testId from URL
  const navigate = useNavigate(); // Use useNavigate for navigation
  const [testDetails, setTestDetails] = useState(null);

  // Simulated test data (example of 3 test items)
  const testData = {
    1: {
      name: 'Practice Test - Mathematics',
      description: 'Start the Math Practice Test',
      timeLimit: 60, // Time limit in minutes
      timingInfo: 'Practice Tests are timed, but you can pause them. If you switch to another device, you will need to start over. Incomplete practice tests are deleted after 90 days.',
      scoreInfo: 'When you finish the practice test, go to "My Practice" to see your scores and get personalized study tips.',
      assistiveTech: 'You can customize your Assistive Technology (AT) settings as needed for better accessibility.',
      noDeviceLock: 'During practice, there are no device locks. However, on test day, you will be blocked from using other programs or apps.',
      format: '50 multiple-choice questions (2 points each), 3 short-answer questions (10 points each), 1 essay question (20 points)',
      topics: ['Algebra', 'Calculus', 'Geometry'],
      objectives: 'This practice test will assess your understanding of core mathematical concepts and problem-solving skills.',
      rules: [
        'You can pause the test at any time.',
        'Incomplete practice tests will be deleted after 90 days.',
        'Switching devices will require you to restart the test.',
        'You must present a valid student ID to access the test.',
        'No unauthorized materials allowed.',
        'Electronic devices must be turned off during the test.'
      ]
    },
    // ... Define other tests (Test 2, Test 3)
  };

  useEffect(() => {
    const test = testData[testId];
    if (test) {
      setTestDetails(test);
    } else {
      setTestDetails(null);
    }
  }, [testId]);

  const handleBack = () => {
    const prevTestId = Math.max(parseInt(testId) - 1, 1);
    navigate(`/test/${prevTestId}`);
  };

  const handleNext = () => {
    const nextTestId = Math.min(parseInt(testId) + 1, 3);
    navigate(`/quiz/1`);
  };

  return (
    <div className="container mt-5">
      {testDetails ? (
        <div className="card test-card shadow-lg">
          <div className="card-body">
            <h4 className="card-title">{testDetails.name}</h4>
            <p><strong>Description:</strong> {testDetails.description}</p>
            <p><strong>Test Format:</strong> {testDetails.format}</p>
            <p><strong>Topics Covered:</strong> {testDetails.topics.join(', ')}</p>
            <p><strong>Test Objectives:</strong> {testDetails.objectives}</p>

            <div className="mt-4">
              <h5>Timing Information</h5>
              <p>{testDetails.timingInfo}</p>
            </div>

            <div className="mt-4">
              <h5>Score Information</h5>
              <p>{testDetails.scoreInfo}</p>
            </div>

            <div className="mt-4">
              <h5>Assistive Technology (AT)</h5>
              <p>{testDetails.assistiveTech}</p>
            </div>

            <div className="mt-4">
              <h5>No Device Lock</h5>
              <p>{testDetails.noDeviceLock}</p>
            </div>

            <div className="mt-4">
              <h5>Test Rules</h5>
              <ul>
                {testDetails.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>

            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-secondary"
                onClick={handleBack}
                disabled={parseInt(testId) === 1} // Disable Back button if on the first test
              >
                Back
              </button>
              <button
                className="btn btn-primary"
                onClick={handleNext}
                disabled={parseInt(testId) === 3} // Disable Next button if on the last test
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading test...</p>
      )}
    </div>
  );
};

export default Test;
