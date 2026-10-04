import { useRef } from 'react'
import { ArrowRight, Check, Download } from 'lucide-react'
import { profile } from '../data/portfolio'
import BlurText from './BlurText'
import Silk from './Silk'

const metrics = [
  { label: 'Experience', value: '1+ yrs', delta: 'and growing', points: [2, 3, 3, 4, 5, 5, 6, 7, 8] },
  { label: 'Projects', value: '5+', delta: '+2 in 2026', points: [1, 1, 2, 2, 3, 3, 4, 5, 5] },
  { label: 'Technologies', value: '50+', delta: '+Go, n8n', points: [3, 4, 4, 6, 7, 9, 10, 12, 14] },
]

function Sparkline({ points, id }) {
  const w = 76
  const h = 26
  const max = Math.max(...points)
  const min = Math.min(...points)
  const coords = points.map((p, i) => [
    (i / (points.length - 1)) * w,
    h - ((p - min) / (max - min || 1)) * (h - 4) - 2,
  ])
  const d = coords.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="shrink-0">
      <defs>
        <linearGradient id={id} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${d} L${w},${h} L0,${h} Z`} fill={`url(#${id})`} />
      <path d={d} fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function TerminalCard({ className = '' }) {
  return (
    <div className={`card p-4 font-mono text-[0.7rem] leading-relaxed ${className}`}>
      <p className="text-dim">
        $ <span className="text-neutral-200">npm run dev</span>
      </p>
      <p className="mt-1 text-neutral-200">
        Server running on port <span className="text-accent">3000</span>
      </p>
      <p className="flex items-center gap-1.5 text-neutral-300">
        <Check size={12} className="text-green-400" /> Connected to PostgreSQL
      </p>
      <p className="flex items-center gap-1.5 text-neutral-300">
        <Check size={12} className="text-green-400" /> All systems operational
      </p>
      <p className="mt-1">
        <span className="inline-block h-3.5 w-1.5 animate-blink bg-accent align-middle" />
      </p>
    </div>
  )
}

function OverviewCard({ className = '' }) {
  return (
    <div className={`card flex flex-col p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold">Profile Overview</span>
        <span className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2 py-0.5 text-[0.6rem] text-green-400">
          <span className="size-1.5 rounded-full bg-green-400" /> Live
        </span>
      </div>
      <div className="mt-3 flex flex-1 flex-col justify-around gap-3">
        {metrics.map((m, i) => (
          <div key={m.label} className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[0.6rem] tracking-wider text-dim uppercase">{m.label}</p>
              <p className="text-base leading-tight font-bold">
                {m.value}{' '}
                <span className="text-[0.6rem] font-medium text-green-400">{m.delta}</span>
              </p>
            </div>
            <Sparkline points={m.points} id={`spark-${i}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const sectionRef = useRef(null)

  const onMouseMove = (e) => {
    const el = sectionRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - rect.left}px`)
    el.style.setProperty('--sy', `${e.clientY - rect.top}px`)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={onMouseMove}
      className="group/hero relative overflow-hidden pt-28 pb-10 lg:pt-36 lg:pb-16"
    >
      <Silk className="pointer-events-none absolute inset-0 opacity-70" />
      {/* Darken the silk behind the text and fade it into the page below */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.75)_0%,rgba(10,10,10,0.35)_55%,transparent_80%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-b from-transparent to-bg" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-130 w-205 -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/hero:opacity-100 bg-[radial-gradient(500px_circle_at_var(--sx)_var(--sy),rgba(249,115,22,0.09),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="reveal relative mx-auto flex max-w-3xl flex-col items-center text-center">
            <p className="section-label mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              {profile.role}
              <span className="h-px w-8 bg-accent" />
            </p>
            <h1 className="text-6xl leading-[0.95] font-black tracking-tight sm:text-7xl xl:text-8xl">
              <span className="block">
                <BlurText text={profile.firstName.toUpperCase()} delay={200} />
              </span>
              <span className="block text-accent">
                <BlurText text={profile.lastName.toUpperCase()} delay={650} />
                <span className="animate-blink">_</span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">{profile.tagline}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {profile.heroChips.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href={profile.cvFile} download className="btn-outline">
                Download CV <Download size={16} />
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted">
              <span className="size-2 animate-pulse-dot rounded-full bg-green-500" />
              {profile.availability}
            </p>
          </div>
        </div>

        <div className="reveal mx-auto mt-14 max-w-4xl lg:mt-20" style={{ transitionDelay: '150ms' }}>
          <div className="grid gap-4 sm:grid-cols-2">
            <OverviewCard />
            <TerminalCard className="min-w-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
