import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/about', label: 'About' },
  { to: '/psychology', label: 'Psychology' },
  { to: '/books', label: 'Writing' },
  { to: '/speaking', label: 'Speaking' },
  { to: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > window.innerHeight - 80
  )
  const { pathname } = useLocation()
  const isBooks = pathname === '/books'

  useEffect(() => {
    if (!isBooks) return
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight - 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [isBooks])

  // true while floating transparent over the dark video hero on the Books page
  const overHero = isBooks && !scrolled

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors hover:text-clay ${
      isActive ? 'text-clay' : overHero ? 'text-cream/70' : 'text-ink/70'
    }`

  return (
    <header
      className={`top-0 z-50 border-b transition-colors duration-500 ${
        isBooks ? 'fixed inset-x-0' : 'sticky'
      } ${
        overHero
          ? 'border-transparent bg-transparent'
          : 'border-ink/10 bg-cream/80 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className={`font-serif text-2xl font-normal tracking-wide ${overHero ? 'text-cream' : 'text-ink'}`}
        >
          Aynil Aybaba
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          <nav className="flex gap-10">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className={`rounded-full px-5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5 ${
              overHero ? 'bg-cream text-ink' : 'bg-amber text-cream hover:shadow-lg hover:shadow-amber/30'
            }`}
          >
            Get in Touch
          </Link>
        </div>

        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 transition-transform ${overHero ? 'bg-cream' : 'bg-ink'} ${open ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 transition-opacity ${overHero ? 'bg-cream' : 'bg-ink'} ${open ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-px w-6 transition-transform ${overHero ? 'bg-cream' : 'bg-ink'} ${open ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </div>

      {open && (
        <nav
          className={`flex flex-col gap-1 border-t px-6 pb-4 md:hidden ${overHero ? 'border-cream/10' : 'border-ink/10'}`}
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `py-2 text-sm font-medium hover:text-clay ${
                  isActive ? 'text-clay' : overHero ? 'text-cream/70' : 'text-ink/70'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
