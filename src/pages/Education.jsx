import React from "react";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import "./styles/Education.css"; // Make sure this path is correct

const educationData = [
  {
    title: "Bachelor of Economics (B.Econ)",
    major: "Environmental and Resource Economics",
    institution: "Dhaka School of Economics, University of Dhaka",
    gpa: "3.23 out of 4.00",
    year: "2022",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    group: "Science",
    institution: "Government Debendra College",
    gpa: "3.83 out of 5.00",
    year: "2018",
  },
  {
    title: "Secondary School Certificate (SSC)",
    group: "Science",
    institution: "Singair Pilot High School",
    gpa: "4.89 out of 5.00",
    year: "2016",
  },
];

const professionalTraining = {
  courseTitle: "Network Solutions and System Administration",
  program: "IsDB-BISEW IT SCHOLARSHIP PROGRAMME",
  duration: "OCT 2024 – AUG 2025",
};

export default function Education() {
  return (
    <div className="page-content">
      <NavBar active="education" />
      <div className="content-wrapper">
        <div className="education-page">
          <div className="container">
            <h1 className="section-title">🎓 Education</h1>
            <div className="card-container">
              {educationData.map((edu, idx) => (
                <div key={idx} className="card fade-in-up">
                  <h3>{edu.title}</h3>
                  {edu.major && <p><strong>Major:</strong> {edu.major}</p>}
                  {edu.group && <p><strong>Group:</strong> {edu.group}</p>}
                  <p><strong>Institution:</strong> {edu.institution}</p>
                  <p><strong>GPA:</strong> {edu.gpa}</p>
                  <p><strong>Year of Completion:</strong> {edu.year}</p>
                </div>
              ))}
            </div>

            <h1 className="section-title">💼 Professional Training</h1>
            <div className="card fade-in-up">
              <h3>{professionalTraining.courseTitle}</h3>
              <p><strong>Program:</strong> {professionalTraining.program}</p>
              <p><strong>Duration:</strong> {professionalTraining.duration}</p>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
