import React, { useState, useEffect, useRef } from "react";
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
  const validTimeLimit = !isNaN(timeLimit) ? parseInt(timeLimit, 10) : 30; // Default to 30 minutes if invalid
  const [timer, setTimer] = useState(validTimeLimit * 60); // Time in seconds
  const [timerRunning, setTimerRunning] = useState(true); // To control the timer state
  const [isCalculatorVisible, setIsCalculatorVisible] = useState(false); // State to toggle calculator
  const calculatorContainerRef = useRef(null); // Reference to the container where the calculator will be rendered
  const [desmosLoaded, setDesmosLoaded] = useState(false); // State to check if Desmos is loaded


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

  // Toggle Desmos calculator visibility
  const toggleCalculator = () => {
    setIsCalculatorVisible((prevState) => !prevState);
  };

  // Load Desmos script dynamically when calculator is visible
  useEffect(() => {
    if (isCalculatorVisible && !desmosLoaded) {
      const script = document.createElement("script");
      script.src = "https://www.desmos.com/api/v1.10/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"; // Updated version
      script.async = true;
      script.onload = () => {
        setDesmosLoaded(true); // Set Desmos loaded after script is loaded
        console.log("Desmos script loaded successfully.");
      };
      script.onerror = (e) => {
        console.error("Failed to load Desmos script.", e);
      };
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script); // Cleanup when component unmounts or calculator is hidden
      };
    }
  }, [isCalculatorVisible, desmosLoaded]);

  // Initialize Desmos calculator after it is loaded and visible
  useEffect(() => {
    if (desmosLoaded && isCalculatorVisible && calculatorContainerRef.current) {
      const desmos = window.Desmos;

      // Check if Desmos is properly loaded
      if (desmos) {
        console.log("Initializing Desmos calculator...");
        const calculator = desmos.GraphingCalculator(calculatorContainerRef.current);

        // Example: Setting up some basic expressions in the calculator
        calculator.setExpression({ id: "graph1", latex: "y = x^2" });

        // Cleanup the calculator when it is no longer needed
        return () => {
          calculator.destroy();
          console.log("Desmos calculator destroyed.");
        };
      } else {
        console.error("Desmos library is not available.");
      }
    }
  }, [desmosLoaded, isCalculatorVisible]);

  return (
    <div className="d-flex flex-column">
      <div className="card-header border-bottom d-flex justify-content-between align-items-center">
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
        {/* Timer Display */}
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
        {/* Calculator Button */}
        <button
          className="btn btn-sm btn-outline-primary ms-3"
          onClick={toggleCalculator}
        >
          {isCalculatorVisible ? "Hide Calculator" : "Show Calculator"}
        </button>
      </div>

      {isDirectionsVisible && (
        <div className="mt-3 p-3 bg-light rounded">
          <p className="mb-0">{description}</p>
        </div>
      )}

      {/* Desmos Calculator */}
      {isCalculatorVisible && (
        <div
          ref={calculatorContainerRef}
          style={{
            width: "500px", // Ensure it's wide enough
            height: "400px", // Ensure it's tall enough
            marginTop: "20px",
            position: "fixed",  // This ensures it's fixed to the left
            top: "20px",        // Position it near the top of the page
            left: "20px",       // Position it to the left side
            zIndex: 9999,       // Ensure it's above other content
            border: "1px solid #ccc", // Add some border for visibility
            backgroundColor: "#fff", // Background color to make it visible
          }}
        ></div>
      )}
    </div>
  );
};

export default SectionHeader;

