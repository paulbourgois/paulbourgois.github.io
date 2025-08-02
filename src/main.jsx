import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css'; // includes Tailwind

console.log('main.jsx is executing');

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded in main.jsx');
  const container = document.getElementById('root');
  console.log('Root element:', container);
  
  if (container) {
    try {
      const root = ReactDOM.createRoot(container);
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log('React rendered successfully');
    } catch (error) {
      console.error('Error rendering React:', error);
    }
  } else {
    console.error('Root element not found');
  }
});
