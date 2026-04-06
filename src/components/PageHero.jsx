import { motion } from 'framer-motion'

const PageHero = ({ badge, title, highlight, description }) => {
  return (
    <div className="page-hero">
      <motion.div
        className="page-hero__inner"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {badge && (
          <span className="page-hero__badge">{badge}</span>
        )}
        <h1>
          {title} {highlight && <span>{highlight}</span>}
        </h1>
        {description && (
          <p className="page-hero__desc">{description}</p>
        )}
      </motion.div>
    </div>
  )
}

export default PageHero
