// src/pages/HomePage.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../butoon/Button";
import Navbar from "../navbar/Navbar";
import "./HomePage.css"; // Import the CSS for HomePage

// Sample Test Data (could be fetched from a JSON file)
const testData = [
  { id: 1, name: "Mathematics", description: "Board Exam Mathematics Test" },
  { id: 2, name: "Science", description: "Board Exam Science Test" },
  { id: 3, name: "English", description: "Board Exam English Test" },
];

const HomePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedIn"));
    if (loggedInUser) {
      setUser(loggedInUser);
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="home-container">
      {user ? (
        <>
          {/* Navbar with user info and logout button */}
          <Navbar user={user.username} handleLogout={handleLogout} />

          <div className="test-list-container">
            <h3>Board Exam Test List</h3>
            <div className="test-list">
              {testData.map((test) => (
                <div key={test.id} className="test-item">
                  <h4>{test.name}</h4>
                  <p>{test.description}</p>
                  <Button onClick={() => navigate(`/test/${test.id}`)}>
                    Start Test
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
