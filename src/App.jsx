import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Particles from './components/Particles';
import './App.css';

function App() {
  return (
    <div className="portfolio-app">
      {/* Background dynamic ambient glows & particles */}
      <Particles />

      {/* Top Navigation */}
      <Navbar />

      {/* Main Page Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
