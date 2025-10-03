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

      {/* Chiffres clés */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-700 mb-1">2</div>
          <div className="text-sm text-gray-600 font-medium">Grandes Écoles</div>
          <div className="text-xs text-gray-500 mt-1">CentraleSupélec • EPFL</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-orange-600 mb-1">13</div>
          <div className="text-sm text-gray-600 font-medium">Projets Robotiques</div>
          <div className="text-xs text-gray-500 mt-1">6 principaux</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-700 mb-1">3</div>
          <div className="text-sm text-gray-600 font-medium">Domaines</div>
          <div className="text-xs text-gray-500 mt-1">Contrôle • IA • Syst Embarqué</div>
        </div>
        <div className="bg-white/80 backdrop-blur-sm p-4 rounded-lg border border-orange-500/20 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-orange-600 mb-1">✓</div>
          <div className="text-sm text-gray-600 font-medium">Disponible</div>
          <div className="text-xs text-gray-500 mt-1">Stage 6 mois</div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div>
          <div className="font-mono text-xs text-blue-700/80 font-semibold mb-4 tracking-widest">
            FORMATION & PARCOURS
          </div>
          <p className="text-black/90 text-lg mb-6 leading-relaxed">
            Étudiant à <span className="text-blue-700 font-semibold">CentraleSupélec</span> et à l'<span className="text-blue-700 font-semibold">EPFL</span>, je me spécialise en <span className="text-orange-600 font-semibold">contrôle</span>, <span className="text-orange-600 font-semibold">intelligence artificielle</span> et <span className="text-orange-600 font-semibold">systèmes embarqués</span> appliqués à la robotique.
          </p>

          {/* Timelines côte à côte */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Timeline CentraleSupélec */}
            <div>
              <div className="text-center mb-4 pb-2 border-b-2 border-blue-700">
                <h4 className="font-bold text-blue-700">CentraleSupélec</h4>
                <p className="text-xs text-gray-600">2023-2027</p>
              </div>
              <div className="relative h-32 flex items-center">
                {/* Ligne verticale longue */}
                <div className="absolute left-[11px] top-0 bottom-0 w-1 bg-blue-700"></div>
                
                <div className="flex gap-4 items-center relative ml-8">
                  <div className="text-sm font-semibold text-black">Cycle ingénieur</div>
                </div>
              </div>
            </div>

            {/* Timeline EPFL */}
            <div>
              <div className="text-center mb-4 pb-2 border-b-2 border-orange-600">
                <h4 className="font-bold text-orange-600">EPFL</h4>
                <p className="text-xs text-gray-600">2025-2027</p>
              </div>
              <div className="space-y-4 relative">
                {/* Ligne verticale */}
                <div className="absolute left-[11px] top-0 bottom-0 w-0.5 bg-orange-600/30"></div>
                
                <div className="flex gap-4 relative">
                  <div className="w-6 h-6 bg-orange-600 rounded-full border-4 border-white z-10 flex-shrink-0"></div>
                  <div className="flex-1 pt-0.5">
                    <div className="text-xs font-bold text-orange-600">2025-2027</div>
                    <div className="text-sm font-semibold text-black">Master</div>
                    <div className="text-xs text-gray-600">Robotics</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/** Image intégrée comme élément visuel */}
        <div className="relative">
          <div className="w-full h-96 mx-auto relative border border-black/10 bg-white/40 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <img
              src="/gala_sourire.jpg"
              alt="Paul Bourgois"
              className="absolute inset-0 w-full h-full object-cover transform scale-105 filter brightness-90"
            />
            {/* soft gradient to blend the image into the card/section */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-transparent to-transparent" />

            {/* Badge sur l'image */}
            <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm">
              ✓ Disponible Stage 6 mois
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
