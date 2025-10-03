import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-black/10 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Haut du footer */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 flex items-center justify-center">
                <span className="font-bold text-white text-lg">PB</span>
              </div>
              <span className="font-mono text-sm font-bold tracking-wider">PAUL BOURGOIS</span>
            </div>
            <p className="text-sm text-black/60 leading-relaxed">
              Ingénieur robotique passionné par l'innovation et les systèmes autonomes.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-mono text-sm font-bold mb-4 text-black/80 tracking-wider">NAVIGATION</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-black/60 hover:text-orange-500 transition-colors">À propos</a>
              </li>
              <li>
                <a href="#expertise" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Expertise</a>
              </li>
              <li>
                <a href="#projects" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Projets</a>
              </li>
              <li>
                <a href="#skills" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Compétences</a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-black/60 hover:text-orange-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div className="md:col-span-1">
            <h4 className="font-mono text-sm font-bold mb-4 text-black/80 tracking-wider">RÉSEAUX</h4>
            <div className="space-y-3">
              <a href="https://www.linkedin.com/in/paul-bourgois-532b55214/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black/60 hover:text-orange-500 transition-colors group">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://github.com/paulbourgois" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-black/60 hover:text-orange-500 transition-colors group">
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="group-hover:scale-110 transition-transform">
                  <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.983-.399 3.003-.404c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.765-1.589 8.199-6.086 8.199-11.386c0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:paulbourgois03@gmail.com" className="flex items-center gap-2 text-sm text-black/60 hover:text-orange-500 transition-colors group">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-[18px] h-[18px] group-hover:scale-110 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
            </div>
          </div>

          {/* Informations */}
          <div className="md:col-span-1">
            <h4 className="font-mono text-sm font-bold mb-4 text-black/80 tracking-wider">INFORMATIONS</h4>
            <div className="space-y-2 text-sm text-black/60">
              <p className="flex items-center gap-2">
                <span className="text-orange-500">📍</span>
                Lausanne, Suisse
              </p>
              <p className="flex items-center gap-2">
                <span className="text-blue-600">🎓</span>
                CentraleSupélec & EPFL
              </p>
              <p className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                Disponible stage 6 mois
              </p>
            </div>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="border-t border-black/10 pt-6 text-center">
          <p className="text-black/60 text-sm">
            &copy; {currentYear} Paul Bourgois. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
