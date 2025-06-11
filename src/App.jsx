import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="app-bg">
      <div className="layout">
        <Navbar />
        <div className="main-content">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="skills"><Skills /></section>
          <section id="portfolio"><Portfolio /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </div>
  );
}

export default App; 