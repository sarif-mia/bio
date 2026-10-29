import React from 'react';
import Reveal from './Reveal';
import './SectionHeading.css';

const SectionHeading = ({ eyebrow, title, accent, subtitle, align = 'center' }) => (
  <Reveal className={`section-heading align-${align}`}>
    {eyebrow && <span className="section-eyebrow">{eyebrow}</span>}
    <h2 className="section-title">
      {title} {accent && <span className="gradient-text">{accent}</span>}
    </h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </Reveal>
);

export default SectionHeading;
