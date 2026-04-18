import { ScrollReveal } from '../ui/ScrollReveal'
import { ProjectRow } from '../ui/ProjectRow'
import { projects } from '../../data/projects'
import './Projects.css'

export function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <ScrollReveal>
          <div className="projects__header">
            <span className="label">Projects</span>
            <p className="projects__count label">{projects.length} works</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="section-heading projects__heading">Selected Work</h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="projects__list">
            {projects.map(project => (
              <ProjectRow key={project.id} project={project} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
