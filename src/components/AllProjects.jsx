import React from "react";
import { useNavigate } from "react-router-dom";
import { useScrollReset } from "../hooks/useScrollReset.js";
import { useScrollToSection } from "../hooks/useScrollToSection.js";
import NavLink from "./NavLink.jsx";
import Navbar from "./Navbar.jsx";
import { allProjects, allCategories, projectsByCategory } from "../data/projects.js";

export default function AllProjects() {
  const navigate = useNavigate();

  // Utiliser notre hook de reset de scroll
  useScrollReset();

  // État pour les filtres
  const [selectedCategory, setSelectedCategory] = React.useState("Tous");
  const [filteredProjects, setFilteredProjects] = React.useState(allProjects);

  // Filtrer les projets selon la catégorie sélectionnée
  React.useEffect(() => {
    if (selectedCategory === "Tous") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(projectsByCategory(selectedCategory));
    }
  }, [selectedCategory]);

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
        <div className="text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 tracking-tight">
            Portfolio <span className="text-orange-500">Complet</span>
          </h1>
          <p className="text-black/80 text-lg md:text-xl max-w-3xl mx-auto mb-6 leading-relaxed">
            Explorez mes <span className="font-bold text-orange-600">{allProjects.length} projets</span> en robotique, intelligence artificielle et systèmes embarqués
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white/90 px-4 py-2 rounded-full shadow-md font-medium">
              🤖 Navigation Autonome
            </span>
            <span className="bg-white/90 px-4 py-2 rounded-full shadow-md font-medium">
              🧠 Machine Learning
            </span>
            <span className="bg-white/90 px-4 py-2 rounded-full shadow-md font-medium">
              🎯 Contrôle Avancé
            </span>
            <span className="bg-white/90 px-4 py-2 rounded-full shadow-md font-medium">
              🔬 Recherche
            </span>
          </div>
        </div>
      </div>

  <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <button
            className="btn-primary inline-flex items-center gap-2 py-2 px-4 rounded bg-orange-500 text-white hover:bg-orange-600 transition-colors cursor-pointer"
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

        <div className="mb-8">
          <h2 className="section-title mb-2 text-center">
            {selectedCategory === "Tous" ? "Tous mes projets" : `Projets en ${selectedCategory}`}
          </h2>
          <p className="text-center text-gray-600 mb-6">
            {filteredProjects.length} {filteredProjects.length > 1 ? "projets" : "projet"} {selectedCategory !== "Tous" && `dans cette catégorie`}
          </p>
        </div>

        {/* Filtre par menu déroulant */}
        <div className="mb-10 relative z-50">
          <div className="max-w-md mx-auto">
            <label htmlFor="category-select" className="block text-center text-sm text-gray-600 mb-3 font-medium">
              Filtrer par domaine :
            </label>
            <select
              id="category-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-700 font-semibold text-sm focus:outline-none focus:border-orange-500 hover:border-orange-400 transition-colors cursor-pointer shadow-sm relative z-50"
            >
              <option value="Tous">Tous les projets ({allProjects.length})</option>
              {allCategories.map((cat) => {
                const count = projectsByCategory(cat).length;
                return (
                  <option key={cat} value={cat}>
                    {cat} ({count})
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Grille de projets avec animation */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((p, index) => (
            <div
              key={p.id}
              className="card flex flex-col relative z-10 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image avec overlay au hover */}
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img src={p.media} alt={p.title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
              </div>

              {/* Contenu */}
              <div className="flex-grow flex flex-col">
                <h3 className="font-bold text-lg mb-2 text-gray-900">{p.title}</h3>
                <div className="text-xs text-gray-500 mb-3 flex items-center gap-2">
                  <span>📅 {p.date}</span>
                  <span>•</span>
                  <span>📍 {p.location}</span>
                </div>
                <p className="mb-3 text-sm text-gray-700 leading-relaxed">{p.desc}</p>

                {/* Résultats quantifiés - Version dense avec puces vertes */}
                {p.results && p.results.length > 0 && (
                  <div className="mb-3 space-y-1">
                    {p.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.slice(0, 5).map((t, j) => (
                    <span key={j} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 5 && (
                    <span className="text-xs text-gray-500 self-center">+{p.tech.length - 5}</span>
                  )}
                </div>

                {/* Liens */}
                <div className="mt-auto pt-3 border-t border-gray-100">
                  <div className="flex gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-semibold text-sm transition-colors"
                      >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {p.video && (
                      <a
                        href={p.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
                      >
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                        </svg>
                        Démo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Aucun projet trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
}
