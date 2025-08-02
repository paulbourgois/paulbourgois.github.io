import React from "react";

const projects = [
  {
    title: "Bras robotisé avec contrôle inverse",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Développement d'un bras robotisé avec contrôle inverse sous Python/ROS2. Implémentation d'algorithmes de cinématique inverse pour manipulation précise.",
    tech: ["Python", "ROS2", "Gazebo"],
    github: "https://github.com/paulbourgois/robot-arm",
    icon: "🦾"
  },
  {
    title: "Coordination UGV + drone (simulation multi-agent)",
    date: "2023",
    location: "CentraleSupélec", 
    desc: "Simulation de coordination entre un robot terrestre et un drone. Algorithmes de planification de trajectoire et communication inter-agents.",
    tech: ["Python", "Gazebo", "ROS2", "SLAM"],
    github: "https://github.com/paulbourgois/ugv-drone",
    icon: "🚁"
  },
  {
    title: "PCB pour système embarqué ESP32",
    date: "2023",
    location: "Projet personnel",
    desc: "Conception de cartes électroniques pour systèmes embarqués. Intégration capteurs, actionneurs et communication sans fil.",
    tech: ["ESP32", "EasyEDA", "IoT"],
    github: "https://github.com/paulbourgois/esp32-pcb",
    icon: "🔌"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="glass-card p-8">
      <h2 className="section-title">Projets Robotiques</h2>
      
      <div className="font-mono text-xs text-yellow-500/80 mb-6 tracking-widest">
        ACTIVE PROTOTYPES
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div key={i} className="card-modern group relative overflow-hidden border border-black/10 hover:border-yellow-500 transition-colors">
            <div className="absolute top-0 left-0 w-full h-1 bg-yellow-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-start justify-between mb-3">
                <div className="font-mono text-xs tracking-wider text-black/60">
                  {p.date} • {p.location}
                </div>
                <div className="bg-yellow-500 text-black px-2 text-xs font-mono">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="font-bold text-xl mb-4 text-black leading-tight">
                {p.title}
              </h3>
              
              <p className="text-black/80 mb-6 leading-relaxed">
                {p.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t, j) => (
                  <span key={j} className="tag-modern">
                    {t}
                  </span>
                ))}
              </div>
              
              <a 
                href={p.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 border border-black/30 px-4 py-2 text-black hover:border-yellow-500 hover:bg-yellow-50 font-medium transition-colors text-sm"
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12c0 5.302 3.438 9.8 8.207 11.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416c-.546-1.387-1.333-1.756-1.333-1.756c-1.089-.745.083-.729.083-.729c1.205.084 1.839 1.237 1.839 1.237c1.07 1.834 2.807 1.304 3.492.997c.107-.775.418-1.305.762-1.604c-2.665-.305-5.467-1.334-5.467-5.931c0-1.311.469-2.381 1.236-3.221c-.124-.303-.535-1.524.117-3.176c0 0 1.008-.322 3.301 1.23c.957-.266 1.983-.399 3.003-.404c1.02.005 2.047.138 3.006.404c2.291-1.552 3.297-1.23 3.297-1.23c.653 1.653.242 2.874.118 3.176c.77.84 1.235 1.911 1.235 3.221c0 4.609-2.807 5.624-5.479 5.921c.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.765-1.589 8.199-6.086 8.199-11.386c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-mono tracking-wider">CODE SOURCE</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
