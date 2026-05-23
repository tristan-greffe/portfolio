import { motion } from 'framer-motion'
import { highlightCards } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const HighlightCards = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <div className='highlight-cards'>
      <div className='highlight-cards__inner'>
        <motion.div
          className='highlight-cards__header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='highlight-cards__label'>{t('highlight.label')}</p>
          <h2>{t('highlight.title.before')}<span>{t('highlight.title.accent')}</span></h2>
        </motion.div>

        <motion.div
          className='highlight-cards__grid'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {highlightCards.map((card) => {
            const { Icon } = card
            const title = pickLang(card.title, locale)
            return (
              <motion.div key={title} className='highlight-cards__card' variants={cardVariant}>
                <div className='highlight-cards__card-icon'>
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{pickLang(card.description, locale)}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default HighlightCards
