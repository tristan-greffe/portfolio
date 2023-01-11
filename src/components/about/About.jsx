import React from 'react'

// Import CSS
import './about.css'

// Import image 
import ME from '../../assets/me-about.jpg'

// Import icons
import { FaAward, FaUserGraduate } from 'react-icons/fa'
import { GiSkills } from 'react-icons/gi'

const About = () => {
  return (
    <section id='about'>
      <h5>Pourquoi me choisir ?</h5>
      <h2>À propos de moi</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt='About Tristan Greffe' />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <FaUserGraduate className='about__icon'/>
              <h5>Formations</h5>
              <small>3+ years working</small>
            </article>
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Expériences</h5>
              <small>3+ years working</small>
            </article>
            <article className='about__card'>
              <GiSkills className='about__icon'/>
              <h5>Skills</h5>
              <small>3+ years working</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A quasi sit non. Dolorem impedit vitae doloribus qui dicta maxime, dignissimos repudiandae optio reprehenderit ea maiores. Perferendis rem magnam aspernatur quibusdam.</p>
          <a href='#contact' className='btn btn-primary'>Contactez moi</a>
        </div>
      </div>
    </section>
  )
}

export default About