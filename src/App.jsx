import React from 'react';
import { Navigate, Route, HashRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import AllProjects from './components/AllProjects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Videos from './components/Videos.jsx';
import { useScrollToSection } from './hooks/useScrollToSection.js';

function HomePage() {
  // Utiliser notre hook personnalisé pour le défilement
  useScrollToSection();
  
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto relative z-10">
        <Hero />
        <div id="about"><About /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="videos"><Videos /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}

function App() {
  // Effet pour forcer le scroll vers le haut lors des changements de route
  React.useEffect(() => {
    // Définir une fonction pour gérer les changements de hash
    const handleHashChange = () => {
      // Si c'est la route /all-projects, forcer le scroll vers le haut
      if (window.location.hash.includes('/all-projects')) {
        console.log("Route /all-projects détectée, forçage du scroll");
        
        // Forcer le scroll avec plusieurs méthodes
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
        
        // Utiliser requestAnimationFrame pour s'assurer que le scroll
        // se produit après les calculs de mise en page
        requestAnimationFrame(() => {
          window.scrollTo(0, 0);
          if (document.documentElement) document.documentElement.scrollTop = 0;
          if (document.body) document.body.scrollTop = 0;
          
          // Injecter un script pour une tentative immédiate
          const script = document.createElement('script');
          script.textContent = `window.scrollTo(0, 0);`;
          document.head.appendChild(script);
          setTimeout(() => document.head.removeChild(script), 100);
        });
      }
    };
    
    // Écouter les changements de hash
    window.addEventListener('hashchange', handleHashChange);
    
    // Écouter aussi les événements de chargement de page
    window.addEventListener('load', handleHashChange);
    
    // Forcer un scroll initial
    handleHashChange();
    
    // Nettoyer les écouteurs d'événements
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('load', handleHashChange);
    };
  }, []);
  
  return (
    <div className="app relative">
      {/* Grid background appliqué à toute la page */}
      <div className="grid-background fixed inset-0 z-0"></div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<AllProjects />} />
          {/* Redirections pour les ancres */}
          <Route path="/about" element={<Navigate to="/#about" />} />
          <Route path="/skills" element={<Navigate to="/#skills" />} />
          <Route path="/projects" element={<Navigate to="/#projects" />} />
          <Route path="/videos" element={<Navigate to="/#videos" />} />
          <Route path="/contact" element={<Navigate to="/#contact" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
