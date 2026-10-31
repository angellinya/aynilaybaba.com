import aynilPortrait from '../assets/images/aynilhero.png'

export default function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-cream">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-clay/20 blur-[110px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-sage/15 blur-[120px]" />
      </div>

      <div className="absolute inset-y-0 right-0 z-0 hidden w-[42%] lg:block">
        <img
          src={aynilPortrait}
          alt="Aynil Aybaba"
          className="h-full w-full object-cover saturate-[1.05] contrast-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-plum/15 via-transparent to-clay/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
        <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-cream via-cream/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-24">
        <div className="animate-fade-up mb-12 max-w-2xl lg:max-w-xl">
          <p className="mb-4 bg-gradient-to-r from-clay via-amber to-plum bg-clip-text font-serif text-lg text-transparent sm:text-xl">
            Psychologist · Writer · Speaker
          </p>

          <h1 className="font-serif text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
            Aynil Aybaba
          </h1>

          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink/70">
            Based in Amsterdam, I bring together psychology, neuroscience, and storytelling to
            help people understand themselves, navigate change, and create more intentional
            lives.
          </p>

          <div className="relative mt-12 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[2rem] border border-white/40 shadow-2xl shadow-ink/10 lg:hidden">
            <img
              src={aynilPortrait}
              alt="Aynil Aybaba"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/10 via-transparent to-cream/10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 opacity-50 sm:flex">
        <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-ink/50">Scroll</span>
        <span className="h-8 w-px animate-pulse bg-ink/30" />
      </div>
    </section>
  )
}
