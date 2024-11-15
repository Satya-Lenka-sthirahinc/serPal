import { useEffect, useState } from "react";

const Timer = ({ quizId, onTimeUp, isQuizSubmitted }) => {
  const [timeLeft, setTimeLeft] = useState(600); // Static initial time: 10 minutes (600 seconds)

  // Fetch remaining time (Static for now, server call commented)
  useEffect(() => {
    const fetchTimeFromServer = async () => {
      try {
        // Uncomment when server is available
        /*
        const response = await fetch(`/api/quiz/${quizId}/remaining-time`);
        const data = await response.json();
        setTimeLeft(data.remainingTime);
        */
        console.log("Fetching remaining time (Static): 600 seconds.");
      } catch (error) {
        console.error("Error fetching remaining time:", error);
      }
    };

    fetchTimeFromServer();
  }, [quizId]);

  // Start countdown when timeLeft is set
  useEffect(() => {
    if (timeLeft === null || isQuizSubmitted) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          onTimeUp(); // Notify parent that time is up
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeUp, isQuizSubmitted]);

  // Save remaining time (Static for now, server call commented)
  useEffect(() => {
    if (isQuizSubmitted) {
      const saveTimeToServer = async () => {
        try {
          // Uncomment when server is available
          /*
          await fetch(`/api/quiz/${quizId}/save-time`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ remainingTime: timeLeft }),
          });
          */
          console.log(`Saving remaining time : ${timeLeft} seconds.`);
        } catch (error) {
          console.error("Error saving remaining time:", error);
        }
      };

      saveTimeToServer();
    }
  }, [isQuizSubmitted, quizId, timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="timer">
      {timeLeft !== null ? (
        <h4>{formatTime(timeLeft)}</h4>
      ) : (
        <h4>Loading timer...</h4>
      )}
    </div>
  );
};

export default Timer;
