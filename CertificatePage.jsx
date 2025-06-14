import React from 'react';
import { useLocation } from 'react-router-dom';
import jsPDF from 'jspdf';
/*import 'jspdf-autotable';*/

const CertificatePage = () => {
  const location = useLocation();
  const score = location.state?.score || 0;

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Certificate of Completion", 20, 30);
    doc.setFontSize(16);
    doc.text("This certifies that the student has successfully completed the React Quiz.", 20, 50);
    doc.text(`Score: ${score} / 10`, 20, 60);
    doc.text(`Date: ${new Date().toLocaleDateString()}`, 20, 70);
    doc.save("ReactQuizCertificate.pdf");
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>🎓 Congratulations!</h2>
      <p>You’ve completed the quiz.</p>
      <button onClick={downloadPDF} style={{ padding: "12px 25px", backgroundColor: "#00897b", color: "white", border: "none", borderRadius: "6px" }}>
        Download Certificate as PDF
      </button>
    </div>
  );
};

export default CertificatePage;
