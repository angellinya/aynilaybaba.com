import { Button, Eyebrow } from '../components/ui'

export default function Books() {
  return (
    <section className="bg-ink py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow className="mb-3">Books</Eyebrow>
        <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          The Rise of Chaos
        </h1>

        <div className="mt-16 grid items-start gap-12 md:grid-cols-2">
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
            <Eyebrow className="mb-2">Debut Fantasy Novel</Eyebrow>
            <p className="leading-relaxed text-cream/70">
              A strange sickness threatens a kingdom on the brink. As an heir is drawn into ancient
              magic and fractured allegiances, one choice will decide who they become — and what
              they're willing to sacrifice to save what's left.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              A story about identity, transformation, and the chaos we carry before we find our way
              through it. Woven with themes drawn from psychology as much as fantasy — allegiance,
              self-doubt, and the slow work of becoming who you're meant to be.
            </p>
            <p className="mt-4 leading-relaxed text-cream/70">
              Book One is available now, with the next installment in the series currently in
              progress.
            </p>
            <Button
              href="mailto:hello@aynilaybaba.com?subject=The%20Rise%20of%20Chaos"
              variant="accent"
              className="mt-8"
            >
              Get the Book
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
