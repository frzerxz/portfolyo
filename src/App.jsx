import React, { useState, useEffect, Suspense, lazy } from "react";
import "./App.css";
import { debounce, getPerformanceMetrics } from "./utils/performance";

// Lazy load components for better performance
const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const Contact = lazy(() => import("./components/Contact"));
const PerformanceMonitor = lazy(() => import("./components/PerformanceMonitor"));

// Loading component
const LoadingSpinner = () => (
  <div className="loading-spinner">
    <div className="spinner"></div>
  </div>
);

function App() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "portfolio", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          if (
            scrollPosition >= section.offsetTop &&
            scrollPosition < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Use debounced scroll handler for better performance
    const debouncedHandleScroll = debounce(handleScroll, 16); // ~60fps

    window.addEventListener("scroll", debouncedHandleScroll, { passive: true });
    
    // Log performance metrics on mount
    const metrics = getPerformanceMetrics();
    if (metrics) {
      console.log('Performance Metrics:', metrics);
    }

    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return (
    <div className="app-bg">
      <div className="layout">
        <Suspense fallback={<LoadingSpinner />}>
          <Navbar activeSection={activeSection} />
        </Suspense>
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <section id="about" className={activeSection === 'about' ? 'active' : ''}>
              <About />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="skills" className={activeSection === 'skills' ? 'active' : ''}>
              <Skills />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>
              <Portfolio />
            </section>
          </Suspense>
          <Suspense fallback={<LoadingSpinner />}>
            <section id="contact" className={activeSection === 'contact' ? 'active' : ''}>
              <Contact />
            </section>
          </Suspense>
        </main>
      </div>
      <Suspense fallback={null}>
        <PerformanceMonitor />
      </Suspense>
    </div>
  );
}

export default App; 