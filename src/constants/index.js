import { frontend, backend, creator, web, kalisio, css, docker, git, html, javascript,
  mongodb, nodejs, reactjs, redux, vuejs, feathersjs, feathersQuasarBoilerplate } from '../assets'

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
    iconBg: '#fff',
    date: 'March 2023 - Present',
    points: [
      'Explore the Kalisio ecosystem using the QuasarJS and FeathersJS frameworks.',
      'Convert Kalisio web applications into Progressive Web Apps (PWA).',
      'Create a library called "feathers-webpush" to facilitate the integration of the Web Push protocol in FeathersJS applications.',
      'Update tests using Puppeteer',
      'Improve account verification by transitioning from long to short tokens',
      'Migrate continuous integration (CI) from Travis CI to GitHub Actions'
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
  { name: 'Feathers JS', icon: feathersjs },
  { name: 'Node JS', icon: nodejs },
  { name: 'MongoDB', icon: mongodb },
  { name: 'git', icon: git },
  { name: 'docker', icon: docker }
]

export const projects = [
  {
    name: 'Feathers Quasar Boilerplate',
    description: 'Powerful fusion of Feathers.js and Quasar. It provides a solid foundation for developing full-featured web applications with real-time functionality & full authentication.',
    tags: [
      { name: 'quasar', color: 'blue-text-gradient' },
      { name: 'feathers', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
    ],
    image: feathersQuasarBoilerplate,
    source_code_link: 'https://github.com/tristan-greffe/feathers-quasar-boilerplate'
  }
]
