import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // includes Tailwind

// Préchargement des actifs critiques
const preloadAssets = () => {
  // Cette fonction peut être utilisée pour précharger des images ou d'autres ressources
  // importantes pour le premier affichage
  console.log('Préchargement des actifs terminé');
};

// Fonction de rendu optimisée
const renderApp = () => {
  const container = document.getElementById('root');
  
  if (container) {
    try {
      const root = ReactDOM.createRoot(container);
      // StrictMode désactivé en production pour éviter le double rendu
      // En développement, gardez StrictMode activé pour détecter les problèmes
      const isProduction = process.env.NODE_ENV === 'production';
      
      if (isProduction) {
        root.render(<App />);
      } else {
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      }
    } catch (error) {
      console.error('Erreur de rendu React:', error);
    }
  }
};

// Attendre que le DOM soit prêt puis rendre l'application
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    preloadAssets();
    renderApp();
  });
} else {
  // DOM déjà chargé
  preloadAssets();
  renderApp();
}
