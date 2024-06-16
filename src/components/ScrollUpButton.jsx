import React, { useState, useEffect } from 'react';
import './ScrollUpButton.css';

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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="scroll-up-icon"
          >
            <path d="M21.21 10.89l-8-8c-.39-.39-1.02-.39-1.41 0l-8 8c-.39.39-.39 1.02 0 1.41l8 8c.39.39 1.02.39 1.41 0l8-8c.39-.38.39-1.01 0-1.41z" />
            <path d="M12 2v20" />
            <path d="M7 7l5-5 5 5" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ScrollUpButton;