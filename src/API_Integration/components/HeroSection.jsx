import React from 'react';
import { BsPhone } from 'react-icons/bs';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-icon">
          <BsPhone size={80} />
        </div>
        <h1>Premium Smartphone</h1>
        <h2>Innovative. Powerful. Elegant.</h2>
        <div className="hero-links">
          <a href="#">Learn more ›</a>
          <a href="#">Buy ›</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;