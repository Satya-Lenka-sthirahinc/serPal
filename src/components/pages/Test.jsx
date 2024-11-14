import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


const Test = () => {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);

  useEffect(() => {
    // Fetch test data based on the testId
    const fetchTestData = () => {
      // Simulated test data
      const testData = {
        1: {
          name: 'Mathematics',
          description: 'Start the Math Test',
          duration: '90 minutes',
          format: '50 multiple-choice questions (2 points each), 3 short-answer questions (10 points each), 1 essay question (20 points)',
          topics: ['Algebra', 'Calculus', 'Geometry'],
          objectives: 'This test will assess your understanding of core mathematical concepts and problem-solving skills.',
          rules: [
            'Time Limit: 90 minutes.',
            'You must present a valid student ID.',
            'No unauthorized materials allowed.',
            'Electronic devices must be turned off.',
            'Late submissions will not be accepted.',
            'Cheating will result in disqualification.'
          ]
        },
        2: {
          name: 'Science',
          description: 'Start the Science Test',
          duration: '120 minutes',
          format: '60 multiple-choice questions (1 point each), 4 short-answer questions (5 points each), 2 long-answer questions (15 points each)',
          topics: ['Biology', 'Chemistry', 'Physics'],
          objectives: 'This test will evaluate your knowledge in scientific principles, experimental methods, and logical reasoning.',
          rules: [
            'Time Limit: 120 minutes.',
            'You must present a valid student ID.',
            'No unauthorized materials allowed.',
            'Electronic devices must be turned off.',
            'Late submissions will not be accepted.',
            'Cheating will result in disqualification.',
            'All questions must be answered in English.'
          ]
        },
        3: {
          name: 'English',
          description: 'Start the English Test',
          duration: '90 minutes',
          format: '30 multiple-choice questions (1 point each), 2 essays (20 points each)',
          topics: ['Literature', 'Grammar', 'Composition'],
          objectives: 'This test will assess your proficiency in reading comprehension, writing skills, and grammar.',
          rules: [
            'Time Limit: 90 minutes.',
            'You must present a valid student ID.',
            'No unauthorized materials allowed.',
            'Electronic devices must be turned off.',
            'Late submissions will not be accepted.',
            'Cheating will result in disqualification.',
            'Essays should be written in clear, structured English.'
          ]
        }
      };
      

      setTestDetails(testData[testId]);
    };

    fetchTestData();
  }, [testId]);

  return (
    <div className="container mt-5">
      {testDetails ? (
        <>
          <h2 className="text-center mb-4">{testDetails.name}</h2>
          
          <div className="card mb-4">
            <div className="card-body">
              <h4>Test Overview</h4>
              <p><strong>Test Name:</strong> {testDetails.name}</p>
              <p><strong>Test Duration:</strong> {testDetails.duration}</p>
              <p><strong>Format:</strong> {testDetails.format}</p>
              <p><strong>Topics Covered:</strong> {testDetails.topics.join(', ')}</p>
              <p><strong>Test Objectives:</strong> {testDetails.objectives}</p>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h4>Test Rules</h4>
              <ul>
                {testDetails.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      ) : (
        <p>Loading test...</p>
      )}
    </div>
  );
};

export default Test;
