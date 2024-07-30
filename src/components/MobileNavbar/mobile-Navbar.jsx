import React, { useState } from 'react';
import './MobileNavbar.css';

const MobileNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="mobile-navbar">
      <div className="mobile-navbar-logo">
        <a href="#">Logo</a>
      </div>
      <div className={`mobile-navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </div>
      <div className="mobile-navbar-toggle" onClick={handleMobileMenuToggle}>
        <span className="mobile-navbar-toggle-icon"></span>
        <span className="mobile-navbar-toggle-icon"></span>
        <span className="mobile-navbar-toggle-icon"></span>
      </div>
    </nav>
  );
};

export default MobileNavbar;
