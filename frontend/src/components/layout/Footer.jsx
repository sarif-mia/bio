import React, { useEffect, useState } from 'react';
import Icon from '../ui/Icon';
import { navItems, profile, socials } from '../../data/portfolio';
import './Footer.css';

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-cta">
          <h2>Have a project in mind?</h2>
          <p>Let's turn your idea into something people love to use.</p>
          <a href="#contact" className="btn btn-primary">
            Start a conversation <Icon name="arrowRight" size={18} />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-brand">
            <a href="#hero" className="footer-logo">
              <span className="logo-mark">{profile.initials}</span>
              {profile.name}
            </a>
            <p>{profile.role} crafting fast, accessible and thoughtfully designed web products.</p>
          </div>

          <nav className="footer-col" aria-label="Footer">
            <h3>Navigate</h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.id}><a href={`#${item.id}`}>{item.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer-col">
            <h3>Connect</h3>
            <ul>
              <li><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              {socials.map((s) => (
                <li key={s.name}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React, Vite &amp; Flask.</p>
        </div>
      </div>

      <button
        type="button"
        className={`scroll-top ${showTop ? 'is-visible' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        tabIndex={showTop ? 0 : -1}
      >
        <Icon name="arrowUp" />
      </button>
    </footer>
  );
};

export default Footer;
