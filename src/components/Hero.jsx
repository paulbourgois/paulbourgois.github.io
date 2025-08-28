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
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">

        <h1 className="hero-title text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-black">
          FUTURE IS <span className="text-yellow-500">NEAR</span>
        </h1>
        
        <div className="flex flex-col gap-6 mb-12">
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            • Ingénieur Robotique & Intelligence Artificielle Appliquée • 
          </p>
        </div>

        <div className="hero-button-container space-x-6">
          <a href="#videos" className="btn-primary inline-flex items-center gap-3">
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
            <span className="font-mono tracking-wider">VOIR LA VIDÉO</span>
          </a>
          <a href="#contact" className="btn-secondary font-mono tracking-wider">
            ME CONTACTER
          </a>
        </div>

        <div className="glass-card p-6 max-w-2xl mx-auto mt-12">
          <p className="text-black/80 text-lg leading-relaxed">
            "Développement de robots autonomes combinant perception, action et décision dans des environnements dynamiques."
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center hover:border-yellow-500 transition-colors duration-300">
          <div className="w-1 h-3 bg-black/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}
