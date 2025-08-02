import React from 'react';
import ReactDOM from 'react-dom/client';

// A simple test component to verify React is working
function Test() {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '600px',
      margin: '0 auto' 
    }}>
      <h1>React Test Component</h1>
      <p>If you can see this, React is working correctly!</p>
      <p>The issue might be in one of your components.</p>
      <p>Check the browser console for any errors.</p>
    </div>
  );
}

// Only use this for testing
export default Test;
