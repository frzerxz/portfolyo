import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava } from "react-icons/fa";
import { SiC, SiCplusplus, SiCsharp } from "react-icons/si";
import "./Skills.css";

const Skills = () => (
  <div className="card">
    <h2>Neler Yapabilirim?</h2>
    <p>Programlama Dilleri ve Teknolojiler</p>
    <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', alignItems: 'center', fontSize: '2.2rem', marginTop: '1rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SiC color="#00599C" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>C</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SiCplusplus color="#004482" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>C++</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <SiCsharp color="#68217a" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>C#</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaHtml5 color="#e44d26" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>HTML5</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaCss3Alt color="#1572b6" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>CSS3</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaJs color="#f7df1e" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>JavaScript</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaReact color="#61dafb" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>React</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaPython color="#3776ab" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>Python</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <FaJava color="#e76f00" />
        <span style={{ fontSize: '1rem', marginTop: '0.3rem' }}>Java</span>
      </div>
    </div>
  </div>
);

export default Skills; 