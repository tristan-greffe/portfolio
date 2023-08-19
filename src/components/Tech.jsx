import { technologies } from '../constants'

const Tech = () => {
  return (
    <section id="tech">
      <div>
        {technologies.map((technology) => (
          <img src={technology.icon} alt={technology.name} key={technology.name} />
        ))}
      </div>
    </section>
  )
}

export default Tech
