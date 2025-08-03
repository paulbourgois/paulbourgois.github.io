import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Si on a un hash (comme #about) dans l'URL
    if (hash) {
      // Attendre un peu que le DOM soit complètement chargé
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else if (pathname === '/') {
      // Si on est sur la page d'accueil sans hash, scroller au début
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};
