import { ScrollReveal } from '../ui/ScrollReveal'
import { skills } from '../../data/skills'
import './Skills.css'

export function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <ScrollReveal>
          <span className="label">Skills</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="section-heading skills__heading">Technical Stack</h2>
        </ScrollReveal>

        <div className="skills__table">
          {Object.entries(skills).map(([category, items], i) => (
            <ScrollReveal key={category} delay={i * 80}>
              <div className="skills__column">
                <div className="skills__category-header">
                  <span className="label">{category}</span>
                  <hr className="skills__rule" />
                </div>
                <ul className="skills__list" aria-label={`${category} skills`}>
                  {items.map(skill => (
                    <li key={skill} className="skills__item font-mono">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
