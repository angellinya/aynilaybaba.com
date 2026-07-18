import { Button, Eyebrow } from '../components/ui'

const tropes = [
  'Enemies-to-lovers',
  'Prophecy, Gods and magic',
  'Secret identity',
  'Found family',
  'Slow-burn romance',
  'Rebellion against fate',
]

export default function Books() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-radial-fade py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            The Rise of Chaos
          </h1>
          <p className="mt-2 text-xs uppercase tracking-[0.3em] text-ink/40">Book One</p>
          <p className="mt-10 font-serif text-2xl leading-snug text-ink sm:text-3xl">
            To the outside world, she is marked by one of the twelve sacred gods. A chosen one,
            destined to lead her people. But behind temple walls, a different truth lives in
            shadow.
          </p>
        </div>
      </section>

      <section className="flex min-h-screen items-center bg-ink py-24 text-cream">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-start gap-12 md:grid-cols-2">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-xs">
              <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-clay/30 to-plum/40 blur-2xl" />
              <div className="relative flex h-full w-full flex-col justify-between rounded-2xl border border-cream/15 bg-gradient-to-br from-plum/40 to-ink p-8 shadow-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Book One</p>
                <h2 className="font-serif text-3xl italic leading-tight text-cream">
                  The Rise of Chaos
                </h2>
                <p className="text-xs uppercase tracking-[0.3em] text-cream/50">Aynil Aybaba</p>
              </div>
            </div>

            <div>
              <p className="leading-relaxed text-cream/70">
                Anica is the heir to Nahlei Tribe, locked away in a temple and praised as a divine
                symbol.
              </p>
              <p className="mt-4 leading-relaxed text-cream/70">
                Trapped between reverence and fear, she finds freedom in rebellion. Alongside
                three girls who have become her chosen sisters, she forms the Sisters of Raven —
                a secret group that slips beyond the walls to reclaim what was once stolen from
                their people.
              </p>
              <p className="mt-4 leading-relaxed text-cream/70">
                But when a strange sickness begins to spread, their next mission becomes more than
                retrieval. It becomes a quest for truth, and the uncovering of a power never meant
                to be touched.
              </p>
              <p className="mt-4 font-serif italic leading-relaxed text-cream/70">
                A thrilling YA fantasy where magic burns, bonds are tested, and destiny is
                rewritten.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {tropes.map((trope) => (
                  <span
                    key={trope}
                    className="rounded-full border border-cream/15 px-4 py-1 text-xs font-medium text-cream/70"
                  >
                    {trope}
                  </span>
                ))}
              </div>

              <Button
                href="mailto:hello@aynilaybaba.com?subject=The%20Rise%20of%20Chaos"
                variant="accent"
                className="mt-10"
              >
                Get the Book
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex min-h-[50vh] items-center border-t border-ink/10 bg-white/40 py-20">
        <div className="mx-auto max-w-xl px-6 text-center">
          <Eyebrow className="mb-3">Newsletter!</Eyebrow>
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
