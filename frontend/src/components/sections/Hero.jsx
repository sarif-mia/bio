import React from 'react';
import Icon from '../ui/Icon';
import { profile, socials, stats } from '../../data/portfolio';
import './Hero.css';

const codeLines = [
  ['kw', 'const'], ['plain', ' developer = {'],
  null,
  ['key', '  name'], ['plain', ': '], ['str', `'${profile.name}'`], ['plain', ','],
  null,
  ['key', '  role'], ['plain', ': '], ['str', `'${profile.role}'`], ['plain', ','],
  null,
  ['key', '  company'], ['plain', ': '], ['str', `'${profile.company}'`], ['plain', ','],
  null,
  ['key', '  builds'], ['plain', ': ['], ['str', "'HRM'"], ['plain', ', '], ['str', "'ERP'"], ['plain', ', '], ['str', "'E-commerce'"], ['plain', '],'],
  null,
  ['key', '  based'], ['plain', ': '], ['str', "'Dhaka, BD'"], ['plain', ','],
  null,
  ['plain', '};'],
];

// Split the flat token list into lines at each `null` marker.
const lines = codeLines.reduce((acc, token) => {
  if (token === null) acc.push([]);
  else acc[acc.length - 1].push(token);
  return acc;
}, [[]]);

const Hero = () => (
  <section id="hero" className="hero">
    <div className="hero-bg" aria-hidden="true">
      <div className="hero-grid" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
    </div>

    <div className="container hero-inner">
      <div className="hero-copy">
        <span className="hero-status">
          <span className="status-dot" />
          {profile.role} at {profile.company}
        </span>
        <h1 className="hero-title">
          Hi, I'm {profile.name.split(' ')[0]}.<br />
          I build <span className="gradient-text">software</span> that runs real businesses.
        </h1>
        <p className="hero-subtitle">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">
            View my work <Icon name="arrowRight" size={18} />
          </a>
          {profile.resumeUrl ? (
            <a href={profile.resumeUrl} className="btn btn-ghost" download>
              Download CV <Icon name="download" size={18} />
            </a>
          ) : (
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
          )}
        </div>

        <div className="hero-socials">
          {socials.map((s) => (
            <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="icon-btn">
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="code-card">
          <div className="code-card-bar">
            <span /><span /><span />
            <em>developer.js</em>
          </div>
          <pre>
            {lines.map((line, i) => (
              <div className="code-line" key={i} style={{ '--i': i }}>
                <span className="ln">{i + 1}</span>
                {line.map(([type, text], j) => <span key={j} className={`tok-${type}`}>{text}</span>)}
              </div>
            ))}
          </pre>
        </div>
        <div className="floating-badge badge-1"><Icon name="checkCircle" size={18} /> 10 products built</div>
        <div className="floating-badge badge-2"><Icon name="mapPin" size={18} /> Dhaka, Bangladesh</div>
      </div>
    </div>

    <div className="container">
      <dl className="hero-stats">
        {stats.map((s) => (
          <div key={s.label} className="hero-stat">
            <dt>{s.label}</dt>
            <dd>{s.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export default Hero;
