import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div id="hero">
      <div className="hero__head">
        <div>
          <div />
          <div />
        </div>
        <div>
          <h1>Hi, I'm <span>Tristan</span></h1>
          <p>I'm a web developer with JavaScript experience and DevOps skills.</p>
        </div>
      </div>
      <div className="hero__foot">
        <a href="#about">
          <div>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero
