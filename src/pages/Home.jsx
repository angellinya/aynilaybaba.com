import Hero from '../components/Hero'
import { Button, Card, Eyebrow } from '../components/ui'

const teasers = [
  {
    to: '/about',
    eyebrow: 'About',
    title: 'Two ways of asking the same question.',
    description:
      "I'm a psychologist and a writer — exploring the mind through both therapy and fiction.",
  },
  {
    to: '/services',
    eyebrow: 'Services',
    title: 'Support built on evidence.',
    description:
      'Psychology sessions, wellbeing guidance, and talks grounded in neuroscience and ACT/CBT.',
  },
  {
    to: '/books',
    eyebrow: 'Books',
    title: 'The Rise of Chaos.',
    description:
      'A debut fantasy novel about a kingdom on the brink, ancient magic, and the choices that define us.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((teaser) => (
            <Card key={teaser.to} to={teaser.to}>
              <Eyebrow className="mb-3 text-xs">{teaser.eyebrow}</Eyebrow>
              <h3 className="mb-3 font-serif text-xl font-semibold text-ink">{teaser.title}</h3>
              <p className="text-sm leading-relaxed text-ink/65">{teaser.description}</p>
              <span className="mt-6 inline-block text-sm font-medium text-plum transition-transform group-hover:translate-x-1">
                Learn more →
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/40 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Have a question, or ready to start?
          </h2>
          <Button to="/contact" variant="primary" className="mt-6">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
