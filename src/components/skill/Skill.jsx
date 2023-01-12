import React from 'react'

// Import CSS
import './skill.css'

// Imoort icons
import { BsPatchCheckFill } from 'react-icons/bs'

const Skill = () => {
  return (
    <section id='skill'>
      <h5>Quelques détails</h5>
      <h2>Hard Skills</h2>
      <div className='container skill__container'>
        <div className='skill__frontend'>
          <h3>Frontend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>
        <div className='skill__backend'>
          <h3>Backend Development</h3>
          <div className='skill__content'>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Ruby</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Ruby on Rails</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='skill__details'>
              <BsPatchCheckFill className='skill__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Basique</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill