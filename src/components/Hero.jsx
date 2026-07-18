import { Button, Eyebrow } from './ui'
import aynilPortrait from '../assets/images/aynil.jpg'

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-radial-fade">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div>
          <Eyebrow className="mb-4">Psychologist · Writer · Speaker</Eyebrow>
          <h1 className="font-serif text-4xl font-semibold leading-[1.1] text-ink sm:text-5xl">
            Understanding the mind, one story at a time.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/70">
            I help people navigate their inner world through evidence-based psychological tools, and explore it
            through fiction — because healing and imagination speak the same language.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/services" variant="primary">
              Book a Session
            </Button>
            <Button to="/books" variant="outline">
              Explore the Novel
            </Button>
          </div>
        </div>

        <div className="relative ml-auto aspect-[4/5] w-full max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-clay/30 via-sage/20 to-plum/20 blur-2xl" />
          <img
            src={aynilPortrait}
            alt="Aynil Aybaba"
            className="relative h-full w-full rounded-[2rem] border border-ink/10 object-cover shadow-xl shadow-ink/5"
          />
        </div>
      </div>
    </section>
  )
}
