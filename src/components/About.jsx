import React from 'react'
import { Tilt } from 'react-tilt'
import { skills } from '../constants'

const SkillCard = ({ title, icon }) => (
  <Tilt className="skill">
    <div className="skill__gradient">
      <div className="skill__container">
        <img src={icon} alt={title} className="skill__img" />
        <h3 className="skill__title">{title}</h3>
      </div>
    </div>
  </Tilt>
)

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <p className="about-header__subtitle">Introduction</p>
        <h2 className="about-header__title">Overview.</h2>
      </div>
      <p className="about-content">I'm a web developer with experience in JavaScript, and expertise in frameworks like React, Node.js & Feathers.js.</p>
      <div className="about-skills">
        {skills.map((skill, index) => (
          <SkillCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </section>
  )
}

export default About
