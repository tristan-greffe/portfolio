import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useT } from '../i18n/ui'

const HomeCTA = () => {
  const t = useT()
  return (
    <div className='home-cta'>
      <motion.div
        className='home-cta__card'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>{t('cta.title')}</h2>
        <Link to='/contact' className='btn home-cta__btn'>
          {t('cta.button')} <FiArrowRight size={16} />
        </Link>
      </motion.div>
    </div>
  )
}

export default HomeCTA
