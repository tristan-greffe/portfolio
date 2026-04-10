import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { navLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            Tristan<span>.</span>
          </Link>
          <p>Développeur web &amp; ingénieur DevOps</p>
        </div>

        <nav className="footer__nav">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.title}
            </Link>
          ))}
        </nav>

        <div className="footer__social">
          <a href="https://github.com/tristan-greffe" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/tristan-greffe" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:greffe.tristan.fr@gmail.com" aria-label="Email">
            <FiMail size={20} />
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Tristan Greffe — Tous droits réservés</p>
      </div>
    </footer>
  )
}

export default Footer
