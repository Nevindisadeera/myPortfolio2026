import {
  SiAxios,
  SiCloudinary,
  SiCss,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJsonwebtokens,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiN8N,
  SiNetlify,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPostgresql,
  SiPostman,
  SiPrettier,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiShadcnui,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiYarn,
  SiZod,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'
import { VscVscode } from 'react-icons/vsc'
import {
  Atom,
  Bell,
  BellRing,
  Box,
  Braces,
  Cable,
  Database,
  Mail,
  ShieldCheck,
  SquareTerminal,
  UserCog,
  Webhook,
  Zap,
} from 'lucide-react'
import SectionLabel from './SectionLabel'

// Dot colour on each chip = how comfortable I am with the tool.
const levels = {
  advanced: { label: 'Advanced', dot: 'bg-green-400' },
  proficient: { label: 'Proficient', dot: 'bg-sky-400' },
  familiar: { label: 'Familiar', dot: 'bg-amber-400' },
  exploring: { label: 'Exploring', dot: 'bg-violet-400' },
}

const groups = [
  {
    name: 'Frontend',
    desc: 'High-performance UIs and responsive architectures.',
    items: [
      { name: 'React.js', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E', level: 'advanced' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26', level: 'advanced' },
      { name: 'CSS3', Icon: SiCss, color: '#663399', level: 'advanced' },
      { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'shadcn/ui', Icon: SiShadcnui, color: '#FFFFFF' },
      { name: 'React Router', Icon: SiReactrouter, color: '#F44250' },
      { name: 'Framer Motion', Icon: SiFramer, color: '#0055FF' },
      { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
    ],
  },
  {
    name: 'State, Data & Forms',
    desc: 'Client state, server-state caching and runtime-validated forms.',
    items: [
      { name: 'Zustand', Icon: Box, color: '#C9A27E' },
      { name: 'TanStack Query', Icon: SiReactquery, color: '#FF4154' },
      { name: 'Context API', Icon: Atom, color: '#61DAFB' },
      { name: 'Axios', Icon: SiAxios, color: '#8B5CF6' },
      { name: 'React Hook Form', Icon: SiReacthookform, color: '#EC5990' },
      { name: 'Zod', Icon: SiZod, color: '#5B8DEF' },
    ],
  },
  {
    name: 'Backend & APIs',
    desc: 'Scalable server runtimes, service layers and API integrations.',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express.js', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST APIs', Icon: Braces, color: '#22C55E', level: 'advanced' },
      { name: 'Third-Party API Integration', Icon: SquareTerminal, color: '#D4D4D4' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'Java', Icon: FaJava, color: '#E76F00', level: 'familiar' },
      { name: 'Go', Icon: SiGo, color: '#00ADD8', level: 'exploring' },
    ],
  },
  {
    name: 'Databases & Storage',
    desc: 'Relational integrity, document stores and media/object storage.',
    items: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'Mongoose', Icon: SiMongoose, color: '#C62E2E' },
      { name: 'MongoDB Atlas', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
      { name: 'SQL', Icon: Database, color: '#f97316' },
      { name: 'Cloudinary', Icon: SiCloudinary, color: '#3448C5' },
      { name: 'AWS S3', Icon: FaAws, color: '#FF9900', level: 'familiar' },
    ],
  },
  {
    name: 'Auth & Security',
    desc: 'Token security, identity providers and permission models.',
    items: [
      { name: 'JWT', Icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'RBAC', Icon: UserCog, color: '#22C55E' },
      { name: 'API Security', Icon: ShieldCheck, color: '#22C55E' },
    ],
  },
  {
    name: 'Real-Time & Messaging',
    desc: 'Bi-directional protocols, events, email and user alerts.',
    items: [
      { name: 'Socket.IO', Icon: SiSocketdotio, color: '#FFFFFF' },
      { name: 'WebSockets', Icon: Cable, color: '#2DD4BF' },
      { name: 'Webhooks', Icon: Webhook, color: '#60A5FA' },
      { name: 'Event-Driven Architecture', Icon: Zap, color: '#A78BFA', level: 'exploring' },
      { name: 'Real-Time Notifications', Icon: BellRing, color: '#FBBF24' },
      { name: 'Toast Notifications', Icon: Bell, color: '#FBBF24' },
      { name: 'Nodemailer', Icon: Mail, color: '#22D3EE' },
      { name: 'EmailJS', Icon: Mail, color: '#F97316' },
    ],
  },
  {
    name: 'DevOps & Testing',
    desc: 'Version control, CI/CD, containers, hosting and tests.',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED', level: 'familiar' },
      { name: 'Vercel', Icon: SiVercel, color: '#FFFFFF' },
      { name: 'Netlify', Icon: SiNetlify, color: '#00C7B7', level: 'familiar' },
      { name: 'Jest', Icon: SiJest, color: '#C21325', level: 'familiar' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
    ],
  },
  {
    name: 'Dev Tools',
    desc: 'Developer experience, static analysis, design and automation.',
    items: [
      { name: 'VS Code', Icon: VscVscode, color: '#007ACC', level: 'advanced' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'Figma', Icon: SiFigma, color: '#F24E1E', level: 'familiar' },
      { name: 'ESLint', Icon: SiEslint, color: '#8080F2' },
      { name: 'Prettier', Icon: SiPrettier, color: '#F7B93E' },
      { name: 'npm', Icon: SiNpm, color: '#CB3837' },
      { name: 'Yarn', Icon: SiYarn, color: '#2C8EBB' },
      { name: 'n8n', Icon: SiN8N, color: '#EA4B71' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal card p-5 sm:p-6">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <SectionLabel>Tech Stack</SectionLabel>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {Object.values(levels).map((l) => (
                <span key={l.label} className="flex items-center gap-1.5 font-mono text-[0.65rem] text-muted">
                  <span className={`size-1.5 rounded-full ${l.dot}`} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {groups.map((g, gi) => (
              <div
                key={g.name}
                className="card card-hover flex flex-col bg-surface-2/60 p-4 sm:p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-mono text-xs font-bold tracking-wider uppercase">
                    <span className="text-accent">{String(gi + 1).padStart(2, '0')} //</span> {g.name}
                  </h3>
                  <span className="grid h-5 min-w-7 shrink-0 place-items-center rounded-full border border-line-2 px-1.5 font-mono text-[0.6rem] text-muted">
                    {g.items.length}
                  </span>
                </div>
                <p className="mt-1.5 font-mono text-[0.65rem] leading-relaxed text-dim">{g.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map(({ name, Icon, color, level = 'proficient' }) => (
                    <span
                      key={name}
                      title={`${name} · ${levels[level].label}`}
                      className={`flex items-center gap-2 rounded-md border bg-bg/60 py-1 pr-2.5 pl-1 transition-colors duration-200 hover:border-accent/50 ${
                        level === 'exploring' ? 'border-violet-400/40' : 'border-line-2'
                      }`}
                    >
                      <span className="grid size-6 place-items-center rounded bg-white/5" style={{ color }}>
                        <Icon size={13} />
                      </span>
                      <span className="font-mono text-[0.66rem] font-semibold text-neutral-200">{name}</span>
                      <span className={`size-1.5 rounded-full ${levels[level].dot}`} />
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
