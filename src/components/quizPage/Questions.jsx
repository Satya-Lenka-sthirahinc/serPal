const Question = ({ questionNumber, questionText }) => {
    return (
      <div className="d-flex gap-3 align-items-start ">
        <span
          className="bg-dark text-white rounded-circle d-flex align-items-center justify-content-center"
          style={{ width: "32px", height: "32px", minWidth: "32px" }}
        >
          {questionNumber}
        </span>
        <div>
          <p className="fs-5 mb-0">{questionText}</p>
        </div>
      </div>
    );
  };
  
  export default Question;