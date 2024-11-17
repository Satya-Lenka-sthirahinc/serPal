import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import HomePage from "./components/homepage/HomePage.jsx";
import Quiz from "./components/quizPage/Quiz.jsx";
import Navbar from "./components/navbar/Navbar.jsx"; 
import Test from "./components/pages/Test.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
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
        <Route path="/quiz/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;