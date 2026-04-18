import { ScrollReveal } from '../ui/ScrollReveal'
import placeholderImg from '../../assets/photo-placeholder.jpg'
import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <ScrollReveal>
          <span className="label">About</span>
        </ScrollReveal>

        <div className="about__grid">
          <div className="about__content">
            <ScrollReveal delay={100}>
              <h2 className="about__heading section-heading">
                Developer.<br />Builder.<br />Problem Solver.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="about__text">
                <p>
                  I'm Zakky — a Computer Science student at Universitas Andalas, Indonesia,
                  with a focus on full-stack web development and backend systems.
                </p>
                <p>
                  I enjoy the entire process: designing the data model, writing clean server-side
                  logic, and making sure the frontend feels right. I've built HR management systems,
                  capstone projects for organizations like Neo Telemetri, and academic tools
                  involving GIS and data mining.
                </p>
                <p>
                  Currently looking for opportunities where I can build things that matter.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="about__meta">
                <div className="about__meta-item">
                  <span className="label">Education</span>
                  <span className="font-mono about__meta-value">
                    B.Sc. Computer Science<br />
                    Universitas Andalas
                  </span>
                </div>
                <div className="about__meta-item">
                  <span className="label">Location</span>
                  <span className="font-mono about__meta-value">Padang, Indonesia</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={150} className="about__photo-wrap">
            <div className="about__photo-frame">
              <img
                src={placeholderImg}
                alt="Zakky Aulia Aldrin — placeholder photo"
                className="about__photo"
                width="400"
                height="500"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
