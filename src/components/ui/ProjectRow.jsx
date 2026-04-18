import { useState } from 'react'
import './ProjectRow.css'

export function ProjectRow({ project }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`project-row ${isExpanded ? 'is-expanded' : ''}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(prev => !prev)}
    >
      <div className="project-row__main">
        <span className="project-row__index label">{project.index}</span>
        <span className="project-row__title">{project.title}</span>
        <div className="project-row__tags">
          {project.tech.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span className="project-row__year label">{project.year}</span>
        <span className="project-row__arrow" aria-hidden="true">
          <ArrowIcon />
        </span>
      </div>

      <div className="project-row__panel">
        <div className="project-row__panel-inner">
          <p className="project-row__desc">{project.description}</p>
          <div className="project-row__panel-footer">
            <span className="label">{project.role}</span>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row__link"
              aria-label={`View ${project.title} on GitHub`}
              onClick={e => e.stopPropagation()}
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}
