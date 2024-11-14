import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import HomePage from "./components/homepage/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Quiz from "./components/quizPage/Quiz";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/test/:id" element={<Quiz />} />
      </Routes>
    </Router>
  );
}

export default App;
