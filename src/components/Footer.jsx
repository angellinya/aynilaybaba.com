import { Link } from 'react-router-dom'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:hello@aynilaybaba.com' },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <Link to="/" className="font-serif text-lg font-semibold text-ink">
          Aynil Aybaba
        </Link>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
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
    </footer>
  )
}
