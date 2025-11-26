import React from 'react';
import './Services.css';

const services = [
  { title: 'Frontend Development', description: 'Building responsive and interactive user interfaces with React, Vue.js, and modern CSS.' },
  { title: 'Backend Development', description: 'Creating robust APIs and server-side applications using Node.js, Python, and databases.' },
  { title: 'Full-Stack Solutions', description: 'End-to-end web development from database design to deployment and optimization.' },
  { title: 'UI/UX Design', description: 'Designing intuitive user experiences and modern, accessible interfaces.' },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="services-header">
        <h2>My Services</h2>
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