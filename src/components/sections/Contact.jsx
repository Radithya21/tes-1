import { ScrollReveal } from '../ui/ScrollReveal'
import './Contact.css'

export function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <ScrollReveal>
          <span className="label">Contact</span>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="contact__body">
            <h2 className="contact__statement">
              Let's build<br />something.
            </h2>

            <div className="contact__links">
              <a
                href="mailto:zakkyaulia21@gmail.com"
                className="contact__email link-underline"
                aria-label="Send email to Zakky"
              >
                zakkyaulia21@gmail.com
              </a>

              <div className="contact__socials">
                <a
                  href="https://github.com/zakkyaulia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social label"
                  aria-label="GitHub profile"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/zakkyaulia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact__social label"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
