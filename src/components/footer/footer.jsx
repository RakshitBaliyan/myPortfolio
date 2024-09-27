import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={iconContainerStyle}>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/rakshitbaliyan61/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={iconStyle} />
        </a>
        {/* GitHub */}
        <a href="https://github.com/RakshitBaliyan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={iconStyle} />
        </a>
        {/* Instagram */}
        <a href="https://www.instagram.com/_rakshitbaliyan" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
        </a>
      </div>
      <p style={textStyle}>Developed by Rakshit Baliyan</p>
    </footer>
  );
};

// Inline styles for footer
const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '20px 0',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

const iconContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '10px',
};

const iconStyle = {
  color: '#fff',
  margin: '0 15px',
  fontSize: '24px',
  transition: 'color 0.3s ease',
};

const textStyle = {
  marginTop: '10px',
  fontSize: '16px',
};

// Export Footer Component
export default Footer;
