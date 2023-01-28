import React from 'react'

// Import CSS
import './portfolio.css'

// Import image
import MyCryptoPortfolio from '../../assets/mycryptoportfolio.jpg'

// Import icons
import { DiRuby, DiReact } from 'react-icons/di'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Projet en Freelance</h5>
      <h2>MyCryptoPortfolio</h2>
      <div className='container portfolio__container'>
        <div className='portfolio__content'>
          <div className='portfolio__cards'>
            <article className='portfolio__card'>
              <DiRuby className='portfolio__icon'/>
              <h5>Backend</h5>
              <small>RUBY ON RAILS</small>
            </article>
            <article className='portfolio__card'>
              <DiReact className='portfolio__icon'/>
              <h5>Frontend</h5>
              <small>REACTJS</small>
            </article>
          </div>
          <h3 className='text-light'>PROJET EN COURS DE DEVELOPPEMENT</h3>
          <p className='text-light'>MyCryptoPortfolio est une application qui aide ses utilisateurs à surveiller l'ensemble de leurs investissements en crypto-monnaies en leur offrant une variété de statistiques.</p>
          <div className='portfolio__item-cta'>
            <a href='https://github.com/entertotheneworld/my-crypto-portfolio' target='_blank' rel='noreferrer' className='btn'>Github</a>
            <a href='https://www.my-crypto-portfolio.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live demo</a>
          </div>
        </div>
        <div className='portfolio__me'>
          <div className='portfolio__me-image'>
            <img src={MyCryptoPortfolio} alt='portfolio My Crypto Portfolio' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio