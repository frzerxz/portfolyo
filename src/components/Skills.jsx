import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiCsharp } from "react-icons/si";
import "./Skills.css";

const Skills = () => (
  <div className="card">
    <h2>Neler Yapabilirim?</h2>
    <p>Programlama Dilleri ve Teknolojiler</p>
    <div className="skills-grid">
      <div className="skill-item">
        <SiC color="#00599C" />
        <span>C</span>
      </div>
      <div className="skill-item">
        <SiCplusplus color="#004482" />
        <span>C++</span>
      </div>
      <div className="skill-item">
        <SiCsharp color="#68217a" />
        <span>C#</span>
      </div>
      <div className="skill-item">
        <FaHtml5 color="#e44d26" />
        <span>HTML5</span>
      </div>
      <div className="skill-item">
        <FaCss3Alt color="#1572b6" />
        <span>CSS3</span>
      </div>
      <div className="skill-item">
        <FaJs color="#f7df1e" />
        <span>JavaScript</span>
      </div>
      <div className="skill-item">
        <FaReact color="#61dafb" />
        <span>React</span>
      </div>
      <div className="skill-item">
        <FaPython color="#3776ab" />
        <span>Python</span>
      </div>
      <div className="skill-item">
        <FaJava color="#e76f00" />
        <span>Java</span>
      </div>
    </div>
  </div>
);

export default Skills; 