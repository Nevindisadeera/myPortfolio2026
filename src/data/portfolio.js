export const profile = {
  firstName: 'Nevindi',
  lastName: 'Sadeera',
  fullName: 'Nevindi Sadeera Lokuliyanage',
  role: 'Associate Software Engineer',
  tagline: 'I build scalable web applications with clean architecture, maintainable code and features shipped end to end.',
  location: 'Matara, Sri Lanka',
  phone: '+94 76 386 2252',
  email: 'nevindisadeera@gmail.com',
  availability: 'Available for full-time & freelance opportunities',
  cvFile: `${import.meta.env.BASE_URL}Nevindi_Sadeera_CV.pdf`,
  socials: {
    github: 'https://github.com/Nevindisadeera',
    linkedin: 'https://linkedin.com/in/nevindisadeera',
    medium: 'https://medium.com/@nevindiiii',
    portfolio: 'https://nevindisadeera.github.io/myPortfolio2026/',
  },
  heroChips: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Go', 'PostgreSQL'],
}

export const about = {
  heading: ['Associate', 'Software Engineer.'],
  summary:
    "I'm Nevindi, an Associate Software Engineer at BotCalm with 1+ year of professional experience building full-stack web applications, RESTful APIs, role-based systems and third-party integrations. I contribute to production software across frontend and backend services with TypeScript, React, Next.js, Node.js, Go, PostgreSQL and MongoDB.",
  points: [
    '1+ year of production experience at BotCalm',
    'Full-stack: React, Next.js, Node.js & Go',
    'REST APIs & third-party integrations (Shufti)',
    'Code reviews, debugging & Agile sprints',
  ],
}

export const services = [
  {
    title: 'Web Applications',
    desc: 'Modern web apps built with React, Next.js and TypeScript following scalable architecture patterns.',
    icon: 'Globe',
  },
  {
    title: 'API Development',
    desc: 'RESTful APIs in Node.js and Go that are secure, well-structured and documented.',
    icon: 'Server',
  },
  {
    title: 'Database Design',
    desc: 'Data modelling and query optimisation across MongoDB, PostgreSQL and MySQL.',
    icon: 'Database',
  },
  {
    title: 'UI/UX Implementation',
    desc: 'Responsive, accessible, pixel-accurate interfaces built from reusable components.',
    icon: 'Layout',
  },
  {
    title: 'Workflow Automation',
    desc: 'n8n automations and integrations that remove manual work from business processes.',
    icon: 'Workflow',
  },
  {
    title: 'Mobile Applications',
    desc: 'Cross-platform mobile apps with React Native and NativeWind.',
    icon: 'Smartphone',
  },
]

export const projects = [
  {
    name: 'Vesant',
    subtitle: 'Compliance Management Platform',
    tag: 'Compliance Platform',
    year: '2026 - Present',
    desc: 'Frontend features and backend services for a compliance platform, including Shufti KYC integration and REST API workflows.',
    tech: ['Next.js', 'TypeScript', 'Go', 'PostgreSQL', 'Shufti'],
    preview: 'dashboard',
    featured: true,
  },
  {
    name: 'HR Management System',
    subtitle: 'BotCalm',
    tag: 'HR Platform',
    year: '2025 - 2026',
    desc: 'Employee and recruitment management workflows with Node.js REST APIs and n8n automation for CV filtering.',
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'n8n'],
    preview: 'table',
    featured: true,
  },
  {
    name: 'SpeakUP',
    subtitle: 'Citizen Complaint Management System',
    tag: 'Final Year Project',
    year: '2025',
    desc: 'MERN platform for anonymous and identified complaints with file uploads, location tagging, role-based dashboards and chatbot assistance.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    preview: 'map',
    featured: true,
  },
  {
    name: 'ExpenseTracker',
    subtitle: 'Cross-Platform Mobile Application',
    tag: 'Mobile App',
    year: '2026',
    desc: 'Expense entry, categorisation and state management in a component-based React Native UI styled with NativeWind.',
    tech: ['React Native', 'NativeWind'],
    preview: 'mobile',
    featured: false,
  },
  {
    name: 'Management System Integration',
    subtitle: 'Self-Directed Project',
    tag: 'Self-Directed',
    year: '2025',
    desc: 'CRUD operations, REST API integration, authentication and role-based access control for secure multi-user use.',
    tech: ['TypeScript', 'Next.js', 'REST API'],
    preview: 'table',
    featured: false,
  },
]

export const stats = [
  { value: '5+', label: 'Projects Built', icon: 'Rocket' },
  { value: '1+', label: 'Years Experience', icon: 'Code' },
  { value: '2', label: 'Organisations', icon: 'Building' },
  { value: '50+', label: 'Technologies', icon: 'Layers' },
]

export const experience = [
  {
    role: 'Associate Software Engineer',
    company: 'BotCalm (PVT) LTD',
    location: 'Matara, Sri Lanka',
    period: 'Sep 2026 - Present',
    current: true,
    points: [
      'Develop and maintain frontend features for the Vesant compliance platform using Next.js, React and TypeScript.',
      'Work across frontend and backend services to implement features, investigate defects and resolve issues.',
      'Integrate frontend workflows with REST APIs and backend services, including Shufti and other compliance integrations.',
      'Use WSL and Linux-based environments for backend development, debugging and local service workflows.',
    ],
  },
  {
    role: 'Full Stack Engineer (Trainee)',
    company: 'BotCalm (PVT) LTD',
    location: 'Matara, Sri Lanka',
    period: 'Sep 2025 - Sep 2026',
    current: false,
    points: [
      'Build end-to-end features in React, Next.js, TypeScript, Go and Node.js following scalable architecture patterns.',
      'Design and implement RESTful APIs and third-party integrations that extend product functionality.',
      'Take part in code reviews with senior engineers and contribute to architectural decisions on production systems.',
      'Model data and optimise queries across MongoDB and SQL databases in Agile sprints.',
    ],
  },
  {
    role: 'Web User Interface Developer (Volunteer)',
    company: 'Irrigation Department, Southern Province',
    location: 'Galle, Sri Lanka',
    period: 'Oct 2024 - Jan 2025',
    current: false,
    points: [
      'Built full-stack web features using React, TypeScript and Node.js with a focus on scalable architecture and responsive UI.',
      'Developed RESTful APIs, integrated third-party services and worked across MongoDB and SQL.',
      'Followed Agile practices with Git and GitHub, prioritising performance and accessibility.',
    ],
  },
]

export const education = [
  {
    degree: 'Higher National Diploma in Information Technology',
    school: 'Sri Lanka Institute of Advanced Technological Education (SLIATE)',
    period: '2023 - 2025',
    desc: 'Software development, databases, web technologies and system analysis with hands-on full-stack projects.',
  },
  {
    degree: 'BSE (Hons) in Software Engineering - Coursework',
    school: 'The Open University of Sri Lanka',
    period: '2022 - 2023',
    desc: 'Software engineering fundamentals, databases, web technologies and system analysis.',
  },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]
