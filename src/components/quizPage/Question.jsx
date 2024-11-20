const Question = ({ questionText }) => {
  return (
    <div className="d-flex gap-3 align-items-start question_main ">
      <div>
        <p className="fs-5 mb-0">{questionText}</p>
      </div>
    </div>
  );
};

export default Question;
