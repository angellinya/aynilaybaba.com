import { useEffect, useState } from 'react'
import Seo from '../components/Seo'
import { Button, Eyebrow } from '../components/ui'
import bookCover from '../assets/images/Anica1.png'
import anicaVideo from '../assets/videos/anicamainvideo.mp4'

const TITLE = 'The Rise of Chaos'

const tropes = [
  'Enemies-to-lovers',
  'Prophecy, Gods and magic',
  'Secret identity',
  'Found family',
  'Slow-burn romance',
  'Rebellion against fate',
]

const tropeAccents = ['bg-clay', 'bg-plum', 'bg-sage', 'bg-amber', 'bg-clay', 'bg-plum']

function Divider({ className = '' }) {
  return (
    <div className={`flex items-center gap-3 text-clay/50 ${className}`}>
      <span className="h-px w-12 bg-current" />
      <span className="h-2 w-2 rotate-45 border border-current" />
      <span className="h-px w-12 bg-current" />
    </div>
  )
}

export default function Books() {
  const [typed, setTyped] = useState('')
  const [started, setStarted] = useState(false)
  const [titleDone, setTitleDone] = useState(false)

  useEffect(() => {
    const startDelay = setTimeout(() => {
      setStarted(true)
      let i = 0
      const interval = setInterval(() => {
        i += 1
        setTyped(TITLE.slice(0, i))
        if (i >= TITLE.length) {
          clearInterval(interval)
          setTitleDone(true)
        }
      }, 90)
      return () => clearInterval(interval)
    }, 1800)
    return () => clearTimeout(startDelay)
  }, [])

  return (
    <>
      <Seo
        title="Writing: The Rise of Chaos | Aynil Aybaba"
        description="The Rise of Chaos, a debut fantasy novel by Aynil Aybaba, in progress and targeting publication in 2027."
      />
      <section className="relative flex min-h-screen items-center overflow-hidden bg-ink py-24 text-cream">
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={anicaVideo} type="video/mp4" />
        </video>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/45 to-ink/75" />
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-plum/15 blur-[100px]" />
          <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-amber/10 blur-[100px]" />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-sage/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-serif text-5xl font-semibold leading-tight text-cream sm:text-6xl">
            {typed}
            {started && (
              <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulse bg-cream/70 align-middle" />
            )}
          </h1>

          <div className={`transition-opacity duration-1000 ${titleDone ? 'opacity-100' : 'opacity-0'}`}>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/40">Book One</p>

            <Divider className="my-10 justify-center" />

            <p className="font-serif text-xl font-semibold leading-snug text-cream sm:text-2xl">
              To the outside world, she is marked by one of the twelve sacred gods. A chosen one,
              destined to lead her people. But behind temple walls, a different truth lives in
              shadow.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-cream py-24">
        <div className="relative mx-auto max-w-2xl px-6 text-center">
          <p className="text-lg leading-relaxed text-ink/80">
            Anica is the heir to Nahlei Tribe, locked away in a temple and praised as a divine
            symbol.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            Trapped between reverence and fear, she finds freedom in rebellion. Alongside
            three girls who have become her chosen sisters, she forms the Sisters of Raven,
            a secret group that slips beyond the walls to reclaim what was once stolen from
            their people.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-ink/80">
            But when a strange sickness begins to spread, their next mission becomes more than
            retrieval. It becomes a quest for truth, and the uncovering of a power never meant
            to be touched.
          </p>

          <Divider className="my-8 justify-center" />

          <p className="font-serif text-xl leading-relaxed text-ink/80">
            A thrilling YA fantasy where magic burns, bonds are tested, and destiny is
            rewritten.
          </p>

          <Button
            href="mailto:hello@aynilaybaba.com?subject=The%20Rise%20of%20Chaos"
            variant="accent"
            className="mt-10"
          >
            Follow the Journey
          </Button>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum/15 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <Divider className="mx-auto mb-8 justify-center" />
          <p className="font-serif text-2xl leading-snug text-ink/80 sm:text-3xl">
            "When the raven from the green lands
            <br />
            escapes the claws of the forest,
            <br />
            death will lead her to him,
            <br />
            and he shall wake with joy,
            <br />
            ready to devour the worlds beyond."
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-ink/40">
            The Prophecy
          </p>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden py-24">
        <img
          src={bookCover}
          alt="The Rise of Chaos cover art"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-cream/90" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-sage/15 blur-[130px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-plum/20 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Eyebrow className="mb-3">Why You'll Love It</Eyebrow>
          <h2 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
            Tropes You'll Love
          </h2>

          <div className="mt-16 rounded-[2rem] border border-ink/10 bg-white/50 p-10 backdrop-blur-sm sm:p-16">
            <div className="grid gap-x-16 gap-y-8 text-left sm:grid-cols-2">
              {tropes.map((trope, i) => (
                <div key={trope} className="flex items-center gap-4">
                  <span className={`h-2.5 w-2.5 flex-none rotate-45 ${tropeAccents[i % tropeAccents.length]}`} />
                  <span className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                    {trope}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[60vh] items-center overflow-hidden border-t border-ink/10 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-xl px-6 text-center">
          <Eyebrow className="mb-3">Newsletter</Eyebrow>
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Want behind-the-scenes content and release updates?
          </h2>
          <p className="mt-4 text-ink/65">
            Join my newsletter for sneak peeks, writing updates, and early access.
          </p>
          <Button
            href="mailto:hello@aynilaybaba.com?subject=Newsletter%20Signup"
            variant="primary"
            className="mt-8"
          >
            Sign Up
          </Button>
        </div>
      </section>
    </>
  )
}
