import React from 'react';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { profile, skillGroups } from '../../data/portfolio';
import './About.css';

const About = () => (
  <section id="about" className="section section-alt">
    <div className="container">
      <SectionHeading
        eyebrow="About me"
        title="Engineering with a"
        accent="designer's eye"
        subtitle="I care about the details that make software feel effortless — clear interfaces, solid architecture and fast load times."
      />

      <div className="about-grid">
        <Reveal className="about-text">
          <p>
            I'm {profile.name}, a {profile.role.toLowerCase()} who enjoys taking products from a rough idea to a polished,
            production-ready release. I work across the stack — designing intuitive React interfaces and building the
            APIs and data models that power them.
          </p>
          <p>
            I believe great software is simple to use, accessible to everyone and easy to maintain. Outside client work,
            I explore new tools, contribute to open source and share what I learn with other developers.
          </p>
          <ul className="about-facts">
            <li><span>Based in</span>{profile.location}</li>
            <li><span>Focus</span>Web apps &amp; APIs</li>
            <li><span>Status</span>{profile.availability}</li>
          </ul>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} className="skill-card card" delay={i * 80}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => <li key={item} className="chip">{item}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
