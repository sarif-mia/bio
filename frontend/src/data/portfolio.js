// Single source of truth for portfolio content — edit this file to personalise the site.

export const profile = {
  name: 'Sarif Mia',
  fullName: 'Mohammad Sarif Mia',
  initials: 'SM',
  role: 'Software Engineer',
  company: 'NDS9 Limited',
  tagline:
    'Software Engineer at a multinational buying house in Dhaka. I build business software — HR & payroll SaaS, ERP systems and e-commerce platforms.',
  location: 'Uttara, Dhaka, Bangladesh',
  email: 'sarifmia.official@gmail.com',
  languages: 'Bangla & English',
  portrait: '/portrait.jpg',
  resumeUrl: null,
};

export const socials = [
  { name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/sarif-mia/' },
  { name: 'GitHub', icon: 'github', url: 'https://github.com/sarif-mia' },
  { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/mohammad.sarifmia' },
  { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/mohammad.sarifmia/' },
];

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '10', label: 'Products built' },
  { value: '2021', label: 'Working in tech since' },
  { value: 'B.Sc.', label: 'CSE, Uttara University' },
];

export const skillGroups = [
  { title: 'Business software', items: ['HR & Payroll', 'ERP', 'Attendance & Leave', 'Dashboards'] },
  { title: 'Web products', items: ['Web applications', 'E-commerce', 'SaaS', 'Calculators & tools'] },
  { title: 'IT operations', items: ['IT support', 'Software maintenance', 'Network management'] },
  { title: 'Languages', items: ['Bangla', 'English'] },
];

export const services = [
  {
    icon: 'layout',
    title: 'Web Applications',
    description: 'Custom web apps that streamline everyday business operations, from internal tools to customer-facing products.',
    features: ['Business workflows', 'Admin dashboards', 'Reports & exports'],
  },
  {
    icon: 'layers',
    title: 'HR, Payroll & ERP',
    description: 'Multi-tenant HR and ERP systems covering attendance, payroll, leave, inventory, production and accounts.',
    features: ['Payroll & attendance', 'Inventory & production', 'Real-time dashboards'],
  },
  {
    icon: 'cart',
    title: 'E-commerce',
    description: 'Online stores for fashion and beauty brands with clean product browsing and smooth checkout.',
    features: ['Storefront design', 'Product catalogues', 'Worldwide shipping flows'],
  },
  {
    icon: 'server',
    title: 'IT Solutions & Support',
    description: 'Keeping business systems running — software maintenance, IT support and network management.',
    features: ['Software maintenance', 'IT support', 'Network management'],
  },
];

export const experience = [
  {
    period: 'Mar 2022 — Present',
    role: 'Software Engineer',
    company: 'NDS9 Limited, Dhaka',
    summary:
      'Multinational buying house. Developing web applications and providing IT solutions for business operations.',
  },
  {
    period: '2021 — 2022',
    role: 'IT Specialist',
    company: 'Mondol Group, Gazipur',
    summary: 'Worked in IT support, software maintenance and network management.',
  },
];

export const education = [
  { period: '2024', role: 'B.Sc. in Computer Science & Engineering', company: 'Uttara University' },
  { period: '2020', role: 'Diploma in Computer Engineering', company: 'Sherpur Polytechnic Institute' },
  { period: '2016', role: 'Secondary School Certificate (S.S.C.)', company: 'Sreepur Kumaria High School' },
];

// Mirrors backend/app/data.py; used when the API is unreachable (e.g. static hosting).
export const fallbackProjects = [
  {
    id: 1,
    title: 'AIHR BD',
    category: 'SaaS',
    description:
      'HR & Payroll SaaS for Bangladesh — multi-tenant HRM with attendance, payroll, leave, performance tracking, and mobile-billing integration.',
    tags: ['HRM', 'Payroll', 'Multi-tenant'],
    image: '/projects/aihrbd.jpg',
    url: 'https://aihrbd.com',
  },
  {
    id: 2,
    title: 'LoveGen',
    category: 'E-commerce',
    description:
      'Denim and fashion e-commerce platform built for a modern lifestyle brand offering durable, comfortable clothing.',
    tags: ['Fashion', 'Storefront'],
    image: '/projects/lovegen.jpg',
    url: 'https://lovegen.com',
  },
  {
    id: 3,
    title: 'LVGN',
    category: 'E-commerce',
    description:
      'Premium streetwear and fashion e-commerce store with worldwide shipping, focused on bold expression and quality fabrics.',
    tags: ['Streetwear', 'Worldwide shipping'],
    image: '/projects/lvgn.jpg',
    url: 'https://lvgn.com',
  },
  {
    id: 4,
    title: 'Dunamiss Cosmetics',
    category: 'E-commerce',
    description:
      'Beauty and cosmetics e-commerce platform for a women-led, purpose-driven brand selling skincare, makeup, and lip-care products.',
    tags: ['Beauty', 'Storefront'],
    image: '/projects/dunamiss.jpg',
    url: 'https://dunamiss.in',
  },
  {
    id: 5,
    title: 'Dunacare',
    category: 'Web App',
    description:
      'Healthcare and wellness platform focused on accessible care, appointments, and patient-centric services.',
    tags: ['Healthcare', 'Appointments'],
    image: null,
    url: null,
  },
  {
    id: 6,
    title: 'NDS9',
    category: 'Website',
    description: 'Modern technology solutions and digital product studio delivering scalable web experiences.',
    tags: ['Corporate site'],
    image: '/projects/nds9.jpg',
    url: 'https://nds9.co',
  },
  {
    id: 7,
    title: 'Fabriq ERP',
    category: 'Enterprise',
    description:
      'ERP solution for garment and textile manufacturing — covers production planning, inventory, purchase, sales, accounts, and real-time factory dashboards.',
    tags: ['ERP', 'Manufacturing', 'Dashboards'],
    image: null,
    url: null,
  },
  {
    id: 8,
    title: 'BD Income Tax Calculator',
    category: 'Web App',
    description:
      'Bangladesh income tax estimation tool with step-by-step inputs, slab-based calculations, and downloadable tax summary for salaried individuals.',
    tags: ['Finance', 'Bangla UI'],
    image: '/projects/bd-income-tax.jpg',
    url: 'https://bd-income-tax-calculator.vercel.app/',
  },
  {
    id: 9,
    title: 'Islamic Diary',
    category: 'Web App',
    description:
      'Daily Islamic journaling app with prayer tracking, Quran reading goals, hadith reminders, and personal spiritual notes in a clean interface.',
    tags: ['Lifestyle', 'Bangla UI'],
    image: '/projects/islamic-diary.jpg',
    url: 'https://islamic-diary.vercel.app/',
  },
  {
    id: 10,
    title: 'Insights Work',
    category: 'SaaS',
    description:
      'Business analytics dashboard that turns raw data into actionable insights with charts, KPI cards, and exportable reports for small teams.',
    tags: ['Analytics', 'Dashboards'],
    image: '/projects/insights-work.jpg',
    url: 'https://insights-work.vercel.app/',
  },
];
