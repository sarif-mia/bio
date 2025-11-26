import React, { useEffect, useState } from 'react';
import { api } from '../services/api'; // Import the API service
import './WorkGrid.css';

const WorkGrid = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const data = await api.getProjects();
        setProjects(data.projects || []);
      } catch (err) {
        setError('Failed to load projects');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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

  if (loading) {
    return (
      <section className="work-section" id="work">
        <div className="work-container">
          <div className="work-header">
            <div className="section-badge">Recent work</div>
            <h2 className="section-title">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              Loading projects...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="work-section" id="work">
        <div className="work-container">
          <div className="work-header">
            <div className="section-badge">Recent work</div>
            <h2 className="section-title">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle">
              {error}
            </p>
          </div>
        </div>
      </section>
    );
  }

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
              key={project.id || index}
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