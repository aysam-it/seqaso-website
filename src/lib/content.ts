export type Lang = 'en' | 'fr';

export const content = {
  en: {
    nav: { services: 'Services', expertise: 'Expertise', about: 'About', contact: 'Contact' },
    hero: {
      tagline: 'SOFTWARE ENGINEERING · QUALITY · BUSINESS ANALYSIS ',
      title: 'We Engineer\nDigital Excellence',
      subtitle: 'French-certified experts delivering secure, high-quality software solutions across Europe.',
      cta: 'Discover Our Services',
      scroll: 'Scroll',
    },
    services: {
      label: 'OUR SERVICES',
      title: 'Development, Quality & Analysis',
      subtitle: 'End-to-end software engineering expertise for mission-critical applications.',
      cards: [
        { title: 'Software Development', desc: 'Custom application development using modern technologies. From architecture to deployment, we build scalable, secure solutions.', link: 'Learn more →' },
        { title: 'Quality Assurance', desc: 'Comprehensive testing strategies including functional, performance testing. ISTQB-certified methodologies.', link: 'Learn more →' },
        { title: 'Website Analysis', desc: 'In-depth technical audits, performance optimization, SEO analysis, and accessibility compliance assessments.', link: 'Learn more →' },
      ],
    },
    expertise: {
      label: 'OUR EXPERTISE',
      title: 'Trusted Across Industries',
      subtitle: 'From banking to healthcare, our certified French experts deliver excellence in every sector.',
      sectors: [
        { name: 'Banks & Finance', desc: 'Secure systems for trading, payments, and compliance' },
        { name: 'Insurance', desc: 'Policy management and claims processing solutions' },
        { name: 'Industry', desc: 'IoT, automation, and operational technology' },
        { name: 'Public Sector', desc: 'Government platforms and citizen services' },
        { name: 'Retail', desc: 'E-commerce, inventory, and customer experience' },
        { name: 'Health', desc: 'Healthcare systems and patient data management' },
      ],
      stats: [
        { value: 15, 
          suffix : ' Years of experience',
          label: ' ' },
        { value: 7, 
          suffix: ' Industries', 
          label: ' ' },
        { value: 100, 
          suffix: '%', 
          label: ' Certified Experts' },
      ],
    },
    about: {
      label: 'ABOUT US',
      title: 'French Excellence,\nGlobal Impact',
      p1: 'SEQASO brings together French-certified software engineers with over 15 years of international experience. Our team has delivered mission-critical solutions for leading organizations across Europe.',
      p2: 'We combine rigorous quality standards with agile methodologies, ensuring every project meets the highest benchmarks of security, performance, and reliability.',
      badges: ['ISTQB Certified', 'ISO 27001', 'Agile Practitioners'],
    },
    why: {
      label: 'WHY CHOOSE US',
      title: 'Built on Trust,\nDriven by Quality',
      cards: [
        { title: 'Certified Experts', desc: 'Every team member holds industry-recognized certifications in their domain.' },
        { title: 'Proven Methodology', desc: 'Battle-tested processes refined over 15 years of diverse project delivery.' },
        { title: 'Security First', desc: 'Security is embedded in every phase, not bolted on at the end.' },
        { title: 'Agile Delivery', desc: 'Transparent, iterative delivery with continuous feedback and adaptation.' },
      ],
    },
    process: {
      label: 'OUR PROCESS',
      title: 'From Vision to\nDeployment',
      steps: [
        { title: 'Discovery', desc: 'Understanding your needs, constraints, and success criteria.' },
        { title: 'Design', desc: 'Architecture, UX planning, and technical specification.' },
        { title: 'Development', desc: 'Iterative build with continuous integration and testing.' },
        { title: 'Delivery', desc: 'Deployment, monitoring, and knowledge transfer.' },
      ],
    },
    contact: {
      label: 'CONTACT',
      title: 'Start Your Project',
      subtitle: 'Tell us about your needs. Our experts will get back to you within 24 hours.',
      form: {
        name: { label: 'Name *', placeholder: 'Your full name' },
        email: { label: 'Email *', placeholder: 'your@email.com' },
        subject: { label: 'Subject', placeholder: 'What is this about?' },
        message: { label: 'Message *', placeholder: 'Describe your project or inquiry...' },
        submit: 'Send Message',
        success: 'Message Sent ✓',
      },
    },
    footer: {
      tagline: 'Software Engineering, Quality & Business Analysis',
      nav: ['Services', 'Expertise', 'About', 'Contact'],
      legal: ['Privacy Policy', 'Terms of Service'],
      copyright: '© 2025 SEQASO. All rights reserved.',
    },
  },
  fr: {
    nav: { services: 'Services', expertise: 'Expertise', about: 'À Propos', contact: 'Contact' },
    hero: {
      tagline: 'INGÉNIERIE LOGICIELLE · QUALITÉ · Business analyse',
      title: 'Nous Ingénions\nl\'Excellence Digitale',
      subtitle: 'Experts certifiés français livrant des solutions logicielles sécurisées et de haute qualité en Europe.',
      cta: 'Découvrez Nos Services',
      scroll: 'Défiler',
    },
    services: {
      label: 'NOS SERVICES',
      title: 'Développement, Qualité & Business analyse',
      subtitle: 'Expertise logicielle de bout en bout pour les applications critiques.',
      cards: [
        { title: 'Développement Logiciel', desc: 'Développement d\'applications sur mesure avec des technologies modernes. De l\'architecture au déploiement, nous construisons des solutions scalables et sécurisées.', link: 'En savoir plus →' },
        { title: 'Assurance Qualité', desc: 'Stratégies de test complètes incluant tests fonctionnels, de performance et de sécurité. Méthodologies certifiées ISTQB.', link: 'En savoir plus →' },
        { title: 'Analyse de Sites Web', desc: 'Audits techniques approfondis, optimisation des performances, analyse SEO et évaluations de conformité d\'accessibilité.', link: 'En savoir plus →' },
      ],
    },
    expertise: {
      label: 'NOTRE EXPERTISE',
      title: 'Reconnus dans Tous les Secteurs',
      subtitle: 'De la banque à la santé, nos experts français certifiés livrent l\'excellence dans chaque secteur.',
      sectors: [
        { name: 'Banques & Finance', desc: 'Systèmes sécurisés pour trading, paiements et conformité' },
        { name: 'Assurance', desc: 'Gestion de polices et traitement des sinistres' },
        { name: 'Industrie', desc: 'IoT, automatisation et technologie opérationnelle' },
        { name: 'Secteur Public', desc: 'Plateformes gouvernementales et services citoyens' },
        { name: 'Retail', desc: 'E-commerce, inventaire et expérience client' },
        { name: 'Santé', desc: 'Systèmes de santé et gestion des données patients' },
      ],
      stats: [
        { value: 15, suffix: '+', label: 'Ans d\'Expérience' },
        { value: 6, suffix: '', label: 'Secteurs' },
        { value: 100, suffix: '%', label: 'Experts Certifiés' },
      ],
    },
    about: {
      label: 'À PROPOS',
      title: 'L\'Excellence Française,\nun Impact Global',
      p1: 'SEQASO réunit des ingénieurs logiciels certifiés français avec plus de 15 ans d\'expérience internationale. Notre équipe a livré des solutions critiques pour des organisations leaders en Europe.',
      p2: 'Nous combinons des standards de qualité rigoureux avec des méthodologies agiles, garantissant que chaque projet atteint les plus hauts standards de sécurité, performance et fiabilité.',
      badges: ['Certifiés ISTQB', 'ISO 27001', 'Praticiens Agiles'],
    },
    why: {
      label: 'POURQUOI NOUS CHOISIR',
      title: 'Bâti sur la Confiance,\nAnimé par la Qualité',
      cards: [
        { title: 'Experts Certifiés', desc: 'Chaque membre de l\'équipe détient des certifications reconnues dans son domaine.' },
        { title: 'Méthodologie Éprouvée', desc: 'Processus affinés au fil de 15 ans de projets divers.' },
        { title: 'Sécurité d\'Abord', desc: 'La sécurité est intégrée à chaque phase, pas ajoutée à la fin.' },
        { title: 'Livraison Agile', desc: 'Livraison transparente et itérative avec feedback continu.' },
      ],
    },
    process: {
      label: 'NOTRE PROCESSUS',
      title: 'De la Vision\nau Déploiement',
      steps: [
        { title: 'Découverte', desc: 'Comprendre vos besoins, contraintes et critères de succès.' },
        { title: 'Conception', desc: 'Architecture, planification UX et spécification technique.' },
        { title: 'Développement', desc: 'Construction itérative avec intégration et tests continus.' },
        { title: 'Livraison', desc: 'Déploiement, monitoring et transfert de connaissances.' },
      ],
    },
    contact: {
      label: 'CONTACT',
      title: 'Lancez Votre Projet',
      subtitle: 'Parlez-nous de vos besoins. Nos experts vous répondront sous 24 heures.',
      form: {
        name: { label: 'Nom *', placeholder: 'Votre nom complet' },
        email: { label: 'Email *', placeholder: 'votre@email.com' },
        subject: { label: 'Sujet', placeholder: 'De quoi s\'agit-il ?' },
        message: { label: 'Message *', placeholder: 'Décrivez votre projet ou votre demande...' },
        submit: 'Envoyer le Message',
        success: 'Message Envoyé ✓',
      },
    },
    footer: {
      tagline: 'Ingénierie Logicielle, Qualité & Developpement',
      nav: ['Services', 'Expertise', 'À Propos', 'Contact'],
      legal: ['Politique de Confidentialité', 'Conditions d\'Utilisation'],
      copyright: '© 2025 SEQASO. Tous droits réservés.',
    },
  },
};

export function t(lang: Lang, path: string): any {
  const keys = path.split('.');
  let value: any = content[lang];
  for (const key of keys) {
    if (value === undefined) return path;
    value = value[key];
  }
  return value ?? path;
}
