import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { Braces, Database } from 'lucide-react'
import SectionLabel from './SectionLabel'

const groups = [
  {
    name: 'Languages',
    items: [
      { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
      { name: 'Go', Icon: SiGo, color: '#00ADD8' },
      { name: 'Python', Icon: SiPython, color: '#3776AB' },
      { name: 'SQL', Icon: Database, color: '#f97316' },
      { name: 'HTML5', Icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', Icon: SiCss, color: '#8A5CF6' },
    ],
  },
  {
    name: 'Frontend',
    items: [
      { name: 'React', Icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', Icon: SiNextdotjs, color: '#FFFFFF' },
      { name: 'React Native', Icon: SiReact, color: '#61DAFB' },
      { name: 'Tailwind', Icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
      { name: 'Express', Icon: SiExpress, color: '#FFFFFF' },
      { name: 'REST APIs', Icon: Braces, color: '#f97316' },
    ],
  },
  {
    name: 'Database',
    items: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    name: 'Tools & DevOps',
    items: [
      { name: 'Git', Icon: SiGit, color: '#F05032' },
      { name: 'GitHub', Icon: SiGithub, color: '#FFFFFF' },
      { name: 'Docker', Icon: SiDocker, color: '#2496ED' },
      { name: 'Postman', Icon: SiPostman, color: '#FF6C37' },
      { name: 'n8n', Icon: SiN8N, color: '#EA4B71' },
      { name: 'Linux', Icon: SiLinux, color: '#FCC624' },
      { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
    ],
  },
]

export default function TechStack() {
  return (
    <section id="stack" className="scroll-mt-20 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal card p-5 sm:p-6">
          <SectionLabel className="mb-6">Tech Stack</SectionLabel>
          <div className="flex flex-wrap gap-x-10 gap-y-8">
            {groups.map((g, gi) => (
              <div
                key={g.name}
                className={gi > 0 ? 'xl:border-l xl:border-line xl:pl-10' : ''}
              >
                <p className="mb-4 text-xs font-semibold text-neutral-300">{g.name}</p>
                <div className="flex flex-wrap gap-3">
                  {g.items.map(({ name, Icon, color }) => (
                    <div key={name} className="group flex w-14 flex-col items-center gap-1.5">
                      <span
                        className="grid size-11 place-items-center rounded-lg border border-line bg-surface-2 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-accent/50 group-hover:shadow-[0_8px_24px_-12px_rgba(249,115,22,0.6)]"
                        style={{ color }}
                      >
                        <Icon size={22} />
                      </span>
                      <span className="text-center text-[0.6rem] leading-tight text-muted">
                        {name}
                      </span>
                    </div>
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
