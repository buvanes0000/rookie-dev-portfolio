import React, { useEffect, useRef } from 'react';
import './Timeline.css';
import student from "../assets/student.png";
import mine from "../assets/mine.png";
import cnc from "../assets/cnc.png";
import quality from "../assets/quality.png";
import freelancer from "../assets/freelancer.png";

const Timeline = () => {
  const timelineRefs = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      timelineRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
          ref.classList.add('animate');
          
          if (index === 0) {
            lineRef.current.classList.add('animate-line');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run the check on mount to catch elements already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <h2 className='timeline-heading' style={{color:"#fff",fontSize:"50px",textAlign:"center"}}>How I become a Developer👇</h2>
    <div className="timeline">
      <div className="timeline-line" ref={lineRef}></div>
      {[
        { logo: student, title: "Student", duration: "2015-2019", description: "I completed B.E Mechanical Engineering from Holy Cross Engineering College, Tuticorin.", position: "left" },
        { logo: mine, title: "Supervisor at Rock Mine Quarry", duration: "2019-2021", description: "I supervised a 10-member team, managing daily operations and ensuring safety protocols at Uncle's Rock Mine Quarry.", position: "right" },
        { logo: cnc, title: "CNC Operator", duration: "2021-2022", description: "I was a CNC Operator at TVS, ensuring the quality and precision of the work produced.", position: "left" },
        { logo: quality, title: "Quality Inspector", duration: "2022-2023", description: "I was a Quality Inspector at Ashok Leyland, ensuring the quality and precision of the work produced.", position: "right" },
        { logo: freelancer, title: "Freelancer", duration: "2023-2024", description: "Now working as a freelancer, I am focused on creating a website for a startup company and also learning new skills.", position: "left" },
      ].map((item, index) => (
        <div
          key={index}
          className={`timeline-container ${item.position}-container`}
          ref={el => (timelineRefs.current[index] = el)}
        >
          <div className={`timelinelogo-container${item.position}`}>
            <img src={item.logo} alt={item.title} className='timeline-logo' />
          </div>
          <div className="text-box">
            <h2>{item.title}</h2>
            <small>{item.duration}</small>
            <p>{item.description}</p>
            <span className={`${item.position}-arrow`}></span>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Timeline;
