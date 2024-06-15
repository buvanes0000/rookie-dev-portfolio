// src/Services.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faMobileAlt, faSearch, faBullhorn } from '@fortawesome/free-solid-svg-icons';
import './Services.css';
import {Link} from 'react-router-dom';


const services = [
  {
    icon: faPalette,
    title: "Web Design",
    description: "Beautiful and functional web design services."
  },
  {
    icon: faMobileAlt,
    title: "Responsive Web",
    description: "Websites that look great on all devices."
  },
  {
    icon: faSearch,
    title: "SEO",
    description: "Optimize your site for search engines."
  },
  {
    icon: faBullhorn,
    title: "Social Media Marketing",
    description: "Boost your presence on social media."
  }
];

const Services = () => {
  return (
    <div className="services" >
      <div className="services-header" style={{padding:"10px"}}>
        <h2 style={{textAlign: 'center',fontSize: '50px',fontFamily:"Pacifico, cursive"}}>Our premium services</h2>
        <p style={{textAlign: 'center',color: '#666',fontSize: '18px'}}>I am a freelance web developer specializing in creating dynamic, responsive websites. I offer professional web design and development services tailored to your needs</p>
      </div>
<div className="service-cards" >  {services.map((service, index) => (
        <div className="service-card" key={index}>
          <div className="icon-container">
            <FontAwesomeIcon icon={service.icon} className="service-icon" />
          </div>
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}</div>
      <div style={{display:"flex", justifyContent:"center"}}>   <Link to="./projects"><button className="button-48" role="button" ><span className="text">My Works</span></button></Link></div>

    </div>
  );
};

export default Services;
