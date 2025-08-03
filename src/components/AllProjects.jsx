import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import Navbar from "./Navbar.jsx";

const allProjects = [
  // Projets principaux
  {
    title: "Drone roulant sur les murs",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Conception d'un drone hybride capable de rouler sur les murs grâce à un système d'adhérence innovant. Intégration de capteurs et développement d'algorithmes de contrôle adaptatifs.",
    tech: ["ROS2", "Python", "SLAM", "Conception mécanique"],
    media: "/src/assets/drone-mur.png",
    github: "https://github.com/paulbourgois/wall-drone",
    main: true
  },
  {
    title: "Bras robotique 4 axes Pick & Place",
    date: "2023",
    location: "CentraleSupélec",
    desc: "Développement complet d'un bras robotique 4 axes: cinématique inverse, génération de trajectoire, contrôleur, fusion de capteurs et simulation Mujoco pour un contrôle basé sur le modèle dynamique.",
    tech: ["MATLAB", "Mujoco", "Contrôle", "Fusion capteurs"],
    media: "/src/assets/robotarm.png",
    github: "https://github.com/paulbourgois/robot-arm",
    main: true
  },
  {
    title: "ML pipeline pour analyse satellite",
    date: "2023",
    location: "Projet académique",
    desc: "Développement d'un pipeline d'apprentissage automatique pour détecter les états de construction des bâtiments à partir d'images satellite, avec une précision de 94%.",
    tech: ["Python", "TensorFlow", "Computer Vision", "GIS"],
    media: "/src/assets/ml-satellite.png", 
    github: "https://github.com/paulbourgois/satellite-ml",
    main: true
  },
  {
    title: "Simulation de marche bipède",
    date: "2022",
    location: "Laboratoire de recherche",
    desc: "Modélisation et contrôle d'un robot bipède dans le simulateur Mujoco. Conception d'une loi de commande basée sur l'énergie pour une marche stable et efficiente.",
    tech: ["Python", "Mujoco", "Dynamique", "Contrôle optimal"],
    media: "/src/assets/bipede.png",
    github: "https://github.com/paulbourgois/bipede-simulation",
    main: true
  },
  
  // Projets secondaires
  {
    title: "Robot suiveur de personne",
    date: "2023",
    location: "Projet personnel",
    desc: "Conception d'un robot autonome capable de suivre une personne en temps réel en utilisant des techniques de vision par ordinateur et des capteurs de proximité.",
    tech: ["Arduino", "Raspberry Pi", "OpenCV", "Électronique"],
    media: "/src/assets/robot-suiveur.png",
    github: "https://github.com/paulbourgois/person-follower-robot",
    main: false
  },
  {
    title: "Robot suiveur de ligne",
    date: "2022",
    location: "CentraleSupélec",
    desc: "Développement d'un robot capable de suivre une ligne avec précision en utilisant des capteurs IR et un algorithme PID optimisé pour une navigation fluide.",
    tech: ["Arduino", "PID", "Capteurs", "Navigation"],
    media: "/src/assets/line-follower.png",
    github: "https://github.com/paulbourgois/line-follower-robot",
    main: false
  },
  {
    title: "Asservissement bras exosquelettes",
    date: "2023",
    location: "Laboratoire biomécanique",
    desc: "Génération de loi de commande et contrôleur pour l'asservissement précis d'un bras exosquelette, permettant une assistance naturelle au mouvement humain.",
    tech: ["Matlab", "Simulink", "Contrôle", "Biomécanique"],
    media: "/src/assets/exosquelette.png",
    github: "https://github.com/paulbourgois/exo-arm-control",
    main: false
  },
  {
    title: "PCB pour Coupe de France de Robotique",
    date: "2023-2024",
    location: "Club robotique",
    desc: "Conception et fabrication de cartes électroniques pour le robot participant à la Coupe de France de Robotique, incluant les systèmes de contrôle, puissance et communication.",
    tech: ["KiCad", "Altium", "Électronique", "Microcontrôleurs"],
    media: "/src/assets/pcb-coupe.png",
    github: "https://github.com/paulbourgois/robotics-cup-pcb",
    main: false
  },
  {
    title: "Contrôle d'une flotte robotique",
    date: "2022",
    location: "Projet de recherche",
    desc: "Développement d'algorithmes pour la coordination d'une flotte de robots mobiles autonomes dans un environnement dynamique avec évitement d'obstacles.",
    tech: ["ROS", "Python", "Navigation", "Multi-agent"],
    media: "/src/assets/flotte-robotique.png",
    github: "https://github.com/paulbourgois/robot-fleet-control",
    main: false
  },
  {
    title: "Responsable projet au club tech",
    date: "2022-2024",
    location: "CentraleSupélec",
    desc: "Gestion et coordination d'une équipe de 15 étudiants pour la réalisation de projets robotiques innovants, avec planification, suivi et présentation des résultats.",
    tech: ["Gestion de projet", "Leadership", "Robotique", "Communication"],
    media: "/src/assets/club-tech.png",
    github: "https://github.com/paulbourgois/tech-club-projects",
    main: false
  },
  {
    title: "TSMQ",
    date: "2023",
    location: "Projet académique",
    desc: "Implémentation et optimisation d'un algorithme Tree-Structured Monte Carlo Quantization pour la compression efficace de modèles d'apprentissage profond.",
    tech: ["Python", "PyTorch", "Quantization", "Deep Learning"],
    media: "/src/assets/tsmq.png",
    github: "https://github.com/paulbourgois/tsmq-implementation",
    main: false
  },
  {
    title: "Auto-SLAM",
    date: "2024",
    location: "Projet de recherche",
    desc: "Développement d'un système SLAM (Simultaneous Localization and Mapping) autonome utilisant des techniques d'apprentissage par renforcement pour optimiser la cartographie.",
    tech: ["Python", "ROS", "Reinforcement Learning", "Computer Vision"],
    media: "/src/assets/auto-slam.png",
    github: "https://github.com/paulbourgois/auto-slam",
    main: false
  }
];

export default function AllProjects() {
  const navigate = useNavigate();
  // Utiliser notre hook personnalisé pour le défilement
  useScrollToSection();
  
  // Faire défiler la page vers le haut au chargement du composant
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="hero-gradient py-20 flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Tous mes projets</h1>
        <p className="text-black/80 text-xl max-w-2xl text-center">
          Explorer l'ensemble de mes projets en robotique, intelligence artificielle et systèmes embarqués
        </p>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/" className="btn-primary inline-flex items-center gap-2 py-2 px-4 rounded bg-yellow-500 text-black hover:bg-yellow-600 transition-colors cursor-pointer">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
            </svg>
            <span className="font-mono tracking-wider">RETOUR À L'ACCUEIL</span>
          </Link>
        </div>
        
        <h2 className="section-title mb-8">Projets Principaux</h2>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {allProjects.filter(p => p.main).map((p, i) => (
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
        
        <h2 className="section-title mb-8">Autres Projets</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {allProjects.filter(p => !p.main).map((p, i) => (
            <div key={i} className="card flex flex-col items-center relative z-10 bg-white p-4 rounded shadow-sm border border-gray-100">
              <img src={p.media} className="w-full h-32 object-cover rounded mb-3" />
              <h3 className="font-bold text-lg mb-1">{p.title}</h3>
              <div className="text-xs text-gray-500 mb-2">{p.date} – {p.location}</div>
              <div className="mb-2 text-center text-xs">{p.desc}</div>
              <div className="flex flex-wrap gap-1 mb-2">
                {p.tech.map((t, j) => (
                  <span key={j} className="bg-gray-100 text-xs px-1.5 py-0.5 rounded">{t}</span>
                ))}
              </div>
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-yellow-500 font-bold hover:underline relative z-20">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
