import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Tech from './components/Tech'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Work />
        <Tech />
      </div>
    </BrowserRouter>
  )
}

export default App
