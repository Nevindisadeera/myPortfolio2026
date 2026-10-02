import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa6'
import SectionLabel from './SectionLabel'
import { profile } from '../data/portfolio'

function Cube() {
  const nodes = [
    [100, 20],
    [170, 55],
    [170, 135],
    [100, 170],
    [30, 135],
    [30, 55],
    [100, 90],
  ]
  return (
    <svg
      viewBox="0 0 200 200"
      className="pointer-events-none absolute -right-4 -bottom-6 hidden w-60 animate-float opacity-70 xl:block"
      fill="none"
      stroke="#f97316"
      strokeWidth="1"
    >
      <polygon points="100,20 170,55 100,90 30,55" fill="rgba(249,115,22,0.08)" />
      <polygon points="100,20 170,55 170,135 100,170 30,135 30,55" />
      <polyline points="30,55 100,90 170,55" />
      <line x1="100" y1="90" x2="100" y2="170" />
      <g opacity="0.55">
        <polygon points="100,60 135,75 135,115 100,130 65,115 65,75" />
        <polyline points="65,75 100,95 135,75" />
        <line x1="100" y1="95" x2="100" y2="130" />
      </g>
      {nodes.map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5" fill="#f97316" stroke="none" />
      ))}
      <text
        x="100"
        y="120"
        textAnchor="middle"
        fill="#f97316"
        stroke="none"
        fontSize="16"
        fontWeight="700"
        fontFamily="JetBrains Mono, monospace"
      >
        &lt;/&gt;
      </text>
    </svg>
  )
}

const contactRows = [
  { Icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
  { Icon: Phone, label: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { Icon: MapPin, label: profile.location },
]

const socials = [
  { label: 'GitHub', href: profile.socials.github, Icon: FaGithub },
  { label: 'LinkedIn', href: profile.socials.linkedin, Icon: FaLinkedin },
  { label: 'Medium', href: profile.socials.medium, Icon: FaMedium },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(form.subject || `Portfolio enquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n-- ${form.name}\n${form.email}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-3">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="reveal card relative overflow-hidden p-5 sm:p-8">
          <div className="pointer-events-none absolute -right-20 -bottom-20 size-72 rounded-full bg-accent/10 blur-[90px]" />
          <Cube />

          <div className="relative grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionLabel className="mb-4">Let&apos;s Build Something Great</SectionLabel>
              <h2 className="text-2xl leading-tight font-extrabold sm:text-3xl">
                Have a project in mind?
                <br />
                Let&apos;s bring your ideas to life.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Whether it is a new product, an API, or a feature that needs shipping, I would love to hear
                about it.
              </p>

              <ul className="mt-8 space-y-4">
                {contactRows.map(({ Icon, label, href }) => (
                  <li key={label} className="flex items-center gap-3 text-sm">
                    <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-line bg-surface-2 text-accent">
                      <Icon size={16} />
                    </span>
                    {href ? (
                      <a href={href} className="text-neutral-200 transition-colors hover:text-accent">
                        {label}
                      </a>
                    ) : (
                      <span className="text-neutral-200">{label}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex gap-2">
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

            <form onSubmit={submit} className="space-y-3 lg:col-span-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Name"
                  required
                  className="input-dark"
                />
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  placeholder="Email"
                  required
                  className="input-dark"
                />
              </div>
              <input
                name="subject"
                value={form.subject}
                onChange={update}
                placeholder="Subject"
                className="input-dark"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={update}
                placeholder="Message"
                rows={6}
                required
                className="input-dark resize-y"
              />
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <button type="submit" className="btn-primary">
                  Send Message <Send size={15} />
                </button>
                {sent && (
                  <p className="text-xs text-green-400">Opening your email client with the message.</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
