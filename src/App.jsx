import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero">
          <Navbar />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
