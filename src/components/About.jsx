import React from "react";

export default function About() {
  return (
    <section id="about" className="glass-card p-8 relative overflow-hidden">
      {/* Background image integrated into the section */}
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover filter saturate-90"
        style={{
          backgroundImage: "url('/gala_sourire.jpg')",
          opacity: 0.12,
          transform: "scale(1.05)",
        }}
        aria-hidden="true"
      />

      {/* subtle dark overlay to keep text readable */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-white/60 to-white/80" />

      <h2 className="section-title">À propos</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="font-mono text-xs text-yellow-500/80 font-semibold mb-4 tracking-widest">
            FORMATION & OBJECTIF PROFESSIONNEL
          </div>
          <p className="text-black/90 text-lg mb-6 leading-relaxed">
            Issue de <span className="text-yellow-500 font-semibold">CentraleSupélec</span> et de l'<span className="text-yellow-500 font-semibold">EPFL</span>, je me suis spécialisé en <span className="text-yellow-500 font-semibold">robotique</span> mobile, mécatronique et intelligence artificielle embarquée.
          </p>
          
          <p className="text-black/90 text-lg mb-6 leading-relaxed">
            Et je suis actuellement à la recherche d'un <span className="text-yellow-500 font-semibold">stage</span> de 6 mois dans une entreprise de robotique de pointe.
          </p>
        </div>

        {/** Image intégrée comme élément visuel (cadre avec overlay pour bien se fondre) */}
        <div className="relative">
          <div className="w-full h-64 mx-auto relative border border-black/10 bg-white/40 overflow-hidden rounded-lg shadow-md">
            <img
              src="/gala_sourire.jpg"
              alt="Gala Sourire"
              className="absolute inset-0 w-full h-full object-cover transform scale-105 filter brightness-90"
            />
            {/* soft gradient to blend the image into the card/section */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
