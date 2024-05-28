
import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink, Link } from 'react-router-dom';


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <Link to='/'>
        <div className='logo-div' style={{display: 'flex', alignItems: 'center'}}>   <p className='logo'>Rookie<span className='logo_span'>Dev</span></p></div>

      </Link>
      <div className={`right-nav ${showMenu ? 'vertical' : ''}`}>
        <NavLink activeClassName='active' className="cross-fade" to='/'>Home</NavLink>
        <NavLink activeClassName='active' className="cross-fade" to='/about'>About</NavLink>
        <NavLink activeClassName='active' className="cross-fade" to='/projects'>Projects</NavLink>
        <NavLink activeClassName='active' className="cross-fade" to='/contact'>Contact</NavLink>
      </div>
      <span className='toggle' onClick={toggleMenu}>{showMenu ? '\u2716 ' : '\u2630'}</span>
    </div>
  );
}

export default Navbar;
