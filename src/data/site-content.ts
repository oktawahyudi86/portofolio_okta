import {
  Briefcase,
  FolderKanban,
  Github,
  Globe,
  Home,
  Layers,
  Layout,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Settings,
  Users,
  Wand2,
} from 'lucide-react';
import type {
  ContactMethod,
  Experience,
  FeatureCard,
  HeroStat,
  LegalContent,
  NavigationItem,
  Project,
  QuickLink,
  ReportingGroup,
  ScrumFlowStep,
  SkillCard,
  SocialLink,
  Testimonial,
  ToolItem,
} from '../types/site';

export const cvUrl = '/CV_Oktawahyudi.pdf';
export const primarySectionIds = ['home', 'journey', 'skills', 'portfolio'] as const;

export const navigationItems: NavigationItem[] = [
  { name: 'Home', href: '#home', path: '/', icon: Home },
  { name: 'Journey', href: '#journey', path: '/journey', icon: Briefcase },
  { name: 'Skills', href: '#skills', path: '/skills', icon: Wand2 },
  { name: 'Portfolio', href: '#portfolio', path: '/portfolio', icon: FolderKanban },
];

export const heroHighlights = [
  'Sprint planning, tracking, and release control',
  'Team, stakeholder, and delivery alignment',
  'SaaS, product, and enterprise project coordination',
];

export const heroStats: HeroStat[] = [
  { value: '3+', label: 'Years leading delivery' },
  { value: '30+', label: 'Projects coordinated' },
];

export const experiences: Experience[] = [
  {
    date: 'Mar 2020 - Apr 2021',
    location: 'Yogyakarta',
    company: 'PT Sarana Insan Muda Selaras',
    label: 'PT Sarana Insan Muda Selaras',
    position: 'Technical E-Government & Corporate Support',
    summary:
      'Built delivery discipline through implementation support, deployment readiness, and operational coordination.',
    highlight: 'Implementation readiness and coordination',
  },
  {
    date: 'Aug 2021 - Jan 2023',
    location: 'Surabaya',
    company: 'PT Supra Primatama Nusantara',
    label: 'PT Supra Primatama Nusantara',
    position: 'Project Engineer FTTH / Project Building',
    summary:
      'Coordinated infrastructure rollout across vendor execution, QA/QC control, and field delivery.',
    highlight: 'Rollout execution, QA/QC, and vendor control',
  },
  {
    date: 'Jun 2023 - Dec 2023',
    location: 'Yogyakarta',
    company: 'PT Divistant Teknologi Indonesia',
    label: 'PT Divistant Teknologi Indonesia',
    position: 'Project Manager',
    summary:
      'Managed software delivery from kickoff to closure while keeping cadence, communication, and execution on track.',
    highlight: 'Agile software delivery ownership',
  },
  {
    date: 'Dec 2023 - Jan 2025',
    location: 'Yogyakarta',
    company: 'PT Juragan Inovator Teknologi Indonesia',
    label: 'PT Juragan Inovator Teknologi Indonesia',
    position: 'Product & Project Manager',
    summary:
      'Led web and mobile product delivery across planning, testing, deployment, budgeting, and risk control.',
    highlight: 'Product delivery ownership and governance',
  },
  {
    date: 'Jan 2025 - May 2025',
    location: 'Jakarta',
    company: 'PT Ako Media Asia',
    label: 'PT Ako Media Asia',
    position: 'IT Project Manager',
    summary:
      'Coordinated MAXstream enhancement and MyTelkomsel migration work across sprint execution, alignment, and release readiness.',
    highlight: 'Enterprise migration and sprint delivery',
  },
  {
    date: 'Jun 2025 - Present',
    location: 'Yogyakarta',
    company: 'PT Dazo Kreatif Indonesia',
    label: 'PT Dazo Kreatif Indonesia',
    position: 'IT Project Manager',
    summary:
      'Led delivery across SaaS, Livechat AI, OMS, and digital store initiatives while keeping planning, alignment, and releases under control.',
    highlight: 'SaaS, Livechat AI, OMS, and digital store delivery',
    current: true,
  },
];

export const skills: SkillCard[] = [
  {
    title: 'Planning & Delivery Control',
    desc: 'Turn business needs into scope, priorities, milestones, and realistic timelines.',
    icon: Layout,
  },
  {
    title: 'Agile & Sprint Leadership',
    desc: 'Run Agile rituals, protect cadence, and keep sprint commitments visible.',
    icon: Settings,
  },
  {
    title: 'System Rollout & Coordination',
    desc: 'Coordinate testing, deployment, launch readiness, and cross-team follow-up.',
    icon: Layers,
  },
  {
    title: 'Stakeholder & Risk Management',
    desc: 'Align stakeholders early and surface blockers before they affect delivery.',
    icon: Users,
  },
];

export const scrumFlowSteps: ScrumFlowStep[] = [
  {
    title: 'Grooming',
    desc: 'Prioritized requirements',
    icon: FolderKanban,
  },
  {
    title: 'Sprint Planning',
    desc: 'Scope and sprint goals',
    icon: Layout,
  },
  {
    title: 'Sprint Backlog',
    desc: 'Ready sprint tasks',
    icon: Layers,
  },
];

export const reportingStructure: ReportingGroup[] = [
  {
    level: 'User & Operational Stakeholders',
    frequency: 'Weekly/BI-Weekly',
    variant: 'user',
    items: ['Progress updates', 'Issue, risk, and dependency tracking', 'Delivery monitoring'],
  },
  {
    level: 'Management & Leadership',
    frequency: 'BI-Weekly',
    variant: 'cLevel',
    items: ['Executive status updates', 'Planning decisions and blockers', 'Resource and priority alignment'],
  },
];

export const tools: ToolItem[] = [
  { name: 'Trello', icon: '/aset/trello.webp' },
  { name: 'Jira', icon: '/aset/jira.webp' },
  { name: 'Confluence', icon: '/aset/confluence.webp' },
  { name: 'Notion', icon: '/aset/notion.webp' },
  { name: 'Slack', icon: '/aset/slack.webp' },
  { name: 'GitLab', icon: '/aset/gitlab.webp' },
  { name: 'PowerPoint', icon: '/aset/office.webp' },
  { name: 'Google Sheets', icon: 'GS' },
];

export const featureCards: FeatureCard[] = [
  {
    type: 'recruitment',
    title: 'Requirement Discovery',
    desc: 'Clarify goals, constraints, dependencies, and delivery expectations early.',
  },
  {
    type: 'analysis',
    title: 'Planning & Prioritization',
    desc: 'Shape scope, timing, and priorities so teams can move with focus.',
  },
  {
    type: 'brd',
    title: 'BRD & Delivery Readiness',
    desc: 'Turn requirements into documents and actionable inputs for build and QA.',
  },
];

export const scrumRoles = ['Product Owner', 'Team', 'Scrum Master', 'Sprint Review + Retrospective'];

export const projects: Project[] = [
  {
    title: 'Dazo SaaS, Livechat AI, OMS & Toko Digital',
    type: 'SaaS Platform, Livechat AI, OMS & Digital Commerce',
    role: 'IT Project Manager',
    impact: 'Delivered SaaS, Livechat AI, OMS, and toko digital initiatives to support launch readiness and product adoption.',
    desc: 'Led delivery across SaaS, Livechat AI, OMS, and toko digital features by translating business needs into sprint priorities and controlled releases.',
    tags: ['SaaS delivery', 'Livechat AI', 'OMS execution', 'Toko digital'],
    image: '/aset/project-dazo-suite.webp',
    url: 'https://dazo.id/',
  },
  {
    title: 'Paketur Travel Marketplace',
    type: 'Travel Marketplace, App, Web & OMS',
    role: 'Product Delivery Lead',
    impact: 'Recovered momentum and moved the platform closer to release.',
    desc: 'Stabilized a delayed travel project and pushed app, website, and OMS delivery back on track.',
    tags: ['Delivery revamp', 'App + website', 'OMS management', 'Release recovery'],
    image: '/aset/project-paketur.webp',
    url: 'https://paketur.com/',
  },
  {
    title: 'Juragan Kucek Laundry POS',
    type: 'Laundry POS & Order Management',
    role: 'Product Delivery Lead',
    impact: 'Delivered a practical POS for day-to-day outlet operations.',
    desc: 'Led delivery of an offline-ready laundry POS covering cashier flow, order handling, and outlet control.',
    tags: ['Laundry POS', 'Order management', 'Cashier flow', 'Offline operations'],
    image: '/aset/project-juragankucek.webp',
    url: 'https://play.google.com/store/search?q=Merchant%20Juragan%20Kucek&c=apps&hl=id',
  },
  {
    title: 'Melodia Musik Marketplace',
    type: 'Music Commerce Platform',
    role: 'Product Delivery Lead',
    impact: 'Improved the buying journey for instruments and pro-audio products.',
    desc: "Managed storefront delivery to improve discovery, campaign visibility, and checkout readiness.",
    tags: ['E-commerce delivery', 'Catalog experience', 'Campaign landing', 'Checkout flow'],
    image: '/aset/project-melodiamusik.webp',
    url: 'https://melodia.id/',
  },
  {
    title: 'Maxtream Platform',
    type: 'Video Streaming & Content Delivery',
    role: 'Project Manager',
    impact: 'Helped keep enterprise streaming delivery stable and launch-ready.',
    desc: 'Coordinated enhancement and migration work across sprints, requirements, and release readiness.',
    tags: ['Enterprise migration', 'Sprint governance', 'Requirement alignment', 'Release readiness'],
    image: '/aset/project-maxtream-real.webp',
    imageFocus: '20% center',
    url: 'https://maxstream.tv/home',
  },
  {
    title: 'Implementation DevOps Infrastructure',
    type: 'Enterprise DevOps Infrastructure',
    role: 'Project Manager',
    impact: 'Improved delivery reliability and infrastructure visibility.',
    desc: 'Coordinated DevOps infrastructure rollout across environment readiness, pipelines, and cross-team execution.',
    tags: ['DevOps rollout', 'Infrastructure readiness', 'Cross-team coordination', 'Service reliability'],
    image: '/aset/project-bpjstk-real.webp',
    url: 'https://www.bpjsketenagakerjaan.go.id/',
  },
  {
    title: 'Yulo Laundry Mobile App',
    type: 'Management System & Mobile App',
    role: 'Product Owner & Manager',
    impact: 'Shortened processing flow and supported better retention.',
    desc: 'Managed delivery across order flow, notifications, and reporting from backlog to release planning.',
    tags: ['Product backlog', 'Workflow improvement', 'Release planning', 'Client communication'],
    image: '/aset/project-yulo-real.webp',
    url: 'https://play.google.com/store/apps/details?id=com.yulo.customer&hl=id',
  },
  {
    title: 'Website Business MRT Jakarta',
    type: 'Enterprise Digital Platform',
    role: 'Lead Project Manager',
    impact: 'Improved communication flow and operational visibility.',
    desc: 'Led delivery from requirements and scope alignment through testing and deployment.',
    tags: ['Requirement gathering', 'Stakeholder alignment', 'UAT coordination', 'Deployment'],
    image: '/aset/project-mrt-real.webp',
    url: 'https://bisnis.jakartamrt.co.id/',
  },
];

export const contactDetails = {
  location: 'Sleman, Yogyakarta',
  mapsUrl: 'https://maps.app.goo.gl/NzfNktnYNYvynCtx5',
  linkedinUrl: 'https://www.linkedin.com/in/oktawahyudi',
  linkedinLabel: 'linkedin.com/in/oktawahyudi',
  emailAddress: 'okta.wahyudi86@gmail.com',
  phoneNumber: '089675080104',
  whatsappPhone: '6289675080104',
};

export const whatsappProfileUrl = `https://wa.me/${contactDetails.whatsappPhone}`;
const whatsAppMessage = encodeURIComponent('Halo Okta!\nSaya ingin berdiskusi tentang project dan peluang kolaborasi.');
export const whatsappUrl = `${whatsappProfileUrl}?text=${whatsAppMessage}`;

export const contactMethods: ContactMethod[] = [
  {
    value: contactDetails.location,
    href: contactDetails.mapsUrl,
    icon: Globe,
    external: true,
    breakStyle: 'break-words',
  },
  {
    value: contactDetails.linkedinLabel,
    href: contactDetails.linkedinUrl,
    icon: Linkedin,
    external: true,
    breakStyle: 'break-all',
  },
  {
    value: contactDetails.emailAddress,
    href: `mailto:${contactDetails.emailAddress}`,
    icon: Mail,
  },
  {
    value: contactDetails.phoneNumber,
    href: `tel:${contactDetails.phoneNumber}`,
    icon: Phone,
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Pandu Wicaksono',
    company: 'Lead Project Building, Biznet',
    image: '/aset/testimonial-budi.webp',
    text: 'Okta was consistent in keeping project progress on track and communication clear across the team. He was responsive when issues came up in the field and helped coordination stay orderly until the work was completed.',
  },
  {
    name: 'Dwi Antoro',
    company: 'HR Manager, JITILab.id',
    image: '/aset/testimonial-siti.webp',
    text: 'From an HR and collaboration perspective, Okta showed good ownership in managing delivery and working across functions. He communicated clearly, handled responsibilities well, and contributed to a more structured project environment.',
  },
  {
    name: 'Muhammad Madum',
    company: 'CEO, Dazo.id',
    image: '/aset/testimonial-ahmad.webp',
    text: 'Okta helped turn ideas and business needs into a delivery process the team could actually execute. He kept priorities visible, followed up on blockers, and made it easier for us to move faster without losing direction.',
  },
  {
    name: 'Edy',
    company: 'Manager E-Gov & Support, Lifemedia.id',
    image: '/aset/testimonial-ratna.webp',
    text: 'What stood out from Okta was his discipline in follow-up and his ability to keep technical work aligned with operational needs. He was dependable in coordination, especially when timelines and stakeholder expectations had to be managed carefully.',
  },
  {
    name: 'Yogi Yulianto',
    company: 'Backend Engineer, Detik.com',
    image: '/aset/testimonial-rido.webp',
    text: 'Okta is easy to work with because he keeps discussions focused and makes priorities easier to understand from the engineering side. He brings structure to planning, follows through on action items, and helps delivery move with less confusion.',
  },
];

export const LEGAL_CONTENT: LegalContent = {
  privacy: {
    title: 'Privacy Policy',
    description:
      'Informasi ini menjelaskan bagaimana data kontak dan interaksi di website portfolio Okta Wahyudi digunakan secara wajar untuk kebutuhan komunikasi profesional.',
    sections: [
      {
        heading: 'Informasi yang dikumpulkan',
        body: 'Website ini dapat menampilkan dan memproses informasi kontak profesional seperti nama, alamat email, nomor telepon, tautan LinkedIn, serta pesan yang dikirim melalui tautan WhatsApp atau email. Data tersebut hanya digunakan untuk kebutuhan komunikasi, rekrutmen, dan peluang kolaborasi profesional.',
      },
      {
        heading: 'Cara penggunaan data',
        body: 'Informasi yang diterima digunakan untuk merespons pertanyaan, menjadwalkan diskusi, menindaklanjuti peluang kerja, serta membangun komunikasi profesional yang relevan. Data tidak digunakan untuk tujuan yang tidak berhubungan dengan kebutuhan profesional atau portfolio ini.',
      },
      {
        heading: 'Penyimpanan dan keamanan',
        body: 'Pemilik website berupaya menjaga keamanan informasi yang diterima dengan langkah yang wajar dan proporsional. Meskipun demikian, pengiriman data melalui internet tetap memiliki risiko umum yang tidak selalu dapat dihindari sepenuhnya.',
      },
      {
        heading: 'Tautan pihak ketiga',
        body: 'Website ini dapat mengarahkan pengunjung ke layanan pihak ketiga seperti LinkedIn, WhatsApp, atau email client. Setiap layanan tersebut memiliki kebijakan privasi masing-masing yang berada di luar kendali website ini.',
      },
      {
        heading: 'Kontak',
        body: 'Untuk permintaan koreksi, pembaruan, atau pertanyaan terkait informasi pribadi, silakan hubungi Okta Wahyudi melalui email di okta.wahyudi86@gmail.com atau LinkedIn di linkedin.com/in/oktawahyudi.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    description:
      'Halaman ini menjelaskan ketentuan penggunaan website portfolio Okta Wahyudi untuk kebutuhan profesional, rekrutmen, dan komunikasi kerja.',
    sections: [
      {
        heading: 'Penggunaan website',
        body: 'Website ini disediakan sebagai portfolio profesional untuk menampilkan pengalaman kerja, project, keahlian, dan informasi kontak Okta Wahyudi. Pengunjung diperbolehkan menggunakan informasi di dalamnya untuk keperluan evaluasi kandidat, rekrutmen, networking, atau peluang kerja yang relevan.',
      },
      {
        heading: 'Hak atas konten',
        body: 'Seluruh konten, termasuk teks, tata letak, deskripsi project, dan visual presentasi yang ada di website ini, digunakan untuk kebutuhan personal branding dan dokumentasi profesional. Penggunaan ulang, reproduksi, atau distribusi konten secara penuh untuk kepentingan lain sebaiknya dilakukan dengan izin terlebih dahulu.',
      },
      {
        heading: 'Akurasi informasi',
        body: 'Pemilik website berupaya menjaga seluruh informasi tetap akurat, relevan, dan mutakhir. Namun, penyesuaian terhadap pengalaman kerja, project, kontak, dan materi portfolio dapat dilakukan sewaktu-waktu tanpa pemberitahuan terlebih dahulu.',
      },
      {
        heading: 'Batas tanggung jawab',
        body: 'Website ini disediakan sebagaimana adanya untuk kebutuhan presentasi profesional. Pemilik website tidak bertanggung jawab atas keputusan bisnis, rekrutmen, atau penggunaan lain yang diambil pihak ketiga hanya berdasarkan materi yang tersedia di website ini tanpa proses verifikasi lanjutan.',
      },
      {
        heading: 'Hubungi pemilik website',
        body: 'Jika Anda membutuhkan klarifikasi terkait pengalaman kerja, project, atau penggunaan konten portfolio ini, silakan hubungi Okta Wahyudi melalui email okta.wahyudi86@gmail.com atau nomor 089675080104.',
      },
    ],
  },
};

export const quickLinks: QuickLink[] = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms & Conditions', path: '/terms' },
];

export const footerSocialLinks: SocialLink[] = [
  { icon: Mail, href: `mailto:${contactDetails.emailAddress}`, label: 'Email' },
  { icon: MessageCircle, href: whatsappProfileUrl, label: 'WhatsApp' },
  { icon: Linkedin, href: contactDetails.linkedinUrl, label: 'LinkedIn' },
  { icon: Github, href: 'https://github.com/oktawahyu', label: 'GitHub' },
];
