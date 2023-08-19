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
        <div className="timeline-icon">
          <img src={experience.icon} alt={experience.company_name} />
        </div>
      }
    >
      <div className="timeline-card__header">
        <h3>{experience.title}</h3>
        <p>{experience.company_name}</p>
      </div>
      <ul className="timeline-card__content">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Work = () => {
  return (
    <section id="experience">
      <div className="section-header">
        <p>What I have done so far</p>
        <h2>Work Experience.</h2>
      </div>
      <div className="experience__wrapper">
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
