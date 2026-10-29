import React from 'react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { education, experience } from '../../data/portfolio';
import './Experience.css';

const Timeline = ({ icon, title, items }) => (
  <div className="timeline-col">
    <h3 className="timeline-heading"><Icon name={icon} /> {title}</h3>
    <ol className="timeline">
      {items.map((item, i) => (
        <Reveal as="li" key={`${item.company}-${item.period}`} className="timeline-item" delay={i * 100}>
          <span className="timeline-dot" aria-hidden="true" />
          <span className="timeline-period">{item.period}</span>
          <h4>{item.role}</h4>
          <span className="timeline-org">{item.company}</span>
          {item.summary && <p>{item.summary}</p>}
        </Reveal>
      ))}
    </ol>
  </div>
);

const Experience = () => (
  <section id="experience" className="section">
    <div className="container">
      <SectionHeading
        eyebrow="Experience"
        title="Career &"
        accent="education"
        subtitle="Hands-on experience across software engineering and IT operations, backed by a computer science degree."
      />

      <div className="experience-grid">
        <Timeline icon="briefcase" title="Work" items={experience} />
        <Timeline icon="graduation" title="Education" items={education} />
      </div>
    </div>
  </section>
);

export default Experience;
