import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToSection = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    // Log pour débogage
    console.log("useScrollToSection effect:", { hash, pathname });
    
    // Si on a un hash (comme #about) dans l'URL
    if (hash) {
      // Attendre un peu que le DOM soit complètement chargé
      setTimeout(() => {
        const id = hash.replace('#', '');
        console.log("Trying to scroll to element with id:", id);
        const element = document.getElementById(id);
        if (element) {
          console.log("Element found, scrolling to:", id);
          element.scrollIntoView({ behavior: 'smooth' });
          
          // S'assurer que l'URL est correctement mise à jour
          if (window.location.hash !== hash) {
            console.log("Updating URL hash to:", hash);
            window.history.replaceState(null, '', `${pathname}${hash}`);
          }
        } else {
          console.warn(`Element with id "${id}" not found in DOM`);
        }
      }, 300); // Augmenter le délai pour assurer que les éléments sont chargés
    } else if (pathname === '/') {
      // Si on est sur la page d'accueil sans hash, scroller au début
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};
