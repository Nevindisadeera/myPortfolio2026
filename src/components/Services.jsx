import { Database, Globe, LayoutTemplate, Server, Smartphone, Workflow } from 'lucide-react'
import SectionLabel from './SectionLabel'
import { services } from '../data/portfolio'

const icons = { Globe, Server, Database, Layout: LayoutTemplate, Workflow, Smartphone }

export default function Services() {
  return (
    <div className="card h-full p-5 sm:p-6">
      <SectionLabel className="mb-5">Services</SectionLabel>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => {
          const Icon = icons[s.icon]
          return (
            <div key={s.title} className="card card-hover flex gap-4 bg-surface-2 p-4 sm:block sm:p-5">
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                <Icon size={18} />
              </span>
              <div>
                <h3 className="text-sm font-bold sm:mt-4">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{s.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
