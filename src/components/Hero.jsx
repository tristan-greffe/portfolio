import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__element">
          <div className="hero__element-1" />
          <div className="hero__element-2" />
        </div>
        <div>
          <h1 className="hero__title">Hi, I'm <span style={{color: "rgb(145 94 255 / 1)"}}>Tristan</span></h1>
          <p className="hero__subtitle">I'm a web developer with experience in JavaScript, and expertise<br/> in frameworks like React, Node.js & Feathers.js.</p>
        </div>
      </div>
      <div className="hero__motion">
        <a href="#about">
          <div className="hero__motion-container">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="hero__motion-animation"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
