import type { SitePageMeta } from '../types/site';

export const sitePages: SitePageMeta[] = [
  {
    path: '/',
    navLabel: 'Home',
    title: 'Okta Wahyudi | IT Project Manager Portfolio',
    description:
      'Explore the portfolio of Okta Wahyudi, an IT Project Manager trusted to align teams, drive delivery, and keep SaaS, product, and enterprise projects moving with clarity.',
    shortDescription: 'A complete portfolio covering profile, experience, delivery strengths, case studies, and contact details.',
    heroEyebrow: 'Portfolio Overview',
    heroTitle: 'Project management portfolio built for stronger search visibility.',
    heroDescription:
      'A polished overview of Okta Wahyudi, highlighting delivery leadership, selected projects, and collaboration details across software, SaaS, and enterprise work.',
    schemaType: 'ProfilePage',
  },
  {
    path: '/journey',
    navLabel: 'Journey',
    title: 'Professional Journey | Okta Wahyudi',
    description:
      'Follow Okta Wahyudi’s journey from implementation and infrastructure coordination to leading software delivery across startup and enterprise projects.',
    shortDescription: 'Career milestones, roles, and leadership progression across software and enterprise delivery.',
    heroEyebrow: 'Career Milestones',
    heroTitle: 'Professional journey across software, infrastructure, and product delivery.',
    heroDescription:
      'A focused timeline of experience, growth, and delivery ownership that shaped Okta Wahyudi as an IT Project Manager.',
    schemaType: 'AboutPage',
    includeInSitelinks: true,
  },
  {
    path: '/skills',
    navLabel: 'Skills',
    title: 'Project Management Skills | Okta Wahyudi',
    description:
      'Discover Okta Wahyudi’s core strengths in sprint leadership, stakeholder alignment, release coordination, and structured software delivery.',
    shortDescription: 'Core delivery capabilities, SDLC flow, and tools used to keep software projects on track.',
    heroEyebrow: 'Delivery Strengths',
    heroTitle: 'Core capabilities for planning, delivery control, and team alignment.',
    heroDescription:
      'A dedicated page covering the working style, delivery discipline, and Scrum-based execution approach used to keep software projects structured and moving forward.',
    schemaType: 'CollectionPage',
    includeInSitelinks: true,
  },
  {
    path: '/portfolio',
    navLabel: 'Portfolio',
    title: 'Portfolio & Case Studies | Okta Wahyudi',
    description:
      'Browse selected case studies led by Okta Wahyudi across SaaS, marketplaces, POS products, and enterprise digital platforms.',
    shortDescription: 'Selected case studies that show delivery leadership across SaaS, marketplaces, and enterprise platforms.',
    heroEyebrow: 'Selected Work',
    heroTitle: 'Case studies that show how delivery moves from planning to release.',
    heroDescription:
      'A curated portfolio focused on project context, delivery role, and measurable impact across software products, enterprise platforms, and operational systems.',
    schemaType: 'CollectionPage',
    includeInSitelinks: true,
  },
  {
    path: '/handover',
    navLabel: 'Handover',
    title: 'Project Handover | Okta Wahyudi',
    description:
      'Access comprehensive project handover documentation including timeline, QA testing, technical documentation, and credentials for seamless project transition.',
    shortDescription: 'Complete handover package with project timeline, QA testing, documentation, and credentials.',
    heroEyebrow: 'Project Transition',
    heroTitle: 'Structured handover for seamless project continuity.',
    heroDescription:
      'A complete handover page covering project timeline, QA testing results, technical documentation, and access credentials for the next delivery team.',
    schemaType: 'WebPage',
    includeInSitelinks: true,
  },
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Contact Okta Wahyudi | IT Project Manager',
    description:
      'Connect with Okta Wahyudi for IT Project Manager roles, software delivery opportunities, and collaboration discussions.',
    shortDescription: 'Direct contact options for project roles, collaboration, and software delivery discussions.',
    heroEyebrow: 'Let's Connect',
    heroTitle: 'Direct contact details for project discussions and collaboration.',
    heroDescription:
      'A dedicated contact page for recruiters, hiring teams, and partners who want to discuss delivery support, collaboration, or project opportunities.',
    schemaType: 'ContactPage',
    includeInSitelinks: true,
  },
  {
    path: '/privacy',
    navLabel: 'Privacy',
    title: 'Privacy Policy | Okta Wahyudi',
    description:
      'Privacy policy for the Okta Wahyudi portfolio website, covering contact details, communication data, and responsible professional use of information.',
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
      'Terms and conditions for the Okta Wahyudi portfolio website, covering content use, accuracy, and communication for professional purposes.',
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
