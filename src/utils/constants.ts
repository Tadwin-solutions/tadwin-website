/** Site-wide routing and marketing copy — adjust COMPANY and PROJECTS for production. */
export const ROUTES = {
  home: '/',
  about: '/about',
  services: '/services',
  projects: '/projects',
  contact: '/contact',
} as const

export type RouteKey = keyof typeof ROUTES

export const NAV_LINKS = [
  { label: 'Home', to: ROUTES.home },
  { label: 'About', to: ROUTES.about },
  { label: 'Services', to: ROUTES.services },
  { label: 'Projects', to: ROUTES.projects },
  { label: 'Contact', to: ROUTES.contact },
] as const

export type ServiceIconId = 'web' | 'custom' | 'mobile'

export type Service = {
  title: string
  description: string
  icon: ServiceIconId
  /** Short capability chips shown on service cards */
  highlights: string[]
}

export const SERVICES: Service[] = [
  {
    title: 'Web Development',
    description:
      'Marketing sites, product web apps, and operations dashboards built with React and Next.js—responsive by default, accessible, and tuned for speed.',
    icon: 'web',
    highlights: ['React', 'Next.js', 'Responsive websites', 'Dashboards'],
  },
  {
    title: 'Custom Software Development',
    description:
      'End-to-end platforms for SaaS, ERP, and internal business systems—robust APIs, integrations, and data models that scale with your org.',
    icon: 'custom',
    highlights: ['SaaS', 'ERP', 'Business systems', 'APIs'],
  },
  {
    title: 'Mobile Application Development',
    description:
      'Cross-platform and native-quality apps for iOS and Android using React Native—offline-aware flows, push, and store-ready releases.',
    icon: 'mobile',
    highlights: ['React Native', 'iOS', 'Android'],
  },
]

export type TechStackGroup = {
  label: string
  items: string[]
}

/** Shown in the dedicated tech stack band on Home and Services. */
export const TECH_STACK: TechStackGroup[] = [
  { label: 'Frontend', items: ['React', 'Next.js'] },
  { label: 'Backend', items: ['Node.js', 'Python (Django / FastAPI)'] },
  { label: 'Mobile', items: ['React Native'] },
]

export type WhyPoint = {
  title: string
  description: string
}

export const WHY_TADWIN: WhyPoint[] = [
  {
    title: 'Scalable architecture',
    description:
      'Domain-driven boundaries, clear service contracts, and patterns that keep velocity high as complexity grows.',
  },
  {
    title: 'Modern technologies',
    description:
      'We standardize on proven stacks—React, Next.js, Node.js, Python, and React Native—so hiring and handoff stay straightforward.',
  },
  {
    title: 'Performance-focused development',
    description:
      'Core Web Vitals, efficient data fetching, and pragmatic caching so your product feels fast in the real world—not just in demos.',
  },
  {
    title: 'Mobile-first approach',
    description:
      'Layouts, navigation, and touch targets are designed for small screens first, then enhanced for desktop power users.',
  },
  {
    title: 'End-to-end product delivery',
    description:
      'From discovery and UX to launch, observability, and iteration—we own outcomes, not just tickets.',
  },
]

export type Project = {
  name: string
  tag: string
  description: string
  stack: string[]
  outcome: string
  /** Placeholder client label for portfolio cards */
  client: string
  year: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Apex Commerce Hub',
    tag: 'E‑commerce',
    client: 'Retail collective (NDA)',
    year: '2025',
    description:
      'Headless storefront and merchant console with real-time inventory, role-based dashboards, and sub-second product discovery.',
    stack: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
    outcome: 'Higher conversion on mobile checkout flows',
  },
  {
    name: 'Vertex Ops Platform',
    tag: 'Internal SaaS',
    client: 'Logistics partner',
    year: '2025',
    description:
      'Operations workspace for dispatch, SLA tracking, and exception handling—unified APIs across legacy and greenfield services.',
    stack: ['React', 'FastAPI', 'Python', 'Redis'],
    outcome: 'Reduced mean time to resolve operational incidents',
  },
  {
    name: 'Nimbus Health Access',
    tag: 'Mobile + API',
    client: 'Healthcare startup',
    year: '2024',
    description:
      'Patient scheduling and care plans on React Native (iOS/Android) with a HIPAA-minded API layer and audit-friendly event logs.',
    stack: ['React Native', 'Node.js', 'Django', 'AWS'],
    outcome: 'Stronger engagement across recurring care journeys',
  },
  {
    name: 'Meridian ERP Core',
    tag: 'ERP',
    client: 'Manufacturing SME',
    year: '2024',
    description:
      'Modular ERP backbone for orders, inventory, and finance—workflow engines, permissions, and reporting tailored to operators.',
    stack: ['Next.js', 'Python', 'Django', 'PostgreSQL'],
    outcome: 'Fewer manual reconciliations between finance and warehouse',
  },
  {
    name: 'Pulse Analytics Suite',
    tag: 'Dashboards',
    client: 'Fintech scale-up',
    year: '2024',
    description:
      'Executive and team dashboards with drill-down exploration, export pipelines, and guardrailed self-serve metrics.',
    stack: ['React', 'Node.js', 'Python', 'BigQuery'],
    outcome: 'Faster weekly business reviews with trusted numbers',
  },
  {
    name: 'FieldLink Crew',
    tag: 'Mobile',
    client: 'Infrastructure services',
    year: '2023',
    description:
      'Offline-first crew app for work orders, photo capture, and sync—paired with an admin web app for coordinators.',
    stack: ['React Native', 'FastAPI', 'PostgreSQL'],
    outcome: 'More jobs completed per crew per shift (placeholder metric)',
  },
]

export const COMPANY = {
  name: 'Tadwin Solutions',
  tagline: 'Software development company',
  email: 'tadwinsolutions@gmail.com',
  phone: '+971 543 692 694',
  address: 'Dubai, UAE',
} as const
