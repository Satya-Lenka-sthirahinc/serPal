import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../butoon/Button";
import Input from "../inputpage/Input"; 
import ErrorMessage from "../errormessage/ErrorMessage"; 
const LoginPage = () => {
  const navigate = useNavigate();
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle sign-in submission
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }


    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      localStorage.setItem("loggedIn", JSON.stringify(user));
      navigate("/home");
    } else {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="text-center mb-4">Sign In</h2>
          <form onSubmit={handleLogin}>
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
              Sign In
            </Button>
          </form>
          <ErrorMessage message={error} />
          <p className="text-center mt-3">
            Don't have an account?{" "}
            <Button onClick={() => navigate("/signup")} variant="link" className="btn-link">
              Sign Up
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
