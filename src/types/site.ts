import type { LucideIcon } from 'lucide-react';

export type FeatureType = 'recruitment' | 'analysis' | 'brd';
export type ReportingVariant = 'user' | 'cLevel';

export interface NavigationItem {
  name: string;
  href: `#${string}`;
  path: `/${string}` | '/';
  icon: LucideIcon;
}

export type PageSchemaType = 'WebPage' | 'AboutPage' | 'CollectionPage' | 'ContactPage' | 'ProfilePage';

export interface SitePageMeta {
  path: `/${string}` | '/';
  navLabel: string;
  title: string;
  description: string;
  shortDescription: string;
  heroEyebrow: string;
  heroTitle: string;
  heroDescription: string;
  schemaType: PageSchemaType;
  includeInSitelinks?: boolean;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Experience {
  date: string;
  location: string;
  company: string;
  label: string;
  position: string;
  summary: string;
  highlight: string;
  current?: boolean;
}

export interface SkillCard {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ToolItem {
  name: string;
  icon: string;
}

export interface ScrumFlowStep {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ReportingGroup {
  level: string;
  frequency: string;
  variant: ReportingVariant;
  items: string[];
}

export interface FeatureCard {
  type: FeatureType;
  title: string;
  desc: string;
}

export interface Project {
  title: string;
  type: string;
  role: string;
  impact: string;
  desc: string;
  tags: string[];
  image: string;
  url: string;
  imageFocus?: string;
}

export interface Testimonial {
  name: string;
  company: string;
  image: string;
  text: string;
}

export interface QuickLink {
  label: string;
  path: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface ContactMethod {
  value: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  breakStyle?: 'break-all' | 'break-words' | 'normal';
}

export interface LegalSection {
  heading: string;
  body: string;
}

export interface LegalEntry {
  title: string;
  description: string;
  sections: LegalSection[];
}

export interface LegalContent {
  privacy: LegalEntry;
  terms: LegalEntry;
}
