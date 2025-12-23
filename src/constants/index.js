import { frontend, backend, creator, web, kalisio, docker, git, javascript, passwise, k8s, helm, teleray, github, worldWideWeb,
  mongodb, nodejs, reactjs, redux, vuejs, feathersjs, feathersQuasarBoilerplate, artillery, terraform } from '../assets'

export const navLinks = [
  { id: 'about', title: 'About' },
  { id: 'work', title: 'Work' },
  { id: 'contact', title: 'Contact' }
]

export const skills = [
  { title: 'Web Developer', icon: web },
  { title: 'Backend Developer', icon: backend },
  { title: 'Frontend Developer', icon: frontend },
  { title: 'DevOps Engineer', icon: creator }
]

export const experiences = [
  {
    title: 'JavaScript Developer',
    company_name: 'Kalisio',
    icon: kalisio,
    iconBg: '#fff',
    date: 'March 2023 - December 2023',
    points: [
      'Explore the Kalisio ecosystem using the QuasarJS and FeathersJS frameworks.',
      'Conversion of Kalisio Web Applications into Progressive Web Apps (PWA)',
      'Development of "feathers-webpush" library to facilitate the integration of the Web Push protocol in FeathersJS applications.',
      'Implemented comprehensive updates to E2E testing protocols leveraging Puppeteer',
      'Optimization of Account Verification Process by transitioning from long to short tokens'
    ]
  },
  {
    title: 'DevOps Engineer',
    company_name: 'Kalisio',
    icon: kalisio,
    iconBg: '#fff',
    date: 'January 2024 - December 2025',
    points: [
      'Migrated Continuous Integration (CI) from Travis CI to GitHub Actions',
      'E2E test automation: Configured a cronjob, on the staging cluster, to execute E2E tests.',
      'Design and development of the TELERAY application (national radioactivity monitoring and alert network) for ASNR: business specification, data ingestion, deployment, load testing, development, and testing.'
    ]
  },
  {
    title: 'JavaScript Developer',
    company_name: 'Kalisio',
    icon: kalisio,
    iconBg: '#fff',
    date: 'January 2025 - December 2025',
    points: [
      'Migrated code quality analysis from Code Climate to SonarQube, improving maintainability and CI/CD integration.',
      'Enhanced the TELERAY application: implemented access control based on user profiles and developed a public API for data exposure geospatial data using OGC API Features standards via the KFS service (https://github.com/kalisio/kfs)',
      'Integrated advanced PDF generation with pdfme / PDFLib and Kapture service (https://github.com/kalisio/kapture) for map printing',
      'Development & deployment of the kalisio Print (https://github.com/kalisio/print)',
    ]
  },
  {
    title: 'JavaScript Developer',
    company_name: 'Kalisio',
    icon: kalisio,
    iconBg: '#fff',
    date: 'January 2026 - December 2026',
    points: []
  },
]

export const technologies = [
  // { name: 'HTML 5', icon: html },
  // { name: 'CSS 3', icon: css },
  { name: 'JavaScript', icon: javascript },
  { name: 'Vue JS', icon: vuejs },
  { name: 'React JS', icon: reactjs },
  { name: 'Redux Toolkit', icon: redux },
  { name: 'Feathers JS', icon: feathersjs },
  { name: 'Node JS', icon: nodejs },
  // { name: 'Python', icon: python },
  { name: 'MongoDB', icon: mongodb },
  { name: 'Git', icon: git },
  { name: 'Docker', icon: docker },
  { name: 'Kubernetes', icon: k8s },
  { name: 'Helm', icon: helm },
  { name: 'Artillery.io', icon: artillery },
  { name: 'Terraform', icon: terraform }
]

export const projects = [
  {
    name: 'IRSN - Teleray',
    description: 'National radioactivity monitoring and alert network.',
    tags: [
      { name: 'quasar', color: 'blue-text-gradient' },
      { name: 'feathers', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' },
      { name: 'kubernetes', color: 'yellow-text-gradient' }
    ],
    image: teleray,
    source_code_link: { link: 'https://teleray.irsn.fr/', icon: worldWideWeb }
  },
  {
    name: 'Feathers Quasar Boilerplate',
    description: 'Powerful fusion of Feathers.js and Quasar. It provides a solid foundation for developing full-featured web applications with real-time functionality & full authentication.',
    tags: [
      { name: 'quasar', color: 'blue-text-gradient' },
      { name: 'feathers', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' }
    ],
    image: feathersQuasarBoilerplate,
    source_code_link: { link: 'https://github.com/tristan-greffe/feathers-quasar-boilerplate', icon: github }
  },
  {
    name: 'Passwise',
    description: 'An open-source password manager, designed as a progressive web application (PWA).',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'feathers', color: 'green-text-gradient' },
      { name: 'mongodb', color: 'pink-text-gradient' }
    ],
    image: passwise,
    source_code_link: { link: 'https://github.com/tristan-greffe/passwise', icon: github }
  }
]
