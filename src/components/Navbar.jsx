import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    // Close the menu when the location changes
    setShowMenu(false);
  }, [location]);

  return (
    <div className="navbar">
      <Link to='/'>
        <div className='logo-div' style={{ display: 'flex', alignItems: 'center' }}>
          <p className='logo'>Rookie<span className='logo_span'>Dev</span></p>
        </div>
      </Link>
      <div className={`right-nav ${showMenu ? 'vertical' : ''}`}>
        <NavLink
          to='/'
          className={({ isActive }) => isActive ? 'active cross-fade' : 'cross-fade'}
        >Home</NavLink>
        <NavLink
          to='/about'
          className={({ isActive }) => isActive ? 'active cross-fade' : 'cross-fade'}
        >About</NavLink>
        <NavLink
          to='/projects'
          className={({ isActive }) => isActive ? 'active cross-fade' : 'cross-fade'}
        >Projects</NavLink>
        <NavLink
          to='/contact'
          className={({ isActive }) => isActive ? 'active cross-fade' : 'cross-fade'}
        >Contact</NavLink>
      </div>
      <span
        className='toggle'
        onClick={toggleMenu}
        aria-expanded={showMenu}
        aria-label='Toggle menu'
      >
        {showMenu ? '\u2716' : '\u2630'}
      </span>
    </div>
  );
}

export default Navbar;
