import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink.jsx";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-white shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-500 flex items-center justify-center">
                <span className="font-bold text-black">PB</span>
              </div>
              <span className="font-mono text-sm font-medium tracking-wider text-black">PAUL BOURGOIS</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/#about" className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors">
              À PROPOS
            </NavLink>
            <NavLink to="/#skills" className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors">
              COMPÉTENCES
            </NavLink>
            <NavLink to="/#projects" className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors">
              PROJETS
            </NavLink>
            <NavLink to="/#videos" className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors">
              VIDÉOS
            </NavLink>
            <NavLink to="/#contact" className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors">
              CONTACT
            </NavLink>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-black/80 hover:text-yellow-500 transition-colors"
            onClick={toggleMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-black/10 pt-4">
            <NavLink 
              to="/#about" 
              className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              À PROPOS
            </NavLink>
            <NavLink 
              to="/#skills" 
              className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              COMPÉTENCES
            </NavLink>
            <NavLink 
              to="/#projects" 
              className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              PROJETS
            </NavLink>
            <NavLink 
              to="/#videos" 
              className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              VIDÉOS
            </NavLink>
            <NavLink 
              to="/#contact" 
              className="font-mono text-sm text-black/80 hover:text-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT
            </NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
