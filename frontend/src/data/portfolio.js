// Single source of truth for portfolio content — edit this file to personalise the site.

export const profile = {
  name: 'Sarif Mia',
  initials: 'SM',
  role: 'Full-Stack Developer',
  tagline: 'I design and build fast, accessible web products — from polished interfaces to reliable APIs.',
  location: 'Remote / Worldwide',
  email: 'hello@example.com',
  availability: 'Available for new projects',
  resumeUrl: null,
};

export const socials = [
  { name: 'GitHub', icon: 'github', url: 'https://github.com/sarif-mia' },
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/' },
  { name: 'X / Twitter', icon: 'twitter', url: 'https://x.com/' },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '50+', label: 'Projects shipped' },
  { value: '3+', label: 'Years experience' },
  { value: '25+', label: 'Happy clients' },
];

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'CSS / Tailwind'] },
  { title: 'Backend', items: ['Node.js', 'Python', 'Flask / FastAPI', 'REST & GraphQL'] },
  { title: 'Data & Cloud', items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS'] },
  { title: 'Practices', items: ['Accessibility', 'Testing', 'CI/CD', 'Performance'] },
];

export const services = [
  {
    icon: 'layout',
    title: 'Frontend Development',
    description: 'Responsive, accessible interfaces with React and modern CSS that feel fast on every device.',
    features: ['React & Next.js', 'Design systems', 'Performance tuning'],
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description: 'Robust APIs and services with clean architecture, solid data models and sensible security.',
    features: ['REST / GraphQL APIs', 'Auth & security', 'Database design'],
  },
  {
    icon: 'layers',
    title: 'Full-Stack Products',
    description: 'End-to-end delivery from idea to deployment, with the tooling to keep shipping confidently.',
    features: ['Architecture', 'CI/CD & Docker', 'Cloud deployment'],
  },
  {
    icon: 'pen',
    title: 'UI/UX Design',
    description: 'Wireframes and prototypes grounded in user needs, handed off as production-ready components.',
    features: ['User flows', 'Prototyping', 'Accessibility audits'],
  },
];

export const experience = [
  {
    period: '2023 — Present',
    role: 'Senior Full-Stack Developer',
    company: 'Freelance',
    summary: 'Building web platforms for startups and agencies — owning architecture, delivery and performance.',
  },
  {
    period: '2022 — 2023',
    role: 'Full-Stack Developer',
    company: 'Product Studio',
    summary: 'Shipped customer-facing dashboards and APIs; introduced a shared component library and CI pipeline.',
  },
  {
    period: '2021 — 2022',
    role: 'Frontend Developer',
    company: 'Digital Agency',
    summary: 'Delivered marketing sites and web apps with a focus on accessibility and Core Web Vitals.',
  },
];

// Used when the API is unreachable (e.g. static hosting) so the site never renders empty.
export const fallbackProjects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=70',
    title: 'E-commerce Platform',
    category: 'Full-Stack',
    description: 'Modern e-commerce solution with cart, checkout and Stripe payments, built for speed and conversion.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2024',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=70',
    title: 'Analytics Dashboard',
    category: 'Frontend',
    description: 'Real-time analytics dashboard with interactive charts, filters and exportable reports.',
    technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
    year: '2024',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=70',
    title: 'Mobile Banking App',
    category: 'UI/UX',
    description: 'Secure, intuitive mobile banking experience with biometric login and spending insights.',
    technologies: ['React Native', 'TypeScript', 'AWS'],
    year: '2023',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=70',
    title: 'API Management System',
    category: 'Backend',
    description: 'Scalable API gateway with rate limiting, auth and observability across microservices.',
    technologies: ['Python', 'FastAPI', 'Docker', 'Kubernetes'],
    year: '2023',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=70',
    title: 'AI Content Platform',
    category: 'Full-Stack',
    description: 'AI-powered content generation and management platform with team workflows.',
    technologies: ['Next.js', 'LLM APIs', 'Supabase', 'Vercel'],
    year: '2024',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=70',
    title: 'Healthcare Management',
    category: 'Backend',
    description: 'Patient records, scheduling and billing system designed for reliability and compliance.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'Redis'],
    year: '2023',
  },
];
