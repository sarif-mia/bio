import React from 'react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import { services } from '../../data/portfolio';
import './Services.css';

const Services = () => (
  <section id="services" className="section section-alt">
    <div className="container">
      <SectionHeading
        eyebrow="Services"
        title="How I can"
        accent="help you"
        subtitle="From first sketch to production deploy — pick a single piece or let me own the whole build."
      />

      <div className="services-grid">
        {services.map((service, i) => (
          <Reveal key={service.title} className="service-card card" delay={i * 80}>
            <span className="service-icon"><Icon name={service.icon} size={24} /></span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <ul>
              {service.features.map((f) => (
                <li key={f}><Icon name="check" size={16} strokeWidth={2.4} /> {f}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
