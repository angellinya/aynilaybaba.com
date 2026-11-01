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
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-ink/85" />
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-plum/15 blur-[100px]" />
          <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-amber/10 blur-[100px]" />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-sage/5 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-cream drop-shadow-sm sm:text-5xl md:text-6xl">
            {typed}
            {started && (
              <span className="ml-1 inline-block h-[0.85em] w-[2px] animate-pulse bg-cream/70 align-middle" />
            )}
          </h1>

          <div className={`transition-opacity duration-1000 ${titleDone ? 'opacity-100' : 'opacity-0'}`}>
            <p className="mt-3 text-xs uppercase tracking-[0.3em] text-cream/50">Book One</p>

            <Divider className="my-10 justify-center" />

            <p className="font-serif text-lg font-semibold leading-snug text-cream/95 sm:text-xl md:text-2xl">
              To the outside world, she is marked by one of the twelve sacred gods. A chosen one,
              destined to lead her people. But behind temple walls, a different truth lives in
              shadow.
            </p>
          </div>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-cream py-28">
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Eyebrow>The Story</Eyebrow>

          <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-3xl">
            Anica was raised to be worshipped. But the truth of her divinity is a secret only a
            handful of people know.
          </p>

          <div className="mx-auto mt-8 max-w-xl space-y-5">
            <p className="text-lg leading-relaxed text-ink/70">
              Heir to the Nahlei Tribe and confined within the walls of a sacred temple, she's
              spent her life under the watchful eyes of those who claim to know what's best for
              her. Unfortunately for them, Anica has never been particularly good at following
              orders.
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              Together with three girls she calls her sisters, she forms the Sisters of Raven, a
              secret circle determined to venture beyond the temple walls and reclaim what was
              stolen from their people.
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              But when a mysterious sickness begins to spread, their adventures take an
              unexpected turn, forcing Anica to question everything she thought she knew about
              herself and the world she calls home.
            </p>
          </div>

          <Divider className="mx-auto my-10 justify-center" />

          <p className="mx-auto max-w-xl font-serif text-xl leading-relaxed text-ink/80 sm:text-2xl">
            The Rise of Chaos is a YA fantasy about forbidden histories, fierce sisterhood, and a
            girl who refuses to become what the world has decided she should be.
          </p>

          <Button
            href="mailto:ps.aynilaybaba@gmail.com?subject=The%20Rise%20of%20Chaos"
            variant="accent"
            className="mt-10"
          >
            Follow the Journey
          </Button>
        </div>
      </section>

      <section className="relative flex min-h-screen items-center overflow-hidden bg-cream py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-80 w-80 rounded-full bg-sage/10 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-plum/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="group relative mx-auto aspect-[3/4] w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-clay/20 via-amber/10 to-sage/20 blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-ink/10 shadow-xl">
              <img
                src={bookCover}
                alt="The Rise of Chaos cover art"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
          </div>

          <div>
            <Eyebrow className="mb-3">Why You'll Love It</Eyebrow>
            <h2 className="font-serif text-4xl font-semibold text-ink sm:text-5xl">
              Tropes You'll Love
            </h2>

            <ul className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
              {tropes.map((trope, i) => (
                <li key={trope} className="flex items-center gap-4 py-4">
                  <span className={`h-2 w-2 flex-none rotate-45 ${tropeAccents[i % tropeAccents.length]}`} />
                  <span className="font-serif text-xl leading-snug text-ink sm:text-2xl">
                    {trope}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink/[0.03] px-6 py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-plum/15 blur-[140px]" />
        </div>
        <div className="relative mx-auto max-w-2xl text-center">
          <Divider className="mx-auto mb-10 justify-center" />
          <p className="font-serif text-2xl leading-snug text-ink/85 sm:text-3xl md:text-4xl">
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
          <p className="mt-6 text-xs uppercase tracking-[0.35em] text-ink/40">
            The Prophecy
          </p>
        </div>
      </section>

      <section className="relative flex min-h-[60vh] items-center overflow-hidden border-t border-ink/10 py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-amber/10 blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-xl px-6 text-center">
          <Eyebrow className="mb-3">Newsletter</Eyebrow>
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Be there as the story unfolds.
          </h2>
          <p className="mt-4 text-ink/65">
            Join the waitlist for updates on the book's progress, behind-the-scenes lore from
            the world of Anica, and a front-row seat to the writing process.
          </p>
          <Button
            href="mailto:ps.aynilaybaba@gmail.com?subject=Newsletter%20Signup"
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
