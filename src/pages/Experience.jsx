import { motion } from 'framer-motion'
import { experiences } from '../constants'

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    className="exp-card"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div className="exp-card__icon">
      <img src={experience.icon} alt={experience.company_name} />
    </div>

    <div className="exp-card__body">
      <div className="exp-card__header">
        <div>
          <h3>{experience.title}</h3>
          <p className="exp-card__company">{experience.company_name}</p>
        </div>
        <span className="exp-card__date">{experience.date}</span>
      </div>

      {experience.points.length > 0 && (
        <ul className="exp-card__points">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  </motion.div>
)

const Experience = () => {
  return (
    <section id="experience">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Mon parcours professionnel</p>
        <h2>Expériences.</h2>
      </motion.div>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Experience
