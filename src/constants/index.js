import {
  FiUsers, FiSearch, FiZap, FiCheckSquare, FiRefreshCw, FiCode,
  FiShield, FiBarChart2, FiMessageSquare, FiCpu,
  FiGlobe, FiLayout, FiServer, FiCloud, FiMonitor
} from 'react-icons/fi'
import { kalisio, docker, git, javascript, k8s, helm, teleray,
  mongodb, nodejs, reactjs, redux, vuejs, feathersjs, artillery, terraform,
  pierrePaulRiquet, theHackingProject, threeWAcademy, liora,
  kalisioKnowledge, python } from '../assets'

export const navLinks = [
  { path: '/experience', key: 'nav.experience' },
  { path: '/education', key: 'nav.education' },
  { path: '/portfolio', key: 'nav.portfolio' },
  { path: '/contact', key: 'nav.contact' },
]

export const companies = [
  {
    name: 'Kalisio',
    icon: kalisio,
    location: 'Toulouse (31), France',
    period: { fr: 'Janvier 2023 - Présent', en: 'January 2023 - Present' },
    website: 'https://kalisio.com/',
    description: {
      fr: 'ESN spécialisée dans les solutions géospatiales open source pour la sécurité civile, l\'environnement et l\'aéronautique - cartes interactives, visualisation de données GIS et big data géospatial.',
      en: 'IT services company specialized in open-source geospatial solutions for civil security, environment and aerospace - interactive maps, GIS data visualization and geospatial big data.'
    },
  }
]

export const experiences = [
  {
    title: { fr: 'Ingénieur Full Stack & DevOps', en: 'Full Stack & DevOps Engineer' },
    company_name: 'Kalisio',
    icon: kalisio,
    contract: { fr: 'CDI', en: 'Permanent' },
    date: { fr: 'Juillet 2025 - Présent', en: 'July 2025 - Present' },
    skills: ['Python', 'Javascript', 'Bash', 'Node.js', 'Feathers.js', 'K8s', 'GIS', 'Vue.js', 'Quasar'],
    points: [
      {
        fr: 'Conception et lead technique de Kalisio Knowledge',
        en: 'Design and technical lead of Kalisio Knowledge',
        projectId: 1
      },
      {
        fr: 'Évolutions et suivi de TELERAY (ASNR) : nouvelles fonctionnalités, conformité réglementaire, ouverture de l\'API publique et maintien en condition opérationnelle.',
        en: 'Evolution and monitoring of TELERAY (ASNR): new features, regulatory compliance, public API rollout and operational maintenance.',
        projectId: 0
      },
      {
        fr: 'Migration de l\'analyse qualité continue Code Climate → SonarQube : amélioration de la maintenabilité et intégration CI/CD.',
        en: 'Migration of continuous quality analysis Code Climate → SonarQube: improved maintainability and CI/CD integration.'
      },
      {
        fr: 'Participation active aux produits internes Kalisio : R&D, contribution au développement, gestion de produit et réflexion sur les orientations techniques.',
        en: 'Active contribution to Kalisio internal products: R&D, development contribution, product management and technical direction.'
      },
      { fr: 'Maintien & amélioration des infrastructures cloud', en: 'Maintenance & improvement of cloud infrastructures' }
    ]
  },
  {
    title: { fr: 'Ingénieur DevOps', en: 'DevOps Engineer' },
    company_name: 'Kalisio',
    icon: kalisio,
    contract: { fr: 'Alternance', en: 'Apprenticeship' },
    date: { fr: 'Janvier 2024 - Juin 2025', en: 'January 2024 - June 2025' },
    featured: 'ASNR - Teleray',
    skills: ['Kubernetes', 'Helm', 'Docker', 'Terraform', 'GitHub Actions', 'GitLab CI/CD', 'Bash', 'Artillery', 'GIS'],
    points: [
      {
        fr: 'Dans le cadre de la TMA Carto SIRSE (ASNR) : développement, déploiement en production et livraison continue de TELERAY (application de surveillance nationale de la radioactivité)',
        en: 'As part of the TMA Carto SIRSE (ASNR): development, production deployment and continuous delivery of TELERAY (national radioactivity monitoring application)',
        projectId: 0
      },
      {
        fr: 'Campagnes de tests de charge (Artillery) sur infrastructure k8s : identification et résolution de goulots d\'étranglement - tuning WiredTiger MongoDB, recalibration des probes K8s, gestion fine des ressources containers etc. Rapports d\'analyse et recommandations d\'architecture.',
        en: 'Load testing campaigns (Artillery) on k8s infrastructure: identification and resolution of bottlenecks - WiredTiger MongoDB tuning, K8s probe recalibration, fine-grained container resource management. Analysis reports and architecture recommendations.'
      },
      { fr: 'Conception, développement et déploiement de jobs ETL géospatiaux', en: 'Design, development and deployment of geospatial ETL jobs' },
      {
        fr: 'Migration CI/CD : Travis CI → GitHub Actions, automatisation des tests E2E en cronjob k8s et déploiement d\'applications en production',
        en: 'CI/CD migration: Travis CI → GitHub Actions, E2E test automation as k8s cronjob and production application deployment'
      }
    ]
  },
  {
    title: { fr: 'Développeur Web Full Stack', en: 'Full Stack Web Developer' },
    company_name: 'Kalisio',
    icon: kalisio,
    contract: { fr: 'Alternance', en: 'Apprenticeship' },
    date: { fr: 'Septembre 2022 - Décembre 2023', en: 'September 2022 - December 2023' },
    skills: ['JavaScript', 'Vue.js', 'Quasar', 'Feathers.js', 'Node.js', 'MongoDB', 'PWA'],
    points: [
      { fr: 'Contribution aux applications cartographiques temps-réel de Kalisio', en: 'Contributions to Kalisio\'s real-time mapping applications' },
      { fr: 'Création de feathers-webpush (librairie open source)', en: 'Created feathers-webpush (open-source library)' },
      { fr: 'Conversion des applications web de Kalisio en Progressive Web App (SPA → PWA)', en: 'Conversion of Kalisio web apps to Progressive Web Apps (SPA → PWA)' },
      { fr: 'Tests E2E (Puppeteer)', en: 'E2E testing (Puppeteer)' },
      { fr: 'Mise en place de l\'analyse de qualité continue (Code Climate)', en: 'Set up continuous quality analysis (Code Climate)' }
    ]
  }
]

export const education = [
  {
    degree: { fr: 'Master 1 - Administration Cloud', en: 'Master 1 - Cloud Administration' },
    school: 'Liora',
    location: 'Toulouse (31), France',
    date: { fr: 'Janvier 2024 - Juin 2025', en: 'January 2024 - June 2025' },
    year: '2024',
    icon: liora,
    apprenticeshipAt: { name: 'Kalisio', icon: kalisio }
  },
  {
    degree: { fr: 'Titre RNCP Niveau 5 - Développeur Web Full Stack', en: 'RNCP Level 5 - Full Stack Web Developer' },
    school: '3W Academy',
    location: 'Toulouse (31), France',
    date: { fr: 'Septembre 2022 - Décembre 2023', en: 'September 2022 - December 2023' },
    year: '2022',
    icon: threeWAcademy,
    apprenticeshipAt: { name: 'Kalisio', icon: kalisio }
  },
  {
    degree: { fr: 'Bootcamp Développeur Web Full Stack', en: 'Full Stack Web Developer Bootcamp' },
    school: 'The Hacking Project',
    location: 'Bordeaux (33), France',
    date: { fr: 'Avril 2022 - Août 2022', en: 'April 2022 - August 2022' },
    year: '2022',
    icon: theHackingProject
  },
  {
    degree: { fr: 'Classe Préparatoire aux Grandes Écoles - TSI', en: 'Preparatory Class (CPGE) - TSI' },
    school: 'Lycée Pierre Paul Riquet',
    location: 'St Orens de Gameville (31), France',
    date: { fr: 'Septembre 2016 - Juin 2018', en: 'September 2016 - June 2018' },
    year: '2016',
    icon: pierrePaulRiquet
  },
  {
    degree: { fr: 'Baccalauréat STI2D', en: 'STI2D High School Diploma' },
    school: 'Lycée Pierre Paul Riquet',
    location: 'St Orens de Gameville (31), France',
    date: '2016',
    year: '2016',
    icon: pierrePaulRiquet
  }
]

export const competences = [
  {
    category: { fr: 'Compétences Techniques', en: 'Technical Skills' },
    items: [
      {
        title: { fr: 'Développement d\'applications', en: 'Application Development' },
        description: { fr: 'JavaScript, Vue.js, React, Quasar, Feathers.js, Node.js', en: 'JavaScript, Vue.js, React, Quasar, Feathers.js, Node.js' },
        level: 4
      },
      {
        title: { fr: 'Infrastructure & Cloud', en: 'Infrastructure & Cloud' },
        description: { fr: 'Kubernetes, Docker, Terraform, OVH, S3, CI/CD', en: 'Kubernetes, Docker, Terraform, OVH, S3, CI/CD' },
        level: 4
      },
      {
        title: { fr: 'Bases de données', en: 'Databases' },
        description: { fr: 'MongoDB, PostgreSQL', en: 'MongoDB, PostgreSQL' },
        level: 4
      },
      {
        title: { fr: 'Architecture système', en: 'System Architecture' },
        description: { fr: 'Microservices, N-tier', en: 'Microservices, N-tier' },
        level: 4
      },
      {
        title: { fr: 'Données géospatiales', en: 'Geospatial Data' },
        description: { fr: 'GIS, ETL géospatiaux', en: 'GIS, geospatial ETL' },
        level: 2
      },
      {
        title: { fr: 'IA', en: 'AI' },
        description: { fr: 'RAG, MCP, agents de code, Python', en: 'RAG, MCP, coding agents, Python' },
        level: 2
      },
      {
        title: { fr: 'Tests & qualité', en: 'Testing & Quality' },
        description: { fr: 'Artillery (tests de charge), Puppeteer (E2E), SonarQube', en: 'Artillery (load testing), Puppeteer (E2E), SonarQube' },
        level: 4
      }
    ]
  },
  {
    category: { fr: 'Compétences Fonctionnelles', en: 'Functional Skills' },
    items: [
      {
        title: { fr: 'Politique produit', en: 'Product Strategy' },
        description: { fr: 'Spécification, roadmap, choix techniques, R&D', en: 'Specification, roadmap, technical decisions, R&D' },
        level: 1
      },
      {
        title: { fr: 'Gestion de projet', en: 'Project Management' },
        description: { fr: 'Suivi technique, livraison continue, support client', en: 'Technical follow-up, continuous delivery, customer support' },
        level: 1
      },
      {
        title: { fr: 'Encadrement technique', en: 'Technical Leadership' },
        description: { fr: 'Management, mentorat', en: 'Management, mentoring' },
        level: 1
      },
      {
        title: { fr: 'Analyse & conception', en: 'Analysis & Design' },
        description: { fr: 'Spécification de besoin, architecture, documentation technique', en: 'Requirements specification, architecture, technical documentation' },
        level: 2
      }
    ]
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
  { name: 'Python', icon: python },
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
    name: 'ASNR - Teleray',
    shortDescription: {
      fr: 'L\'application Teleray permet de diffuser au grand public, en temps réel, les données mesurées par plus de 400 balises réparties sur l\'ensemble du territoire national et en outre-mer.',
      en: 'The Teleray application broadcasts to the general public, in real-time, the data measured by more than 400 sensors deployed across mainland France and overseas territories.'
    },
    description: {
      fr: 'Dans le cadre de la TMA CARTO SIRSE remportée par Kalisio en 2024, TELERAY est l\'application publique de l\'ASNR diffusant en temps-réel les mesures du réseau national de surveillance de la radioactivité - plus de 400 balises en métropole et outre-mer, mesurant le débit de dose gamma toutes les 10 minutes (nSv/h), centralisé dans la base Sparte de l\'ASNR.\n\nL\'application offre au grand public une carte interactive avec la dernière mesure de chaque balise, un historique sur un mois et un système de favoris. Elle intègre également un accès restreint pour les partenaires (données non publiques) et les administrateurs ASNR (gestion des balises et des droits d\'accès).',
      en: 'As part of the TMA CARTO SIRSE contract won by Kalisio in 2024, TELERAY is the ASNR\'s public application broadcasting real-time measurements from the national radioactivity monitoring network — more than 400 sensors across mainland France and overseas, measuring gamma dose rate every 10 minutes (nSv/h), centralized in the ASNR\'s Sparte database.\n\nThe application offers the general public an interactive map with each sensor\'s latest measurement, a one-month history and a favorites system. It also includes restricted access for partners (non-public data) and ASNR administrators (sensor and access rights management).'
    },
    technologies: [
      { name: 'Quasar', url: 'https://quasar.dev/' },
      { name: 'Feathers.js', url: 'https://feathersjs.com/' },
      { name: 'MongoDB', url: 'https://www.mongodb.com/fr-fr' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/' },
      { name: 'Helm', url: 'https://helm.sh/fr/' },
      { name: 'Helmfile', url: 'https://github.com/helmfile/helmfile' },
      { name: 'OVH Cloud', url: 'https://www.ovhcloud.com/fr/' }
    ],
    links: [
      { label: { fr: 'Application Téléray', en: 'Téléray application' }, url: 'https://teleray.asnr.fr/' },
      { label: { fr: 'Réseau de télésurveillance', en: 'Monitoring network' }, url: 'https://recherche-expertise.asnr.fr/savoir-comprendre/environnement/reseaux-telesurveillance' }
    ],
    tasks: [
      { fr: 'Gestion de projet et support client', en: 'Project management and customer support' },
      { fr: 'Analyse du besoin', en: 'Requirements analysis' },
      { fr: 'Conception & développement applicatif', en: 'Application design & development' },
      { fr: 'Déploiement cloud (OVH, Kubernetes)', en: 'Cloud deployment (OVH, Kubernetes)' },
      { fr: 'Tests de charge et recommandations d\'infrastructure', en: 'Load testing and infrastructure recommendations' },
      { fr: 'Tests unitaires, validation & maintenance', en: 'Unit testing, validation & maintenance' }
    ],
    image: teleray
  },
  {
    name: 'Kalisio Knowledge',
    shortDescription: {
      fr: 'AI developer assistant pour l\'écosystème Kalisio : pipeline RAG, Git Intelligence et graphe de dépendances exposés via MCP aux agents de code IA.',
      en: 'AI developer assistant for the Kalisio ecosystem: RAG pipeline, Git Intelligence and dependency graph exposed via MCP to AI coding agents.'
    },
    description: {
      fr: 'Knowledge est un assistant IA dédié aux développeurs de l\'écosystème Kalisio. Il indexe l\'ensemble du code source open-source Kalisio dans une base vectorielle, et expose le résultat via un serveur MCP accessible à tout agent de coding IA.\n\nL\'objectif est de fournir à chaque développeur Kalisio, un assistant qui comprend la codebase de façon sémantique, structurelle et historique, tout en réduisant au maximum la consommation de tokens.',
      en: 'Knowledge is an AI assistant dedicated to developers in the Kalisio ecosystem. It indexes the entire Kalisio open-source codebase in a vector database, and exposes the result via an MCP server accessible to any AI coding agent.\n\nThe goal is to provide every Kalisio developer with an assistant that understands the codebase semantically, structurally and historically, while minimizing token consumption.'
    },
    technologies: [
      { name: 'Python', url: 'https://www.python.org/' },
      { name: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
      { name: 'MCP', url: 'https://modelcontextprotocol.io/' },
      { name: 'Qdrant', url: 'https://qdrant.tech/' },
      { name: 'Kubernetes', url: 'https://kubernetes.io/' }
    ],
    links: [
      { label: 'GitHub - kalisio/knowledge', url: 'https://github.com/kalisio/knowledge' }
    ],
    tasks: [
      { fr: 'Spécifications & conception de l\'architecture du système', en: 'System architecture specifications & design' },
      { fr: 'R&D autour des agents de code IA', en: 'R&D on AI coding agents' },
      { fr: 'Encadrement technique', en: 'Technical leadership' }
    ],
    image: kalisioKnowledge
  }
]

export const featureItems = [
  { Icon: FiUsers,         label: { fr: 'Management', en: 'Management' } },
  { Icon: FiSearch,        label: { fr: 'Rédaction de documents techniques', en: 'Technical documentation' } },
  { Icon: FiZap,           label: { fr: 'Autonomie & polyvalence', en: 'Autonomy & versatility' } },
  { Icon: FiCheckSquare,   label: { fr: 'Spécification de besoin', en: 'Requirements specification' } },
  { Icon: FiRefreshCw,     label: { fr: 'Rapport d\'activité', en: 'Activity reporting' } },
  { Icon: FiCode,          label: { fr: 'Méthodologies de développement', en: 'Development methodologies' } },
  { Icon: FiShield,        label: { fr: 'Compréhension globale des problèmes', en: 'Holistic problem understanding' } },
  { Icon: FiBarChart2,     label: { fr: 'Conception & architecture de système', en: 'System design & architecture' }, highlight: true },
  { Icon: FiMessageSquare, label: { fr: 'Maîtrise de l\'expression orale', en: 'Public speaking proficiency' } }
]

export const highlightCards = [
  {
    Icon: FiGlobe,
    title: { fr: 'Développeur Web', en: 'Web Developer' },
    description: {
      fr: 'Conception & développement d\'applications web jusqu\'à la mise en production.',
      en: 'Design & development of web applications all the way to production.'
    },
  },
  {
    Icon: FiLayout,
    title: { fr: 'Frontend', en: 'Frontend' },
    description: {
      fr: 'Interfaces modernes & réactives, centrées sur la performance et l\'expérience utilisateur.',
      en: 'Modern & responsive interfaces, focused on performance and user experience.'
    },
  },
  {
    Icon: FiServer,
    title: { fr: 'Backend', en: 'Backend' },
    description: {
      fr: 'APIs RESTful et services temps-réel avec Node.js et Feathers.js, connectés à des bases de données NoSQL.',
      en: 'RESTful APIs and real-time services with Node.js and Feathers.js, connected to NoSQL databases.'
    },
  },
  {
    Icon: FiCloud,
    title: { fr: 'DevOps', en: 'DevOps' },
    description: {
      fr: 'Pipelines CI/CD, containerisation Docker, orchestration Kubernetes et infrastructure cloud avec Terraform.',
      en: 'CI/CD pipelines, Docker containerization, Kubernetes orchestration and cloud infrastructure with Terraform.'
    },
  },
]

export const valueProps = [
  {
    Icon: FiMonitor,
    title: { fr: 'Applications Web Modernes', en: 'Modern Web Applications' },
    description: {
      fr: 'SPA, PWA, interfaces réactives. De la maquette à la mise en production.',
      en: 'SPA, PWA, responsive interfaces. From mockup to production deployment.'
    },
  },
  {
    Icon: FiServer,
    title: { fr: 'Architecture Backend', en: 'Backend Architecture' },
    description: {
      fr: 'APIs RESTful & temps-réel. Données NoSQL, authentification, WebSocket.',
      en: 'RESTful & real-time APIs. NoSQL data, authentication, WebSocket.'
    },
  },
  {
    Icon: FiCloud,
    title: { fr: 'Infrastructure DevOps', en: 'DevOps Infrastructure' },
    description: {
      fr: 'Docker, Kubernetes, CI/CD.',
      en: 'Docker, Kubernetes, CI/CD.'
    },
  },
  {
    Icon: FiCpu,
    title: { fr: 'Intelligence Artificielle', en: 'Artificial Intelligence' },
    description: {
      fr: 'Intégration de l\'IA dans les workflows de développement.',
      en: 'AI integration into development workflows.'
    },
  },
]

export const storyBlocks = [
  {
    label: { fr: 'CLOUD & WEB MODERNE', en: 'MODERN CLOUD & WEB' },
    title: { fr: 'Technologies web de', en: 'Next-generation' },
    highlight: { fr: 'nouvelle génération', en: 'web technologies' },
    description: {
      fr: 'Single-page applications avec Vue.js ou React, bases de données NoSQL comme MongoDB, infrastructures temps-réel reposant sur Docker et Kubernetes, et technologies back-end Node.js et Express.',
      en: 'Single-page applications with Vue.js or React, high-performance NoSQL databases like MongoDB, real-time infrastructures on Docker and Kubernetes, and Node.js/Express back-end technologies.'
    },
    linkTo: '/portfolio',
    linkText: { fr: 'Voir mes projets', en: 'View my projects' },
    Icon: FiCode,
    visualType: 'techStack',
    reversed: false,
  },
  {
    label: { fr: 'FORMATION & EXPÉRIENCE', en: 'LEARNING & EXPERIENCE' },
    title: { fr: 'Former et', en: 'Learning and' },
    highlight: { fr: 'innover en permanence', en: 'innovating continuously' },
    description: {
      fr: 'Ma formation, mon expérience des projets informatiques, ainsi qu\'une veille technologique permanente me permettent de répondre de façon efficace et innovante aux besoins de chaque projet.',
      en: 'My education, my project experience and continuous technical monitoring allow me to respond effectively and innovatively to the needs of every project.'
    },
    linkTo: '/experience',
    linkText: { fr: 'Mon parcours', en: 'My journey' },
    Icon: FiZap,
    visualType: 'stats',
    reversed: true,
  },
]
