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

      <section className="relative flex min-h-screen items-center overflow-hidden border-t border-ink/10 bg-white/40">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="animate-fade-up relative mx-auto max-w-3xl px-6 text-center">
          <span className="font-serif text-7xl text-clay/30">"</span>
          <p className="-mt-6 font-serif text-3xl leading-snug text-ink sm:text-4xl">
            Here's to becoming. Not into someone new — but into more of who you already are.
          </p>
          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-clay">
            Aynil Aybaba
          </p>
        </div>
      </section>

      <section className="flex min-h-screen items-center">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-24 md:grid-cols-3">
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

      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink py-24 text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,138,107,0.12),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(91,58,74,0.35),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-clay/30 to-plum/40 blur-3xl" />
            <div className="relative flex h-full w-full flex-col justify-between rounded-[2rem] border border-cream/15 bg-gradient-to-br from-plum/40 to-ink p-10 shadow-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Book One</p>
              <h3 className="font-serif text-4xl italic leading-tight text-cream">
                The Rise of Chaos
              </h3>
              <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Aynil Aybaba</p>
            </div>
          </div>

          <div>
            <span className="mb-4 inline-block rounded-full border border-clay/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-clay">
              Coming Soon
            </span>
            <h2 className="font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              The Rise of Chaos
            </h2>
            <p className="mt-3 font-serif text-xl text-cream/70">The girl who dared to be free.</p>
            <p className="mt-8 text-lg leading-relaxed text-cream/70">
              In a world torn by ancient magic and fractured allegiances, one heir must choose
              between loyalty and truth. When a strange sickness threatens her people, Anica must
              cross into enemy lands in search of answers, power, and vengeance. But fate twists,
              alliances shift, and everything she thought she knew begins to unravel.
            </p>
            <Button to="/books" variant="accent" className="mt-10">
              Learn More
            </Button>
          </div>
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
