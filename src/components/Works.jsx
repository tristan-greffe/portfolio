import { Tilt } from 'react-tilt'
import { github } from '../assets'
import { projects } from '../constants'

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt options={{ max: 45, scale: 1, speed: 450 }} className="project">
      <div className="project__head">
        <img src={image} alt={name} className="project__head__image-project"/>
        <div className="project__head__badge">
          <div onClick={() => window.open(source_code_link, "_blank")} className="project__head__badge-container">
            <img src={github} alt="github" className="project__head__badge-github" />
          </div>
        </div>
      </div>
      <div className="project__content">
        <h3 className="project__content-title">{name}</h3>
        <p className="project__content-subtitle">{description}</p>
      </div>
      <div className="project__feet">
        {tags.map((tag) => (
          <p key={tag.name} className={`${tag.color}`} style={{ fontSize: '14px' }}>#{tag.name}</p>
        ))}
      </div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <section className="work" id="work">
      <div className="work-header">
        <p className="work-header__subtitle">My work</p>
        <h2 className="work-header__title">Projects.</h2>
      </div>
      <p className="work-content">Following projects showcases my skills and experience through real-world examples of my work.</p>

      <div className="work-container">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Works
