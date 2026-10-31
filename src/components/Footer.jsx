import { Link } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/psychology', label: 'Psychology & Wellbeing' },
  { to: '/books', label: 'Writing' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/contact', label: 'Contact' },
]

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/angellinya.writes/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@aynilaybaba' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@aynilaybaba' },
  { label: 'Email', href: 'mailto:hello@aynilaybaba.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-xs">
            <Link to="/" className="font-serif text-lg font-semibold text-ink">
              Aynil Aybaba
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-ink/55">
              Psychologist, writer, and speaker, exploring what it means to be human through
              psychology, neuroscience, and storytelling. Based in Amsterdam.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3 sm:justify-end">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-ink/60 transition-colors hover:text-clay"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center gap-6 border-t border-ink/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex gap-6">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-sm font-medium text-ink/60 transition-colors hover:text-clay"
              >
                {social.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-ink/40">
            © {new Date().getFullYear()} Aynil Aybaba. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
