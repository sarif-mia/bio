import React, { useEffect, useMemo, useState } from 'react';
import Icon from '../ui/Icon';
import Reveal from '../ui/Reveal';
import SectionHeading from '../ui/SectionHeading';
import ProjectModal from './ProjectModal';
import { api } from '../../services/api';
import { fallbackProjects } from '../../data/portfolio';
import './Projects.css';

const ALL = 'All';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let cancelled = false;
    api.getProjects()
      .then((data) => !cancelled && setProjects(data.projects?.length ? data.projects : fallbackProjects))
      .catch(() => !cancelled && setProjects(fallbackProjects))
      .finally(() => !cancelled && setLoading(false));
    return () => { cancelled = true; };
  }, []);

  const categories = useMemo(
    () => [ALL, ...new Set(projects.map((p) => p.category))],
    [projects]
  );

  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I'm"
          accent="proud of"
          subtitle="A selection of products and platforms I've designed and built end-to-end."
        />

        {!loading && (
          <div className="project-filters" role="group" aria-label="Filter projects by category">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-btn ${filter === cat ? 'active' : ''}`}
                aria-pressed={filter === cat}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className="projects-grid" aria-busy={loading}>
          {loading
            ? Array.from({ length: 6 }, (_, i) => <div key={i} className="project-skeleton" />)
            : visible.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 80}>
                <article className="project-card card">
                  <div className="project-media">
                    {project.image
                      ? <img src={project.image} alt="" loading="lazy" />
                      : <span className="project-placeholder" aria-hidden="true">{project.title}</span>}
                  </div>
                  <div className="project-body">
                    <span className="project-category">{project.category}</span>
                    <h3>
                      <button type="button" className="project-link" onClick={() => setSelected(project)}>
                        {project.title}
                      </button>
                    </h3>
                    <p>{project.description}</p>
                    <ul className="project-tech">
                      {project.tags.map((t) => <li key={t} className="chip">{t}</li>)}
                    </ul>
                  </div>
                  <span className="project-arrow" aria-hidden="true"><Icon name="arrowUpRight" /></span>
                </article>
              </Reveal>
            ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
};

export default Projects;
