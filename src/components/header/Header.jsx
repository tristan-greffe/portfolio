import React from 'react'

// Import CSS
import './header.css'

// Import component
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

// Import images
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>👋 Je suis</h5>
        <h1>Tristan Greffe</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt='Tristan Greffe' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header