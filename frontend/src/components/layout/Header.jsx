import React, { useEffect, useState } from 'react';
import Icon from '../ui/Icon';
import { navItems, profile } from '../../data/portfolio';
import './Header.css';

const Header = ({ activeSection, theme, onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? 'is-scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="container header-inner">
        <a href="#hero" className="header-logo" onClick={closeMenu} aria-label={`${profile.name} — home`}>
          <span className="logo-mark">{profile.initials}</span>
          <span className="logo-name">{profile.name}</span>
        </a>

        <nav id="primary-nav" className="header-nav" aria-label="Primary">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={activeSection === item.id ? 'active' : ''}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary nav-mobile-cta" onClick={closeMenu}>
            Let's talk <Icon name="arrowRight" size={18} />
          </a>
        </nav>

        <div className="header-actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <a href="#contact" className="btn btn-primary btn-sm header-cta">Hire me</a>
          <button
            type="button"
            className="icon-btn menu-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
