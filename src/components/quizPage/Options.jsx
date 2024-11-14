import Button from "../butoon/Button";
import React from "react";

const Options = ({ options, selectedOption, onOptionSelect }) => {
  return (
    <div className="ms-4 mt-3 col-5">
      {options.map((option) => (
        <div
          key={option.id}
          className={`p-3 border rounded mb-2 cursor-pointer ${
            selectedOption === option.id ? "bg-light border-primary" : ""
          }`}
          onClick={() => onOptionSelect(option.id)}
          style={{ cursor: "pointer" }}
        >
          <span className="fw-medium me-2">{option.id})</span>
          {option.text}
        </div>
      ))}
    </div>
  );
};

export default Options;
