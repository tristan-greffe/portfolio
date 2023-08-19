import { frontend, backend, creator, web, kalisio, css, docker, git, html, javascript,
  mongodb, nodejs, reactjs, redux, tailwind, vuejs, feathersjs } from '../assets'

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

export const technologies = [
  { name: 'HTML 5', icon: html },
  { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'Vue JS', icon: vuejs },
  { name: 'React JS', icon: reactjs },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Feathers JS', icon: feathersjs },
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'git', icon: git },
  { name: 'docker', icon: docker }
]