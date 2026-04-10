import { motion } from 'framer-motion'
import { FiMonitor, FiServer, FiCloud, FiCpu } from 'react-icons/fi'

const props = [
  {
    Icon: FiMonitor,
    title: 'Applications Web Modernes',
    description:
      'SPA, PWA, interfaces réactives avec Vue.js et React. De la maquette à la mise en production.',
  },
  {
    Icon: FiServer,
    title: 'Architecture Backend',
    description:
      'APIs RESTful et temps-réel avec Node.js et Feathers.js. Données NoSQL, authentification, WebSocket.',
  },
  {
    Icon: FiCloud,
    title: 'Infrastructure DevOps',
    description:
      'Docker, Kubernetes, CI/CD GitHub Actions et infrastructure as code avec Terraform.',
  },
  {
    Icon: FiCpu,
    title: 'Intelligence Artificielle',
    description:
      'Machine learning, RAG et fine-tuning de modèles LLM. Intégration de l\'IA dans les workflows de développement.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const ValueProps = () => {
  return (
    <div className="value-props">
      <div className="value-props__inner">
        <motion.div
          className="value-props__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <span className="value-props__pill">Une</span>
            {' '}expertise{' '}
            <span className="value-props__arrow">→</span>
            {' '}des solutions complètes
            <br />
            <span>pour chaque besoin</span>
          </h2>
        </motion.div>

        <motion.div
          className="value-props__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {props.map((prop) => {
            const { Icon } = prop
            return (
              <motion.div key={prop.title} className="value-props__item" variants={itemVariant}>
                <div className="value-props__icon">
                  <Icon size={22} />
                </div>
                <h3>{prop.title}</h3>
                <p>{prop.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default ValueProps
