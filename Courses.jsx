import React, { useState } from "react";
import "../App.css";

const sampleCourses = [
  { id: 1, name: "Introduction to React", duration: "3 weeks" },
  { id: 2, name: "Advanced Python", duration: "4 weeks" },
  { id: 3, name: "Web Development Bootcamp", duration: "6 weeks" },
  { id: 4, name: "Machine Learning Basics", duration: "5 weeks" },
  { id: 5, name: "Data Structures", duration: "4 weeks" },
  { id: 6, name: "Cyber Security 101", duration: "3 weeks" },
  { id: 7, name: "Cloud Computing", duration: "5 weeks" },
  { id: 8, name: "Git & GitHub", duration: "1 week" },
  { id: 9, name: "SQL for Beginners", duration: "2 weeks" },
  { id: 10, name: "Java Programming", duration: "4 weeks" },
  { id: 11, name: "Android Development", duration: "5 weeks" },
];

const Courses = () => {
  const [registered, setRegistered] = useState([]);
  const [showForm, setShowForm] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleRegister = (courseId) => {
    if (!formData.name || !formData.email) {
      alert("⚠️ Please enter your name and email.");
      return;
    }
    if (!registered.includes(courseId)) {
      setRegistered([...registered, courseId]);
      alert(`✅ Registered for course ID ${courseId}`);
      setFormData({ name: "", email: "" });
      setShowForm(null);
    } else {
      alert("⚠️ Already registered!");
    }
  };

  return (
    <div className="full-page-container">
      <h2 className="welcome-title">📚 Explore & Register for Courses</h2>
      <div className="courses-grid">
        {sampleCourses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
            {!registered.includes(course.id) ? (
              <button className="button-primary" onClick={() => setShowForm(course.id)}>
                Register
              </button>
            ) : (
              <span className="registered-label">✔ Registered</span>
            )}

            {showForm === course.id && (
              <div className="form-box">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <button className="button-primary" onClick={() => handleRegister(course.id)}>
                  Confirm
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
