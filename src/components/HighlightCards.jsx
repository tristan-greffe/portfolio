import { motion } from 'framer-motion'
import { FiGlobe, FiLayout, FiServer, FiCloud } from 'react-icons/fi'

const cards = [
  {
    Icon: FiGlobe,
    title: 'Développeur Web',
    description:
      "Conception & développement d'applications web jusqu'à la mise en production.",
  },
  {
    Icon: FiLayout,
    title: 'Frontend',
    description:
      "Interfaces modernes & réactives, centrées sur la performance et l'expérience utilisateur.",
  },
  {
    Icon: FiServer,
    title: 'Backend',
    description:
      'APIs RESTful et services temps-réel avec Node.js et Feathers.js, connectés à des bases de données NoSQL.',
  },
  {
    Icon: FiCloud,
    title: 'DevOps',
    description:
      'Pipelines CI/CD, containerisation Docker, orchestration Kubernetes et infrastructure cloud avec Terraform.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const HighlightCards = () => {
  return (
    <div className="highlight-cards">
      <div className="highlight-cards__inner">
        <motion.div
          className="highlight-cards__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="highlight-cards__label">CE QUE JE FAIS</p>
          <h2>Mes domaines d'<span>expertise</span></h2>
        </motion.div>

        <motion.div
          className="highlight-cards__grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card) => {
            const { Icon } = card
            return (
              <motion.div key={card.title} className="highlight-cards__card" variants={cardVariant}>
                <div className="highlight-cards__card-icon">
                  <Icon size={22} />
                </div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default HighlightCards
