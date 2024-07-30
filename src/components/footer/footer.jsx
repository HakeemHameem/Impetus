import React from 'react';
import '../footer/footer.css';
import twitterIcon from '../../assets/twitter.png'; // Update path as necessary
import linkedinIcon from '../../assets/linkedin.png'; // Update path as necessary
import fl from '../../assets/flower.png'; // Update path as necessary

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={fl} alt="Logo" />
          </div>
          <p className="footer-address">
            Sivatel Tower, 12th Floor, Sivatel Tower, Kolkata, India 10330, IN
          </p>
          <div className="footer-subscribe">
            <input type="email" placeholder="Enter Your email address" className="subscribe-input" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
          <div className="footer-socials">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-section">
            <h4>Products</h4>
            <p>Agency Management</p>
            <p>Direct to Consumer</p>
          </div>
          <div className="footer-section">
            <h4>Developers</h4>
            <p>Documentation</p>
            <p>APIs & SDK</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <p>+91 9999999999</p>
            <p>support@gmail.io</p>
          </div>
        </div>
        <div className="footer-divider"></div>
        <div className="footer-bottom">
          <p className="footer-bottom-left">2024 All Rights Reserved</p>
          <p className="footer-bottom-right">Privacy Policy | Security | Terms&Conditions</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
