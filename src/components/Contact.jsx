import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      await emailjs.send('service_bh1ctsr', 'template_cfqotnu', { name: form.name, email: form.email, message: form.message }, 'AH5MnZz2MQzRzTaZk')
      setLoading(false)
      toast.success('Thank you. I will get back to you as soon as possible.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
      setForm({ name: '', email: '', message: '' })
    } catch (error) {
      setLoading(false)
      toast.error('Something went wrong.', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    }
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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  )
}

export default Contact
