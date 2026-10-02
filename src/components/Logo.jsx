import { Code2 } from 'lucide-react'
import { profile } from '../data/portfolio'

export default function Logo({ compact = false }) {
  return (
    <a href="#home" className="group flex items-center gap-2.5">
      <span className="grid size-9 place-items-center rounded-lg border border-accent/40 bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-bg">
        <Code2 size={18} strokeWidth={2.4} />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block text-sm font-bold tracking-wide uppercase">
            {profile.firstName} {profile.lastName}
          </span>
          <span className="block font-mono text-[0.6rem] tracking-[0.2em] text-dim uppercase">
            {profile.role}
          </span>
        </span>
      )}
    </a>
  )
}
