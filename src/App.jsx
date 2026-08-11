import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';
import ThreeDBackground from './components/ThreeDBackground';
import IntroLoader from './components/IntroLoader';
import Lenis from 'lenis';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    if (loading) return;
    
    // Smooth scrolling using Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easeOutExpo
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [loading]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <>
      {loading ? (
        <IntroLoader onComplete={() => setLoading(false)} />
      ) : (
        <Router>
          <div className="animate-entry">
            <ThreeDBackground hoveredNav={hoveredNav} />
            <NavBar theme={theme} toggleTheme={toggleTheme} setHoveredNav={setHoveredNav} />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prathap-portfolio" element={<Home />} />
            </Routes>
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
