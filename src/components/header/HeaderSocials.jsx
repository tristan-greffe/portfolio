import React from 'react'

// Import icons
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/%F0%9F%9A%80-tristan-greffe-aa0ba125a' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/entertotheneworld/' target='_blank' rel='noreferrer'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials