import React from 'react';
import './MobileWelcomePage.css';

const MobileWelcomePage = () => {
  return (
    <div className="mobile-welcome-page">
      <div className="mobile-welcome-text">
        <h1>Welcome to Our Service</h1>
        <p>Discover the best solutions for your needs.</p>
        <button className="mobile-demo-button">Request a Demo</button>
      </div>
      <div className="mobile-welcome-image">
        <img src="welcome-image.jpg" alt="Welcome" />
      </div>
    </div>
  );
};

export default MobileWelcomePage;
