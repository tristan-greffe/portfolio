import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiSun, FiMoon, FiMenu, FiX, FiDownload } from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../i18n/ui'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const { locale, setLocale } = useLanguage()
  const t = useT()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path) => location.pathname === path

  const LangSwitcher = ({ className = '' }) => (
    <div className={`navbar__lang ${className}`}>
      <button
        type='button'
        className={`navbar__lang-btn ${locale === 'fr' ? 'navbar__lang-btn--active' : ''}`}
        onClick={() => setLocale('fr')}
        aria-label='Français'
      >
        FR
      </button>
      <button
        type='button'
        className={`navbar__lang-btn ${locale === 'en' ? 'navbar__lang-btn--active' : ''}`}
        onClick={() => setLocale('en')}
        aria-label='English'
      >
        EN
      </button>
    </div>
  )

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className='navbar__inner'>
        <Link to='/' className='navbar__logo'>
          Tristan<span>.</span>
        </Link>

        <ul className='navbar__links'>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>

        <div className='navbar__actions'>
          <LangSwitcher />
          <button className='navbar__theme-btn' onClick={toggleTheme} aria-label={t('nav.toggleTheme')}>
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href='/portfolio/cv.pdf' download className='navbar__cv-btn'>
            <FiDownload size={15} />
            <span>{t('nav.cv')}</span>
          </a>
        </div>

        <button className='navbar__burger' onClick={() => setMobileOpen(!mobileOpen)} aria-label={t('nav.menu')}>
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className='navbar__mobile'>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`navbar__link ${isActive(link.path) ? 'navbar__link--active' : ''}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
          <div className='navbar__mobile-actions'>
            <LangSwitcher className='navbar__lang--mobile' />
            <button onClick={() => { toggleTheme(); setMobileOpen(false) }}>
              {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
              <span>{theme === 'dark' ? (locale === 'fr' ? 'Mode clair' : 'Light mode') : (locale === 'fr' ? 'Mode sombre' : 'Dark mode')}</span>
            </button>
            <a href='/portfolio/cv.pdf' download onClick={() => setMobileOpen(false)}>
              <FiDownload size={16} />
              <span>{locale === 'fr' ? 'Télécharger le CV' : 'Download resume'}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
