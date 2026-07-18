import { Button, Eyebrow } from '../components/ui'

const socials = [
  { label: 'Instagram', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'Email', href: 'mailto:hello@aynilaybaba.com' },
]

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-ink/10 bg-white/50 px-8 py-16 text-center sm:px-16">
        <Eyebrow className="mb-3">Get in Touch</Eyebrow>
        <h1 className="mx-auto max-w-lg font-serif text-4xl font-semibold text-ink sm:text-5xl">
          Let's start a conversation.
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink/65">
          Whether it's a session, a talk, or a question about the book — reach out and I'll get back
          to you.
        </p>
        <Button href="mailto:hello@aynilaybaba.com" variant="primary" className="mt-8">
          hello@aynilaybaba.com
        </Button>

        <div className="mt-10 flex justify-center gap-8 border-t border-ink/10 pt-8">
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
      </div>
    </section>
  )
}
