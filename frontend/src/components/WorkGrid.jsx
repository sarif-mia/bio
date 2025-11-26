import React, { useEffect, useState } from 'react';
import './WorkGrid.css';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'E-commerce Platform',
    category: 'Full-Stack Development',
    description: 'Modern e-commerce solution with React and Node.js',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Dashboard Analytics',
    category: 'Frontend Development',
    description: 'Real-time analytics dashboard with data visualization',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    year: '2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    description: 'Secure and intuitive mobile banking experience',
    technologies: ['React Native', 'TypeScript', 'AWS'],
    year: '2023'
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'API Management System',
    category: 'Backend Development',
    description: 'Scalable API gateway with microservices architecture',
    technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
    year: '2023'
  },
  {
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'AI Content Platform',
    category: 'Full-Stack Development',
    description: 'AI-powered content generation and management platform',
    technologies: ['Next.js', 'OpenAI', 'Supabase', 'Vercel'],
    year: '2024'
  },
  {
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Healthcare Management',
    category: 'System Architecture',
    description: 'Comprehensive healthcare management system',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Redis'],
    year: '2023'
  }
];

const WorkGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById('work');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleViewAll = () => {
    // You can implement a modal or redirect to a portfolio page
    console.log('View all projects clicked');
  };

  return (
    <section className="work-section" id="work">
      <div className="work-container">
        <div className="work-header">
          <div className="section-badge">Recent work</div>
          <h2 className={`section-title ${isVisible ? 'animate-fadeInUp' : ''}`}>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate-fadeInUp' : ''}`}>
            Showcasing innovative solutions and creative implementations
          </p>
          <button 
            className={`view-all-btn ${isVisible ? 'animate-fadeInUp' : ''}`}
            onClick={handleViewAll}
            style={{ animationDelay: '0.3s' }}
          >
            <span>View All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <div className="work-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`work-item card-hover ${isVisible ? 'animate-scaleIn' : ''}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="work-image-container">
                <img src={project.image} alt={project.title} className="work-image" />
                <div className="work-overlay">
                  <div className="work-overlay-content">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="work-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="work-meta">
                      <span className="work-category">{project.category}</span>
                      <span className="work-year">{project.year}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="work-content">
                <div className="work-info">
                  <h3>{project.title}</h3>
                  <span className="work-category">{project.category}</span>
                </div>
                <div className="work-arrow">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;