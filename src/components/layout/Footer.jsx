import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="label">© {year} Zakky Aulia Aldrin</span>
        <div className="footer__links">
          <a
            href="https://github.com/zakkyaulia"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link label"
            aria-label="GitHub profile"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/zakkyaulia/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link label"
            aria-label="LinkedIn profile"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
