import { useState } from 'react'
import { ArrowRight, Code2 } from 'lucide-react'
import SectionLabel from './SectionLabel'
import { about, profile } from '../data/portfolio'

export default function About() {
  const [imgOk, setImgOk] = useState(true)

  return (
    <div className="card h-full p-4 sm:p-5">
      <div className="grid h-full gap-5 sm:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div className="relative min-h-[260px] overflow-hidden rounded-xl bg-surface-2">
          {imgOk ? (
            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt={profile.fullName}
              onError={() => setImgOk(false)}
              className="absolute inset-0 size-full object-cover object-top"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(249,115,22,0.28),transparent_55%)]">
              <div className="text-center">
                <p className="text-6xl font-black text-accent/90">
                  {profile.firstName[0]}
                  {profile.lastName[0]}
                </p>
                <p className="mt-2 font-mono text-[0.6rem] tracking-[0.3em] text-dim uppercase">
                  {profile.role}
                </p>
              </div>
            </div>
          )}
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-bg/90 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-xl border border-accent/50 bg-bg/80 text-accent shadow-[0_0_30px_rgba(249,115,22,0.35)] backdrop-blur">
            <Code2 size={20} />
          </span>
        </div>

        <div className="flex flex-col justify-center py-1">
          <SectionLabel className="mb-3">About Me</SectionLabel>
          <h2 className="text-2xl leading-tight font-extrabold sm:text-[1.7rem]">
            {about.heading[0]} <span className="text-accent">{about.heading[1]}</span>
          </h2>
          <p className="mt-3 text-[0.8rem] leading-relaxed text-muted">{about.summary}</p>
          <ul className="mt-4 space-y-2">
            {about.points.map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[0.8rem] text-neutral-200">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a href="#experience" className="btn-outline px-4 py-2.5 text-xs">
              More About Me <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
