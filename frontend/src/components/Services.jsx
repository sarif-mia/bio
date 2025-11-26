import React, { useEffect, useState } from 'react';
import './Services.css';

const services = [
  { 
    title: 'Frontend Development', 
    description: 'Building responsive and interactive user interfaces with React, Vue.js, and modern CSS frameworks.',
    icon: '🎨',
    features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'Component Libraries']
  },
  { 
    title: 'Backend Development', 
    description: 'Creating robust APIs and server-side applications using Node.js, Python, and modern databases.',
    icon: '⚡',
    features: ['RESTful APIs', 'Database Design', 'Authentication & Security', 'Cloud Integration']
  },
  { 
    title: 'Full-Stack Solutions', 
    description: 'End-to-end web development from database design to deployment and optimization.',
    icon: '🚀',
    features: ['Architecture Planning', 'DevOps & Deployment', 'System Scaling', 'Code Reviews']
  },
  { 
    title: 'UI/UX Design', 
    description: 'Designing intuitive user experiences and modern, accessible interfaces.',
    icon: '💡',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Accessibility Design']
  },
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-header">
          <div className="section-badge">What I offer</div>
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            My <span className="gradient-text">Services</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Comprehensive solutions for your digital needs
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              className={`service-item card-hover ${isVisible ? 'animate-scaleIn' : ''}`} 
              key={index}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="service-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;