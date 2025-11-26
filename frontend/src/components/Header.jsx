import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onNavigate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigate = (sectionId) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-logo">
          <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavigate('hero'); }}>
            <span className="logo-text">Portfolio</span>
            <div className="logo-glow"></div>
          </a>
        </div>
        <nav className="header-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={`#${item.id}`} 
                  onClick={(e) => { e.preventDefault(); handleNavigate(item.id); }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                  <span className="nav-underline"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header-cta">
          <button className="hire-me-btn" onClick={() => handleNavigate('contact')}>
            Hire Me
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;