import { motion } from 'framer-motion'
import { education } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'
import PageHero from '../components/PageHero'

const EducationCard = ({ item, index, locale }) => {
  const school = pickLang(item.school, locale)
  return (
    <motion.div
      className='edu-card'
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className='edu-card__icon'>
        <img src={item.icon} alt={school} />
      </div>

      <div className='edu-card__body'>
        <div className='edu-card__header'>
          <div>
            <h3>{pickLang(item.degree, locale)}</h3>
            <p className='edu-card__school'>{school}</p>
            <p className='edu-card__location'>{item.location}</p>
          </div>
          <span className='edu-card__date'>{pickLang(item.date, locale)}</span>
        </div>
        {item.description && (
          <p className='edu-card__desc'>{pickLang(item.description, locale)}</p>
        )}
      </div>
    </motion.div>
  )
}

const Education = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <>
      <PageHero
        badge={t('page.education.badge')}
        title={t('page.education.title')}
        highlight={t('page.education.highlight')}
        description={t('page.education.desc')}
      />
      <section id='education'>
        <div className='edu-timeline'>
          {education.map((item, index) => (
            <EducationCard key={index} item={item} index={index} locale={locale} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Education
