import { Link } from 'react-router-dom'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { navLinks } from '../constants'
import { useT } from '../i18n/ui'

const Footer = () => {
  const t = useT()
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__brand'>
          <Link to='/' className='footer__logo'>
            Tristan<span>.</span>
          </Link>
          <p>{t('footer.tagline')}</p>
        </div>

        <nav className='footer__nav'>
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className='footer__social'>
          <a href='https://github.com/tristan-greffe' target='_blank' rel='noreferrer' aria-label='GitHub'>
            <FiGithub size={20} />
          </a>
          <a href='https://www.linkedin.com/in/tristan-greffe' target='_blank' rel='noreferrer' aria-label='LinkedIn'>
            <FiLinkedin size={20} />
          </a>
          <a href='mailto:greffe.tristan.fr@gmail.com' aria-label='Email'>
            <FiMail size={20} />
          </a>
        </div>
      </div>

      <div className='footer__bottom'>
        <p>© {new Date().getFullYear()} Tristan Greffe — {t('footer.copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
