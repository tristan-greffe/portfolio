import { motion } from 'framer-motion'
import { competences } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const LevelDots = ({ level, max = 5 }) => (
  <div className='comp-sidebar__dots' aria-label={`Level ${level}/${max}`}>
    {Array.from({ length: max }).map((_, i) => (
      <span key={i} className={`comp-sidebar__dot ${i < level ? 'comp-sidebar__dot--filled' : ''}`} />
    ))}
  </div>
)

const CompetencesSidebar = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <motion.aside
      className='comp-sidebar'
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='comp-sidebar__title'>{t('competences.title')}</h2>

      {competences.map((group) => (
        <div key={pickLang(group.category, locale)} className='comp-sidebar__group'>
          <h3 className='comp-sidebar__group-title'>{pickLang(group.category, locale)}</h3>
          <ul className='comp-sidebar__items'>
            {group.items.map((item) => (
              <li key={pickLang(item.title, locale)} className='comp-sidebar__item'>
                <div className='comp-sidebar__item-head'>
                  <span className='comp-sidebar__item-title'>{pickLang(item.title, locale)}</span>
                  <LevelDots level={item.level} />
                </div>
                <span className='comp-sidebar__item-desc'>{pickLang(item.description, locale)}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </motion.aside>
  )
}

export default CompetencesSidebar
