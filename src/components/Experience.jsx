import { Briefcase, GraduationCap, MapPin } from 'lucide-react'
import SectionLabel from './SectionLabel'
import { education, experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-3">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="reveal card p-5 sm:p-6 lg:col-span-7">
          <SectionLabel className="mb-6">Experience</SectionLabel>
          <ol className="relative space-y-8 border-l border-line pl-7">
            {experience.map((e) => (
              <li key={e.role} className="relative">
                <span
                  className={`absolute top-1 -left-[38px] size-5 rounded-full border-4 border-bg ${
                    e.current ? 'bg-accent shadow-[0_0_14px_rgba(249,115,22,0.6)]' : 'bg-line-2'
                  }`}
                />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-base font-bold">{e.role}</h3>
                  <span
                    className={`rounded-full px-2.5 py-1 font-mono text-[0.6rem] ${
                      e.current
                        ? 'border border-accent/40 bg-accent/10 text-accent'
                        : 'border border-line-2 text-muted'
                    }`}
                  >
                    {e.period}
                  </span>
                </div>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                  <span className="flex items-center gap-1 text-neutral-200">
                    <Briefcase size={12} className="text-accent" />
                    {e.company}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {e.location}
                  </span>
                </p>
                <ul className="mt-3 space-y-1.5">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
                      {p}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>

        <div className="reveal card p-5 sm:p-6 lg:col-span-5" style={{ transitionDelay: '120ms' }}>
          <SectionLabel className="mb-6">Education</SectionLabel>
          <div className="space-y-4">
            {education.map((ed) => (
              <div key={ed.degree} className="card card-hover bg-surface-2 p-5">
                <div className="flex items-start gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-accent/30 bg-accent/10 text-accent">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <h3 className="text-sm leading-snug font-bold">{ed.degree}</h3>
                    <p className="mt-1 text-xs text-muted">{ed.school}</p>
                    <p className="mt-1 font-mono text-[0.6rem] text-accent">{ed.period}</p>
                    <p className="mt-2 text-xs leading-relaxed text-dim">{ed.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
