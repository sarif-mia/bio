import React, { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      {/* Animated Background */}
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-particles"></div>
        <div className="hero-floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      {/* Video Background */}
      <video autoPlay loop muted className="hero-video">
        <source src="https://www.dentsucreative.com/videos/showreel-2023.mp4" type="video/mp4" />
      </video>
      
      <div className="hero-content">
        <div className={`hero-content-inner ${isVisible ? 'animate-fadeInUp' : ''}`}>
          <h1 className="hero-title">
            <span className="hero-title-line">Creating Digital</span>
            <span className="hero-title-line hero-title-accent">Experiences</span>
            <span className="hero-title-line">That Matter</span>
          </h1>
          <p className="hero-subtitle">
            Full-stack developer passionate about crafting innovative solutions with modern technologies. 
            Let's build something amazing together.
          </p>
          <div className="hero-actions">
            <button className="hero-cta primary" onClick={scrollToAbout}>
              <span>Explore My Work</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="hero-cta secondary">
              <span>Download CV</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15L12 3M12 3L16 7M12 3L8 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;