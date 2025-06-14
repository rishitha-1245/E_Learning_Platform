import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#00796b", padding: "10px" }}>
      <Link to="/" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/courses" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Courses
      </Link>
      <Link to="/profile" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>
        Profile
      </Link>
      <Link to="/quiz" style={{ color: "white", margin: "0 15px", textDecoration: "none" }}>Quiz</Link>
    </nav>
  );
};

export default Navbar;