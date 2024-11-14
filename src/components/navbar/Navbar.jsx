import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../butoon/Button";
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Navbar = ({ handleLogout }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
    if (loggedInUser) {
      setUser(loggedInUser); 
    }
  }, []);


  const handleSignOut = () => {
    localStorage.removeItem("loggedIn");  
    setUser(null);  
    navigate("/");  
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-nav">
          <Button
            onClick={() => navigate('/home')}
            className="btn btn-link text-white"
          >
            Home
          </Button>
          <Button
            onClick={() => navigate('/sat')}
            className="btn btn-link text-white"
          >
            SAT Test
          </Button>
        </div>

        <div className="navbar-text text-white ms-auto">
      
          {user ? (
            <span>Welcome, {user.username}</span>  
          ) : (
            <span>Welcome</span> 
          )}
        </div>

        <div>
   
          {user ? (
            <Button
              className="btn btn-outline-light ms-2"
              onClick={handleSignOut}
            >
              Sign Out
            </Button>
          ) : (
            <>
    
              <Button
                className="btn btn-outline-light ms-2"
                onClick={() => navigate("/login")}
              >
                Sign In
              </Button>
              <Button
                className="btn btn-outline-light ms-2"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
