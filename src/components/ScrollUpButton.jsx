import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>
      {isVisible && (
        <button className="scroll-up-btn" onClick={scrollToTop}>
    <i class="fas fa-arrow-up" style={{fontSize:"1.5rem",position:"absolute", marginTop:"-0.75rem",marginLeft:"-0.5rem"}}></i>

        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;
