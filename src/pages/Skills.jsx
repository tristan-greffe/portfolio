import { motion } from 'framer-motion'
import { skillCategories } from '../constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const SkillCard = ({ name, icon }) => (
  <motion.div className="skill-card" variants={cardVariant}>
    <img src={icon} alt={name} />
    <span>{name}</span>
  </motion.div>
)

const Skills = () => {
  return (
    <section id="skills">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Ce que je maîtrise</p>
        <h2>Compétences.</h2>
      </motion.div>

      <div className="skills-grid">
        {skillCategories.map((category, ci) => (
          <div key={category.title} className="skills-category">
            <motion.h3
              className="skills-category__title"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: ci * 0.05 }}
            >
              {category.title}
            </motion.h3>
            <motion.div
              className="skills-category__items"
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {category.skills.map((skill) => (
                <SkillCard key={skill.name} {...skill} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
