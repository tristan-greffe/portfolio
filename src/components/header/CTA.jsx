import React from 'react'

// Import CV
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Mon CV</a>
        <a href='#contact' className='btn btn-primary'>Me contacter</a>
    </div>
  )
}

export default CTA