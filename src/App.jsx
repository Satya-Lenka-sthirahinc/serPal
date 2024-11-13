import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./components/welcomepage/WelcomePage";
import HomePage from "./components/homepage/HomePage";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
