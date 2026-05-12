import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { vuejs, reactjs, javascript, nodejs, feathersjs, mongodb, docker, k8s } from '../assets'
import { storyBlocks } from '../constants'

const TechStackVisual = () => (
  <div className="story-visual story-visual--stack">
    <div className="story-visual__card">
      <div className="story-visual__group">
        <span className="story-visual__group-label">Frontend</span>
        <div className="story-visual__icons">
          <img src={vuejs} alt="Vue.js" title="Vue.js" />
          <img src={reactjs} alt="React" title="React" />
          <img src={javascript} alt="JavaScript" title="JavaScript" />
        </div>
      </div>
      <div className="story-visual__group">
        <span className="story-visual__group-label">Backend</span>
        <div className="story-visual__icons">
          <img src={nodejs} alt="Node.js" title="Node.js" />
          <img src={feathersjs} alt="Feathers.js" title="Feathers.js" />
          <img src={mongodb} alt="MongoDB" title="MongoDB" />
        </div>
      </div>
      <div className="story-visual__group">
        <span className="story-visual__group-label">Cloud</span>
        <div className="story-visual__icons">
          <img src={docker} alt="Docker" title="Docker" />
          <img src={k8s} alt="Kubernetes" title="Kubernetes" />
        </div>
      </div>
    </div>
  </div>
)

const StatsVisual = () => (
  <div className="story-visual story-visual--stats">
    {[
      { value: '4+', label: "ans d'expérience" },
      { value: '5+', label: 'projets déployés' },
      { value: '10+', label: 'technologies' },
    ].map((s) => (
      <div key={s.label} className="story-visual__stat">
        <span className="story-visual__stat-value">{s.value}</span>
        <span className="story-visual__stat-label">{s.label}</span>
      </div>
    ))}
  </div>
)

const VISUALS = {
  techStack: TechStackVisual,
  stats: StatsVisual,
}

const StorySection = () => {
  return (
    <div className="story-section">
      {storyBlocks.map((block, i) => {
        const { Icon } = block
        const Visual = VISUALS[block.visualType]
        return (
          <div key={i} className={`story-block ${block.reversed ? 'story-block--reversed' : ''}`}>
            <motion.div
              className="story-block__text"
              initial={{ opacity: 0, x: block.reversed ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <div className="story-block__icon-wrap">
                <Icon size={18} />
              </div>
              <p className="story-block__label">{block.label}</p>
              <h2>
                {block.title} <span>{block.highlight}</span>
              </h2>
              <p className="story-block__desc">{block.description}</p>
              <Link to={block.linkTo} className="btn btn--outline">
                {block.linkText} <FiArrowRight size={14} />
              </Link>
            </motion.div>

            <motion.div
              className="story-block__visual"
              initial={{ opacity: 0, x: block.reversed ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6 }}
            >
              <Visual />
            </motion.div>
          </div>
        )
      })}
    </div>
  )
}

export default StorySection
