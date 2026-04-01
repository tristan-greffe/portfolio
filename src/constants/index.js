import { frontend, backend, creator, web, kalisio, docker, git, javascript, passwise, k8s, helm, teleray, github, worldWideWeb,
  mongodb, nodejs, reactjs, redux, vuejs, feathersjs, feathersQuasarBoilerplate, artillery, terraform,
  pierrePaulRiquet, theHackingProject, threeWAcademy, liora,
  machineLearning, clusters, nodeXml2json } from '../assets'

export const navLinks = [
  { path: '/experience', title: 'Expériences' },
  { path: '/education', title: 'Formation' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/skills', title: 'Compétences' },
  { path: '/contact', title: 'Contact' },
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

export const education = [
  {
    degree: 'Baccalauréat STI2D',
    school: 'Lycée Pierre Paul Riquet',
    location: 'St Orens de Gameville (31), France',
    date: '2016',
    icon: pierrePaulRiquet,
    description: null
  },
  {
    degree: 'Classe Préparatoire aux Grandes Écoles — TSI',
    school: 'Lycée Pierre Paul Riquet',
    location: 'St Orens de Gameville (31), France',
    date: 'Septembre 2016 — Juin 2018',
    icon: pierrePaulRiquet,
    description: 'Filière Technologie et Sciences Industrielles (TSI)'
  },
  {
    degree: 'Bootcamp Développeur Web Full Stack',
    school: 'The Hacking Project',
    location: 'Bordeaux (33), France',
    date: 'Avril 2022 — Août 2022',
    icon: theHackingProject,
    description: null
  },
  {
    degree: 'Titre RNCP Niveau 5 — Développeur Web Full Stack',
    school: '3W Academy',
    location: 'Toulouse (31), France',
    date: 'Septembre 2022 — Décembre 2023',
    icon: threeWAcademy,
    description: 'Formation en alternance'
  },
  {
    degree: 'Master 1 — Administration Cloud',
    school: 'Liora',
    location: 'Toulouse (31), France',
    date: 'Janvier 2024 — Juin 2025',
    icon: liora,
    description: null
  }
]

export const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'JavaScript', icon: javascript },
      { name: 'Vue JS', icon: vuejs },
      { name: 'React JS', icon: reactjs },
      { name: 'Redux Toolkit', icon: redux },
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Feathers JS', icon: feathersjs },
      { name: 'Node JS', icon: nodejs },
      { name: 'MongoDB', icon: mongodb },
    ]
  },
  {
    title: 'DevOps',
    skills: [
      { name: 'Docker', icon: docker },
      { name: 'Kubernetes', icon: k8s },
      { name: 'Helm', icon: helm },
      { name: 'Terraform', icon: terraform },
    ]
  },
  {
    title: 'Outils',
    skills: [
      { name: 'Git', icon: git },
      { name: 'Artillery.io', icon: artillery },
    ]
  }
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
  },
  {
    name: 'Machine Learning',
    description: 'Ressource éducative sur les fondamentaux du machine learning : deep learning, RAG (Retrieval-Augmented Generation) et fine-tuning de modèles IA.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'deep-learning', color: 'green-text-gradient' },
      { name: 'RAG', color: 'pink-text-gradient' },
      { name: 'fine-tuning', color: 'yellow-text-gradient' }
    ],
    image: machineLearning,
    source_code_link: { link: 'https://github.com/tristan-greffe/machine-learning', icon: github }
  },
  {
    name: 'Clusters',
    description: 'Guide d\'infrastructure DevOps couvrant Kubernetes, Helm, Docker et l\'orchestration de containers en production.',
    tags: [
      { name: 'kubernetes', color: 'blue-text-gradient' },
      { name: 'helm', color: 'green-text-gradient' },
      { name: 'docker', color: 'pink-text-gradient' },
      { name: 'terraform', color: 'yellow-text-gradient' }
    ],
    image: clusters,
    source_code_link: { link: 'https://github.com/tristan-greffe/clusters', icon: github }
  },
  {
    name: 'node-xml2json',
    description: 'Bibliothèque Node.js de conversion bidirectionnelle XML ↔ JSON, légère et performante.',
    tags: [
      { name: 'nodejs', color: 'blue-text-gradient' },
      { name: 'xml', color: 'green-text-gradient' },
      { name: 'json', color: 'pink-text-gradient' }
    ],
    image: nodeXml2json,
    source_code_link: { link: 'https://github.com/tristan-greffe/node-xml2json', icon: github }
  }
]
