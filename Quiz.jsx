import React, { useState, useEffect } from 'react';
import { quizQuestions } from '../utils/questions';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!submitted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, submitted]);

  const handleAnswer = (option) => {
    if (option === quizQuestions[current].answer) {
      setScore(score + 1);
    }
    const next = current + 1;
    if (next < quizQuestions.length) {
      setCurrent(next);
    } else {
      setSubmitted(true);
    }
  };

  const formatTime = (s) => `${Math.floor(s / 60)}:${("0" + s % 60).slice(-2)}`;

  const handleDownloadCertificate = () => {
    navigate('/certificate', { state: { score } });
  };

  return (
    <div style={{ padding: "30px", background: "#f3e5f5", color: "#4a148c" }}>
      <h2 style={{ textAlign: "center" }}>📝 React Quiz</h2>
      {!submitted ? (
        <div style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
          <h3>{quizQuestions[current].question}</h3>
          {quizQuestions[current].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(opt)} style={{ margin: "10px", padding: "10px 15px", backgroundColor: "#ab47bc", color: "white", border: "none", borderRadius: "5px" }}>{opt}</button>
          ))}
          <p>Time Remaining: <strong>{formatTime(timeLeft)}</strong></p>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h3>✅ Quiz Completed!</h3>
          <p>Your Score: {score} / {quizQuestions.length}</p>
          <button onClick={handleDownloadCertificate} style={{ padding: "10px 20px", backgroundColor: "#6a1b9a", color: "white", border: "none", borderRadius: "5px" }}>Download Certificate</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
