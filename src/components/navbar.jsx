// import React from 'react';
// import './Navbar.css';
// import logo from '../assets/Logo.png';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo} alt="Company Logo" />
//       </div>
//       <ul className="navbar-menu">
//         <li>Products</li>
//         <li>News</li>
//         <li>About</li>
//       </ul>
//       <div className="navbar-buttons">
//         <button className="navbar-button">
//           Refer Us <i className="fas fa-arrow-right"></i>
//         </button>
//         <button className="navbar-contact-button">
//           Contact Us <i className="fas fa-arrow-right"></i>
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/Logo.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li>Products</li>
        <li>News</li>
        <li>About</li>
      </ul>
      <div className="navbar-buttons">
        <button className="navbar-button">
          Refer Us <i className="fas fa-arrow-right"></i>
        </button>
        <button className="navbar-contact-button">
          Contact Us <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;
