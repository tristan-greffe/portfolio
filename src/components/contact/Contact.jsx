import React, { useRef } from 'react'

// Import CSS
import './contact.css'

// Import icons
import { MdOutlineEmail } from 'react-icons/md'
import { BsWhatsapp } from 'react-icons/bs'

// Import EmailJS
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_v812vqb', 'template_cfqotnu', form.current, 'AH5MnZz2MQzRzTaZk')
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Restons en contact</h5>
      <h2>Contactez moi</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>tristan.greffe@hotmail.com</h5>
            <a href='mailto:tristan.greffe@hotmail.com' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+33698346224</h5>
            <a href='https://wa.link/yrdc7d' target='_blank' rel='noreferrer'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Nom' required/>
          <input type='email' name='email' placeholder='Email' required/>
          <textarea name='message' rows='7' placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact