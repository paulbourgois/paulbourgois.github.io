import React from "react";

export default function Hero() {
  return (
    <div className="hero-gradient min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Grid background */}
      <div className="grid-background"></div>
      
      {/* Technical lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
          <line x1="20%" y1="0" x2="0" y2="100%" stroke="#000000" strokeWidth="1" />
          <line x1="80%" y1="0" x2="100%" y2="100%" stroke="#000000" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Navigation - Boston Dynamics Style */}
      <div className="absolute top-8 left-0 w-full flex justify-between items-center px-8">
        <div className="font-bold text-lg">PaulBourgois</div>
        <div className="flex space-x-8">
          <a href="#projects" className="hover:text-yellow-500 transition-colors">PROJETS</a>
          <a href="#competences" className="hover:text-yellow-500 transition-colors">COMPÉTENCES</a>
          <a href="#contact" className="hover:text-yellow-500 transition-colors">CONTACT</a>
        </div>
      </div>
      
      {/* Mobile Robot Label */}
      <div className="absolute top-40 left-10 font-mono text-xs tracking-widest text-black/60">
        MOBILE ROBOT
      </div>
      
      {/* Technical Specs */}
      <div className="absolute top-40 right-10 font-mono text-xs text-black/60">
        <div>MODEL: PB-2025</div>
        <div>STATUS: OPERATIONAL</div>
      </div>
      
      {/* Contenu principal */}
      <div className="text-center z-10 px-4 max-w-5xl">
        <div className="mb-8">
          {/* Boston Dynamics inspired robots */}
          <div className="relative mx-auto w-full h-96 mb-8 flex items-center justify-center">
            {/* Spot-like robot (quadruped) */}
            <div className="absolute" style={{animation: 'walking 3s ease-in-out infinite', right: '60%'}}>
              <svg width="200" height="200" viewBox="0 0 200 200" className="drop-shadow-lg">
                {/* Main Body */}
                <rect x="40" y="70" width="120" height="40" fill="#FFD700" />
                
                {/* Head */}
                <path d="M70 50 L130 50 L140 70 L60 70 Z" fill="#FFD700" />
                
                {/* Legs */}
                <g className="leg-front-right">
                  <rect x="130" y="110" width="10" height="40" fill="#FFD700" />
                  <rect x="130" y="150" width="20" height="10" fill="#FFD700" />
                </g>
                <g className="leg-front-left">
                  <rect x="60" y="110" width="10" height="40" fill="#FFD700" />
                  <rect x="50" y="150" width="20" height="10" fill="#FFD700" />
                </g>
                <g className="leg-back-right">
                  <rect x="110" y="110" width="10" height="40" fill="#FFD700" />
                  <rect x="110" y="150" width="20" height="10" fill="#FFD700" />
                </g>
                <g className="leg-back-left">
                  <rect x="80" y="110" width="10" height="40" fill="#FFD700" />
                  <rect x="70" y="150" width="20" height="10" fill="#FFD700" />
                </g>
                
                {/* Sensors */}
                <circle cx="120" cy="60" r="5" fill="#000" />
                <circle cx="120" cy="60" r="2" fill="#FFD700" className="sensor-light" />
              </svg>
            </div>
            
            {/* Atlas-like robot (humanoid) */}
            <div className="absolute" style={{left: '60%', marginTop: '-20px'}}>
              <svg width="240" height="300" viewBox="0 0 240 300" className="drop-shadow-lg">
                {/* Main Body */}
                <rect x="80" y="100" width="80" height="100" fill="#FFD700" />
                
                {/* Head */}
                <rect x="95" y="60" width="50" height="40" rx="5" fill="#FFD700" />
                <rect x="110" y="70" width="20" height="10" fill="#000" /> {/* Visor */}
                
                {/* Arms */}
                <rect x="50" y="110" width="30" height="80" fill="#FFD700" /> {/* Left arm */}
                <rect x="160" y="110" width="30" height="80" fill="#FFD700" /> {/* Right arm */}
                
                {/* Legs */}
                <rect x="90" y="200" width="20" height="80" fill="#FFD700" /> {/* Left leg */}
                <rect x="130" y="200" width="20" height="80" fill="#FFD700" /> {/* Right leg */}
                
                {/* Feet */}
                <rect x="80" y="280" width="40" height="10" fill="#FFD700" /> {/* Left foot */}
                <rect x="120" y="280" width="40" height="10" fill="#FFD700" /> {/* Right foot */}
              </svg>
            </div>
            
            {/* Angular background shape */}
            <svg className="absolute top-10 opacity-10" width="600" height="300" viewBox="0 0 600 300">
              <path d="M50,50 L550,50 L500,250 L100,250 Z" fill="none" stroke="#000" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <h1 className="hero-title text-6xl md:text-8xl font-bold mb-8 tracking-tighter text-black">
          FUTURE IS <span className="text-yellow-500">NEAR</span>
        </h1>
        
        <div className="flex flex-col gap-6 mb-12">
          <p className="hero-subtitle font-mono text-lg text-yellow-500/80 tracking-wider">
            SYSTEMS STATUS: OPERATIONAL
          </p>
          <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed">
            Ingénieur Robotique • Intelligence Artificielle • Systèmes Autonomes
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
