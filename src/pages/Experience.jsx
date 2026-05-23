import { motion } from 'framer-motion'
import { experiences, companies } from '../constants'
import { useLanguage, pickLang } from '../context/LanguageContext'
import { useT } from '../i18n/ui'
import PageHero from '../components/PageHero'

const CompanyOverview = ({ company, locale }) => (
  <motion.div
    className='exp-company'
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className='exp-company__icon'>
      <img src={company.icon} alt={company.name} />
    </div>
    <div className='exp-company__info'>
      <div className='exp-company__header'>
        <h2>{company.name}</h2>
        <span className='exp-company__duration'>{pickLang(company.period, locale)}</span>
      </div>
      <p>{pickLang(company.description, locale)}</p>
      <span className='exp-company__location'>{company.location}</span>
    </div>
  </motion.div>
)

const ExperienceCard = ({ experience, index, locale }) => {
  const contract = pickLang(experience.contract, locale)
  const isCDI = experience.contract && (experience.contract.fr === 'CDI' || experience.contract === 'CDI')
  return (
    <motion.div
      className={`exp-card ${experience.featured ? 'exp-card--featured' : ''}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className='exp-card__inner'>
        <div className='exp-card__head'>
          <div className='exp-card__title-group'>
            <h3>{pickLang(experience.title, locale)}</h3>
            <span className='exp-card__company'>{experience.company_name}</span>
          </div>
          <div className='exp-card__badges'>
            <span className={`exp-card__contract exp-card__contract--${isCDI ? 'cdi' : 'alt'}`}>
              {contract}
            </span>
            <span className='exp-card__date'>{pickLang(experience.date, locale)}</span>
          </div>
        </div>

        <ul className='exp-card__points'>
          {experience.points.map((point, i) => (
            <li key={i}>{pickLang(point, locale)}</li>
          ))}
        </ul>

        {experience.skills && (
          <div className='exp-card__skills'>
            {experience.skills.map((s) => (
              <span key={s} className='exp-card__skill'>{s}</span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

const Experience = () => {
  const { locale } = useLanguage()
  const t = useT()
  const grouped = companies.map((company) => ({
    company,
    exps: experiences.filter((e) => e.company_name === company.name),
  }))

  return (
    <>
      <PageHero
        badge={t('page.experience.badge')}
        title={t('page.experience.title')}
        highlight={t('page.experience.highlight')}
        description={t('page.experience.desc')}
      />
      <section id='experience'>
        {grouped.map(({ company, exps }) => (
          <div key={company.name} className='exp-group'>
            <CompanyOverview company={company} locale={locale} />
            <div className='exp-timeline'>
              {exps.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} index={index} locale={locale} />
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Experience
