import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
  const { testId } = useParams();
  const [testDetails, setTestDetails] = useState(null);

  useEffect(() => {
    // Fetch test data based on the testId
    const fetchTestData = () => {
      // In a real scenario, you could fetch the test details from an API or JSON file
      const testData = {
        1: { name: 'Mathematics', description: 'Start the Math Test' },
        2: { name: 'Science', description: 'Start the Science Test' },
        3: { name: 'English', description: 'Start the English Test' },
      };

      setTestDetails(testData[testId]);
    };

    fetchTestData();
  }, [testId]);

  return (
    <div>
      {testDetails ? (
        <>
          <h2>{testDetails.name}</h2>
          <p>{testDetails.description}</p>
          {/* Add test questions here */}
        </>
      ) : (
        <p>Loading test...</p>
      )}
    </div>
  );
};

export default Test;
