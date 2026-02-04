import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { projects } from '../constants'

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="pf-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link to={`/portfolio/${index}`} className="pf-card__link">
      <div className="pf-card__image">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="pf-card__content">
        <div className="pf-card__tags">
          {project.tags.map((tag) => (
            <span key={tag.name} className="pf-tag">{tag.name}</span>
          ))}
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <span className="pf-card__cta">
          Voir le projet <FiArrowRight size={14} />
        </span>
      </div>
    </Link>
  </motion.div>
)

const Portfolio = () => {
  return (
    <section id="portfolio">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Ce que j'ai réalisé</p>
        <h2>Projets.</h2>
      </motion.div>

      <div className="pf-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
