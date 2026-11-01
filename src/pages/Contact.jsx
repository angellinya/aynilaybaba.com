import { useState } from 'react'
import Seo from '../components/Seo'
import { Button, Eyebrow } from '../components/ui'

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/angellinya.writes/' },
  { label: 'YouTube', href: 'https://www.youtube.com/@aynilaybaba' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@aynilaybaba' },
  { label: 'Email', href: 'mailto:ps.aynilaybaba@gmail.com' },
]

const inquiryTypes = [
  'Wellbeing session',
  'Speaking or workshop',
  'Writing or press',
  'Research or collaboration',
  'Partnership',
  'Something else',
]

const initialForm = { name: '', email: '', type: inquiryTypes[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please share your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.'
    if (!form.message.trim()) next.message = "Let me know what you'd like to talk about."
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = `${form.type}: enquiry from ${form.name}`
    const body = `${form.message}\n\n${form.name} (${form.email})`
    window.location.href = `mailto:ps.aynilaybaba@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white/60 px-4 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:ring-2 focus:ring-clay/40 ${
      errors[field] ? 'border-plum/60' : 'border-ink/15'
    }`

  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <Seo
        title="Contact | Aynil Aybaba"
        description="Get in touch with Aynil Aybaba about wellbeing sessions, speaking, writing, research, or a partnership."
      />
      <div className="mb-16 max-w-xl">
        <Eyebrow className="mb-3">Get in Touch</Eyebrow>
        <h1 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
          Let's start a conversation.
        </h1>
        <p className="mt-4 text-lg text-ink/60">
          Sessions, speaking, writing, research, or a partnership idea, I'd love to hear from
          you.
        </p>
      </div>

      <div className="grid gap-16 md:grid-cols-[1fr_20rem]">
        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink/70">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update('name')}
                className={fieldClass('name')}
                placeholder="Your name"
              />
              {errors.name && <p className="mt-1.5 text-xs text-plum">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink/70">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update('email')}
                className={fieldClass('email')}
                placeholder="you@email.com"
              />
              {errors.email && <p className="mt-1.5 text-xs text-plum">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="type" className="mb-2 block text-sm font-medium text-ink/70">
              What's this about?
            </label>
            <select
              id="type"
              value={form.type}
              onChange={update('type')}
              className={fieldClass('type')}
            >
              {inquiryTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink/70">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={update('message')}
              className={fieldClass('message')}
              placeholder="Tell me a little about what you're looking for."
            />
            {errors.message && <p className="mt-1.5 text-xs text-plum">{errors.message}</p>}
          </div>

          <Button type="submit" variant="primary">
            Send Message
          </Button>
          <p className="text-xs text-ink/40">
            This opens your email client with the message pre-filled; nothing is sent without
            your confirmation.
          </p>
        </form>

        <div className="space-y-8">
          <div>
            <Eyebrow className="mb-3 text-xs">Prefer email?</Eyebrow>
            <a
              href="mailto:ps.aynilaybaba@gmail.com"
              className="font-serif text-lg text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-ink/60"
            >
              ps.aynilaybaba@gmail.com
            </a>
          </div>

          <div className="border-t border-ink/10 pt-8">
            <Eyebrow className="mb-3 text-xs">Find me</Eyebrow>
            <div className="flex flex-col gap-2">
              {socials
                .filter((s) => s.label !== 'Email')
                .map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-ink/60 transition-colors hover:text-clay"
                  >
                    {social.label}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
