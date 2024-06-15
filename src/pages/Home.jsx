import React, { useState } from 'react';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Lottie from 'react-lottie';
import animationData from '../heroanimation.json';
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import ScrollUpButton from "../components/ScrollUpButton";
import { Typewriter } from 'react-simple-typewriter'; // Import Typewriter from react-simple-typewriter
import { Link } from 'react-router-dom';

const Home = () => {
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className='home'>
      <section id='hero'>
        <div className="container">
          <div className="content">
            <h1>
              <span className="static-text" style={{fontFamily:"Pacifico, cursive"}}>I am </span>
              <div className="typewriter-container">
                <Typewriter
                  words={[" Buvanes", "Web Developer", " Freelancer"]}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={1000}
                />
              </div>
            </h1>

            <p>Learning Can't Get Enough</p>
            <Link to="./about"><button className="button-48" role="button"><span className="text">Meet Buvanes</span></button></Link>
          </div>
          <div className="animation">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
          <div className="social-buttons">
            <a href="https://www.facebook.com/profile.php?id=61558372202884" className="fb social-button social-button--facebook" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.linkedin.com/in/buvaneswaran-v-07013518b" className="ln social-button social-button--linkedin" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="buvanesh454@gmail.com" className="email social-button social-button--email" aria-label="Email">
              <FontAwesomeIcon icon={faEnvelope} />
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

export default Home;

