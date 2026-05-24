import { motion } from 'framer-motion'
import { education } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'
import PageHero from '../components/PageHero'

const EducationItem = ({ item, index, locale, t }) => {
  const school = typeof item.school === 'string' ? item.school : pickLang(item.school, locale)
  const side = index % 2 === 0 ? 'left' : 'right'

  return (
    <motion.div
      className={`edu-item edu-item--${side}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
    >
      <div className='edu-item__marker'>
        <div className='edu-item__marker-icon'>
          <img src={item.icon} alt={school} />
        </div>
      </div>

      <div className='edu-item__content'>
        <span className='edu-item__date'>{pickLang(item.date, locale)}</span>
        <h3 className='edu-item__degree'>{pickLang(item.degree, locale)}</h3>
        <p className='edu-item__school'>{school}</p>
        <p className='edu-item__location'>{item.location}</p>

        {item.apprenticeshipAt && (
          <div className='edu-item__apprenticeship'>
            <span className='edu-item__apprenticeship-label'>{t('education.apprenticeship')}</span>
            <div className='edu-item__apprenticeship-company'>
              <div className='edu-item__apprenticeship-logo'>
                <img src={item.apprenticeshipAt.icon} alt={item.apprenticeshipAt.name} />
              </div>
              <span>{item.apprenticeshipAt.name}</span>
            </div>
          </div>
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
          <div className='edu-timeline__line' />
          {education.map((item, index) => (
            <EducationItem key={index} item={item} index={index} locale={locale} t={t} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Education
