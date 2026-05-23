import { motion } from 'framer-motion'
import { valueProps } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const ValueProps = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <div className='value-props'>
      <div className='value-props__inner'>
        <motion.div
          className='value-props__header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>
            <span className='value-props__pill'>{t('valueProps.pill')}</span>
            {' '}{t('valueProps.middle')}{' '}
            <span className='value-props__arrow'>→</span>
            {' '}{t('valueProps.before')}
            <br />
            <span>{t('valueProps.accent')}</span>
          </h2>
        </motion.div>

        <motion.div
          className='value-props__grid'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {valueProps.map((prop) => {
            const { Icon } = prop
            const title = pickLang(prop.title, locale)
            return (
              <motion.div key={title} className='value-props__item' variants={itemVariant}>
                <div className='value-props__icon'>
                  <Icon size={22} />
                </div>
                <h3>{title}</h3>
                <p>{pickLang(prop.description, locale)}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}

export default ValueProps
