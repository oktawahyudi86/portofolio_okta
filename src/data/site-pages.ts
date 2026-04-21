import type { SitePageMeta } from '../types/site';

export const sitePages: SitePageMeta[] = [
  {
    path: '/',
    navLabel: 'Home',
    title: 'Okta Wahyudi | IT Project Manager Portfolio',
    description:
      'Explore the portfolio of Okta Wahyudi, an IT Project Manager who keeps teams aligned, priorities clear, and releases moving.',
    shortDescription: 'Profile, experience, selected work, and contact details in one place.',
    heroEyebrow: 'Overview',
    heroTitle: 'A project manager focused on clarity, pace, and follow-through.',
    heroDescription:
      'A quick overview of Okta Wahyudi, including experience, selected work, and ways to connect.',
    schemaType: 'ProfilePage',
  },
  {
    path: '/journey',
    navLabel: 'Journey',
    title: 'Professional Journey | Okta Wahyudi',
    description:
      "Follow Okta Wahyudi's path from implementation support to leading software teams across startup and enterprise work.",
    shortDescription: 'Roles, companies, and the path into project leadership.',
    heroEyebrow: 'Career Milestones',
    heroTitle: 'The roles that shaped how I lead teams and projects.',
    heroDescription: 'A focused timeline of companies, positions, and growth over time.',
    schemaType: 'AboutPage',
    includeInSitelinks: true,
  },
  {
    path: '/skills',
    navLabel: 'Skills',
    title: 'Project Management Skills | Okta Wahyudi',
    description:
      "Discover Okta Wahyudi's core strengths in planning, sprint leadership, stakeholder alignment, and release coordination.",
    shortDescription: 'Core strengths, working style, and tools.',
    heroEyebrow: 'Core Strengths',
    heroTitle: 'How I plan, align, and keep work moving.',
    heroDescription: 'A closer look at the habits, tools, and Scrum routines I use day to day.',
    schemaType: 'CollectionPage',
    includeInSitelinks: true,
  },
  {
    path: '/portfolio',
    navLabel: 'Portfolio',
    title: 'Portfolio & Case Studies | Okta Wahyudi',
    description:
      'Browse selected case studies led by Okta Wahyudi across SaaS, marketplaces, POS products, and enterprise digital platforms.',
    shortDescription: 'Selected work across SaaS, marketplaces, and enterprise platforms.',
    heroEyebrow: 'Selected Work',
    heroTitle: 'Selected work that shows how I organize teams and ship.',
    heroDescription: 'A curated set of projects with role, context, and outcomes.',
    schemaType: 'CollectionPage',
    includeInSitelinks: true,
  },
  {
    path: '/contact',
    navLabel: 'Contact',
    title: 'Contact Okta Wahyudi | IT Project Manager',
    description:
      'Connect with Okta Wahyudi for project roles, hiring conversations, and collaboration.',
    shortDescription: 'Direct contact options for hiring and collaboration.',
    heroEyebrow: "Let's Connect",
    heroTitle: 'Open for the right role, team, or project.',
    heroDescription: 'A direct way for recruiters, teams, and partners to get in touch.',
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
