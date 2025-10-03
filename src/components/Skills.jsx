import React from "react";

const skills = [
  {
    cat: "Contrôle & Modélisation",
    items: [
      { name: "MATLAB/Simulink", level: "Expert" },
      { name: "Dynamique", level: "Expert" },
      { name: "Cinématique", level: "Expert" },
      { name: "Contrôle optimal", level: "Avancé" }
    ],
    icon: "🎮"
  },
  {
    cat: "Intelligence Artificielle",
    items: [
      { name: "Python", level: "Expert" },
      { name: "TensorFlow", level: "Avancé" },
      { name: "OpenCV", level: "Expert" },
      { name: "Deep Learning", level: "Avancé" }
    ],
    icon: "�"
  },
  {
    cat: "Systèmes Embarqués",
    items: [
      { name: "C/C++", level: "Avancé" },
      { name: "ROS2", level: "Expert" },
      { name: "Arduino", level: "Expert" },
      { name: "Fusion capteurs", level: "Avancé" }
    ],
    icon: "⚡"
  },
  {
    cat: "Mécanique & Conception",
    items: [
      { name: "SolidWorks", level: "Avancé" },
      { name: "CAO/DAO", level: "Avancé" },
      { name: "Mécanique analytique", level: "Expert" },
      { name: "Conception mécatronique", level: "Avancé" }
    ],
    icon: "⚙️"
  },
  {
    cat: "Outils & Simulation",
    items: [
      { name: "Gazebo", level: "Avancé" },
      { name: "MuJoCo", level: "Avancé" },
      { name: "Docker", level: "Avancé" },
      { name: "Git", level: "Expert" }
    ],
    icon: "�️"
  },
  {
    cat: "Leadership & Gestion",
    items: [
      { name: "Gestion de projet", level: "Avancé" },
      { name: "Communication", level: "Expert" },
      { name: "Travail d'équipe", level: "Expert" }
    ],
    icon: "👥"
  }
];

const getLevelWidth = (level) => {
  switch(level) {
    case "Expert": return "w-full";
    case "Avancé": return "w-2/3";
    case "Intermédiaire": return "w-1/3";
    default: return "w-1/4";
  }
};

const getLevelColor = () => {
  // Couleur unique bleue avec gradient pour un look professionnel
  return "bg-gradient-to-r from-blue-500 to-blue-600";
};

export default function Skills() {
  return (
    <section id="skills" className="glass-card p-8">
      <h2 className="section-title">Compétences Techniques</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((s, i) => (
          <div key={i} className="relative bg-white/50 p-6 rounded-lg border border-gray-100 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-3 mb-5 pb-3 border-b border-black/10">
              <span className="text-2xl">{s.icon}</span>
              <h3 className="font-bold text-lg text-black">{s.cat}</h3>
            </div>
            <div className="space-y-4">
              {s.items.map((item, j) => (
                <div key={j} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-black/90 font-medium">{item.name}</div>
                  </div>
                  {/* Barre de progression unique avec gradient bleu */}
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${getLevelColor()} ${getLevelWidth(item.level)} transition-all duration-500 group-hover:scale-x-105 origin-left rounded-full shadow-sm`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Fin des compétences techniques */}
    </section>
  );
}
