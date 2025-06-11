import React from "react";
import "./Navbar.css";
import avatar from "../assets/avatar.jpg"; // Profil fotoğrafı

const Navbar = () => (
  <aside className="sidebar">
    <img src={avatar} alt="Avatar" className="avatar" />
    <div style={{ textAlign: 'center', color: '#fff', fontWeight: 'bold', fontSize: '1.15rem', margin: '0.7rem 0 1.2rem 0' }}>
      Firuze Eroğlu
    </div>
    <nav>
      <a href="#home">Ana Sayfa</a>
      <a href="#about">Ben Kimim?</a>
      <a href="#skills">Neler Yapabilirim?</a>
      <a href="#portfolio">Portfolyo</a>
      <a href="#contact">İletişim</a>
    </nav>
  </aside>
);

export default Navbar; 