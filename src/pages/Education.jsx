import { motion } from 'framer-motion'
import { education } from '../constants'

const EducationCard = ({ item, index }) => (
  <motion.div
    className="edu-card"
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <div className="edu-card__icon">
      <img src={item.icon} alt={item.school} />
    </div>

    <div className="edu-card__body">
      <div className="edu-card__header">
        <div>
          <h3>{item.degree}</h3>
          <p className="edu-card__school">{item.school}</p>
          <p className="edu-card__location">{item.location}</p>
        </div>
        <span className="edu-card__date">{item.date}</span>
      </div>
      {item.description && (
        <p className="edu-card__desc">{item.description}</p>
      )}
    </div>
  </motion.div>
)

const Education = () => {
  return (
    <section id="education">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Mon parcours académique</p>
        <h2>Formation.</h2>
      </motion.div>

      <div className="edu-timeline">
        {education.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Education
