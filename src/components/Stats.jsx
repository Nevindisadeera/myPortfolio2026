import { Building2, Code2, Layers, Rocket } from 'lucide-react'
import { stats } from '../data/portfolio'

const icons = { Rocket, Code: Code2, Building: Building2, Layers }

export default function Stats() {
  return (
    <section className="py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal card grid grid-cols-2 border-accent/30 bg-[linear-gradient(90deg,rgba(249,115,22,0.09),transparent_35%,transparent_65%,rgba(249,115,22,0.09))] lg:grid-cols-4 lg:divide-x lg:divide-line">
          {stats.map((s) => {
            const Icon = icons[s.icon]
            return (
              <div key={s.label} className="flex items-center justify-center gap-4 px-6 py-7">
                <span className="text-accent">
                  <Icon size={30} strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-3xl leading-none font-black">{s.value}</p>
                  <p className="mt-1.5 text-xs text-muted">{s.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
