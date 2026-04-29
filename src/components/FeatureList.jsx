import { motion } from 'framer-motion'
import {
  FiUsers, FiSearch, FiZap, FiCheckSquare,
  FiRefreshCw, FiCode, FiShield, FiBarChart2, FiMessageSquare, FiCpu
} from 'react-icons/fi'

const items = [
  { Icon: FiUsers,        label: 'Management' },
  { Icon: FiSearch,       label: 'Rédaction de documents techniques' },
  { Icon: FiZap,          label: 'autonomie & polyvalence' },
  { Icon: FiCheckSquare,  label: 'Spécification de besoin' },
  { Icon: FiRefreshCw,    label: 'Rapport d’activité' },
  { Icon: FiCode,         label: 'Méthodologies de développement.' },
  { Icon: FiShield,       label: 'Compréhension globale des problèmes' },
  { Icon: FiBarChart2,    label: 'Conception & architecture de système' },
  { Icon: FiMessageSquare, label: 'Maîtrise de l’expression orale' }
]

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
          {items.map((item) => {
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
