import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import 'bootstrap/dist/css/bootstrap.min.css';
import './Test.css'; // External CSS file for custom styling

const Test = () => {
  const { testId } = useParams();
  const navigate = useNavigate(); // Replacing useHistory with useNavigate
  const [testDetails, setTestDetails] = useState(null);

  useEffect(() => {
    // Simulated test data
    const testData = {
      1: {
        name: 'Practice Test - Mathematics',
        description: 'Start the Math Practice Test',
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
      2: {
        name: 'Practice Test - Science',
        description: 'Start the Science Practice Test',
        timingInfo: 'Practice Tests are timed, but you can pause them. If you switch to another device, you will need to start over. Incomplete practice tests are deleted after 90 days.',
        scoreInfo: 'When you finish the practice test, go to "My Practice" to see your scores and get personalized study tips.',
        assistiveTech: 'You can customize your Assistive Technology (AT) settings as needed for better accessibility.',
        noDeviceLock: 'During practice, there are no device locks. However, on test day, you will be blocked from using other programs or apps.',
        format: '60 multiple-choice questions (1 point each), 4 short-answer questions (5 points each), 2 long-answer questions (15 points each)',
        topics: ['Biology', 'Chemistry', 'Physics'],
        objectives: 'This practice test will evaluate your knowledge in scientific principles, experimental methods, and logical reasoning.',
        rules: [
          'You can pause the test at any time.',
          'Incomplete practice tests will be deleted after 90 days.',
          'Switching devices will require you to restart the test.',
          'You must present a valid student ID to access the test.',
          'No unauthorized materials allowed.',
          'Electronic devices must be turned off during the test.'
        ]
      },
      3: {
        name: 'Practice Test - English',
        description: 'Start the English Practice Test',
        timingInfo: 'Practice Tests are timed, but you can pause them. If you switch to another device, you will need to start over. Incomplete practice tests are deleted after 90 days.',
        scoreInfo: 'When you finish the practice test, go to "My Practice" to see your scores and get personalized study tips.',
        assistiveTech: 'You can customize your Assistive Technology (AT) settings as needed for better accessibility.',
        noDeviceLock: 'During practice, there are no device locks. However, on test day, you will be blocked from using other programs or apps.',
        format: '30 multiple-choice questions (1 point each), 2 essays (20 points each)',
        topics: ['Literature', 'Grammar', 'Composition'],
        objectives: 'This practice test will assess your proficiency in reading comprehension, writing skills, and grammar.',
        rules: [
          'You can pause the test at any time.',
          'Incomplete practice tests will be deleted after 90 days.',
          'Switching devices will require you to restart the test.',
          'You must present a valid student ID to access the test.',
          'No unauthorized materials allowed.',
          'Electronic devices must be turned off during the test.'
        ]
      }
    };

    setTestDetails(testData[testId]);
  }, [testId]);

  const handleBack = () => {
    // Navigate to the previous test (testId - 1), ensure it's >= 1
    const prevTestId = Math.max(parseInt(testId) - 1, 1);
    navigate(`/test/${prevTestId}`);
  };

  const handleNext = () => {
    const nextTestId = Math.min(parseInt(testId) + 1, 3);  // Navigate to the next test ID
    navigate(`/test/${nextTestId}/quiz`);  // Redirect to the quiz page
  };

  return (
    <div className="container mt-5">
      {testDetails ? (
        <div className="card hover-card">
          <div className="card-body">
            <h4 className="card-title">{testDetails.name}</h4>
            <p><strong>Description:</strong> {testDetails.description}</p>
            <p><strong>Test Format:</strong> {testDetails.format}</p>
            <p><strong>Topics Covered:</strong> {testDetails.topics.join(', ')}</p>
            <p><strong>Test Objectives:</strong> {testDetails.objectives}</p>

            <div className="hover-content">
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
            </div>

            {/* Back and Next Buttons */}
            <div className="d-flex justify-content-end mt-4">
              <button
                className="btn btn-secondary"
                onClick={handleBack}
                disabled={parseInt(testId) === 1} // Disable Back button if on the first test
              >
                Back
              </button>
              <button
                className="btn btn-primary ml-2"
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
