import React, { useEffect, useRef } from 'react';
import Icon from '../ui/Icon';
import './ProjectModal.css';

// Uses the native <dialog> element for built-in focus trapping and Esc handling.
const ProjectModal = ({ project, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (project && !dialog.open) dialog.showModal();
    if (!project && dialog.open) dialog.close();
  }, [project]);

  const handleBackdropClick = (e) => {
    if (e.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="project-modal-title"
    >
      {project && (
        <div className="modal-content">
          <button type="button" className="icon-btn modal-close" onClick={onClose} aria-label="Close">
            <Icon name="close" />
          </button>
          <img src={project.image} alt="" className="modal-image" />
          <div className="modal-body">
            <div className="modal-meta">
              <span className="project-category">{project.category}</span>
              <span>{project.year}</span>
            </div>
            <h3 id="project-modal-title">{project.title}</h3>
            <p>{project.description}</p>

            <h4>Tech stack</h4>
            <ul className="modal-tech">
              {project.technologies.map((t) => <li key={t} className="chip">{t}</li>)}
            </ul>

            {(project.liveUrl || project.repoUrl) && (
              <div className="modal-actions">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    Live site <Icon name="external" size={16} />
                  </a>
                )}
                {project.repoUrl && (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">
                    Source <Icon name="github" size={16} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectModal;
