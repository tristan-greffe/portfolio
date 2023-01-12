import React from 'react'

// Import CSS
import './portfolio.css'

// Import image
import MyCryptoPortfolio from '../../assets/portfolio1.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Quelque</h5>
      <h2>Mon Travail</h2>
      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={MyCryptoPortfolio} alt='My Crypto Portfolio' />
          </div>
          <h3>MyCryptoPortfolio</h3>
          <div className='portfolio__item-cta'>
            <a href='https://github.com' className='btn'>Github</a>
            <a href='https://www.my-crypto-portfolio.com' className='btn btn-primary' target='_blank' rel='noreferrer'>Live demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio