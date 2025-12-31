import Hero from '../components/Hero'
import About from '../components/About'

const Home = () => {
  return (
    <>
      <div className="bg-hero">
        <Hero />
      </div>
      <About />
    </>
  )
}

export default Home
