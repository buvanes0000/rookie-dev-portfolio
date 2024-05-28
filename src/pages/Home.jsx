import React, { useEffect, useState } from 'react';
import video from "../assets/lamp.mp4";
import "./home.css";
import '@fortawesome/fontawesome-free/css/all.css';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import  Services  from "../components/Services";
import  TechStack  from "../components/TechStack";
import  ScrollUpButton  from "../components/ScrollUpButton";
const Home = () => {
  const customHeight = 500; // Change this value to your desired height
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = document.querySelector('video');
    videoElement.muted = isMuted; // Ensure video is muted initially for autoplay

    const handleScroll = () => {
      if (window.scrollY > customHeight) {
        videoElement.muted = true;
        setIsMuted(true);
      } else {
        videoElement.muted = false;
        setIsMuted(false);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);
    window.addEventListener('scroll', debouncedHandleScroll);

    // Play the video on user interaction if it hasn't started
    const handleUserInteraction = () => {
      if (videoElement.paused) {
        videoElement.play();
      }
    };

    // Add event listeners to ensure video plays on user interaction
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };
  }, [isMuted]);

  const toggleMute = () => {
    const videoElement = document.querySelector('video');
    videoElement.muted = !videoElement.muted;
    setIsMuted(videoElement.muted);
  };

  return (
    <div className='home'>
      <section id='hero'>  
        <div className="container">
          <video 
            src={video} 
            autoPlay 
            loop 
            muted={isMuted} 
            playsInline // Added playsInline attribute
          ></video>

          <div className="typewriter" style={{ marginTop: "12rem" }}>I am</div>
          <p style={{ fontSize: "2rem", marginBottom: "15rem" }}>Learning Can't Get Enough</p>
          <button 
            onClick={toggleMute} 
            style={{
              position: "absolute", 
              top: "1rem", 
              right: "1rem", 
              padding: "0.5rem 1rem",
              zIndex: 1000,
              cursor: "pointer",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              color: "#fff"
            }}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            <FontAwesomeIcon 
              className='mute-button' 
              style={{
                fontSize: "1.1rem",
                color: "#ffbf1a",
                padding: "0.5rem",
                border: "2px solid #ffbf1a",
                borderRadius: "50%",
                backgroundColor: "#fff",
                fontWeight: "bolder"
              }} 
              icon={isMuted ? faVolumeMute : faVolumeUp} 
            />
          </button>
          <div className="social-buttons" style={{ position: "absolute", marginTop: "25rem" }}>
            <a href="https://www.facebook.com/profile.php?id=61558372202884" className="fb social-button social-button--facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/buvaneswaran-v-07013518b" className="ln social-button social-button--linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/buvanes0000" className="gh social-button social-button--github" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <Services />
      <TechStack />
      <ScrollUpButton />
    </div>
  );
};

const debounce = (func, wait) => {
  let timeout;
  return function(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export default Home;