import React from 'react';

const StudentProfile = () => {
  const student = {
    name: "M. Sai Rishitha",
    email: "rishitha@example.com",
    registeredCourses: ["React Basics", "JavaScript Mastery", "Python Intro"],
    certificates: ["React Quiz Certificate"]
  };

  return (
    <div style={{ background: "#e8f5e9", minHeight: "100vh", padding: "40px" }}>
      <div style={{ maxWidth: "800px", margin: "auto", background: "#ffffff", borderRadius: "12px", padding: "30px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ textAlign: "center", color: "#2e7d32", fontSize: "28px" }}>🎓 Student Profile</h2>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}><strong>Name:</strong> {student.name}</p>
        <p style={{ fontSize: "18px", marginBottom: "10px" }}><strong>Email:</strong> {student.email}</p>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#388e3c" }}>📚 Courses Registered</h3>
          <ul>
            {student.registeredCourses.map((course, i) => (
              <li key={i} style={{ fontSize: "16px", marginBottom: "5px" }}>{course}</li>
            ))}
          </ul>
        </div>

        <div style={{ marginTop: "20px" }}>
          <h3 style={{ color: "#388e3c" }}>🏅 Certificates Earned</h3>
          <ul>
            {student.certificates.map((cert, i) => (
              <li key={i} style={{ fontSize: "16px", marginBottom: "5px" }}>{cert}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;