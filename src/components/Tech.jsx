import { technologies } from '../constants'

const Tech = () => {
  return (
    <section className="tech" id="tech">
      <div className="tech-container">
        {technologies.map((technology) => (
          <img src={technology.icon} alt={technology.name} key={technology.name} className="tech-icon" />
        ))}
      </div>
    </section>
  )
}

export default Tech
