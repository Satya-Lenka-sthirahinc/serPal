import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../Form";
import Button from "../butoon/Button";
import "./WelcomePage.css"; // Import the CSS for WelcomePage

const WelcomePage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // Check if user exists in localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      localStorage.setItem("loggedIn", JSON.stringify(user));
      navigate("/home");
    } else {
      setError("Invalid credentials");
    }
  };

  // Handle register form submission
  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.find((user) => user.email === email);

    if (userExists) {
      setError("User already exists");
      return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    setIsLogin(true);
    setError("");
  };

  return (
    <div className="welcome-container">
      <h2>{isLogin ? "Login" : "Register"}</h2>
      <Form
        isLogin={isLogin}
        onSubmit={isLogin ? handleLogin : handleRegister}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        username={username}
        setUsername={setUsername}
        error={error}
      />
      <div className="toggle-btn">
        {isLogin ? (
          <p>
            Don't have an account?{" "}
            <Button onClick={() => setIsLogin(false)}>Register</Button>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Button onClick={() => setIsLogin(true)}>Login</Button>
          </p>
        )}
      </div>
    </div>
  );
};

export default WelcomePage;
