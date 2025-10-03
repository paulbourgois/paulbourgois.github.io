import React from "react";

export default function Expertise() {
  const domains = [
    {
      icon: "�",
      title: "Contrôle & Modélisation",
      description: "Modélisation dynamique, simulation physique et algorithmes de contrôle avancés pour systèmes robotiques",
      technologies: ["MATLAB", "Simulink", "MuJoCo", "Gazebo", "PID", "Cinématique", "Dynamique"],
      color: "blue"
    },
    {
      icon: "🧠",
      title: "Intelligence Artificielle",
      description: "Machine Learning, Computer Vision et algorithmes d'apprentissage pour la perception et la décision",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Deep Learning", "Scikit-learn"],
      color: "blue"
    },
    {
      icon: "⚡",
      title: "Systèmes Embarqués",
      description: "Développement bas niveau, fusion de capteurs, électronique et intégration matériel-logiciel temps réel",
      technologies: ["C/C++", "ROS2", "Arduino", "ESP32", "Fusion capteurs", "PCB Design", "IoT"],
      color: "blue"
    }
  ];

  const getColorClasses = (color) => {
    // Couleur unique bleue pour un look professionnel
    return {
      border: "border-blue-500/30",
      hover: "hover:border-blue-500",
      bg: "bg-blue-50",
      text: "text-blue-600",
      badge: "bg-blue-100 text-blue-700"
    };
  };

  return (
    <section id="expertise" className="py-16 relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-black/[0.03] bg-[length:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="h-[1px] w-12 bg-orange-500"></div>
            <h2 className="font-mono uppercase tracking-widest text-sm text-black/70">Domaines d'expertise</h2>
            <div className="h-[1px] w-12 bg-orange-500"></div>
          </div>
          <h3 className="text-4xl font-bold tracking-tight mb-4">Mes compétences clés</h3>
          <p className="text-black/60 max-w-2xl mx-auto">
            3 domaines d'expertise couvrant l'ensemble du cycle de développement robotique,
            de la conception à l'implémentation sur systèmes réels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {domains.map((domain, index) => {
            const colors = getColorClasses(domain.color);
            return (
              <div
                key={index}
                className={`bg-white/80 backdrop-blur-sm border-2 ${colors.border} ${colors.hover} rounded-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Icon */}
                <div className={`text-5xl mb-4 ${colors.text}`}>
                  {domain.icon}
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold mb-3 text-black">
                  {domain.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-black/70 mb-4 leading-relaxed">
                  {domain.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {domain.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`text-xs px-2 py-1 rounded ${colors.badge} font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats complémentaires - palette bleu/orange */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">15+</div>
            <div className="text-sm text-gray-600">Technologies maîtrisées</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">4</div>
            <div className="text-sm text-gray-600">Langages experts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-600">6+</div>
            <div className="text-sm text-gray-600">Projets complets</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-700">4</div>
            <div className="text-sm text-gray-600">Années de formation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
