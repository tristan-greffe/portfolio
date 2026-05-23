import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'
import PageHero from '../components/PageHero'

const ProjectCard = ({ project, index, locale, t }) => {
  const cardTags = project.technologies.slice(0, 4)
  return (
    <motion.div
      className='pf-card'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link to={`/portfolio/${index}`} className='pf-card__link'>
        <div className='pf-card__image'>
          <img src={project.image} alt={project.name} />
        </div>
        <div className='pf-card__content'>
          <div className='pf-card__tags'>
            {cardTags.map((tech) => (
              <span key={tech.name} className='pf-tag'>{tech.name}</span>
            ))}
          </div>
          <h3>{project.name}</h3>
          <p>{pickLang(project.shortDescription, locale)}</p>
          <span className='pf-card__cta'>
            {t('project.viewCta')} <FiArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

const Portfolio = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <>
      <PageHero
        badge={t('page.portfolio.badge')}
        title={t('page.portfolio.title')}
        highlight={t('page.portfolio.highlight')}
        description={t('page.portfolio.desc')}
      />
      <section id='portfolio'>
        <div className='pf-grid'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} locale={locale} t={t} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
