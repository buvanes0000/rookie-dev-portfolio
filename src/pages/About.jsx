import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,  faLinkedin,faDiscord,faGithub } from '@fortawesome/free-brands-svg-icons';
import './About.css';
import Buvanes from "../assets/buvanes.jpg"
import Timeline from '../components/Timeline';

export default function About() {
  return (
    <>
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-content">
          <div>
            <div className="shadow">
              <div className="about-img">
                <img src={Buvanes} alt="about" />
              </div>
            </div>

            <h2>Buvaneswaran V</h2>
            <h3>Web Developer</h3>
          </div>

          <ul className="icons">
            <a href="https://www.facebook.com/profile.php?id=61558372202884" target="_blank"><li><FontAwesomeIcon icon={faFacebookF} /></li></a>
            <a href="https://www.linkedin.com/in/buvaneswaran-v-07013518b" target="_blank"><li><FontAwesomeIcon icon={faLinkedin} /></li></a>
            <a href="https://discord.gg/buvanes#1234" target="_blank"><li><FontAwesomeIcon icon={faDiscord} /></li></a>
            <a href="https://github.com/buvanes0000" target="_blank"><li><FontAwesomeIcon icon={faGithub} /></li></a>
          </ul>
        </div>
      </div>

      <div className="about-right">
        <h1>Hello<span>!</span></h1>
        <h2>Here's who I am & what I do</h2>
       

        <div className="about-para">
          <p>Hey fellow coders and non-coders! I'm Buvanes👋, a fresh face in front-end development. Learning the ropes, one line of code at a time. Here to explore and grow in this dynamic field. Nice to meet you!</p>
          <p>You can check out my works 👉 in the Portfolio section .</p>
        </div>
      
      </div>
    </div>
    <Timeline />
    </>
  );
}
