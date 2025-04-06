// MainContent.jsx
import React from 'react';

const MainContent = () => {
  // Define inline styles
  const mainStyle = {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    fontFamily: 'Arial, sans-serif',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#333',
  };

  return (
    <main style={mainStyle}>
      <p style={paragraphStyle}>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
};

export default MainContent;