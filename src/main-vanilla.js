import React from 'react';
import { createRoot } from 'react-dom/client';

// Create a simple component - using createElement instead of JSX
const SimpleApp = () => {
  return React.createElement('div', 
    { 
      style: { 
        padding: '2rem', 
        maxWidth: '800px', 
        margin: '0 auto', 
        fontFamily: 'Arial, sans-serif' 
      } 
    },
    React.createElement('h1', null, 'Simple React App (No JSX)'),
    React.createElement('p', null, 'This is a basic React app using createElement instead of JSX.'),
    React.createElement(
      'button',
      { 
        style: { 
          background: '#ffd700', 
          border: 'none', 
          padding: '0.5rem 1rem', 
          borderRadius: '4px',
          cursor: 'pointer'
        },
        onClick: () => alert('React is working!')
      },
      'Click me'
    )
  );
};

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root');
  
  if (container) {
    const root = createRoot(container);
    root.render(React.createElement(SimpleApp));
    console.log('React app rendered with createElement');
  } else {
    console.error('Root element not found');
  }
});
