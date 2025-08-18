import React from 'react';
import { 
  FaStore, 
  FaLaptop,
  FaMobileAlt,
  FaHeadphones,
  FaTabletAlt,
  FaInfoCircle,
  FaFileAlt
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><FaStore size={14} /> Shop and Learn</h3>
          <ul>
            <li><a href="#"><FaLaptop size={12} /> Mac</a></li>
            <li><a href="#"><FaTabletAlt size={12} /> iPad</a></li>
            <li><a href="#"><FaMobileAlt size={12} /> iPhone</a></li>
            <li><a href="#"><FaHeadphones size={12} /> AirPods</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3><FaInfoCircle size={14} /> Services</h3>
          <ul>
            <li><a href="#">Apple Music</a></li>
            <li><a href="#">Apple TV+</a></li>
            <li><a href="#">Apple Fitness+</a></li>
          </ul>
        </div>
        <div className="footer-legal">
          <div className="legal-links">
            <a href="#"><FaFileAlt size={12} /> Privacy Policy</a>
            <a href="#"><FaFileAlt size={12} /> Terms of Use</a>
          </div>
          <p>Copyright &copy;{new Date().getFullYear()} Example Company. Educational purposes only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;