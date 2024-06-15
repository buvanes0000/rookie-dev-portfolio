import React from 'react';
import Lottie from 'lottie-react';
import './Projects.css'; // Ensure the path is correct based on your project structure
import watchAnimation from '../assets/watch.json'; // JSON animation file
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import reactlogo from '../assets/reactlogo.png';
import api from '../assets/api.png';
import sass from '../assets/sass.png';
import html from '../assets/html.png';
import youtubeAnimation from '../assets/youtube.json'; // JSON animation file
import womenAnimation from '../assets/spa.json'; // JSON animation file
import carAnimation from '../assets/car.json'; // JSON animation file
import socialMedia from '../assets/social-media-influencer.json'; // JSON animation file
import children from '../assets/childrenreading.json';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const projects = [
    {
      name: 'DottMedia',
      animation: socialMedia,
      description: 'This is My first Freelance multipage react Website for the startup Social media company',
   
      link: 'https://buvanes0000.github.io/dott_media/',
      tech: [tailwind, js, reactlogo]
    },
    {
      name: 'CleverBooks',
      animation: children,
      description: 'This is a assignment was given by the employer for the previous Internship Interview',
    
      link: 'https://buvanes0000.github.io/clever_books/',
      tech: [tailwind, js, reactlogo]
    },
    {
      name: 'Echo',
      animation: watchAnimation,
      description: 'I crafted an elegant "watch" website using Tailwind CSS and React JS, offering a seamless and intuitive platform for users to enjoy a curated selection of content.',
      link: 'https://buvanes0000.github.io/Echo/',
      tech: [tailwind, js, reactlogo]
    },
    {
      name: "YouTube Clone",
      animation: youtubeAnimation,
      description: 'I developed a YouTube-inspired website utilizing React for the frontend and an API for seamless functionality, offering users a familiar video-sharing experience.',
      link: 'https://buvanes0000.github.io/youtube-clone/',
      tech: [api, js, reactlogo]
    },
    {
      name: 'Sharp',
      animation: womenAnimation,
      description: 'This is the Project Sharp Natural SPA (Single Page Application) website. It represents a modern approach to creating interactive web experiences for spa services.',
      link: 'https://buvanes0000.github.io/sharp-spa/',
      tech: [sass, js, reactlogo]
    },
    {
      name: 'Steer X',
      animation: carAnimation,
      description: 'This is the Steer X (Single Page Application) Car service website. It offers convenient doorstep car services, revolutionizing traditional automotive maintenance.',
      link: 'https://buvanes0000.github.io/SteerX_Car_Service/',
      tech: [html, sass, js]
    }
  ];

  return (
    <>
      <h2 className="" style={{ fontSize: '50px', textAlign: 'center',fontFamily:"Pacifico, cursive" }}>Portfolio</h2>
      <p style={{ textAlign: 'center', fontSize: '20px' }}>These projects are made on my own, some of them are simple websites and some of them are complex websites.</p>
      <section id="portfolio" className="sec_4">
        <div className="portfolio">
          {projects.map((project, index) => (
            <div className="card " key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <Lottie animationData={project.animation} className={`project_animation ${project.name === 'Steer X' ? 'car-animation' : ''}`} loop={true} />
                  <h4>{project.name}</h4>
                </div>
                <div className="card-back">
                  <h3 style={{ fontFamily: 'Dancing Script' }}>{project.name}</h3>
                  <p className="project_p">
                    {project.description} <br />
                    <a className="view" href={project.link} target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                    </a>
                  </p>
                  <ul className="tech-list">
                    <li style={{ fontWeight: 'bolder', marginBottom:"0.5rem" }}>Tech Used</li>
                    {project.tech.map((tech, i) => (
                      <li key={i}><img className="icons-portfolio" src={tech} alt="" /></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;

