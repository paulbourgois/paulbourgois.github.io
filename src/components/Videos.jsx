import React from "react";
import { useInView } from "../hooks/useInView";

function Videos() {
  const { ref, isInView } = useInView();

  const videos = [
    {
      id: 1,
      title: "Hackaton : Exolegend",
      description: "Résultat de nos algorithmes de navigation et d'attaque/défense dans un labyrinthe.",
      thumbnail: "/hackaton_studio.png",
      videoUrl: "https://youtu.be/HSmmnKxPebI",
    },
    {
      id: 2,
      title: "Bras 4 axes: Pick & Place",
      description: "Démonstration Pick & Place",
      thumbnail: "/bras_robot_4_axes.png",
      videoUrl: "https://youtu.be/mtQlz-cu4vM",
    },
    {
      id: 3,
      title: "Simulation marche bipède",
      description: "Simulation d'une marche bipède dont la commande est basé sur la minimisation de l'énergie dépensée",
      thumbnail: "/simu_mujoco.png",
      videoUrl: "https://youtu.be/cXNZm2OqueM",
    },
  ];

  return (
    <section 
      id="videos" 
      className="py-20 relative overflow-hidden"
      ref={ref}
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>
      
      {/* Technical blueprint lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10"></div>
      <div className="absolute top-0 right-0 w-[1px] h-full bg-black/10"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10"></div>
      <div className="absolute top-0 left-0 w-[1px] h-full bg-black/10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-2">
              <div className="h-[1px] w-12 bg-yellow-500"></div>
              <h2 className="font-mono uppercase tracking-widest text-sm text-black/70">Vidéos</h2>
            </div>
            <h3 className="text-4xl font-bold tracking-tight mb-2">Démonstrations Techniques</h3>
            <p className="text-black/70 max-w-2xl">
              Explorez mes projets en robotique à travers ces démonstrations vidéo. Ces exemples illustrent les capacités et performances de mes systèmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {videos.map((video) => (
              <div 
                key={video.id} 
                className={`bg-white border border-black/10 group transition-all hover:border-yellow-500 relative ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${150 * video.id}ms` }}
              >
                {/* Technical corner accents */}
                <div className="absolute top-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                <div className="absolute top-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                <div className="absolute top-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                <div className="absolute top-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                <div className="absolute bottom-0 left-0 w-3 h-[1px] bg-yellow-500"></div>
                <div className="absolute bottom-0 left-0 w-[1px] h-3 bg-yellow-500"></div>
                <div className="absolute bottom-0 right-0 w-3 h-[1px] bg-yellow-500"></div>
                <div className="absolute bottom-0 right-0 w-[1px] h-3 bg-yellow-500"></div>
                
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      className="bg-yellow-500 text-black px-4 py-2 font-mono text-sm tracking-wider flex items-center gap-2 hover:bg-yellow-400 transition-colors"
                      onClick={() => window.open(video.videoUrl, '_blank')}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>
                      VOIR LA VIDÉO
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 font-mono">{video.title}</h3>
                  <p className="text-black/70 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;
