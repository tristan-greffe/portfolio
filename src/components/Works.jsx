import { Tilt } from 'react-tilt'
import { github } from '../assets'
import { projects } from '../constants'

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="project-card">
      <div className="project-card__head">
        <img src={image} alt={name} />
        <div onClick={() => window.open(source_code_link, "_blank")} className="project-card__head-badge">
          <img src={github} alt="github" />
        </div>
      </div>
      <div className="project-card__content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div className="project-card__foot">
        {tags.map((tag) => (
          <p key={tag.name} className={`${tag.color}`} style={{ fontSize: '14px' }}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <section id="work">
      <div className="section-header">
        <p>My work</p>
        <h2>Projects.</h2>
      </div>
      <p className="section-description">Following projects showcases my skills and experience through real-world examples of my work.</p>
      <div className="projects__wrappers">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Works
