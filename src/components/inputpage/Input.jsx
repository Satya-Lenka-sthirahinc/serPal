import React from 'react';
import './InputStyle.css'

const Input = ({ type, id, value, onChange, placeholder }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{placeholder}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
