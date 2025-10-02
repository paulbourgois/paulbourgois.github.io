import React from "react";
import { Link } from "react-router-dom";

const mainProjects = [
  {
    title: "Responsable Navigation",
    date: "2025-2026",
    location: "Association Xplore - EPFL",
    // responsable navigation pour la compétition Europpean Rover Challenge (ERC)
    desc: "Développement et implémentation d'algorithmes de navigation autonome pour un rover martien, incluant la planification de trajectoire, l'évitement d'obstacles et la localisation en environnement inconnu.",
    tech: ["ROS2", "C++", "Python", "SLAM", "Path Planning", "Obstacle Avoidance", "Capteurs", "Simulation Gazebo"],
    media: "/xplore_rover.jpg",
    // github:
  },
  {
    title: "Responsable projets",
    date: "2023-2024",
    location: "ClubTech - CentraleSupélec",
    desc: "Gestion et coordination d'une équipe de 15 étudiants pour la réalisation de projets robotiques innovants, avec planification, suivi et validation des résultats.",
    tech: ["Gestion", "Leadership", "Communication", "Organisation", "Suivi", "Validation", "Formation", "Documentation"],
    media: "/respo_projets_ct.jpg",
    // github: "https://github.com/paulbourgois/tech-club-projects",
    // video: "https://www.youtube.com/watch?v=video1",
  },
  {
    title: "Bras 4 axes: Pick & Place",
    date: "2025",
    location: "CentraleSupélec",
    desc: "Développement complet d'un bras robotique 4 axes: cinématique inverse, génération de trajectoire, contrôleur, fusion de capteurs et simulation Mujoco pour un contrôle basée sur le modèle dynamique.",
    tech: ["Dynamique & Cinématique", "Trajectoire", "Contrôle", "Simulation", "Fusion capteurs", "MATLAB & Simulink"],
    media: "/bras_robot_4_axes.png",
    // github: "https://github.com/paulbourgois/robot-arm"
    video: "https://youtu.be/mtQlz-cu4vM",
  },
  {
    title: "Conception capteur de Force",
    date: "2025",
    location: "EPFL",
    desc: "Développement d'un pipeline de machine learning pour mesurer la force, l'humidité et la température à partir de la technologie de capteurs EIT (Electrical Impedance Tomography).",
    tech: ["Machine Learning", "Modélisation", "Évaluation", "Optimisation", "Python", "PyTorch", "MATLAB"],
    media: "/ML_building.jpg",
    // github: "https://github.com/paulbourgois/satellite-ml"
    // video: "https://www.youtube.com/watch?v=video4",
  },
  {
    title: "Simulation de marche bipède",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Modélisation et contrôle d'un robot bipède dans le simulateur Mujoco. Conception d'une loi de commande basée sur l'énergie pour une marche stable et efficace.",
    tech: ["Modélisation", "Commande", "Mujoco", "Optimisation", "Python"],
    media: "/simu_mujoco.png",
    // github: "https://github.com/paulbourgois/bipede-simulation"
    video: "https://youtu.be/cXNZm2OqueM",
  },
  {
    title: "Hackaton Exolegend",
    date: "2025",
    location: "Lyon",
    desc: "Compétition de 50 équipes dédiée aux étudiants et ingénieurs, organisée par Exotec. L'objectif est de développer des algorithmes de navigation et d'attaque/défense dans un labyrinthe rempli de défis où il faut survivre à son rétrécissement et à l'adversaire.",
    tech: ["C++", "Navigation", "Compétition", "Résultat : 4e des poules et 8e de finale"],
    media: "/hackaton_studio.png",
    // github: "https://github.com/paulbourgois/robotics-cup-pcb",
    video: "https://youtu.be/HSmmnKxPebI",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto mt-12 mb-16">
      <h2 className="section-title">Projets & Expériences</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {mainProjects.map((p, i) => (
          <div key={i} className="card flex flex-col items-center relative z-10 bg-white p-6 rounded shadow-md border border-gray-100 md:min-w-[320px] md:max-w-[420px] w-full h-full">
            <img src={p.media} className="w-full h-44 object-cover rounded mb-4" />
            <h3 className="font-bold text-xl mb-2 text-center">{p.title}</h3>
            <div className="text-xs text-gray-500 mb-2">{p.date} – {p.location}</div>
            <div className="mb-3 text-sm text-gray-700 text-justify">{p.desc}</div>
            <div className="flex flex-wrap gap-2 mb-3 justify-center">
              {p.tech.map((t, j) => (
                <span key={j} className="bg-gray-100 text-xs px-2 py-1 rounded">{t}</span>
              ))}
            </div>
            {(p.github || p.video) && (
              <div className="flex gap-2 mt-2">
                {p.github && (
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-bold hover:underline relative z-20">GitHub</a>
                )}
                {p.video && (
                  <a href={p.video} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold hover:underline relative z-20">Vidéo</a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a
          href="/#/all-projects?top=true"
          className="btn-primary inline-flex items-center gap-2 py-2 px-4 rounded bg-yellow-500 text-black hover:bg-yellow-600 transition-colors cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            sessionStorage.setItem('scrollToTop', 'true');
            localStorage.setItem('allProjectsScrollTop', 'true');
            const timestamp = Date.now();
            const url = `${window.location.origin}/#/all-projects?top=true&t=${timestamp}`;
            window.location.replace(url);
          }}
        >
          <span className="font-mono tracking-wider">VOIR TOUS LES PROJETS</span>
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
