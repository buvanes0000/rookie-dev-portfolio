import React from 'react';
import { FaFacebook, FaInstagram, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2 style={{fontFamily:"Pacifico, cursive"}}>Rookie Dev</h2>
        </div>
        <div className="footer-socials">
          <a href="https://www.facebook.com/profile.php?id=61558372202884" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
          <a href="https://www.linkedin.com/in/buvaneswaran-v-07013518b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="mailto:your-email@example.com">
            <FaEnvelope className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RookieDev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
