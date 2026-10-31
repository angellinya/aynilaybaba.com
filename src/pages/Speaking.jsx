import Seo from '../components/Seo'
import { Button, Eyebrow } from '../components/ui'

const topics = [
  'Psychology & neuroscience, made accessible',
  'Mental wellbeing & emotional regulation',
  'Psychological flexibility & resilience',
  'Habits, motivation & behaviour change',
  'The human experience, through story',
]

const formats = [
  {
    title: 'Keynotes & Talks',
    text: 'A focused talk for a conference, school, or company event, translating psychological research into something your audience can actually use.',
  },
  {
    title: 'Workshops',
    text: 'Interactive, multi-session formats for teams and communities who want to go deeper than a single talk allows.',
  },
  {
    title: 'Panels & Guest Appearances',
    text: "Conversations on psychology, wellbeing, creativity, and the research I'm exploring, for panels, podcasts, and events.",
  },
  {
    title: 'Brand & Educational Collaborations',
    text: 'Thoughtful partnerships with organisations working in wellbeing, education, publishing, or lifestyle.',
  },
]

const experience = [
  'ESU Public Speaking National Champion',
  'ESU Public Speaking World Finalist',
  'İTÜ ACT Days Conference: presented to 200+ professionals on ACT and neuroscience',
  'ACT Türkiye: led a workshop on ACT in chronic physical illness',
]

export default function Speaking() {
  return (
    <>
      <Seo
        title="Speaking & Collaborations | Aynil Aybaba"
        description="Talks, workshops, and collaborations on psychology, neuroscience, and wellbeing, for conferences, companies, schools, and communities."
      />
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-plum/10 blur-[130px]" />
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-clay/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-clay" />
            <Eyebrow>Speaking & Collaborations</Eyebrow>
          </div>
          <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            Research, made worth listening to.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
            I speak and run workshops on the psychology and neuroscience of everyday life, for
            conferences, companies, schools, and communities who want ideas that are actually
            useful.
          </p>
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-6">Topics</Eyebrow>
          <div className="flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-ink/10 bg-white/50 px-5 py-2 text-sm text-ink/70"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-10">Formats</Eyebrow>
          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {formats.map((format) => (
              <div key={format.title}>
                <h2 className="mb-2 font-serif text-xl font-semibold text-ink">{format.title}</h2>
                <p className="text-sm leading-relaxed text-ink/60">{format.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/40 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <Eyebrow className="mb-6">Selected Experience</Eyebrow>
          <ul className="grid gap-3 sm:grid-cols-2">
            {experience.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-clay" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
            Have an event in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/60">
            Tell me a little about your audience and what you're looking for, and I'll get back to
            you.
          </p>
          <Button href="mailto:hello@aynilaybaba.com?subject=Speaking%20Enquiry" variant="primary" className="mt-6">
            Enquire About Speaking
          </Button>
        </div>
      </section>
    </>
  )
}
