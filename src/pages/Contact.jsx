import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { toast, ToastContainer } from 'react-toastify'
import { FiMail, FiSend, FiGithub, FiLinkedin } from 'react-icons/fi'
import 'react-toastify/dist/ReactToastify.css'

const SOCIAL_LINKS = [
  {
    icon: FiMail,
    label: 'greffe.tristan.fr@gmail.com',
    href: 'mailto:greffe.tristan.fr@gmail.com'
  },
  {
    icon: FiGithub,
    label: 'github.com/tristan-greffe',
    href: 'https://github.com/tristan-greffe'
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    href: '#'
  },
]

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.send(
        'service_bh1ctsr',
        'template_cfqotnu',
        { name: form.name, email: form.email, message: form.message },
        'AH5MnZz2MQzRzTaZk'
      )
      setLoading(false)
      toast.success('Message envoyé ! Je vous répondrai rapidement.')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setLoading(false)
      toast.error('Une erreur est survenue. Réessayez plus tard.')
    }
  }

  return (
    <section id="contact">
      <motion.div
        className="section-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p>Une question, un projet ?</p>
        <h2>Contact.</h2>
      </motion.div>

      <div className="contact-layout">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="contact-info__text">
            Je suis disponible pour des opportunités freelance, des collaborations
            ou simplement pour échanger autour d'un projet.
          </p>
          <div className="contact-info__links">
            {SOCIAL_LINKS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact-info__link">
                <s.icon size={18} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="contact-form__field">
            <label htmlFor="cf-name">Nom</label>
            <input
              id="cf-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="cf-email">Email</label>
            <input
              id="cf-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="votre@email.com"
              required
            />
          </div>
          <div className="contact-form__field">
            <label htmlFor="cf-message">Message</label>
            <textarea
              id="cf-message"
              name="message"
              rows={6}
              value={form.message}
              onChange={handleChange}
              placeholder="Votre message..."
              required
            />
          </div>
          <button type="submit" className="btn btn--primary" disabled={loading}>
            {loading ? 'Envoi en cours…' : <><FiSend size={15} /> Envoyer</>}
          </button>
        </motion.form>
      </div>

      <ToastContainer position="bottom-center" theme="colored" autoClose={5000} />
    </section>
  )
}

export default Contact
