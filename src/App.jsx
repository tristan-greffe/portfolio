import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
