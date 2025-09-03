import React from 'react';
import './Services.css';

const services = [
  { title: 'Branding', description: 'Creating memorable and impactful brand identities.' },
  { title: 'Web Design', description: 'Designing beautiful and intuitive user experiences.' },
  { title: 'Development', description: 'Building robust and scalable web applications.' },
  { title: 'Marketing', description: 'Driving growth through strategic digital marketing campaigns.' },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h2>Our Services</h2>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-item" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;