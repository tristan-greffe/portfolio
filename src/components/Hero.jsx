import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <motion.a
          href="https://claude.ai/code"
          target="_blank"
          rel="noreferrer"
          className="hero__ai-badge"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <span>✦</span> Développé avec Claude Code
        </motion.a>

        <motion.p
          className="hero__greeting"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Bonjour, je suis
        </motion.p>

        <motion.h1
          className="hero__name"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Tristan <span>Greffe</span>
        </motion.h1>

        <motion.p
          className="hero__role"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          Développeur <span>web</span> et ingénieur <span>DevOps</span>
        </motion.p>

        <motion.p
          className="hero__bio"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
        >
          Je conçois et déploie des applications web modernes, du frontend interactif
          jusqu'à l'infrastructure cloud.
        </motion.p>

        <motion.div
          className="hero__actions"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
        >
          <Link to="/portfolio" className="btn btn--primary">
            Voir mes projets <FiArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn btn--outline">
            <FiMail size={16} /> Me contacter
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
