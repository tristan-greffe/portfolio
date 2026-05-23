import { technologies } from '../constants'
import { useT } from '../i18n/ui'

const TechBanner = () => {
  const t = useT()
  const items = [...technologies, ...technologies]

  return (
    <div className='tech-banner'>
      <p className='tech-banner__label'>{t('techBanner.label')}</p>
      <div className="tech-banner__wrapper">
        <div className="tech-banner__track">
          {items.map((tech, i) => (
            <div key={i} className="tech-banner__item">
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechBanner
