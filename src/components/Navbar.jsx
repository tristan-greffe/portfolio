import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          Tristan<span>.</span>
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__theme-btn" onClick={toggleTheme} aria-label="Changer le thème">
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="/cv.pdf" download className="navbar__cv-btn">
            <FiDownload size={15} />
            <span>CV</span>
          </a>
        </div>

        <button className="navbar__burger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar__mobile">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-actions">
            <button onClick={() => { toggleTheme(); setMobileOpen(false) }}>
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              <span>{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
            </button>
            <a href="/cv.pdf" download onClick={() => setMobileOpen(false)}>
              <FiDownload size={16} />
              <span>Télécharger le CV</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
