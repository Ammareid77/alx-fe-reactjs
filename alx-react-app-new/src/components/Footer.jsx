import React from 'react';

const Footer = () => {
  // Inline styles
  const footerStyle = {
    backgroundColor: '#f1f1f1', // Light grey background
    textAlign: 'center',        // Center-aligned text
    padding: '20px',           // Padding around the text
    marginTop: '20px',         // Space above the footer
    borderTop: '1px solid #ccc' // Top border for separation
  };

  const textStyle = {
    color: '#333',             // Darker text color
    fontSize: '16px'          // Font size
  };

  return (
    <footer style={footerStyle}>
      <p style={textStyle}>© 2023 City Lovers</p>
    </footer>
  );
};

export default Footer;