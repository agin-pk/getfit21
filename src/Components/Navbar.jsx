import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div  className="outer-nav">
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <div className="logo">
            GETFIT
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isOpen ? 'change' : ''}`} />
          <div className={`bar ${isOpen ? 'change' : ''}`} />
          <div className={`bar ${isOpen ? 'change' : ''}`} />
        </div>
        <ul className={`menu ${isOpen ? 'open' : ''}`}>
          <Link to='/'><li>Home</li></Link>
          <Link to='/muscles'><li>Workouts</li></Link>
        </ul>
      </nav>
      </div>
    );
}

export default Navbar