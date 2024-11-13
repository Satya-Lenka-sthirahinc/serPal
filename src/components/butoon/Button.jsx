import React from 'react';
import './Button.css';

const Button = ({ type = "button", onClick, children, className = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`button ${className}`}>
      {children}
    </button>
  );
};

export default Button;
