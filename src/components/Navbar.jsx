import React from "react";
import "./Navbar.css";
import avatar from "../assets/avatar.jpg"; // Profil fotoğrafı

const Navbar = ({ activeSection }) => (
  <aside className="sidebar">
    <img src={avatar} alt="Avatar" className="avatar" />
    <div style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.15rem', margin: '0.7rem 0 1.2rem 0' }}>
      Firuze Eroğlu
    </div>
    <nav>
      <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Ana Sayfa</a>
      <a href="#about" className={activeSection === 'about' ? 'active' : ''}>Ben Kimim?</a>
      <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Neler Yapabilirim?</a>
      <a href="#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolyo</a>
      <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>İletişim</a>
    </nav>
  </aside>
);

export default Navbar; 