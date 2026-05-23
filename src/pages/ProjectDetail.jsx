import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink, FiCheckSquare } from 'react-icons/fi'
import { projects } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const ProjectDetail = () => {
  const { id } = useParams()
  const { locale } = useLanguage()
  const t = useT()
  const project = projects[parseInt(id)]

  if (!project) {
    return (
      <section id='project-detail'>
        <Link to='/portfolio' className='btn btn--outline'>
          <FiArrowLeft size={16} /> {t('project.back')}
        </Link>
        <p style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>{t('project.notFound')}</p>
      </section>
    )
  }

  const description = pickLang(project.description, locale)

  return (
    <section id='project-detail'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to='/portfolio' className='btn btn--outline pf-detail__back'>
          <FiArrowLeft size={16} /> {t('project.back')}
        </Link>

        <div className='pf-detail'>
          <div className='pf-detail__left'>
            <div className='pf-detail__image'>
              <img src={project.image} alt={project.name} />
            </div>

            {project.links && (
              <div className='pf-detail__links'>
                <h4>{t('project.links')}</h4>
                <div className='pf-detail__links-list'>
                  {project.links.map((l) => (
                    <a key={l.url} href={l.url} target='_blank' rel='noreferrer' className='pf-detail__link'>
                      <FiExternalLink size={14} />
                      {pickLang(l.label, locale)}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className='pf-detail__content'>
            <h1>{project.name}</h1>
            <div className='pf-detail__desc'>
              {description.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {project.technologies && (
              <div className='pf-detail__section'>
                <h4>{t('project.technologies')}</h4>
                <div className='pf-detail__techs'>
                  {project.technologies.map((tech) => (
                    <a key={tech.name} href={tech.url} target='_blank' rel='noreferrer' className='pf-detail__tech'>
                      {tech.name}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.tasks && (
              <div className='pf-detail__section'>
                <h4>{t('project.tasks')}</h4>
                <ul className='pf-detail__tasks'>
                  {project.tasks.map((task, i) => (
                    <li key={i}>
                      <FiCheckSquare size={15} />
                      <span>{pickLang(task, locale)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectDetail
