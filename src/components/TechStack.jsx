// src/TechStack.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faNode, faFigma, faAirbnb } from '@fortawesome/free-brands-svg-icons';
import { faServer, faSearch, faT, faTShirt, faAirFreshener } from '@fortawesome/free-solid-svg-icons';
import './TechStack.css';
import { Link } from 'react-router-dom';

const techStacks = [
  { id: 1, icon: faHtml5, title: "HTML", color: "#E34F26", description: "Markup Language" },
  { id: 2, icon: faCss3Alt, title: "CSS", color: "#1572B6", description: "Style Sheets" },
  { id: 3, icon: faJs, title: "JavaScript", color: "#F7DF1E", description: "Web Scripting" },
  { id: 4, icon: faServer, title: "API", color: "#4DB33D", description: "Backend Interface" },
  { id: 5, icon: faReact, title: "React", color: "#61DAFB", description: "UI Library" },
  { id: 6, icon: faSearch, title: "SEO", color: "#4285F4", description: "Search Optimization" },
  { id: 7, icon: faFigma, title: "Figma", color: "#F7418F", description: "Design Tool" },
  { id: 8, icon: faT, title: "Tailwind", color: "#38B2AC", description: "CSS Framework" },
  { id: 9, icon: faT, title: "TypeScript", color: "#0C359E", description: "Typed JavaScript" }
];

const TechStack = () => {
  return (
    <div className="tech-stack">
      <h2 className="tech-stack-title" style={{fontSize: '50px'}}>Technologies I've Learned</h2>
      <div className="tech-stack-cards">
        {techStacks.map((tech, index) => (
          
          <div className="tech-stack-card" key={index} style={{ '--color': tech.color }}>
            <h6 className='tech-description'>{tech.description}</h6>
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

