import { motion } from 'framer-motion'
import { featureItems } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

const FeatureList = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <div className='feature-list'>
      <div className='feature-list__inner'>
        <motion.div
          className='feature-list__header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='feature-list__label'>{t('feature.label')}</p>
          <h2>{t('feature.title.before')} <span>{t('feature.title.accent')}</span></h2>
          <p className='feature-list__sub'>{t('feature.sub')}</p>
        </motion.div>

        <motion.div
          className='feature-list__grid'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {featureItems.map((item) => {
            const { Icon } = item
            const label = pickLang(item.label, locale)
            return (
              <motion.div
                key={label}
                className={`feature-list__item${item.highlight ? ' feature-list__item--highlight' : ''}`}
                variants={itemVariant}
              >
                <div className='feature-list__item-icon'>
                  <Icon size={18} />
                </div>
                <span>{label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default FeatureList
