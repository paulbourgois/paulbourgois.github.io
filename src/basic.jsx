import React from 'react';
import { createRoot } from 'react-dom/client';

// Very simple component with inline styles only
const BasicApp = () => (
  <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ color: 'black' }}>Basic React App</h1>
    <p style={{ marginBottom: '20px' }}>
      This version uses only inline styles with no CSS imports or Tailwind.
    </p>
    <button 
      style={{ 
        backgroundColor: '#ffd700',
        color: 'black',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
      }}
      onClick={() => alert('React works!')}
    >
      Test Button
    </button>
  </div>
);

// Initialize React
const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<BasicApp />);
} else {
  console.error('Root element not found');
}
