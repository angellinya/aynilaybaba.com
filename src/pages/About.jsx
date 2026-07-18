import SectionHeading from '../components/ui/SectionHeading'
import Eyebrow from '../components/ui/Eyebrow'
import aynilPortrait from '../assets/images/aynil2.JPG'

const credentials = [
  'Creative Writing, Oxford',
  'Author, The Rise of Chaos',
  'BSc Psychology, University of Surrey',
  'MSc Applied Neuroscience, King’s College London',
]

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
          <img
            src={aynilPortrait}
            alt="Aynil Aybaba"
            className="relative h-full w-full rounded-[2rem] border border-ink/10 object-cover shadow-xl shadow-ink/5"
          />
        </div>

        <div className="space-y-8 text-ink/70">
          <p className="font-serif text-2xl leading-snug text-ink">
            I help people explore their minds, emotions, and stories—both theirs and my own. When
            I’m not guiding sessions or writing, you’ll find me riding horses or dancing through
            the nature.
          </p>

          <div className="border-t border-ink/10 pt-6">
            <Eyebrow className="mb-3 text-xs">Credentials</Eyebrow>
            <ul className="space-y-2 text-sm text-ink/70">
              {credentials.map((credential) => (
                <li key={credential}>{credential}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
