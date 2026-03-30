import type { SitePageMeta } from '../types/site';

export const sitePages: SitePageMeta[] = [
  {
    path: '/',
    navLabel: 'Home',
    title: 'Okta Wahyudi | IT Project Manager Portfolio',
    description:
      'Portfolio Okta Wahyudi yang menampilkan pengalaman kerja, case studies, delivery skills, dan pendekatan project management untuk software delivery yang terarah dan kolaboratif.',
    shortDescription: 'Portfolio utama yang merangkum profil, experience, skills, case studies, dan contact.',
    heroEyebrow: 'Portfolio Overview',
    heroTitle: 'Project management portfolio built for stronger search visibility.',
    heroDescription:
      'A structured overview of Okta Wahyudi covering delivery leadership, selected work, and collaboration details across software, SaaS, and enterprise projects.',
    schemaType: 'ProfilePage',
  },
  {
    path: '/journey',
    navLabel: 'Journey',
    title: 'Professional Journey | Okta Wahyudi',
    description:
      'Explore the professional journey of Okta Wahyudi, from implementation and infrastructure coordination to IT Project Manager roles across startups and enterprise delivery.',
    shortDescription: 'Career milestones, roles, and leadership progression across software and enterprise delivery.',
    heroEyebrow: 'Career Milestones',
    heroTitle: 'Professional journey across software, infrastructure, and product delivery.',
    heroDescription:
      'A focused page that highlights Okta Wahyudi’s experience timeline, leadership growth, and current role in managing software delivery and stakeholder alignment.',
    schemaType: 'AboutPage',
    includeInSitelinks: true,
  },
  {
    path: '/skills',
    navLabel: 'Skills',
    title: 'Project Management Skills | Okta Wahyudi',
    description:
      'Review Okta Wahyudi’s core project management skills, including sprint leadership, stakeholder management, release coordination, and structured SDLC execution.',
    shortDescription: 'Core delivery capabilities, SDLC flow, and tools used to keep software projects on track.',
    heroEyebrow: 'Delivery Strengths',
    heroTitle: 'Core capabilities for planning, delivery control, and team alignment.',
    heroDescription:
      'A dedicated page for the working style, delivery strengths, and Scrum-based execution approach used to keep software projects visible, structured, and moving forward.',
    schemaType: 'CollectionPage',
    includeInSitelinks: true,
  },
  {
    path: '/portfolio',
    navLabel: 'Portfolio',
    title: 'Portfolio & Case Studies | Okta Wahyudi',
    description:
      'Browse selected portfolio case studies by Okta Wahyudi covering SaaS, marketplace, POS, enterprise digital platforms, and software delivery execution.',
    shortDescription: 'Selected case studies that show delivery leadership across SaaS, marketplaces, and enterprise platforms.',
    heroEyebrow: 'Selected Work',
    heroTitle: 'Case studies that show how delivery moves from planning to release.',
    heroDescription:
      'A curated portfolio page that focuses on project context, delivery role, and impact across software products, enterprise platforms, and operational systems.',
    schemaType: 'CollectionPage',
    includeInSitelinks: true,
  },
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Contact Okta Wahyudi | IT Project Manager',
    description:
      'Contact Okta Wahyudi for project management roles, software delivery opportunities, stakeholder coordination needs, or collaboration discussions.',
    shortDescription: 'Direct contact options for project roles, collaboration, and software delivery discussions.',
    heroEyebrow: 'Let’s Connect',
    heroTitle: 'Direct contact details for project discussions and collaboration.',
    heroDescription:
      'A dedicated contact page with WhatsApp, email, LinkedIn, and location details for recruiters, hiring teams, and partners who want to discuss project delivery support.',
    schemaType: 'ContactPage',
    includeInSitelinks: true,
  },
  {
    path: '/privacy',
    navLabel: 'Privacy',
    title: 'Privacy Policy | Okta Wahyudi',
    description:
      'Privacy policy for Okta Wahyudi portfolio website covering contact details, communication data, and reasonable professional use of information.',
    shortDescription: 'Privacy information for contact and communication data shared through the portfolio website.',
    heroEyebrow: 'Legal Information',
    heroTitle: 'Privacy policy for the portfolio website.',
    heroDescription:
      'A legal page that explains how professional contact information and communication details are handled on the Okta Wahyudi portfolio website.',
    schemaType: 'WebPage',
  },
  {
    path: '/terms',
    navLabel: 'Terms',
    title: 'Terms & Conditions | Okta Wahyudi',
    description:
      'Terms and conditions for the Okta Wahyudi portfolio website covering content use, accuracy, and communication for professional purposes.',
    shortDescription: 'Terms covering content usage, website purpose, and limitations for the portfolio website.',
    heroEyebrow: 'Legal Information',
    heroTitle: 'Terms and conditions for the portfolio website.',
    heroDescription:
      'A legal page that explains how this portfolio website may be used for recruitment, networking, and professional communication purposes.',
    schemaType: 'WebPage',
  },
];

export const sitePageByPath = sitePages.reduce<Record<string, SitePageMeta>>((accumulator, page) => {
  accumulator[page.path] = page;
  return accumulator;
}, {});

export const sitelinkPages = sitePages.filter((page) => page.includeInSitelinks);
