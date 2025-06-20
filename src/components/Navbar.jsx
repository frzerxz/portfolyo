import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Confetti from 'react-confetti';
import "./Navbar.css";
import avatar from "../assets/avatar.jpg"; // Profil fotoğrafı

const Navbar = ({ activeSection }) => {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showHacked, setShowHacked] = useState(false);
  const [showXoxo, setShowXoxo] = useState(false);
  const [show404, setShow404] = useState(false);
  const [showGetOut, setShowGetOut] = useState(false);

  const handleNameClick = () => {
    setShowConfetti(true);
    setShowHacked(true);
    setShowXoxo(true);
    
    // "You have been hacked!" mesajını 2 saniye sonra kapat
    setTimeout(() => {
      setShowHacked(false);
    }, 2000);
    
    // "XOXO" mesajını 10 saniye sonra kapat
    setTimeout(() => {
      setShowXoxo(false);
      setShowConfetti(false);
    }, 10000);
  };

  const handleFxClick = (e) => {
    e.preventDefault();
    setShow404(true);
    setTimeout(() => {
      setShow404(false);
    }, 5000);
  };

  const handleAvatarClick = () => {
    setShowGetOut(true);
    setTimeout(() => {
      setShowGetOut(false);
    }, 3000);
  };

  return (
    <>
      <aside className="sidebar">
        <div className="profile-section">
          <img 
            src={avatar} 
            alt="Firuze Eroğlu" 
            className="avatar" 
            onClick={handleAvatarClick}
            style={{ cursor: 'pointer' }}
          />
          <h2 className="name" onClick={handleNameClick} style={{ cursor: 'pointer' }}>
            Firuze Eroğlu
          </h2>
        </div>

        <nav className="nav-links">
          <a
            href="#about"
            className={activeSection === "about" ? "active" : ""}
          >
            Ben Kimim?
          </a>
          <a
            href="#skills"
            className={activeSection === "skills" ? "active" : ""}
          >
            Neler Yapabilirim?
          </a>
          <a
            href="#portfolio"
            className={activeSection === "portfolio" ? "active" : ""}
          >
            Portfolyo
          </a>
          <a
            href="#contact"
            className={activeSection === "contact" ? "active" : ""}
          >
            İletişim
          </a>
        </nav>

        <div className="fx-button-container">
          <a href="#" className="fx-button" title="404 Error" onClick={handleFxClick}>
            𝓕𝔁
          </a>
        </div>
      </aside>

      {showHacked && (
        <div className="hacked-overlay">
          {showConfetti && <Confetti 
            width={window.innerWidth} 
            height={window.innerHeight}
            numberOfPieces={200}
            recycle={false}
          />}
          <div className="hacked-text">
            <h1>YOU HAVE BEEN HACKED!</h1>
          </div>
        </div>
      )}

      {showXoxo && (
        <div className="xoxo-overlay">
          {showConfetti && <Confetti 
            width={window.innerWidth} 
            height={window.innerHeight}
            numberOfPieces={200}
            recycle={false}
          />}
          <div className="xoxo-text">
            <div className="joker-icons">🎭💀🃏</div>
            <h1>XOXO</h1>
            <div className="joker-icons">😈🤡💥</div>
          </div>
        </div>
      )}

      {show404 && (
        <div className="error-404-overlay">
          <div className="error-404-content">
            <h1 className="error-404-title">404</h1>
            <h2 className="error-404-subtitle">Page Not Found</h2>
            <p className="error-404-message">Oops! The page you're looking for doesn't exist.</p>
            <div className="error-404-animation">🚀</div>
          </div>
        </div>
      )}

      {showGetOut && (
        <div className="get-out-overlay">
          <div className="get-out-content">
            <div className="warning-icon">⚠️</div>
            <h1 className="get-out-title">GET OUT OF HERE!</h1>
            <p className="get-out-message">This is my personal space! 🚫</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar; 