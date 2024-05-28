// src/TechStack.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faFigma, faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faServer, faSearch, faT, faTShirt, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import './TechStack.css';
import { Link } from 'react-router-dom';

const techStacks = [
  { icon: faHtml5, title: "HTML", color: "#E34F26" },
  { icon: faCss3Alt, title: "CSS", color: "#1572B6" },
  { icon: faJs, title: "JavaScript", color: "#F7DF1E" },
  { icon: faServer, title: "API", color: "#4DB33D" },
  { icon: faReact, title: "React", color: "#61DAFB" },
  { icon: faSearch, title: "SEO", color: "#4285F4" },
  { icon: faFigma, title: "Figma", color: "#F7418F" },
  { icon: faT, title: "Tailwind", color: "#38B2AC" },
  { icon: faT, title: "TypeScript", color: "#0C359E" }
];

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2 className="tech-stack-title" style={{fontSize: '50px'}}>Technologies I've Learned</h2>
      <div className="tech-stack-cards">
        {techStacks.map((tech, index) => (
          <div className="tech-stack-card" key={index} style={{ '--color': tech.color }}>
            <div className="tech-stack-icon">
              <FontAwesomeIcon className='tech-icon' icon={tech.icon} size="2x" style={{ marginTop: '18px' }} />
            </div>
            <h5 style={{ zIndex: 1 }}>{tech.title}</h5>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TechStack;

