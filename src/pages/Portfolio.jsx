import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../constants'
import PageHero from '../components/PageHero'

const ProjectCard = ({ project, index }) => {
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
            {cardTags.map((t) => (
              <span key={t.name} className='pf-tag'>{t.name}</span>
            ))}
          </div>
          <h3>{project.name}</h3>
          <p>{project.shortDescription}</p>
          <span className='pf-card__cta'>
            Voir le projet <FiArrowRight size={14} />
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

const Portfolio = () => {
  return (
    <>
      <PageHero
        badge='Sélection de projets'
        title='Réalisations'
        highlight='à fort impact'
        description='Une sélection de projets représentatifs de mon périmètre technique.'
      />
      <section id='portfolio'>
        <div className='pf-grid'>
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Portfolio
