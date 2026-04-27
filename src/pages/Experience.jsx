import { motion } from 'framer-motion'
import { experiences } from '../constants'
import { kalisio } from '../assets'
import PageHero from '../components/PageHero'

const KalisioOverview = () => (
  <motion.div
    className="exp-company"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="exp-company__icon">
      <img src={kalisio} alt="Kalisio" />
    </div>
    <div className="exp-company__info">
      <div className="exp-company__header">
        <h2>Kalisio</h2>
        <span className="exp-company__duration">Sept. 2022 — Présent</span>
      </div>
      <p>
        ESN spécialisée dans les solutions géospatiales open source pour la sécurité civile, l'environnement
        et l'aéronautique - cartes interactives, visualisation de données GIS et big data géospatial.
      </p>
      <span className="exp-company__location">Toulouse (31), France</span>
    </div>
  </motion.div>
)

const ExperienceCard = ({ experience, index }) => (
  <motion.div
    className={`exp-card ${experience.featured ? 'exp-card--featured' : ''}`}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.08 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="exp-card__inner">
      <div className="exp-card__head">
        <div className="exp-card__title-group">
          <h3>{experience.title}</h3>
          <span className="exp-card__company">{experience.company_name}</span>
        </div>
        <div className="exp-card__badges">
          <span className={`exp-card__contract exp-card__contract--${experience.contract === 'CDI' ? 'cdi' : 'alt'}`}>
            {experience.contract}
          </span>
          <span className="exp-card__date">{experience.date}</span>
        </div>
      </div>

      <ul className="exp-card__points">
        {experience.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {experience.skills && (
        <div className="exp-card__skills">
          {experience.skills.map((s) => (
            <span key={s} className="exp-card__skill">{s}</span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
)

const Experience = () => {
  return (
    <>
      <PageHero
        badge="Mon parcours professionnel"
        title="Expériences"
        highlight="& missions"
        description="Développeur & ingénieur chez Kalisio depuis 2022 - alternance fullstack, alternance DevOps, puis CDI sur des projets géospatiaux à fort impact."
      />
      <section id="experience">
        <KalisioOverview />
        <div className="exp-timeline">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} index={index} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Experience
