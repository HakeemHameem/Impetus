import React from 'react';
import './welcomepage-main.css';
import main from '../assets/main1.png';
import brand1 from '../assets/br1.png';
import brand2 from '../assets/br2.png';
import brand3 from '../assets/br3.png';
import brand4 from '../assets/br4.png';
import brand5 from '../assets/br5.png';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import char1 from '../assets/chr1.jpeg';
import competitionImg from '../assets/chr2.png';
import newSectionImg from '../assets/chr3.png';


const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-text">
        <h1>One Platform, Endless Capabilities</h1>
        <p>With hands-on experience transforming companies and brokers. We know how to create platforms that agents and customers will love.</p>
        <button className="demo-button">
          Book a Free Demo Call <i className="fas fa-arrow-right"></i>
        </button>
      </div>
      <div className="welcome-image">
        <img src={main} alt="Welcome" />
      </div>
      <div className="trusted-section">
        <p className="trusted-text">Trusted By Leading Insurance Brands</p>
        <div className="brands-logos">
          <img src={brand1} alt="Brand 1" />
          <img src={brand2} alt="Brand 2" />
          <img src={brand3} alt="Brand 3" />
          <img src={brand4} alt="Brand 4" />
          <img src={brand5} alt="Brand 5" />
        </div>
      </div>
      <div className="why-us-section">
        <h2>Why Us?</h2>
        <div className="why-us-boxes">
          <div className="why-us-box">
            <img src={icon1} alt="Icon 1" className="box-icon" />
            <p className="box-text">Innovative Solutions</p>
          </div>
          <div className="why-us-box">
            <img src={icon2} alt="Icon 2" className="box-icon" />
            <p className="box-text">Expert Team</p>
          </div>
          <div className="why-us-box">
            <img src={icon3} alt="Icon 3" className="box-icon" />
            <p className="box-text">Customer Focused</p>
          </div>
          <div className="why-us-box">
            <img src={icon4} alt="Icon 4" className="box-icon" />
            <p className="box-text">Proven Track Record</p>
          </div>
        </div>
      </div>
      <div className="streamline-section">
        <h2>Streamline Your Agency Operations Today</h2>
        <div className="agent-activation">
          <div className="activation-text">
            <h3>Improved Agent Activation</h3>
            <p>80% of agents are opportunistic and have no tools or platforms to help them sell. With a tool, even a small % of extra activation would result in a large sales increase.</p>
          </div>
          <div className="activation-image">
            <img src={char1} alt="Agent Activation" />
          </div>
        </div>
      </div>
      <div className="streamline-section-second">
        <div className="agent-activation-second">
          <div className="activation-image-second">
            <img src={competitionImg} alt="Foster Competition" />
          </div>
          <div className="activation-text-second">
            <h3>Foster Competition via Gamification</h3>
            <p>Our platform enhances sales performance via competition and campaign creation based on variables such as GWP, commissions, products, time frame, renewal rate, and more.</p>
          </div>
        </div>
      </div>
      <div className="streamline-section-third">
        <div className="agent-activation-third">
          <div className="activation-text-third">
            <h3>Manage Multiple Tiered Teams</h3>
            <p>We can support up to 5 levels of agents and teams allowing for insurers and agents to be managed at multiple levels</p>
          </div>
          <div className="activation-image-third">
            <img src={newSectionImg} alt="Agent Activation" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;

