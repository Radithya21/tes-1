import './Hero.css'

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction">
      <div className="container hero__container">
        <div className="hero__top">
          <span className="hero__role label">Full-Stack Developer</span>
        </div>

        <div className="hero__name-block" aria-label="Zakky Aulia Aldrin">
          <p className="hero-name">Zakky</p>
          <p className="hero-name">Aulia</p>
          <p className="hero-name">Aldrin</p>
        </div>

        <div className="hero__bottom">
          <p className="hero__bio">
            Building backend-heavy web systems from Padang, Indonesia.
          </p>
          <a href="#projects" className="hero__scroll-cta" aria-label="Scroll to projects">
            <span className="label">Scroll</span>
            <span className="hero__arrow" aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
