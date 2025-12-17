import React from 'react';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from '../components/Skills';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Footer></Footer>
    </div>
  );
}