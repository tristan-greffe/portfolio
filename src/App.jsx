import React from 'react'

// Imports componenets
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skill from './components/skill/Skill'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Skill />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App