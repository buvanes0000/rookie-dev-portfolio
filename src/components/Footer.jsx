// src/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.facebook.com/profile.php?id=61558372202884" target="_blank" rel="noopener noreferrer" className="footer-icon facebook">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      
        <a href="https://www.linkedin.com/in/buvaneswaran-v-07013518b" target="_blank" rel="noopener noreferrer" className="footer-icon linkedin">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/buvanes0000" target="_blank" rel="noopener noreferrer" className="footer-icon github">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="mailto:buvanesh454@gmail.com" className="footer-icon google">
          <FontAwesomeIcon icon={faGoogle} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
