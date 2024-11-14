import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  

const ErrorMessage = ({ message }) => {
  return message ? <p className="text-danger">{message}</p> : null;
};

export default ErrorMessage;
