import { useState, useEffect } from 'react'
import { ThemeToggle } from '../ui/ThemeToggle'
import './Header.css'

export function Header({ theme, onToggle }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="header__logo label" aria-label="Back to top">
          Zakky Aulia Aldrin
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="header__nav-link label">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <ThemeToggle theme={theme} onToggle={onToggle} />
          <button
            className={`header__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span className="header__hamburger-line" />
            <span className="header__hamburger-line" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`header__mobile-menu ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="header__mobile-nav">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="header__mobile-link"
              onClick={handleNavClick}
              style={{ '--i': i }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
