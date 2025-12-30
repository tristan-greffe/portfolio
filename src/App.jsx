import { HashRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Tech from './components/Tech'
import Works from './components/Works'
import Contact from './components/Contact'
import AccentPicker from './components/AccentPicker'

const App = () => {
  return (
    <HashRouter>
      <div className="bg-hero">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Contact />
      <AccentPicker />
    </HashRouter>
  )
}

export default App
