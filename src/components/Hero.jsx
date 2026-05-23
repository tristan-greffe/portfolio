import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import { vuejs, reactjs, nodejs, feathersjs, git, docker, k8s, helm, terraform } from '../assets'
import { useLanguage } from '../context/LanguageContext'
import { useT } from '../i18n/ui'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }
  })
}

const floatAnim = (delay = 0) => ({
  animate: { y: [0, -8, 0] },
  transition: { duration: 3.5, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut', delay }
})

const PIPELINE = [
  {
    label: { fr: 'Développement', en: 'Development' },
    color: '#dcfce7',
    icons: [{ src: vuejs, alt: 'Vue.js' }, { src: reactjs, alt: 'React' }, { src: nodejs, alt: 'Node.js' }, { src: feathersjs, alt: 'Feathers' }],
  },
  {
    label: { fr: 'Build & Test', en: 'Build & Test' },
    color: '#d1fae5',
    icons: [{ src: git, alt: 'Git' }, { src: docker, alt: 'Docker' }],
  },
  {
    label: { fr: 'Production', en: 'Production' },
    color: '#a7f3d0',
    icons: [{ src: k8s, alt: 'Kubernetes' }, { src: helm, alt: 'Helm' }, { src: terraform, alt: 'Terraform' }],
  },
]

const HeroVisual = ({ locale }) => (
  <div className='hero-visual'>
    <div className='hero-visual__dots' />
    {PIPELINE.map((step, i) => (
      <div key={step.label.fr} className='hero-visual__step'>
        <motion.div
          className='hero-visual__card'
          style={{ background: step.color }}
          {...floatAnim(i * 0.6)}
        >
          <p className='hero-visual__card-label'>{step.label[locale] || step.label.fr}</p>
          <div className='hero-visual__card-icons'>
            {step.icons.map((icon) => (
              <img key={icon.alt} src={icon.src} alt={icon.alt} title={icon.alt} />
            ))}
          </div>
        </motion.div>
        {i < PIPELINE.length - 1 && (
          <div className='hero-visual__connector'>
            <span />
            <div className='hero-visual__arrow-dot' />
          </div>
        )}
      </div>
    ))}
  </div>
)

const Hero = () => {
  const { locale } = useLanguage()
  const t = useT()

  return (
    <section className='hero'>
      <div className='hero__layout'>
        <div className='hero__content'>
          <motion.p
            className='hero__greeting'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={0}
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            className='hero__name'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={1}
          >
            Tristan <span>Greffe</span>
          </motion.h1>

          <motion.p
            className='hero__role'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={2}
          >
            {locale === 'fr' ? (
              <>Développeur <span>web</span> et ingénieur <span>DevOps</span></>
            ) : (
              <><span>Web</span> developer and <span>DevOps</span> engineer</>
            )}
          </motion.p>

          <motion.p
            className='hero__bio'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={3}
          >
            {t('hero.bio')}
          </motion.p>

          <motion.div
            className='hero__actions'
            variants={fadeUp}
            initial='hidden'
            animate='visible'
            custom={4}
          >
            <Link to='/portfolio' className='btn btn--primary'>
              {t('hero.cta.projects')} <FiArrowRight size={16} />
            </Link>
            <Link to='/contact' className='btn btn--outline'>
              <FiMail size={16} /> {t('hero.cta.contact')}
            </Link>
          </motion.div>
        </div>

        <motion.div
          className='hero__visual-col'
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <HeroVisual locale={locale} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
