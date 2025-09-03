import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="hero-video">
        <source src="https://www.dentsucreative.com/videos/showreel-2023.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Modern production for a new era of advertising</h1>
        <p>We are a collective of makers, thinkers, and creators, united by a passion for craft and a drive to innovate.</p>
      </div>
    </section>
  );
};

export default Hero;