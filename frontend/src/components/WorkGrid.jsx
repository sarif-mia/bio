import React from 'react';
import './WorkGrid.css';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Project One',
    category: 'Branding'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Project Two',
    category: 'Web Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Project Three',
    category: 'Marketing'
  },
    {
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Project One',
    category: 'Branding'
  },
  {
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Project Two',
    category: 'Web Design'
  },
  {
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    title: 'Project Three',
    category: 'Marketing'
  }
];

const WorkGrid = () => {
  return (
    <section className="work-section" id="work">
      <div className="work-header">
        <h2>My Projects</h2>
        <button>View all projects</button>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-item" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="work-item-info">
              <h3>{project.title}</h3>
              <p>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;