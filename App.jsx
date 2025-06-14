import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Quiz from "./components/Quiz";
import CertificatePage from "./components/CertificatePage";
import StudentProfile from "./components/StudentProfile";



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/certificate" element={<CertificatePage />} />
        <Route path="/profile" element={<StudentProfile />} />
        

      </Routes>
    </Router>
  );
};

export default App;
