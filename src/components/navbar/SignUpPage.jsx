import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../inputpage/Input"; 
import Button from "../butoon/Button";
import ErrorMessage from "../errormessage/ErrorMessage"; 

const SignUpPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountType, setAccountType] = useState("student"); // Default account type is 'student'
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password || !accountType) {
      setError("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError("User with this email already exists");
      return;
    }

    const newUser = { username, email, password, accountType };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedIn", JSON.stringify(newUser));

    navigate("/home");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Create Account</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <Input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <Input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  type="radio"
                  id="student"
                  name="accountType"
                  value="student"
                  checked={accountType === "student"}
                  onChange={() => setAccountType("student")}
                  className="form-check-input"
                />
                <label htmlFor="student" className="form-check-label">Student</label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="educator"
                  name="accountType"
                  value="educator"
                  checked={accountType === "educator"}
                  onChange={() => setAccountType("educator")}
                  className="form-check-input"
                />
                <label htmlFor="educator" className="form-check-label">Educator</label>
              </div>
            </div>

            <Button type="submit" className="btn btn-primary w-100">
              Create Account
            </Button>
          </form>

          {error && <ErrorMessage message={error} />}

          <p className="text-center mt-3">
            Already have an account?{" "}
            <Button onClick={() => navigate("/login")} variant="link" className="btn-link">
              Sign In
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
