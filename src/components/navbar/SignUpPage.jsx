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
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError("User with this email already exists");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    localStorage.setItem("loggedIn", JSON.stringify(newUser));

    navigate("/home");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Sign Up</h2>
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
            <Button type="submit" className="btn btn-primary w-100">
              Sign Up
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
