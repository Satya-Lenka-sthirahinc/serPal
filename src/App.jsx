import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import HomePage from "./components/homepage/HomePage";
import Test from "./components/pages/Test";  
import LoginPage from "./components/navbar/LoginPage";  
import SignUpPage from "./components/navbar/SignUpPage";  
import Navbar from "./components/navbar/Navbar";  
import "./App.css";

function App() {
  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    window.location.href = '/';  
  };

  return (
    <Router>
      <Navbar handleLogout={handleLogout} /> 

      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/test/:testId" element={<Test />} />
        <Route path="/login" element={<LoginPage />} /> 
        <Route path="/signup" element={<SignUpPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
