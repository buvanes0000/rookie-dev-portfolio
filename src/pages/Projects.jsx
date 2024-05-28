import React from 'react';
import './Projects.css'; // Ensure the path is correct based on your project structure
import watch from '../assets/watch.png';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.png';
import reactlogo from '../assets/reactlogo.png';
import api from '../assets/api.png';
import sass from '../assets/sass.png';
import html from '../assets/html.png';
import youtube from '../assets/youtube.png';
import women from '../assets/womensketch.jpg';
import car from '../assets/redcar.png';

const Projects = () => {
  const projects = [
    {
      name: 'Echo',
      image: watch,
      description: 'I crafted an elegant "watch" website using Tailwind CSS and React JS, offering a seamless and intuitive platform for users to enjoy a curated selection of content.',
      link: 'https://buvanes0000.github.io/Echo/',
      tech: [tailwind, js, reactlogo]
    },
    {
      name: "YouTube Clone",
      image: youtube,
      description: 'I developed a YouTube-inspired website utilizing React for the frontend and an API for seamless functionality, offering users a familiar video-sharing experience.',
      link: 'https://buvanes0000.github.io/youtube-clone/',
      tech: [api, js, reactlogo]
    },
    {
      name: 'Sharp',
      image: women,
      description: 'This is the Project Sharp Natural SPA (Single Page Application) website. It represents a modern approach to creating interactive web experiences for spa services.',
      link: 'https://buvanes0000.github.io/sharp-spa/',
      tech: [sass, js, reactlogo]
    },
    {
      name: 'Steer X',
      image: car,
      description: 'This is the Steer X (Single Page Application) Car service website. It offers convenient doorstep car services, revolutionizing traditional automotive maintenance.',
      link: 'https://buvanes0000.github.io/SteerX_Car_Service/',
      tech: [html, sass, js]
    }
  ];

  return (
    <>
     <h2 className="" style={{ fontSize: '50px',color:'white',textAlign:'center' }}>Portfolio</h2>
     <p style={{color:'white',textAlign:'center',fontSize:'20px'}}>There projects are made on my own, some of them is simple website and some of them is complex websites.</p>
    <section id="portfolio" className="sec_4">
      
      <div className="portfolio">
        {projects.map((project, index) => (
          <div className="card " key={index}>
            <div className="card-inner">
              <div className="card-front">
                <img className="project_image" src={project.image} alt={project.name} />
              </div>
              <div className="card-back">
                <h3 style={{ fontFamily: 'Dancing Script' }}>{project.name}</h3>
                <p className="project_p">
                  {project.description} <br />
                  <a className="view" href={project.link}>View</a>
                </p>
                <ul className="tech-list">
                  <li style={{ fontWeight: 'bolder' }}>Tech Used</li>
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
