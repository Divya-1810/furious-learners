"use client";
import React, { useEffect } from "react";
import html2pdf from "html2pdf.js";

const Certificate = ({ studentName, courseName }) => {
<<<<<<< HEAD
  useEffect(() => {
    document.getElementById("studentName").innerText = studentName;
    document.getElementById("courseName").innerText = courseName;
  }, [studentName, courseName]);

  const downloadPDF = () => {
    const element = document.getElementById("certificate");
    html2pdf().from(element).save("certificate.pdf");
  };

  return (
    <div>
      <style>{`
            body {
            font-family: 'Segoe UI', sans-serif;
            background-color: #e0f7fa;
            padding: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            }

            .certificate {
            background: #ffffff;
            border: 10px solid #007acc;
            padding: 40px;
            width: 800px;
            text-align: center;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            margin: auto;
            }

            .certificate h1 {
            color: #007acc;
            margin-bottom: 0;
            font-size: 2.5rem;
            }

            .certificate h2 {
            font-weight: normal;
            color: #333;
            font-size: 1.2rem;
            margin-top: 10px;
            }

            .certificate .student-name {
            font-size: 2rem;
            font-weight: bold;
            color: #333;
            margin: 30px 0 10px;
            }

            .certificate .text {
            color: #555;
            font-size: 1rem;
            margin: 0 20px;
            }

            .certificate .footer {
            margin-top: 50px;
            font-size: 0.9rem;
            color: #666;
            }

            .btn-download {
            margin-top: 30px;
            padding: 10px 20px;
            font-size: 1rem;
            background-color: #007acc;
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            }

            .btn-download:hover {
            background-color: #005f99;
            }
        `}</style>

      <div className="certificate" id="certificate">
        <h1>
          CERTIFICATE
          <br />
          OF ACHIEVEMENT
        </h1>
        <h2>This Certificate is Proudly Presented To</h2>

        <div className="student-name" id="studentName">
          {studentName}
        </div>

        <p className="text">
          For successfully completing the{"     "}
          <strong id="courseName">{courseName}</strong>
          offered by <strong>Furious Learning Management System</strong>,<br />
          in recognition of their dedication and effort in acquiring new
          knowledge and skills.
        </p>

        <div className="footer">&copy; Furious LMS</div>

        <button className="btn-download" onClick={downloadPDF}>
=======
  const generateCertificate = () => {
    const element = document.getElementById("certificate");
    const opt = {
      margin: 1,
      filename: 'certificate.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
    };
    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="certificate-container">
      <style jsx>{`
        .certificate-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f5;
          padding: 2rem;
          font-family: 'Segoe UI', Arial, sans-serif;
        }

        .certificate {
          background: #ffffff;
          width: 1000px;
          padding: 50px;
          text-align: center;
          border: 15px solid #007acc;
          border-radius: 20px;
          box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .certificate::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 10px;
          background: linear-gradient(90deg, #007acc, #00bcd4, #007acc);
        }

        .header {
          color: #007acc;
          text-transform: uppercase;
          margin-bottom: 2rem;
        }

        .title {
          font-size: 3.5rem;
          font-weight: 700;
          letter-spacing: 4px;
          margin-bottom: 0.5rem;
          color: #007acc;
        }

        .subtitle {
          font-size: 1.5rem;
          color: #555;
          font-weight: 500;
          margin: 1rem 0 2rem 0;
        }

        .student-name {
          font-size: 2.8rem;
          font-weight: 600;
          color: #333;
          margin: 2rem 0;
          padding: 1rem 0;
          border-top: 2px solid #007acc;
          border-bottom: 2px solid #007acc;
          display: inline-block;
          min-width: 60%;
        }

        .certificate-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #555;
          margin: 2rem auto;
          max-width: 80%;
        }

        .course-name {
          color: #007acc;
          font-weight: 600;
          font-size: 1.3rem;
          padding: 0 8px;
          margin: 0 4px;
          display: inline-block;
          border-bottom: 2px solid #007acc;
        }

        .organization {
          color: #007acc;
          font-weight: 600;
        }

        .footer {
          margin-top: 3rem;
          color: #666;
          font-style: italic;
        }

        .download-btn {
          margin-top: 2rem;
          padding: 12px 30px;
          font-size: 1.1rem;
          background-color: #007acc;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .download-btn:hover {
          background-color: #005f99;
          transform: translateY(-2px);
          box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
        }

        @media print {
          .download-btn {
            display: none;
          }
        }
      `}</style>

      <div className="certificate" id="certificate">
        <div className="header">
          <div className="title">Certificate</div>
          <div className="title">of Achievement</div>
        </div>

        <div className="subtitle">
          This Certificate is Proudly Presented To
        </div>

        <div className="student-name">
          {studentName}
        </div>

        <div className="certificate-text">
          For successfully completing the course 
          <span className="course-name">{courseName}</span> 
          offered by <span className="organization">Furious Learning Management System</span>, 
          in recognition of their dedication and effort in acquiring new knowledge and skills.
        </div>

        <div className="footer">
          © {new Date().getFullYear()} Furious LMS
        </div>

        <button className="download-btn" onClick={generateCertificate}>
          Download Certificate
        </button>
      </div>
    </div>
  );
};

export default Certificate;
