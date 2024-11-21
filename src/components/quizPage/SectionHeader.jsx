import React, { useState, useEffect } from "react";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

const SectionHeader = ({
  sectionNumber,
  title,
  description,
  isDirectionsVisible,
  onToggleDirections,
  onMarkForReview,
  isMarked,
  timeLimit, // Time limit passed from the parent
}) => {
  // Ensure timeLimit is a valid number and convert it to seconds
  const validTimeLimit = !isNaN(timeLimit) ? parseInt(timeLimit, 10) : 30; // Default to 30 minutes if invalid
  const [timer, setTimer] = useState(validTimeLimit * 60); // Time in seconds
  const [timerRunning, setTimerRunning] = useState(true); // To control the timer state

  // Start the countdown timer
  useEffect(() => {
    if (timerRunning && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000); // Update every second

      // Clean up the interval on component unmount or when timer is stopped
      return () => clearInterval(interval);
    } else if (timer === 0) {
      setTimerRunning(false); // Stop the timer when it reaches zero
      alert("Time is up!"); // Alert when time is up
    }
  }, [timerRunning, timer]);

  // Format time to MM:SS
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="card-header border-bottom">
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h2 className="h4 mb-1">
            Section {sectionNumber}: {title}
          </h2>
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={onToggleDirections}
              className="btn btn-link p-0 text-decoration-none"
            >
              Directions {isDirectionsVisible ? "▼" : "▶"}
            </button>
          </div>
        </div>
        {/* Display the timer */}
        <strong className="text-muted">{formatTime(timer)}</strong>
        <button
          className={`btn btn-sm ${
            isMarked ? "btn-secondary" : "btn-outline-secondary"
          }`}
          onClick={onMarkForReview}
        >
          {isMarked ? (
            <>
              <IoBookmark /> UnMark
            </>
          ) : (
            <>
              <IoBookmarkOutline /> Mark for Review
            </>
          )}
        </button>
      </div>

      {isDirectionsVisible && (
        <div className="mt-3 p-3 bg-light rounded">
          <p className="mb-0">{description}</p>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;
