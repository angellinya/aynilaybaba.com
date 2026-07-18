import SectionHeading from '../components/ui/SectionHeading'

export default function About() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        className="mb-16 max-w-xl"
        eyebrow="About"
        title="Two ways of asking the same question."
      />

      <div className="grid gap-12 md:grid-cols-2 md:gap-20">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-clay/30 via-sage/20 to-plum/20 blur-2xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-[2rem] border border-ink/10 bg-white/60 shadow-xl shadow-ink/5">
            <span className="font-serif text-lg italic text-ink/40">Portrait</span>
          </div>
        </div>

        <div className="space-y-5 text-ink/70">
          <p className="leading-relaxed">
            I'm Aynil Aybaba — a psychologist working at the intersection of neuroscience and
            everyday life, and a writer exploring the same terrain through fiction.
          </p>
          <p className="leading-relaxed">
            In session, I draw on evidence-based approaches like ACT and CBT to help people
            understand their patterns and build a more grounded relationship with themselves. In
            fiction, I follow characters through the same questions — who am I when everything
            changes, and what do I choose to become?
          </p>
          <p className="leading-relaxed">
            Both practices come from the same conviction: that self-understanding, however we arrive
            at it, is worth pursuing.
          </p>
          <p className="leading-relaxed">
            My work draws on years of clinical training alongside an ongoing curiosity about how
            neuroscience research translates into everyday, livable practice — for the people I work
            with, and for the characters I write.
          </p>
        </div>
      </div>
    </section>
  )
}
