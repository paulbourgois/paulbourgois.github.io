import React from "react";
import { Link } from "react-router-dom";

const mainProjects = [
  {
    title: "Drone roulant sur les murs",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Conception d'un drone hybride capable de rouler sur les murs grâce à un système d'adhérence innovant. Intégration de capteurs et développement d'algorithmes de contrôle adaptatifs.",
    tech: ["ROS2", "Python", "SLAM", "Conception mécanique"],
    media: "/src/assets/drone-mur.png",
    github: "https://github.com/paulbourgois/wall-drone"
  },
  {
    title: "Bras robotique 4 axes Pick & Place",
    date: "2023",
    location: "CentraleSupélec",
    desc: "Développement complet d'un bras robotique 4 axes: cinématique inverse, génération de trajectoire, contrôleur, fusion de capteurs et simulation Mujoco pour un contrôle basé sur le modèle dynamique.",
    tech: ["MATLAB", "Mujoco", "Contrôle", "Fusion capteurs"],
    media: "/src/assets/robotarm.png",
    github: "https://github.com/paulbourgois/robot-arm"
  },
  {
    title: "ML pipeline pour analyse satellite",
    date: "2023",
    location: "Projet académique",
    desc: "Développement d'un pipeline d'apprentissage automatique pour détecter les états de construction des bâtiments à partir d'images satellite, avec une précision de 94%.",
    tech: ["Python", "TensorFlow", "Computer Vision", "GIS"],
    media: "/src/assets/ml-satellite.png", 
    github: "https://github.com/paulbourgois/satellite-ml"
  },
  {
    title: "Simulation de marche bipède",
    date: "2022",
    location: "Laboratoire de recherche",
    desc: "Modélisation et contrôle d'un robot bipède dans le simulateur Mujoco. Conception d'une loi de commande basée sur l'énergie pour une marche stable et efficiente.",
    tech: ["Python", "Mujoco", "Dynamique", "Contrôle optimal"],
    media: "/src/assets/bipede.png",
    github: "https://github.com/paulbourgois/bipede-simulation"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-4xl mx-auto mt-12 mb-16">
      <h2 className="section-title">Projets Principaux</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {mainProjects.map((p, i) => (
          <div key={i} className="card flex flex-col items-center relative z-10 bg-white p-4 rounded shadow-sm border border-gray-100">
            <img src={p.media} className="w-full h-40 object-cover rounded mb-3" />
            <h3 className="font-bold text-lg mb-1">{p.title}</h3>
            <div className="text-xs text-gray-500 mb-2">{p.date} – {p.location}</div>
            <div className="mb-2 text-center text-sm">{p.desc}</div>
            <div className="flex flex-wrap gap-2 mb-2">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-gray-100 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-bold hover:underline relative z-20">GitHub</a>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/all-projects" className="btn-primary inline-flex items-center gap-2">
          <span className="font-mono tracking-wider">VOIR TOUS LES PROJETS</span>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </Link>
      </div>
    </section>
  );
}
