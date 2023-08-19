import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'
import { menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState('')
  const [toggle, setToggle] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
        setActive('')
      }
    }

    window.addEventListener('scroll', handleScroll)

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll('section[id]')

      sections.forEach((current) => {
        const sectionId = current.getAttribute('id')
        const sectionHeight = current.offsetHeight
        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId)
        }
      })
    }

    window.addEventListener('scroll', navbarHighlighter)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', navbarHighlighter)
    }
  }, [])

  return (
    <nav className={`${ scrolled ? "bg-primary" : "bg-transparent" }`}>
      <div className="nav__wrapper">
        <Link to="/" onClick={() => { window.scrollTo(0, 0) }}>
          <p className='flex'>Tristan Greffe &nbsp;<span className="nav-logo__title">|&nbsp; Portfolio</span></p>
        </Link>
        <ul>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`${ active === nav.id ? "text-white" : "text-secondary" }`}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div>
          <img src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)} />
          <div className={`${ !toggle ? "hidden" : "flex" }`}>
            <ul>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`${ active === nav.id ? "text-white" : "text-secondary" }`}
                  onClick={() => { setToggle(!toggle) }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
