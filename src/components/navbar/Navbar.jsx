// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../butoon/Button';
import './Navbar.css';

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedIn'));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      navigate('/');
    }
  }, [navigate]);

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Button onClick={() => navigate('/home')}>Home</Button>
        <Button onClick={() => navigate('/sat')}>SAT Test</Button>
        {/* Add more nav items as needed */}
      </div>

      <div className="navbar-left">
        {user ? (
          <h2>Welcome, {user.username}</h2>  // Display username if user is logged in
        ) : (
          <h2>Welcome</h2>  // Default text if no user is logged in
        )}
      </div>

      <div className="navbar-right">
        <Button className="logout-btn" onClick={handleLogout}>
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
