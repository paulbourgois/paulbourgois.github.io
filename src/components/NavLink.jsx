import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Composant personnalisé pour les liens de navigation
// Ce composant permet de gérer le défilement vers les sections ancrées
export default function NavLink({ to, children, className, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = (e) => {
    // Si c'est un lien vers une ancre sur la page d'accueil
    if (to.startsWith('/#')) {
      e.preventDefault(); // Empêcher la navigation par défaut
      
      // Extraire l'ID de la section cible
      const id = to.replace('/#', '');
      
      // Vérifier si nous sommes sur la page "/all-projects"
      if (location.pathname === '/all-projects' || location.hash.includes('/all-projects')) {
        console.log("Redirection depuis AllProjects vers l'accueil avec ancre:", id);
        
        // Approche radicale mais efficace : utiliser window.open pour ouvrir
        // l'URL dans la même fenêtre/onglet
        window.open(`${window.location.origin}/#${id}`, "_self");
        return;
      } else if (location.pathname === '/' || location.pathname === '') {
        // Si nous sommes sur la page d'accueil, faire défiler jusqu'à l'élément
        const element = document.getElementById(id);
        
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          // Mettre à jour l'URL sans rafraîchir la page
          window.history.replaceState(null, '', `/#${id}`);
        }
      } else {
        // Pour toute autre page
        window.open(`${window.location.origin}/#${id}`, "_self");
        return;
      }
      
      // Si une fonction onClick a été fournie, l'exécuter
      if (onClick) onClick();
    } else if (onClick) {
      // Sinon, juste exécuter la fonction onClick
      onClick();
    }
  };
  
  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
}
