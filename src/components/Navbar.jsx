import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => document.querySelector(l.href)).filter(Boolean)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  const linkClass = (href) =>
    `relative text-sm font-medium transition-colors hover:text-accent ${
      active === href ? 'text-accent' : 'text-muted'
    }`

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.href)}>
                {l.label}
                {active === l.href && (
                  <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-accent" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="btn-outline border-accent/60 px-4 py-2 text-xs text-accent hover:bg-accent hover:text-bg"
          >
            Let&apos;s Build
          </a>
        </div>

        <button
          type="button"
          className="grid size-10 place-items-center rounded-lg border border-line text-muted lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-md lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-surface-2 hover:text-accent ${
                    active === l.href ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="mt-2 px-3 pb-2">
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Let&apos;s Build
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
