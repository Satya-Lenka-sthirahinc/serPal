import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';  

const LandingPage = () => {
  const navigate = useNavigate(); 
  const loggedIn = JSON.parse(localStorage.getItem('loggedIn')); 

  useEffect(() => {
    if (loggedIn) {
      navigate('/home');
    }
  }, [loggedIn, navigate]);

  const handleButtonClick = () => {
    if (loggedIn) {
      navigate('/home'); 
    } else {
      navigate('/login'); 
    }
  };

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="bg-primary text-white p-4">
        <div className="container">
          <h1 className="display-4">Board Exam Portal</h1>
          <p className="lead">Prepare for your upcoming board exams with ease.</p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-8 mx-auto text-center">
            <h2>Welcome to the Board Exam Portal</h2>
            <p className="lead mt-4">
              This platform will help you stay on top of your board exam preparations. Here, you can:
            </p>
            <ul className="list-unstyled mt-4">
              <li>Access study materials</li>
              <li>Track your progress</li>
              <li>Take practice exams</li>
            </ul>
            <p className="mt-4">
              <button
                onClick={handleButtonClick}
                className="btn btn-primary"
              >
                {loggedIn ? 'Go to Home' : 'Start Prepairing'}
              </button>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2024 Board Exam Portal | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default LandingPage;
