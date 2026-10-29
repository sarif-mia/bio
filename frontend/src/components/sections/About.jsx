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
        title="Building software for"
        accent="real operations"
        subtitle="From HR and payroll to factory floors and online stores — I build the systems businesses run on every day."
      />

      <div className="about-grid">
        <Reveal className="about-portrait">
          <img src={profile.portrait} alt={`Portrait of ${profile.name}`} width="400" height="400" loading="lazy" />
          <div className="portrait-badge">
            <strong>{profile.role}</strong>
            <span>{profile.company}</span>
          </div>
        </Reveal>

        <Reveal className="about-text" delay={100}>
          <p>
            I'm {profile.fullName}, a {profile.role.toLowerCase()} based in Dhaka. Since March 2022 I've worked
            at {profile.company}, a multinational buying house, developing web applications and providing IT
            solutions for business operations.
          </p>
          <p>
            Alongside that I've built products such as AIHR BD, an HR &amp; payroll SaaS for Bangladesh, Fabriq ERP for
            garment manufacturing, and e-commerce platforms for fashion and beauty brands. I started out in IT support
            and network management, and I hold a B.Sc. in Computer Science &amp; Engineering from Uttara University.
          </p>
          <ul className="about-facts">
            <li><span>Based in</span>{profile.location}</li>
            <li><span>Currently</span>{profile.role}, {profile.company}</li>
            <li><span>Education</span>B.Sc. in CSE, Uttara University</li>
            <li><span>Languages</span>{profile.languages}</li>
          </ul>
        </Reveal>
      </div>

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
  </section>
);

export default About;
