import React from 'react';
import { Link } from 'react-router-dom';

// Composant personnalisé pour les liens de navigation
// Ce composant permet de gérer le défilement vers les sections ancrées
export default function NavLink({ to, children, className, onClick }) {
  const handleClick = (e) => {
    // Si c'est un lien vers une ancre sur la même page
    if (to.startsWith('/#') && window.location.pathname === '/') {
      e.preventDefault(); // Empêcher la navigation par défaut
      
      // Extraire l'ID de la section cible
      const id = to.replace('/#', '');
      const element = document.getElementById(id);
      
      // Faire défiler jusqu'à l'élément cible
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Mettre à jour l'URL sans rafraîchir la page
        window.history.pushState(null, '', to);
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
