import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import classNames from 'classnames'; 

const Button = ({ type = "button", onClick, children, className = '', variant = 'primary', disabled = false }) => {
  
  const buttonClass = classNames(
    'btn', 
    `btn-${variant}`, 
    className, 
    { 'disabled': disabled } 
  );

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
