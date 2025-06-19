import React from "react";

const Logo = () => (
  <a href="#home" style={{
    textDecoration: "none",
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  }}>
    <div style={{
      fontSize: "2rem",
      fontWeight: "bold",
      color: "#fff",
      background: "linear-gradient(135deg, #5e60ce 0%, #6930c3 100%)",
      width: "45px",
      height: "45px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "1rem",
      boxShadow: "0 4px 15px rgba(94, 96, 206, 0.3)",
      fontFamily: "'Righteous', cursive",
      transform: "rotate(-5deg)",
      border: "2px solid rgba(255, 255, 255, 0.1)",
      backdropFilter: "blur(5px)",
      transition: "all 0.3s ease"
    }}>
      Fx
    </div>
  </a>
);

export default Logo; 