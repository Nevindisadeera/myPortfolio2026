import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6'
import Logo from './Logo'
import { navLinks, profile } from '../data/portfolio'

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedin },
  { label: 'Medium', href: profile.socials.medium, Icon: FaMedium },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-10 border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-muted">{profile.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-bold tracking-wider text-accent uppercase">Quick Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-xs text-muted transition-colors hover:text-accent">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-bold tracking-wider text-accent uppercase">Let&apos;s Connect</p>
          <div className="mt-4 flex gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid size-9 place-items-center rounded-lg border border-line text-muted transition-all hover:border-accent hover:text-accent"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-[0.7rem] text-dim sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {year} {profile.fullName}. All rights reserved.
          </p>
          <p>Built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
