import React from 'react'
import { Tilt } from 'react-tilt'
import { skills } from '../constants'

const SkillCard = ({ title, icon }) => (
  <Tilt className="skill__card">
    <div className="skill__card-gradient">
      <div className="skill__card-content">
        <img src={icon} alt={title} />
        <h3>{title}</h3>
      </div>
    </div>
  </Tilt>
)

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <p>Introduction</p>
        <h2>Overview.</h2>
      </div>
      <div className="skill__wrapper">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default About
