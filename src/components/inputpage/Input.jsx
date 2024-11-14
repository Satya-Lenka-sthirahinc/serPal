import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Input = ({ type, id, value, onChange, placeholder }) => {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {placeholder}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-control"
      />
    </div>
  );
};

export default Input;
