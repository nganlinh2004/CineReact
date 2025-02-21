import React, { useState } from 'react';
import './Navbar.css';

const VerticalHeader = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={`vertical-header ${isOpen ? 'open' : ''}`}>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'bar-open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'bar-open' : ''}`}></span>
        </div>
        <div className="nav-items">
          <a href="#home" className="nav-item">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#services" className="nav-item">Services</a>
          <a href="#contact" className="nav-item">Contact</a>
        </div>
      </div>
    );
  };

export default VerticalHeader;