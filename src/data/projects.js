// Données centralisées de tous les projets
// Ordre optimisé : projets les plus impressionnants en premier
export const allProjects = [
  {
    id: 1,
    title: "Responsable Navigation",
    date: "2025-2026",
    location: "Association Xplore - EPFL",
    desc: "Responsable d'une équipe d'étudiants pour développer la navigation autonome d'un rover martien pour la compétition European Rover Challenge 2026.",
    tech: ["ROS2", "C++", "Python", "SLAM", "GLIM", "Path Planning", "Obstacle Avoidance", "Capteurs", "Simulation Gazebo"],
    category: ["Navigation", "ROS2", "SLAM", "Autonome"],
    media: "/xplore_rover.png",
    results: [
      "Navigation autonome sur terrain accidenté",
      "Plusieurs systèmes de localisation en environnement GPS-denied",
      "Participation à la compétition European Rover Challenge 2026"
    ],
    isMain: true,
    priority: 1,
    github: null,
    video: null
  },
  {
    id: 3,
    title: "Bras robotique 4 axes: Pick & Place",
    date: "2025",
    location: "CentraleSupélec",
    desc: "Développement complet d'un bras robotique 4 axes: cinématique inverse, génération de trajectoire, contrôleur, fusion de capteurs et simulation Mujoco pour un contrôle basé sur le modèle dynamique.",
    tech: ["Dynamique & Cinématique", "Trajectoire", "Contrôle", "Simulation", "Fusion capteurs", "MATLAB & Simulink"],
    category: ["Contrôle", "Simulation", "Manipulation"],
    media: "/bras_robot_4_axes.png",
    results: [
      "Précision de positionnement: ±5mm",
      "Temps de cycle pick & place: 5s",
      "Contrôle basé sur le modèle dynamique"
    ],
    isMain: true,
    priority: 2,
    github: null,
    video: "https://youtu.be/mtQlz-cu4vM"
  },
  {
    id: 4,
    title: "ML Pipeline pour capteur de force EIT",
    date: "2025",
    location: "EPFL",
    desc: "Développement d'un pipeline de machine learning pour mesurer la force, l'humidité et la température à partir de la technologie d'un capteur EIT (Electrical Impedance Tomography).",
    tech: ["Machine Learning", "Modélisation", "Évaluation", "Optimisation", "Python", "PyTorch", "MATLAB"],
    category: ["Machine Learning", "Capteurs"],
    media: "/tongue_ml_pipeline.png",
    results: [
      "Précision de mesure de force: En cours",
      "Obtention de plusieurs mesures depuis un unique signal (force + humidité + température)",
      "Modèle optimisé pour hardware embarqué"
    ],
    isMain: true,
    priority: 3,
    github: null,
    video: null
  },
  {
    id: 6,
    title: "Hackaton Exolegend",
    date: "2025",
    location: "Lyon",
    desc: "Compétition de 50 équipes dédiée aux étudiants et ingénieurs en temps limité, organisée par Exotec. Développement d'algorithmes de navigation et d'attaque/défense dans un labyrinthe dynamique.",
    tech: ["C++", "Navigation", "Path Planning", "Stratégie"],
    category: ["Navigation", "Compétition"],
    media: "/hackaton_studio.png",
    results: [
      "4e place des phases de poules",
      "8e de finale sur 50 équipes",
      "Algorithme de navigation réactif en temps réel"
    ],
    isMain: true,
    priority: 4,
    github: null,
    video: "https://youtu.be/HSmmnKxPebI"
  },
  {
    id: 5,
    title: "Simulation de marche bipède",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Modélisation et contrôle d'un robot bipède dans le simulateur Mujoco. Conception d'une loi de commande basée sur l'énergie pour une marche stable et efficace.",
    tech: ["Modélisation", "Commande", "Mujoco", "Optimisation", "Python"],
    category: ["Simulation", "Contrôle", "Locomotion"],
    media: "/simu_mujoco.png",
    results: [
      "Preuve de fonctionnement via les premiers pas consécutifs",
      "Efficacité énergétique améliorée par rapport aux approches actuelles de contrôle par RL",
      "Base pour futurs travaux en locomotion bipède"
    ],
    isMain: true,
    priority: 5,
    github: null,
    video: "https://youtu.be/cXNZm2OqueM"
  },
  {
    id: 2,
    title: "Responsable projets",
    date: "2024-2025",
    location: "Association ClubTech - CentraleSupélec",
    desc: "Création, gestion et coordination d'une équipe de 10+ étudiants pour la réalisation de projets techniques en parallèle, avec planification, suivi et validation des résultats.",
    tech: ["Gestion", "Leadership", "Communication", "Organisation", "Suivi", "Validation", "Formation", "Documentation"],
    category: ["Management", "Leadership"],
    media: "/gala_sourire.jpg",
    results: [
      "Création, gestion, coordination et présentation du pôle lors du gala annuel rassemblant 100+ personnes",
      "10+ étudiants encadrés et motivés",
      "10+ projets robotiques menés à terme",

    ],
    isMain: true,
    priority: 6,
    github: null,
    video: null
  },
  {
    id: 7,
    title: "PCB Design: Coupe de France de Robotique",
    date: "2023",
    location: "ClubTech CentraleSupélec",
    desc: "Conception et fabrication de cartes électroniques pour le robot participant à la Coupe de France de Robotique, incluant les systèmes de contrôle, puissance et communication.",
    tech: ["EasyEDA", "PCB Design", "Électronique", "Prototypage", "Soudure"],
    category: ["Hardware", "Électronique"],
    media: "/pcb_coupe_de_france_de_robotique.png",
    results: [
      "3 PCB conçus et fabriqués",
      "Système de contrôle moteur robuste",
      "Communication CAN bus fiable"
    ],
    isMain: false,
    github: null,
    video: null
  },
  {
    id: 8,
    title: "Drone roulant sur les murs",
    date: "2023",
    location: "Collège Stanislas",
    desc: "Conception d'un drone hybride capable de rouler sur les murs grâce à un système d'adhérence innovant. Intégration de capteurs et développement d'algorithmes de contrôle adaptatifs.",
    tech: ["Mécanique", "Électronique", "Contrôle", "Capteurs", "Stabilisation", "PID"],
    category: ["Drone", "Contrôle", "Innovation"],
    media: "/drone_roulant.png",
    results: [
      "Adhérence verticale fonctionnelle",
      "Transition air-mur automatisée",
      "Contrôle de stabilité PID optimisé"
    ],
    isMain: false,
    github: null,
    video: null
  },
  {
    id: 9,
    title: "Robot suiveur de personne",
    date: "2024",
    location: "Projet personnel",
    desc: "Conception d'un robot autonome capable de suivre une personne en temps réel en utilisant des techniques de vision par ordinateur et des capteurs de proximité.",
    tech: ["Arduino", "Raspberry Pi", "OpenCV", "Computer Vision", "Suivi d'objets"],
    category: ["Computer Vision", "Autonome"],
    media: "/robot_follower.png",
    results: [
      "Détection de personne en temps réel (30 FPS)",
      "Suivi stable jusqu'à 5m de distance",
      "Évitement d'obstacles dynamique"
    ],
    isMain: false,
    github: null,
    video: null
  },
  {
    id: 10,
    title: "Robot suiveur de ligne",
    date: "2024",
    location: "CentraleSupélec",
    desc: "Développement d'un robot capable de suivre une ligne avec précision en utilisant des capteurs IR et un algorithme PID optimisé pour une navigation fluide.",
    tech: ["Arduino", "Raspberry Pi", "Capteurs IR", "Navigation", "PID"],
    category: ["Navigation", "Contrôle"],
    media: "/robot_follower_bis.png",
    results: [
      "Vitesse moyenne: 0.8 m/s",
      "Erreur de trajectoire < 2cm",
      "Parcours complexe réussi à 95%"
    ],
    isMain: false,
    github: null,
    video: null
  },
  {
    id: 11,
    title: "Contrôle d'une flotte de drones",
    date: "2025",
    location: "Projet de recherche",
    desc: "Développement d'algorithmes pour la coordination d'une flotte de drones mobiles autonomes dans un environnement dynamique avec évitement d'obstacles et formations coordonnées.",
    tech: ["Contrôle en flotte", "Python", "Simulation", "Multi-agent", "Coordination"],
    category: ["Multi-agent", "Drone", "Autonome"],
    media: "/flotte_drone.png",
    results: [
      "Coordination de 5+ drones simultanément",
      "Formation maintenue avec précision ±10cm",
      "Évitement de collisions inter-agents"
    ],
    isMain: false,
    github: null,
    video: "https://youtu.be/K5wdbUqg6o0"
  },
  // {
  //   id: 12,
  //   title: "Auto-SLAM",
  //   date: "2025",
  //   location: "Projet de recherche",
  //   desc: "Développement d'un système SLAM (Simultaneous Localization and Mapping) autonome utilisant des techniques d'apprentissage par renforcement pour optimiser la cartographie et l'exploration.",
  //   tech: ["Python", "C++", "ROS2", "SLAM", "Computer Vision", "Reinforcement Learning"],
  //   category: ["SLAM", "ROS2", "Machine Learning"],
  //   media: "/src/assets/auto-slam.png",
  //   results: [
  //     "Cartographie autonome d'environnements inconnus",
  //     "Optimisation de trajectoire d'exploration",
  //     "Précision de localisation < 5cm"
  //   ],
  //   isMain: false,
  //   github: "https://github.com/paulbourgois/auto-slam",
  //   video: null
  // },
  {
    id: 13,
    title: "IoT pour la robotique",
    date: "2024",
    location: "Projet de recherche",
    desc: "Développement d'algorithmes de navigation sur un turtlebot 3, en utilisant le framework Zenoh pour la communication IoT. Architecture distribuée pour robotique en réseau.",
    tech: ["Python", "ROS2", "Zenoh", "IoT", "Navigation", "Communication"],
    category: ["ROS2", "IoT", "Navigation"],
    media: "/turtlebot.png",
    results: [
      "Communication temps réel via Zenoh",
      "Latence de communication < 10ms",
      "Navigation collaborative multi-robots"
    ],
    isMain: false,
    github: null,
    video: "https://youtu.be/1pFlS0Vp21k"
  }
];

// Filtrer les projets principaux
export const mainProjects = allProjects.filter(p => p.isMain);

// Extraire toutes les catégories uniques
export const allCategories = [...new Set(allProjects.flatMap(p => p.category))].sort();

// Grouper les projets par catégorie
export const projectsByCategory = (category) => {
  if (category === "Tous") return allProjects;
  return allProjects.filter(p => p.category.includes(category));
};
