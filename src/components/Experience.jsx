import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from '../constants'


const TimelineCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="timeline-icon__container">
          <img src={experience.icon} alt={experience.company_name} className="timeline-icon" />
        </div>
      }
    >
      <div>
        <h3 className="timeline-title">{experience.title}</h3>
        <p className="timeline-company">{experience.company_name}</p>
      </div>
      <ul className="timeline-experience">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`} className="timeline-experience__point">{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Work = () => {
  return (
    <section id="experience" className="experience">
      <div className="experience-header">
        <p className="experience-header__subtitle">What I have done so far</p>
        <h2 className="experience-header__title">Work Experience.</h2>
      </div>

      <div className="experience-container">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <TimelineCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </section>
  )
}

export default Work
