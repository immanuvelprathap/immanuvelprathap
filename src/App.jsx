import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; 
import Contact from "./pages/Contact";
import NavBar from './components/NavBar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/prathap-portfolio" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
