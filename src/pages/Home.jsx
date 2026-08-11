import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from '../components/Skills';
import ProjectsSection from '../components/ProjectSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <ProjectsSection />
      <ContactBanner />
      <Footer />
    </div>
  );
}