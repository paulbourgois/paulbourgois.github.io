import React from "react";

export default function About() {
  return (
    <section id="about" className="glass-card p-8">
      <h2 className="section-title">À propos</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="font-mono text-xs text-yellow-500/80 mb-4 tracking-widest">
            FORMATION
          </div>
          <p className="text-black/90 text-lg mb-6 leading-relaxed">
            Étudiant à <span className="text-yellow-500 font-semibold">CentraleSupélec</span>, spécialisé en robotique mobile, mécatronique et intelligence artificielle embarquée.
          </p>
          
          <div className="font-mono text-xs text-yellow-500/80 mb-4 tracking-widest">
            OBJECTIF PROFESSIONNEL
          </div>
          <p className="text-black/90 text-lg mb-6 leading-relaxed">
            Rechercher un stage ou emploi dans une entreprise de robotique de pointe.
          </p>
          
          <div className="bg-yellow-50 p-6 border-l-4 border-yellow-500">
            <p className="text-black/80 italic text-lg leading-relaxed">
              "Passionné par la robotique qui interagit avec le monde réel, je conçois des systèmes mêlant capteurs, actionneurs et intelligence artificielle."
            </p>
          </div>
        </div>
        <div className="relative">
          {/* Silhouette technique avec spécifications */}
          <div className="w-full h-64 mx-auto relative border border-black/10 bg-gray-50">
            {/* Technical blueprint style */}
            <div className="absolute inset-0 overflow-hidden">
              <svg width="100%" height="100%" className="absolute top-0 left-0 opacity-10">
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000" strokeWidth="0.5"/>
                </pattern>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
            
            {/* Profile silhouette */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <rect x="60" y="50" width="60" height="80" fill="#FFD700" />
                <rect x="70" y="20" width="40" height="30" fill="#FFD700" />
                <circle cx="90" cy="35" r="15" fill="#000000" fillOpacity="0.2" />
                
                {/* Technical measurements */}
                <line x1="50" y1="50" x2="60" y2="50" stroke="#000" strokeWidth="1" strokeDasharray="2" />
                <line x1="50" y1="130" x2="60" y2="130" stroke="#000" strokeWidth="1" strokeDasharray="2" />
                <line x1="50" y1="50" x2="50" y2="130" stroke="#000" strokeWidth="1" strokeDasharray="2" />
                <text x="30" y="90" fontSize="8" fontFamily="monospace">80 cm</text>
                
                <line x1="60" y1="40" x2="60" y2="50" stroke="#000" strokeWidth="1" strokeDasharray="2" />
                <line x1="120" y1="40" x2="120" y2="50" stroke="#000" strokeWidth="1" strokeDasharray="2" />
                <line x1="60" y1="40" x2="120" y2="40" stroke="#000" strokeWidth="1" strokeDasharray="2" />
                <text x="80" y="35" fontSize="8" fontFamily="monospace">60 cm</text>
              </svg>
            </div>
            
            {/* Technical data labels */}
            <div className="absolute bottom-2 right-2 font-mono text-xs text-black/60">
              <div>ENGINEER ID: PB-2025</div>
              <div>SPECIALIZATION: ROBOTICS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
