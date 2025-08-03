import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook pour réinitialiser la position de défilement lors de la navigation
 * Fonctionne particulièrement pour les routes AllProjects
 */
export const useScrollReset = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    // Fonction pour forcer le scroll vers le haut avec toutes les méthodes connues
    const forceScrollTop = () => {
      console.log(`useScrollReset: Forçage du scroll vers le haut (${pathname}${hash})`);
      
      // Méthode principale
      window.scrollTo(0, 0);
      
      // Méthodes alternatives pour différents navigateurs
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      
      // Utiliser requestAnimationFrame pour s'assurer que le scroll
      // se produit après les calculs de mise en page
      requestAnimationFrame(() => {
        window.scrollTo(0, 0);
        if (document.documentElement) document.documentElement.scrollTop = 0;
        if (document.body) document.body.scrollTop = 0;
      });
    };
    
    // Si c'est la page AllProjects, forcer le scroll haut
    if (pathname === '/all-projects' || hash.includes('/all-projects')) {
      forceScrollTop();
      
      // Plusieurs appels pour être sûr
      const timers = [
        setTimeout(forceScrollTop, 0),
        setTimeout(forceScrollTop, 50),
        setTimeout(forceScrollTop, 150)
      ];
      
      return () => timers.forEach(clearTimeout);
    }
    
    // Pour les autres pages, vérifier si on a un hash (ancre)
    if (hash && !hash.startsWith('#/')) {
      // Trouver l'élément correspondant à l'ancre
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Attendre que le DOM soit complètement chargé
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Si pas d'élément avec cette ancre, remonter en haut
        forceScrollTop();
      }
    } else if (!hash || hash === '#/') {
      // Pour les autres cas (pas d'ancre), remonter en haut
      forceScrollTop();
    }
  }, [pathname, hash]);
};
