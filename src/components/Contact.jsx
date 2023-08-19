import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    
    emailjs
      .send(
        'service_bh1ctsr',
        'template_cfqotnu',
        { name: form.name, email: form.email, message: form.message },
        'AH5MnZz2MQzRzTaZk'
      )
      .then(
        () => {
          setLoading(false)
          alert('Thank you. I will get back to you as soon as possible.')
          setForm({ name: '', email: '', message: '' })
        },
        (error) => {
          setLoading(false)
          console.log(error)
          alert('Something went wrong.')
        }
      )
  }

  return (
    <section id="contact">
      <div className="section-header">
        <p>Get in touch</p>
        <h2>Contact.</h2>
      </div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <label>
          <span>Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
          />
        </label>
        <label>
          <span>Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
          />
        </label>
        <label>
          <span>Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
          />
        </label>
        <button type="submit">{loading ? "Sending..." : "Send"}</button>
      </form>
    </section>
  )
}

export default Contact
