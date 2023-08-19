import { frontend, backend, creator, web, kalisio } from '../assets'

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' }
]

export const skills = [
  { title: 'Web Developer', icon: web },
  { title: 'Backend Developer', icon: backend },
  { title: 'Frontend Developer', icon: frontend },
  { title: 'Content Creator', icon: creator }
]

export const experiences = [
  {
    title: 'JavaScript Developer',
    company_name: 'Kalisio',
    icon: kalisio,
    iconBg: '#FFF',
    date: 'March 2023 - Present',
    points: [
      'Get acquainted with open source web applications within the Kalisio ecosystem, utilizing the QuasarJS and FeathersJS frameworks.',
      'Incorporate PWA and webpush notifications into the Kalisio ecosystem'
    ]
  }
]