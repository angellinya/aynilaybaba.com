import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Seo from '../components/Seo'
import { Button, Card, Eyebrow } from '../components/ui'
import quoteBackground from '../assets/images/aynil3.jpg'
import bookCover from '../assets/images/Anica1.png'

const credentials = [
  'Oxford',
  "King's College London",
  'University of Surrey',
  '100+ Clients Guided',
  'National Speaking Champion',
]

const services = [
  {
    title: 'Wellbeing Sessions',
    description:
      'One-on-one, psychology-informed sessions to help you understand yourself, move through life transitions with clarity, and build a life that actually feels like yours.',
    badge: 'bg-clay text-cream shadow-md shadow-clay/30',
    link: 'text-clay',
    accent: 'border-t-clay',
  },
  {
    title: 'Talks & Workshops',
    description:
      'Research-backed talks and workshops that make psychology genuinely useful, for your team, your school, or your community.',
    badge: 'bg-sage text-cream shadow-md shadow-sage/30',
    link: 'text-sage',
    accent: 'border-t-sage',
  },
]

const explore = [
  {
    title: 'Speaking & Collaborations',
    description: 'Talks, workshops, and partnerships on psychology, neuroscience, and wellbeing.',
    to: '/speaking',
  },
  {
    title: 'Research & Interests',
    description: 'Exploratory work in human–AI interaction, VR, and emotionally adaptive technology.',
    to: '/about',
  },
]

export default function Home() {
  return (
    <>
      <Seo
        title="Aynil Aybaba | Psychologist, Writer & Speaker"
        description="Amsterdam-based psychologist, writer, and speaker working at the intersection of psychology, neuroscience, and storytelling."
      />
      <Hero />

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <img
          src={quoteBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="animate-fade-up relative mx-auto max-w-3xl px-6 text-center">
          <p className="-mt-6 font-serif text-4xl leading-snug text-cream sm:text-5xl md:text-6xl">
            “What makes a life feel like your own?”
          </p>
          <p className="mt-8 text-base font-medium uppercase tracking-[0.2em] text-clay sm:text-lg">
            Aynil Aybaba
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/40 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center">
            {credentials.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-serif text-sm uppercase tracking-[0.15em] text-ink/50">
                  {item}
                </span>
                {i < credentials.length - 1 && <span className="text-clay/40">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-xl">
            <Eyebrow className="mb-3">Psychology & Wellbeing</Eyebrow>
            <h2 className="font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
              Thoughtful guidance for a more intentional life.
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <Card key={service.title} to="/psychology" className={`border-t-4 p-10 ${service.accent}`}>
                <span
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-full font-serif text-xl ${service.badge}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mb-4 font-serif text-2xl font-semibold text-ink">{service.title}</h3>
                <p className="text-base leading-relaxed text-ink/65">{service.description}</p>
                <span
                  className={`mt-8 inline-block text-base font-semibold transition-transform group-hover:translate-x-1 ${service.link}`}
                >
                  Learn more →
                </span>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/psychology" variant="primary">
              Explore Psychology & Wellbeing
            </Button>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink py-28 text-cream">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(201,138,107,0.12),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(91,58,74,0.35),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-md">
            <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-clay/40 via-plum/30 to-sage/30 blur-3xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-cream/15 shadow-2xl">
              <img
                src={bookCover}
                alt="The Rise of Chaos cover art"
                className="h-full w-full scale-105 object-cover saturate-[1.15] transition-transform duration-700 ease-out group-hover:scale-110"
              />
            </div>
          </div>

          <div>
            <span className="mb-4 inline-block rounded-full border border-clay/40 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-clay">
              In Progress · Targeting 2027
            </span>
            <h2 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl">
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
              Discover the World
            </Button>
          </div>
        </div>
      </section>

      <section className="flex min-h-screen items-center py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-xl">
            <Eyebrow className="mb-3">More to Explore</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
              The other sides of the work.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 sm:max-w-xl">
            {explore.map((item) => (
              <Link key={item.title} to={item.to} className="group block">
                <h3 className="font-serif text-xl font-semibold text-ink transition-colors group-hover:text-clay">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-clay transition-transform group-hover:translate-x-1">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/40 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Ready to start?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-lg text-ink/60">
            Whether you're looking for support or your next read, let's talk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/contact" variant="primary">
              Get in Touch
            </Button>
            <Button to="/books" variant="outline">
              Read the Novel
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
