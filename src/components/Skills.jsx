import React from "react";

const skills = [
  { cat: "Langages", items: ["Python", "C++", "MATLAB", "JavaScript"], icon: "💻" },
  { cat: "Robotique", items: ["ROS2", "Gazebo", "MuJoCo", "SLAM"], icon: "🤖" },
  { cat: "Outils", items: ["SolidWorks", "EasyEDA", "Git", "Docker"], icon: "🛠️" },
  { cat: "IA & ML", items: ["TensorFlow", "OpenCV", "Deep Learning", "Vision"], icon: "🧠" },
  { cat: "Électronique", items: ["ESP32", "Arduino", "PCB Design", "IoT"], icon: "🔧" },
  { cat: "Soft Skills", items: ["Leadership", "Communication", "Gestion projet"], icon: "👥" }
];

export default function Skills() {
  return (
    <section id="skills" className="glass-card p-8">
      <h2 className="section-title">Compétences Techniques</h2>
      
      <div className="font-mono text-xs text-yellow-500/80 mb-6 tracking-widest">
        SYSTEM CAPABILITIES
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((s, i) => (
          <div key={i} className="relative">
            <div className="flex items-center gap-3 mb-4 pb-2 border-b border-black/10">
              <h3 className="font-bold text-lg text-black">{s.cat}</h3>
              <div className="ml-auto bg-yellow-500 text-black text-xs font-mono px-2 py-1">
                {s.items.length}
              </div>
            </div>
            <div className="space-y-3">
              {s.items.map((item, j) => (
                <div key={j} className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 mr-3"></div>
                  <div className="text-black/90 font-medium">{item}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      {/* Section progression - Boston Dynamics style */}
      <div className="mt-16 border-t border-black/10 pt-10">
        <div className="font-mono text-xs text-yellow-500/80 mb-6 tracking-widest">
          PERFORMANCE METRICS
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative">
            <div className="text-4xl font-bold text-black mb-2">3+</div>
            <div className="text-black/70 font-medium">Années d'expérience</div>
            <div className="absolute top-0 right-0 h-full w-1 bg-yellow-500"></div>
          </div>
          
          <div className="relative">
            <div className="text-4xl font-bold text-black mb-2">15+</div>
            <div className="text-black/70 font-medium">Projets réalisés</div>
            <div className="absolute top-0 right-0 h-full w-1 bg-yellow-500"></div>
          </div>
          
          <div className="relative">
            <div className="text-4xl font-bold text-black mb-2">5+</div>
            <div className="text-black/70 font-medium">Technologies maîtrisées</div>
            <div className="absolute top-0 right-0 h-full w-1 bg-yellow-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
