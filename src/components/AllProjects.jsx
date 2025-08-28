import React from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReset } from "../hooks/useScrollReset.js";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import NavLink from "./NavLink.jsx";
import Navbar from "./Navbar.jsx";

const allProjects = [
  // Projets principaux
  {
    title: "Responsable projet au club tech",
    date: "2024-2025",
    location: "CentraleSupélec",
    desc: "Gestion et coordination d'une équipe de 15 étudiants pour la réalisation de projets robotiques innovants, avec planification, suivi et validation des résultats.",
    tech: ["Gestion", "Leadership", "Communication", "Organisation", "Suivi", "Validation", "Formation", "Documentation"],
    media: "/src/assets/club-tech.png",
    // github: "https://github.com/paulbourgois/tech-club-projects",
    video: "https://www.youtube.com/watch?v=video1",
    main: false
  },
  {
    title: "Drone roulant sur les murs",
    date: "2023",
    location: "Collège Stanislas",
    desc: "Conception d'un drone hybride capable de rouler sur les murs grâce à un système d'adhérence innovant. Intégration de capteurs et développement d'algorithmes de contrôle adaptatifs.",
    tech: ["Mécanique", "Électronique", "Contrôle", "Capteurs", "Stabilisation", "Tests", "Sécurité", "PID"],
    media: "/drone_roulant.png",
    // github: "https://github.com/paulbourgois/wall-drone"
    video: "https://www.youtube.com/watch?v=video2",
  },
  {
    title: "Bras 4 axes: Pick & Place",
    date: "2025",
    location: "CentraleSupélec",
    desc: "Développement complet d'un bras robotique 4 axes: cinématique inverse, génération de trajectoire, contrôleur, fusion de capteurs et simulation Mujoco pour un contrôle basé sur le modèle dynamique.",
    tech: ["Dynamique & Cinématique", "Trajectoire", "Contrôle", "Simulation", "Fusion capteurs", "MATLAB & Simulink"],
    media: "/bras_robot_4_axes.png",
    // github: "https://github.com/paulbourgois/robot-arm"
    video: "https://www.youtube.com/watch?v=video3",
  },
  {
    title: "ML pipeline pour analyse satellite",
    date: "2023",
    location: "Projet académique",
    desc: "Développement d'un pipeline d'apprentissage automatique pour détecter les états de construction des bâtiments à partir d'images satellite, avec une précision de 94%.",
    tech: ["Python", "Features Engineering", "Modélisation", "Évaluation", "Optimisation", "TensorFlow"],
    media: "/ML_building.jpg",
    // github: "https://github.com/paulbourgois/satellite-ml"
    video: "https://www.youtube.com/watch?v=video4",
  },
  {
    title: "Simulation de marche bipède",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Modélisation et contrôle d'un robot bipède dans le simulateur Mujoco. Conception d'une loi de commande basée sur l'énergie pour une marche stable et efficiente.",
    tech: ["Modélisation", "Commande", "Mujoco", "Optimisation", "Python"],
    media: "/simu_mujoco.png",
    // github: "https://github.com/paulbourgois/bipede-simulation"
    video: "https://www.youtube.com/watch?v=video5",
  },
  {
    title: "Hackaton Exolegend",
    date: "2025",
    location: "Lyon",
    desc: "Compétition dédié aux étudiants et ingénieur, organisé par Exotec. L'objectif est de développer des algorithmes de navigation et d'attaque/défense dans un labyrinthe remplie de défis où il faut survivre à son rétrécissement et à l'adversaire.",
    tech: ["C++", "Navigation", "Compétition", "Résultat : 4e des poules"],
    media: "/hackaton.png",
    // github: "https://github.com/paulbourgois/robotics-cup-pcb"
    // Pas de vidéo pour ce projet
  },
  {
    title: "PCB design: Coupe de France de Robotique",
    date: "2023",
    location: "ClubTech CentraleSupélec",
    desc: "Conception et fabrication de cartes électroniques pour le robot participant à la Coupe de France de Robotique, incluant les systèmes de contrôle, puissance et communication.",
  tech: ["EasyEDA", "Composants", "Prototypage", "Soudure"],
    media: "/pcb_coupe_de_france_de_robotique.png",
    // github: "https://github.com/paulbourgois/robotics-cup-pcb"
  },
  
  // Projets secondaires
  {
    title: "Robot suiveur de personne",
    date: "2024",
    location: "Projet personnel",
    desc: "Conception d'un robot autonome capable de suivre une personne en temps réel en utilisant des techniques de vision par ordinateur et des capteurs de proximité.",
    tech: ["Arduino", "Raspberry Pi", "OpenCV", "Électronique", "Management", "Gestion d'obstacle"],
    media: "/robot_follower.png",
    // github: "https://github.com/paulbourgois/person-follower-robot",
    main: false
  },
  {
    title: "Robot suiveur de ligne",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Développement d'un robot capable de suivre une ligne avec précision en utilisant des capteurs IR et un algorithme PID optimisé pour une navigation fluide.",
    tech: ["Arduino", "Raspberry Pi", "Capteurs", "Navigation", "OpenCV"],
    media: "/src/assets/line-follower.png",
    // github: "https://github.com/paulbourgois/line-follower-robot",
    main: false
  },
  {
    title: "Contrôle d'une flotte robotique",
    date: "2025",
    location: "Projet de recherche",
    desc: "Développement d'algorithmes pour la coordination d'une flotte de robots mobiles autonomes dans un environnement dynamique avec évitement d'obstacles.",
    tech: ["Contrôle en flotte", "Python", "Simulation", "Multi-agent"],
    media: "/flotte_drone.png",
    // github: "https://github.com/paulbourgois/robot-fleet-control",
    video: "https://youtu.be/K5wdbUqg6o0",
    main: false
  },
  // {
  //   title: "TSMQ",
  //   date: "2023",
  //   location: "Projet académique",
  //   desc: "Implémentation et optimisation d'un algorithme Tree-Structured Monte Carlo Quantization pour la compression efficace de modèles d'apprentissage profond.",
  //   tech: ["Python", "PyTorch", "Quantization", "Deep Learning"],
  //   media: "/src/assets/tsmq.png",
  //   github: "https://github.com/paulbourgois/tsmq-implementation",
  //   main: false
  // },
  {
    title: "Auto-SLAM",
    date: "2025",
    location: "Projet de recherche",
    desc: "Développement d'un système SLAM (Simultaneous Localization and Mapping) autonome utilisant des techniques d'apprentissage par renforcement pour optimiser la cartographie.",
    tech: ["Python & C++", "ROS2", "SLAM", "Computer Vision"],
    media: "/src/assets/auto-slam.png",
    github: "https://github.com/paulbourgois/auto-slam",
    main: false
  },
  {
    title: "IoT pour la robotique",
    date: "2024",
    location: "Projet de recherche",
    desc: "Développement d'algorithmes de navigation sur un turtlebot 3, en utilisant le framework Zenoh pour la communication IoT. Tout cela mis en place sur ROS2.",
    tech: ["Python", "ROS2", "Zenoh", "IoT", "Navigation"],
    media: "/turtlebot.png",
    // github: "https://github.com/paulbourgois/iot-robotics",
    video : "https://youtu.be/1pFlS0Vp21k",
    main: false
  }
];

export default function AllProjects() {
  const navigate = useNavigate();
  
  // Utiliser notre hook de reset de scroll
  useScrollReset();
  
  // Solution combinée pour forcer le scroll au début
  const [isFixed, setIsFixed] = React.useState(true);
  
  React.useEffect(() => {
    // Fonction pour forcer le scroll haut avec toutes les méthodes connues
    const forceScrollTop = () => {
      console.log("AllProjects: Forçage du scroll vers le haut");
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Utiliser requestAnimationFrame pour assurer que le scroll
      // se produit après les calculs de mise en page
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    };
    
    // Injecter un script qui s'exécute immédiatement
    const script = document.createElement('script');
    script.textContent = `
      // Forcer le scroll immédiatement
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    `;
    document.head.appendChild(script);
    
    // Forcer le scroll au départ
    forceScrollTop();
    
    // Nettoyer le flag de session s'il existe
    if (sessionStorage.getItem('scrollToTop') === 'true') {
      sessionStorage.removeItem('scrollToTop');
    }
    
    // Utiliser plusieurs appels avec délai pour garantir le scroll top
    const timers = [
      setTimeout(forceScrollTop, 0),
      setTimeout(forceScrollTop, 50),
      setTimeout(() => {
        forceScrollTop();
        // Libérer la position fixe après que tout soit bien scrollé
        setIsFixed(false);
      }, 150),
      // Un dernier appel pour être sûr
      setTimeout(forceScrollTop, 300)
    ];
    
    // Nettoyage des timers et du script
    return () => {
      timers.forEach(clearTimeout);
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);
  
  // Si on vient d'un clic sur "Voir tous les projets", on affiche d'abord une version fixe
  const pageStyle = isFixed ? { 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  } : {};
  
  return (
    <div className="min-h-screen" style={pageStyle}>
      {/* Ancre invisible avec id pour les liens d'ancrage */}
      <div id="top" style={{ height: 0, width: 0, position: 'absolute', top: 0 }}></div>
      
      <Navbar />
      <div className="hero-gradient py-20 flex flex-col items-center justify-center relative">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Tous mes projets</h1>
        <p className="text-black/80 text-xl max-w-2xl text-center">
          Explorer l'ensemble de mes projets en robotique, intelligence artificielle et systèmes embarqués
        </p>
      </div>
      
  <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="mb-8">
          <button 
            className="btn-primary inline-flex items-center gap-2 py-2 px-4 rounded bg-yellow-500 text-black hover:bg-yellow-600 transition-colors cursor-pointer"
            onClick={() => {
              window.open(`${window.location.origin}/`, "_self");
            }}
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"/>
            </svg>
            <span className="font-mono tracking-wider">RETOUR À L'ACCUEIL</span>
          </button>
        </div>
        <h2 className="section-title mb-8">Tous les projets</h2>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {allProjects.map((p, i) => (
            <div key={i} className="card flex flex-col items-center relative z-10 bg-white p-6 rounded shadow-md border border-gray-100 w-full h-full">
              <img src={p.media} className="w-full h-40 object-cover rounded mb-4" />
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
      </div>
    </div>
  );
}
