import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../butoon/Button"; 
import "bootstrap/dist/css/bootstrap.min.css";  

// Sample Test Data
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
    <div className="container py-4">
      {user ? (
        <>
          <div className="mt-4">
            <h3 className="mb-4">Board Exam Test List</h3>
            <div className="row">
              {testData.map((test) => (
                <div key={test.id} className="col-md-4 mb-3">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{test.name}</h5>
                      <p className="card-text">{test.description}</p>
                      <Button onClick={() => navigate(`/test/${test.id}`)} className="btn btn-primary w-100">
                        Start Test
                      </Button>
                    </div>
                  </div>
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
