import React from "react";

export default function Hero() {
  return (
    <div className="hero-gradient min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Technical lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
          <line x1="20%" y1="0" x2="0" y2="100%" stroke="#000000" strokeWidth="1" />
          <line x1="80%" y1="0" x2="100%" y2="100%" stroke="#000000" strokeWidth="1" />
        </svg>
      </div>

      {/* Mobile Robot Label
      <div className="absolute top-40 left-10 font-mono text-xs tracking-widest text-black/60">
        MOBILE ROBOT
      </div>

      <div className="absolute top-40 right-10 font-mono text-xs text-black/60">
        <div>MODEL: PB-2025</div>
        <div>STATUS: OPERATIONAL</div>
      </div> */}

      {/* Contenu principal */}
      <div className="text-center z-10 px-4 max-w-5xl mx-auto">

        <h1 className="hero-title text-6xl md:text-8xl font-bold mb-6 tracking-tighter text-black">
          FUTURE IS <span className="text-orange-500">NEAR</span>
        </h1>

        <div className="flex flex-col gap-4 mb-8">
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            • Ingénieur Robotique & Automatique •
          </p>
          <p className="text-base md:text-lg text-black/70 max-w-3xl mx-auto">
            Spécialisé en <span className="font-semibold text-orange-600">Contrôle</span>, <span className="font-semibold text-orange-600">Intelligence Artificielle</span> et <span className="font-semibold text-orange-600">Systèmes Embarqués</span>
          </p>
        </div>

        {/* Stats avec animations hover */}
        <div className="flex flex-wrap justify-center gap-6 mb-10">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-8 py-5 shadow-md border border-orange-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="text-3xl font-bold text-orange-600 mb-2">10+</div>
            <div className="text-base text-gray-700 font-semibold">Projets Robotique</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-lg px-8 py-5 shadow-md border border-blue-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default">
            <div className="text-lg font-bold text-blue-700 mb-2">CentraleSupélec - EPFL</div>
            <div className="text-sm text-gray-600">Diplôme d'ingénieur</div>
            <div className="text-sm text-gray-600">Master en Robotique</div>
          </div>
        </div>

        <div className="hero-button-container flex flex-wrap justify-center gap-4 mb-10">
          <a href="#videos" className="btn-primary inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl font-bold">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="font-mono tracking-wider">VOIR LES VIDÉOS</span>
          </a>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300 hover:scale-105 font-mono tracking-wider font-bold">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            ME CONTACTER
          </a>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-blue-50 border-2 border-orange-500 p-6 max-w-4xl mx-auto rounded-lg shadow-md">
          <div className="flex items-center gap-3 justify-center whitespace-nowrap">
            <span className="text-2xl">🎯</span>
            <p className="text-black/90 text-base md:text-lg font-semibold">
              Recherche stage 6 mois (Février - Août 2027) en Robotique Autonome
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center hover:border-orange-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-black/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
