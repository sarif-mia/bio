import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <video autoPlay loop muted className="hero-video">
        <source src="https://www.dentsucreative.com/videos/showreel-2023.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1>Creating Digital Experiences That Matter</h1>
        <p>Full-stack developer passionate about crafting innovative solutions with modern technologies. Let's build something amazing together.</p>
        <button className="hero-cta" onClick={scrollToAbout}>
          Explore My Work
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;