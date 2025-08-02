import React from 'react';
import { createRoot } from 'react-dom/client';

console.log('alternate.jsx is executing');

// Create a simple component
const AlternateApp = () => {
  return React.createElement('div', 
    { 
      style: { 
        padding: '2rem', 
        maxWidth: '800px', 
        margin: '0 auto', 
        fontFamily: 'Arial, sans-serif' 
      } 
    },
    React.createElement('h1', null, 'Alternate React App'),
    React.createElement('p', null, 'This is an alternate version for testing.'),
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
        onClick: () => alert('Alternate version works!')
      },
      'Test Button'
    )
  );
};

// Render immediately
const container = document.getElementById('root');
console.log('Root element in alternate:', container);

if (container) {
  try {
    const root = createRoot(container);
    root.render(React.createElement(AlternateApp));
    console.log('Alternate React rendered successfully');
  } catch (error) {
    console.error('Error rendering alternate React:', error);
  }
} else {
  console.error('Root element not found in alternate');
}
