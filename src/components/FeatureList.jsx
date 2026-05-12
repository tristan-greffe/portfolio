import { motion } from 'framer-motion'
import { featureItems } from '../constants'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const FeatureList = () => {
  return (
    <div className="feature-list">
      <div className="feature-list__inner">
        <motion.div
          className="feature-list__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="feature-list__label">COMPÉTENCES APPRÉCIABLES</p>
          <h2>Ce qui fait la <span>différence</span></h2>
          <p className="feature-list__sub">
            Mon expérience m'a permis de développer des capacités qui vont au-delà de la technique.
          </p>
        </motion.div>

        <motion.div
          className="feature-list__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureItems.map((item) => {
            const { Icon } = item
            return (
              <motion.div
                key={item.label}
                className={`feature-list__item${item.highlight ? ' feature-list__item--highlight' : ''}`}
                variants={itemVariant}
              >
                <div className="feature-list__item-icon">
                  <Icon size={18} />
                </div>
                <span>{item.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default FeatureList
