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
          {project.image
            ? <img src={project.image} alt={`${project.title} homepage`} className="modal-image" />
            : <div className="modal-image project-placeholder" aria-hidden="true">{project.title}</div>}
          <div className="modal-body">
            <div className="modal-meta">
              <span className="project-category">{project.category}</span>
              {project.url && <span>{new URL(project.url).hostname}</span>}
            </div>
            <h3 id="project-modal-title">{project.title}</h3>
            <p>{project.description}</p>

            <h4>Highlights</h4>
            <ul className="modal-tech">
              {project.tags.map((t) => <li key={t} className="chip">{t}</li>)}
            </ul>

            {project.url && (
              <div className="modal-actions">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  Visit live site <Icon name="external" size={16} />
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectModal;
