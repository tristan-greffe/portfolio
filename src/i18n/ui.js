import { useLanguage } from '../context/LanguageContext'

// UI strings indexed by key. Use via useT() hook.
export const ui = {
  fr: {
    // Navbar
    'nav.experience': 'Expériences',
    'nav.education': 'Formation',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cv': 'CV',
    'nav.toggleTheme': 'Changer le thème',
    'nav.menu': 'Menu',

    // Hero
    'hero.greeting': 'Bonjour, je suis',
    'hero.role.before': 'Développeur',
    'hero.role.web': 'web',
    'hero.role.and': 'et ingénieur',
    'hero.role.devops': 'DevOps',
    'hero.bio': 'Je conçois et déploie des applications web, de la maquette jusqu\'à l\'infrastructure cloud.',
    'hero.cta.projects': 'Voir mes projets',
    'hero.cta.contact': 'Me contacter',

    // TechBanner
    'techBanner.label': 'Technologies',

    // Highlight cards
    'highlight.label': 'CE QUE JE FAIS',
    'highlight.title.before': 'Mes domaines d\'',
    'highlight.title.accent': 'expertise',

    // ValueProps
    'valueProps.pill': 'Une',
    'valueProps.middle': 'expertise',
    'valueProps.before': 'des solutions',
    'valueProps.accent': 'pour chaque besoin',

    // FeatureList
    'feature.label': 'COMPÉTENCES APPRÉCIABLES',
    'feature.title.before': 'Ce qui fait la',
    'feature.title.accent': 'différence',
    'feature.sub': 'Mon expérience m\'a permis de développer des capacités qui vont au-delà de la technique.',

    // HomeCTA
    'cta.title': 'Travaillons ensemble ?',
    'cta.button': 'Prendre contact',

    // Footer
    'footer.tagline': 'Développeur web & ingénieur DevOps',
    'footer.copyright': 'Tous droits réservés',

    // Page heroes
    'page.experience.badge': 'Mon parcours professionnel',
    'page.experience.title': 'Expériences',
    'page.experience.highlight': '& Compétences',
    'page.experience.desc': 'Développeur & ingénieur chez Kalisio depuis 2023 - alternance fullstack, alternance DevOps, puis CDI sur des projets géospatiaux.',
    'competences.title': 'Compétences',

    'page.education.badge': 'Ma formation',
    'page.education.title': 'Parcours',
    'page.education.highlight': 'académique',
    'page.education.desc': 'De la classe prépa aux bootcamps, un parcours pluridisciplinaire entre développement web & cloud.',
    'education.apprenticeship': 'En alternance chez',

    'page.portfolio.badge': 'Sélection de projets',
    'page.portfolio.title': 'Réalisations',
    'page.portfolio.highlight': 'à fort impact',
    'page.portfolio.desc': 'Une sélection de projets représentatifs de mon périmètre technique.',

    'page.contact.badge': 'Travaillons ensemble',
    'page.contact.title': 'Prenons',
    'page.contact.highlight': 'contact',
    'page.contact.desc': 'Un projet, une question ou simplement envie d\'échanger ? Je suis disponible.',

    // Project detail
    'project.back': 'Retour aux projets',
    'project.notFound': 'Projet introuvable.',
    'project.viewCta': 'Voir le projet',
    'project.links': 'Liens',
    'project.technologies': 'Technologies principales',
    'project.tasks': 'Tâches réalisées personnellement',

    // Contact form
    'contact.info.text': 'Je suis disponible pour des opportunités freelance, des collaborations ou simplement pour échanger autour d\'un projet.',
    'contact.form.name': 'Nom',
    'contact.form.namePlaceholder': 'Votre nom',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'votre@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Votre message...',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi en cours…',
    'contact.toast.success': 'Message envoyé ! Je vous répondrai rapidement.',
    'contact.toast.error': 'Une erreur est survenue. Réessayez plus tard.',
  },

  en: {
    // Navbar
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'nav.cv': 'Resume',
    'nav.toggleTheme': 'Toggle theme',
    'nav.menu': 'Menu',

    // Hero
    'hero.greeting': 'Hi, I\'m',
    'hero.role.before': 'Web',
    'hero.role.web': 'developer',
    'hero.role.and': 'and',
    'hero.role.devops': 'DevOps engineer',
    'hero.bio': 'I design and deploy modern web applications, from interactive frontend to cloud infrastructure.',
    'hero.cta.projects': 'View my projects',
    'hero.cta.contact': 'Get in touch',

    // TechBanner
    'techBanner.label': 'Technologies',

    // Highlight cards
    'highlight.label': 'WHAT I DO',
    'highlight.title.before': 'My areas of',
    'highlight.title.accent': 'expertise',

    // ValueProps
    'valueProps.pill': 'One',
    'valueProps.middle': 'expertise',
    'valueProps.before': 'complete solutions',
    'valueProps.accent': 'for every need',

    // FeatureList
    'feature.label': 'KEY SKILLS',
    'feature.title.before': 'What makes the',
    'feature.title.accent': 'difference',
    'feature.sub': 'My experience let me build skills that go beyond the purely technical.',

    // HomeCTA
    'cta.title': 'Let\'s work together?',
    'cta.button': 'Get in touch',

    // Footer
    'footer.tagline': 'Web developer & DevOps engineer',
    'footer.copyright': 'All rights reserved',

    // Page heroes
    'page.experience.badge': 'My professional path',
    'page.experience.title': 'Experience',
    'page.experience.highlight': '& missions',
    'page.experience.desc': 'Developer & engineer at Kalisio since 2022 - fullstack apprenticeship, DevOps apprenticeship, then permanent role on high-impact geospatial projects.',
    'competences.title': 'Skills',

    'page.education.badge': 'My education',
    'page.education.title': 'Academic',
    'page.education.highlight': 'background',
    'page.education.desc': 'From prep school to bootcamps, a multidisciplinary path between web development and cloud.',
    'education.apprenticeship': 'Apprenticeship at',

    'page.portfolio.badge': 'Selected work',
    'page.portfolio.title': 'High-impact',
    'page.portfolio.highlight': 'projects',
    'page.portfolio.desc': 'A selection of projects representative of my technical scope.',

    'page.contact.badge': 'Let\'s work together',
    'page.contact.title': 'Get in',
    'page.contact.highlight': 'touch',
    'page.contact.desc': 'A project, a question, or just want to chat? I\'m available.',

    // Project detail
    'project.back': 'Back to projects',
    'project.notFound': 'Project not found.',
    'project.viewCta': 'View project',
    'project.links': 'Links',
    'project.technologies': 'Main technologies',
    'project.tasks': 'Personally accomplished tasks',

    // Contact form
    'contact.info.text': 'I\'m available for freelance opportunities, collaborations, or simply to chat about a project.',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Your message...',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending…',
    'contact.toast.success': 'Message sent! I\'ll get back to you soon.',
    'contact.toast.error': 'Something went wrong. Please try again later.',
  }
}

export const useT = () => {
  const { locale } = useLanguage()
  return (key) => (ui[locale] && ui[locale][key]) || ui.fr[key] || key
}
