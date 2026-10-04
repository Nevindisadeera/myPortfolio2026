import { useState } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import SectionLabel from './SectionLabel'
import ProjectPreview from './ProjectPreview'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  const external = Boolean(project.link)
  return (
    <article className="card card-hover group flex flex-col bg-surface-2 p-3">
      <div className="relative">
        <ProjectPreview variant={project.preview} />
        {project.status && (
          <span className="absolute top-2.5 right-2.5 flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-bg/80 px-2 py-0.5 text-[0.6rem] font-semibold text-amber-300 backdrop-blur">
            <span className="size-1.5 animate-pulse rounded-full bg-amber-400" />
            {project.status}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-2 pt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-base leading-tight font-bold">{project.name}</h3>
            <p className="mt-0.5 text-xs text-dim">{project.subtitle}</p>
          </div>
          <span className="shrink-0 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[0.6rem] font-semibold whitespace-nowrap text-accent">
            {project.tag}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.desc}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="chip px-2 py-1 text-[0.65rem]">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="font-mono text-[0.65rem] text-dim">{project.year}</span>
          <a
            href={external ? project.link : '#contact'}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            className="flex items-center gap-1 text-xs font-semibold text-accent transition-transform group-hover:translate-x-0.5"
          >
            {external ? project.linkLabel ?? 'View Case Study' : 'Ask me about it'} <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const list = showAll ? projects : projects.filter((p) => p.featured)

  return (
    <section id="projects" className="scroll-mt-20 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal card p-5 sm:p-6">
          <div className="mb-6 flex items-center justify-between gap-4">
            <SectionLabel>Featured Projects</SectionLabel>
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="flex items-center gap-1 text-xs font-semibold text-accent transition-colors hover:text-accent-2"
            >
              {showAll ? 'Show Featured Only' : 'View All Projects'} <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
