import React from 'react';
import './MobileFooter.css';

const MobileFooter = () => {
  return (
    <footer className="mobile-footer">
      <div className="mobile-footer-links">
        <a href="#">About Us</a>
        <a href="#">Contact</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
      <div className="mobile-footer-socials">
        <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </footer>
  );
};

export default MobileFooter;
