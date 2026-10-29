import React from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { experience } from '../../data/portfolio';
import './Experience.css';

const Experience = () => (
  <section id="experience" className="section">
    <div className="container experience-container">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've"
        accent="worked"
        subtitle="A track record of shipping reliable products with small, focused teams."
      />

      <ol className="timeline">
        {experience.map((item, i) => (
          <Reveal as="li" key={`${item.company}-${item.period}`} className="timeline-item" delay={i * 100}>
            <span className="timeline-dot" aria-hidden="true" />
            <span className="timeline-period">{item.period}</span>
            <h3>{item.role} <span>· {item.company}</span></h3>
            <p>{item.summary}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
