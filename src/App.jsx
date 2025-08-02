import React from 'react';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import AllProjects from './components/AllProjects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Videos from './components/Videos.jsx';

function HomePage() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <div className="app relative">
      {/* Grid background appliqué à toute la page */}
      <div className="grid-background fixed inset-0 z-0"></div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
