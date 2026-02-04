import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi'
import { projects } from '../constants'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projects[parseInt(id)]

  if (!project) {
    return (
      <section id="project-detail">
        <Link to="/portfolio" className="btn btn--outline">
          <FiArrowLeft size={16} /> Retour aux projets
        </Link>
        <p style={{ marginTop: '2rem', color: 'var(--text-muted)' }}>Projet introuvable.</p>
      </section>
    )
  }

  return (
    <section id="project-detail">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Link to="/portfolio" className="btn btn--outline pf-detail__back">
          <FiArrowLeft size={16} /> Retour aux projets
        </Link>

        <div className="pf-detail">
          <div className="pf-detail__image">
            <img src={project.image} alt={project.name} />
          </div>

          <div className="pf-detail__content">
            <div className="pf-card__tags" style={{ marginBottom: '1rem' }}>
              {project.tags.map((tag) => (
                <span key={tag.name} className="pf-tag">{tag.name}</span>
              ))}
            </div>

            <h1>{project.name}</h1>
            <p className="pf-detail__desc">{project.description}</p>

            <a
              href={project.source_code_link.link}
              target="_blank"
              rel="noreferrer"
              className="btn btn--primary"
            >
              <FiExternalLink size={16} />
              Voir le projet
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default ProjectDetail
