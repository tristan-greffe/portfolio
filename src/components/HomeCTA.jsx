import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

const HomeCTA = () => {
  return (
    <div className="home-cta">
      <motion.div
        className="home-cta__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Travaillons ensemble ?</h2>
        <p>Un projet, une idée, ou simplement envie d'échanger — je suis disponible.</p>
        <Link to="/contact" className="btn home-cta__btn">
          Prendre contact <FiArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  )
}

export default HomeCTA
