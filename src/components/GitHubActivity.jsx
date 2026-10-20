import { motion } from 'framer-motion'
import { FiActivity, FiCalendar, FiZap, FiAlertCircle } from 'react-icons/fi'
import { useGitHubActivity } from '../hooks/useGitHubActivity'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const metrics = [
  { key: 'contributions', Icon: FiActivity },
  { key: 'activeDays', Icon: FiCalendar },
  { key: 'bestStreak', Icon: FiZap },
  { key: 'issues', Icon: FiAlertCircle },
]

const toDate = (day) => new Date(`${day.date}T00:00:00Z`)

// Split the flat list of days into calendar columns, padding the first week
// so every column starts on a Sunday like on GitHub
const buildWeeks = (days) => {
  if (!days.length) return []

  const weeks = []
  let week = new Array(toDate(days[0]).getUTCDay()).fill(null)

  days.forEach((day) => {
    week.push(day)
    if (week.length === 7) {
      weeks.push(week)
      week = []
    }
  })

  if (week.length) weeks.push([...week, ...new Array(7 - week.length).fill(null)])
  return weeks
}

const GitHubActivity = () => {
  const { locale } = useLanguage()
  const t = useT()
  const { activity, status } = useGitHubActivity()

  // Every source unreachable and no cache: hide the section rather than show a broken one
  if (status === 'error') return null

  const intlLocale = locale === 'fr' ? 'fr-FR' : 'en-US'
  const formatNumber = (value) => value.toLocaleString(intlLocale)
  const monthFormat = new Intl.DateTimeFormat(intlLocale, { month: 'short', timeZone: 'UTC' })
  const dayFormat = new Intl.DateTimeFormat(intlLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

  // A source that failed drops its metric instead of showing an endless skeleton
  const visibleMetrics = activity ? metrics.filter(({ key }) => activity[key] !== null) : metrics
  const days = activity ? activity.days : []
  const weeks = buildWeeks(days)

  const monthLabel = (week, index) => {
    const day = week.find(Boolean)
    if (!day) return ''
    const previous = index > 0 ? weeks[index - 1].find(Boolean) : null
    if (previous && toDate(previous).getUTCMonth() === toDate(day).getUTCMonth()) return ''
    return monthFormat.format(toDate(day))
  }

  return (
    <div className='github-activity'>
      <div className='github-activity__inner'>
        <motion.div
          className='github-activity__header'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className='github-activity__label'>{t('github.label')}</p>
          <h2>{t('github.title.before')}<span>{t('github.title.accent')}</span></h2>
        </motion.div>

        <motion.div
          className='github-activity__metrics'
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {visibleMetrics.map(({ key, Icon }) => {
            const value = activity ? activity[key] : null
            return (
              <div key={key} className='github-activity__metric'>
                <div className='github-activity__metric-icon'>
                  <Icon size={20} />
                </div>
                <div>
                  <strong className={value === null ? 'github-activity__skeleton' : ''}>
                    {value === null ? '000' : formatNumber(value)}
                  </strong>
                  <p>{t(`github.metric.${key}`)}</p>
                </div>
              </div>
            )
          })}
        </motion.div>

        {weeks.length > 0 && (
          <motion.div
            className='github-activity__calendar'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className='github-activity__scroll'>
              <div className='github-activity__months'>
                {weeks.map((week, index) => (
                  <span key={index} className='github-activity__month'>{monthLabel(week, index)}</span>
                ))}
              </div>
              <div className='github-activity__weeks'>
                {weeks.map((week, index) => (
                  <div key={index} className='github-activity__week'>
                    {week.map((day, position) => (day
                      ? (
                        <span
                          key={day.date}
                          className={`github-activity__day github-activity__day--${day.level}`}
                          title={`${formatNumber(day.count)} ${t('github.calendar.unit')} · ${dayFormat.format(toDate(day))}`}
                        />
                        )
                      : <span key={`empty-${position}`} className='github-activity__day github-activity__day--empty' />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className='github-activity__legend'>
              <span>{t('github.calendar.less')}</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <i key={level} className={`github-activity__day github-activity__day--${level}`} />
              ))}
              <span>{t('github.calendar.more')}</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default GitHubActivity
