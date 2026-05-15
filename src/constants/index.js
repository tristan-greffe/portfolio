import {
  FiUsers, FiSearch, FiZap, FiCheckSquare, FiRefreshCw, FiCode,
  FiShield, FiBarChart2, FiMessageSquare, FiCpu,
  FiGlobe, FiLayout, FiServer, FiCloud, FiMonitor
} from 'react-icons/fi'
import { kalisio, docker, git, javascript, k8s, helm, teleray, github, worldWideWeb,
  mongodb, nodejs, reactjs, redux, vuejs, feathersjs, artillery, terraform,
  pierrePaulRiquet, theHackingProject, threeWAcademy, liora,
  kalisioKnowledge } from '../assets'

export const navLinks = [
  { path: '/experience', title: 'Expériences' },
  { path: '/education', title: 'Formation' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/contact', title: 'Contact' },
]

export const companies = [
  {
    name: 'Kalisio',
    icon: kalisio,
    location: 'Toulouse (31), France',
    period: 'Sept. 2022 — Présent',
    description: "ESN spécialisée dans les solutions géospatiales open source pour la sécurité civile, l'environnement et l'aéronautique — cartes interactives, visualisation de données GIS et big data géospatial.",
  }
]

export const experiences = [
  {
    title: 'Ingénieur Full Stack & DevOps',
    company_name: 'Kalisio',
    icon: kalisio,
    contract: 'CDI',
    date: 'Juillet 2025 — Présent',
    skills: ['Python', 'Javascript', 'Bash', 'Node.js', 'Feathers.js', 'K8s', 'GIS', 'Vue.js', 'Quasar',],
    points: [
      'Conception et lead technique de Kalisio Knowledge - système RAG + Git Intelligence + Knowledge Graph indexant la totalité de la codebase, des commits et de la documentation Kalisio, exposé via MCP pour agents de code IA',
      'Évolutions et suivi de TELERAY (ASNR) : nouvelles fonctionnalités, conformité réglementaire, ouverture de l\'API publique et maintien en condition opérationnelle.',
      'Migration de l\'analyse qualité continue Code Climate → SonarQube : amélioration de la maintenabilité et intégration CI/CD.',
      'Participation active aux produits internes Kalisio : R&D, contribution au développement, gestion de produit et réflexion sur les orientations techniques.',
      'Maintien & amélioration des infrastructures cloud'
    ]
  },
  {
    title: 'Ingénieur DevOps',
    company_name: 'Kalisio',
    icon: kalisio,
    contract: 'Alternance',
    date: 'Janvier 2024 — Juin 2025',
    featured: 'ASNR — Teleray',
    skills: ['Kubernetes', 'Helm', 'Docker', 'Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Bash', 'Artillery', 'GIS'],
    points: [
      'Dans le cadre de la TMA Carto SIRSE (ASNR) : développement, déploiement en production et livraison continue de TELERAY (application de surveillance nationale de la radioactivité)',
      'Campagnes de tests de charge (Artillery) sur infrastructure k8s : identification et résolution de goulots d\'étranglement - tuning WiredTiger MongoDB, recalibration des probes K8s, gestion fine des ressources containers etc. Rapports d\'analyse et recommandations d\'architecture.',
      'Conception, développement et déploiement de jobs ETL géospatiaux',
      'Migration CI/CD : Travis CI → GitHub Actions, automatisation des tests E2E en cronjob k8s et déploiement d\'applications en production',
    ]
  },
  {
    title: 'Développeur Web Full Stack',
    company_name: 'Kalisio',
    icon: kalisio,
    contract: 'Alternance',
    date: 'Septembre 2022 — Décembre 2023',
    skills: ['JavaScript', 'Vue.js', 'Quasar', 'Feathers.js', 'Node.js', 'MongoDB', 'PWA'],
    points: [
      'Contribution aux applications cartographiques temps-réel de Kalisio',
      'Création de feathers-webpush (librairie open source)',
      'Conversion des applications web de Kalisio en Progressive Web App (SPA → PWA)',
      'Tests E2E (Puppeteer)',
      'Mise en place de l\'analyse de qualité continue (Code Climate)'
    ]
  },
]

export const education = [
  {
    degree: 'Master 1 - Administration Cloud',
    school: 'Liora - alternance',
    location: 'Toulouse (31), France',
    date: 'Janvier 2024 — Juin 2025',
    icon: liora
  },
  {
    degree: 'Titre RNCP Niveau 5 - Développeur Web Full Stack',
    school: '3W Academy - alternance',
    location: 'Toulouse (31), France',
    date: 'Septembre 2022 — Décembre 2023',
    icon: threeWAcademy
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
    degree: 'Classe Préparatoire aux Grandes Écoles — TSI',
    school: 'Lycée Pierre Paul Riquet',
    location: 'St Orens de Gameville (31), France',
    date: 'Septembre 2016 — Juin 2018',
    icon: pierrePaulRiquet,
    description: null
  },
  {
    degree: 'Baccalauréat STI2D',
    school: 'Lycée Pierre Paul Riquet',
    location: 'St Orens de Gameville (31), France',
    date: '2016',
    icon: pierrePaulRiquet,
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
    name: 'ASNR — Teleray (TMA Carto SIRSE)',
    description: 'Réseau national de surveillance de la radioactivité pour l\'ASNR. Système temps-réel de monitoring, alertes et visualisation cartographique des données radiologiques sur l\'ensemble du territoire français.',
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
    name: 'Kalisio Knowledge',
    description: 'Système RAG + Git Intelligence + Knowledge Graph exposant toute la codebase, commits et docs Kalisio via MCP pour agents de code IA. Architecture Python/LangChain, management produit et encadrement d\'un stagiaire.',
    tags: [
      { name: 'python', color: 'blue-text-gradient' },
      { name: 'RAG', color: 'green-text-gradient' },
      { name: 'MCP', color: 'pink-text-gradient' },
      { name: 'LangChain', color: 'yellow-text-gradient' }
    ],
    image: kalisioKnowledge,
    source_code_link: { link: 'https://github.com/kalisio/knowledge', icon: github }
  },
]

export const featureItems = [
  { Icon: FiUsers,         label: 'Management' },
  { Icon: FiSearch,        label: 'Rédaction de documents techniques' },
  { Icon: FiZap,           label: 'Autonomie & polyvalence' },
  { Icon: FiCheckSquare,   label: 'Spécification de besoin' },
  { Icon: FiRefreshCw,     label: "Rapport d'activité" },
  { Icon: FiCode,          label: 'Méthodologies de développement' },
  { Icon: FiShield,        label: 'Compréhension globale des problèmes' },
  { Icon: FiBarChart2,     label: 'Conception & architecture de système', highlight: true},
  { Icon: FiMessageSquare, label: "Maîtrise de l'expression orale" }
]

export const highlightCards = [
  {
    Icon: FiGlobe,
    title: 'Développeur Web',
    description: "Conception & développement d'applications web jusqu'à la mise en production.",
  },
  {
    Icon: FiLayout,
    title: 'Frontend',
    description: "Interfaces modernes & réactives, centrées sur la performance et l'expérience utilisateur.",
  },
  {
    Icon: FiServer,
    title: 'Backend',
    description: 'APIs RESTful et services temps-réel avec Node.js et Feathers.js, connectés à des bases de données NoSQL.',
  },
  {
    Icon: FiCloud,
    title: 'DevOps',
    description: 'Pipelines CI/CD, containerisation Docker, orchestration Kubernetes et infrastructure cloud avec Terraform.',
  },
]

export const valueProps = [
  {
    Icon: FiMonitor,
    title: 'Applications Web Modernes',
    description: 'SPA, PWA, interfaces réactives. De la maquette à la mise en production.',
  },
  {
    Icon: FiServer,
    title: 'Architecture Backend',
    description: 'APIs RESTful & temps-réel. Données NoSQL, authentification, WebSocket.',
  },
  {
    Icon: FiCloud,
    title: 'Infrastructure DevOps',
    description: 'Docker, Kubernetes, CI/CD.',
  },
  {
    Icon: FiCpu,
    title: 'Intelligence Artificielle',
    description: "Intégration de l'IA dans les workflows de développement.",
  },
]

export const storyBlocks = [
  {
    label: 'CLOUD & WEB MODERNE',
    title: 'Technologies web de',
    highlight: 'nouvelle génération',
    description:
      'Single-page applications avec Vue.js ou React, bases de données NoSQL comme MongoDB, infrastructures temps-réel reposant sur Docker et Kubernetes, et technologies back-end Node.js et Express.',
    linkTo: '/portfolio',
    linkText: 'Voir mes projets',
    Icon: FiCode,
    visualType: 'techStack',
    reversed: false,
  },
  {
    label: 'FORMATION & EXPÉRIENCE',
    title: 'Former et',
    highlight: 'innover en permanence',
    description:
      "Ma formation, mon expérience des projets informatiques, ainsi qu'une veille technologique permanente me permettent de répondre de façon efficace et innovante aux besoins de chaque projet.",
    linkTo: '/experience',
    linkText: 'Mon parcours',
    Icon: FiZap,
    visualType: 'stats',
    reversed: true,
  },
]
