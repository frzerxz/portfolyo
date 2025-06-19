import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Logo from "./components/Logo";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          const id = section.getAttribute('id');
          setActiveSection(id);
          section.classList.add('active');
        } else {
          section.classList.remove('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // İlk yüklemede home section'ı aktif yap
    document.querySelector('#home').classList.add('active');

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-bg">
      <div className="layout">
        <Logo />
        <Navbar activeSection={activeSection} />
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