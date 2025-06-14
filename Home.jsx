import React from "react";

const Home = () => {
  return (
    <div style={{ textAlign: "center", padding: "40px", background: "#e0f7fa" }}>
      <h1 style={{ color: "#00695c", fontSize: "36px" }}>🎉 Welcome to E-Learning Platform!</h1>
      <marquee behavior="scroll" direction="left" scrollamount="8" style={{ fontSize: "18px", color: "#004d40", marginTop: "20px" }}>
        New courses added every week! Register now and get certified!
      </marquee>
      <p style={{ fontSize: "20px", marginTop: "30px" }}>
        Start learning by exploring the courses. Visit your profile anytime to view your achievements.
      </p>
    </div>
  );
};

export default Home;