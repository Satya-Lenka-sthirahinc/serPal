import React from 'react';
import './ErrorComponent.css';

const ErrorMessage = ({ message }) => {
  return message ? <p className="error">{message}</p> : null;
};

export default ErrorMessage;
