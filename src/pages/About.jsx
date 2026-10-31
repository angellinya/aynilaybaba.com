import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { Eyebrow } from '../components/ui'
import aynilPortrait from '../assets/images/aynilmain.jpg'

const credentials = [
  'BSc Psychology, University of Surrey',
  "MSc Applied Neuroscience, King's College London",
  'Creative Writing, Oxford',
]

const experience = [
  {
    category: 'Psychology & Wellbeing',
    items: [
      'Guided 100+ clients in emotional regulation, stress management, and personal growth using evidence-based techniques',
      'Designed individualized wellbeing programs integrating mind, body, and energy for measurable improvements in client resilience',
      '1000+ hours of supervised training in CBT, ACT, and mindfulness-based approaches',
    ],
  },
  {
    category: 'Research',
    items: [
      'Exploratory research at the Brain–Computer Interface Lab, Vrije Universiteit Amsterdam',
      'Interests include human–AI interaction, immersive VR, and emotionally adaptive technology',
    ],
  },
  {
    category: 'Writing',
    items: [
      'Writing a debut fantasy novel, The Rise of Chaos, targeting publication in 2027',
      'Contributor to wellbeing-focused blogs and social media content with 5,000+ engaged followers',
    ],
  },
  {
    category: 'Speaking',
    items: [
      'ESU Public Speaking National Champion',
      'ESU Public Speaking World Finalist',
      'İTÜ ACT Days Conference: presented to 200+ professionals on ACT and neuroscience',
      'ACT Türkiye: led a workshop on ACT in chronic physical illness',
    ],
  },
  {
    category: 'Ventures',
    items: [
      'HappySpace Wellbeing: co-founder, a wellbeing brand focused on accessible psychological education, community experiences, and evidence-informed programmes',
      'Visions of Mantra: co-founder, a meditation & mindfulness app',
      'Atma: co-founder, a sustainable, community-driven second-hand platform',
    ],
  },
]

export default function About() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-32">
      <Seo
        title="About | Aynil Aybaba"
        description="Psychologist, writer, and researcher based in Amsterdam, trained in psychology and applied neuroscience, exploring human–AI interaction and VR."
      />
      <div className="grid gap-16 md:grid-cols-[22rem_1fr] md:items-center">
        <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl">
          <img src={aynilPortrait} alt="Aynil Aybaba" className="h-full w-full object-cover" />
        </div>

        <div>
          <Eyebrow className="mb-4">About · Amsterdam</Eyebrow>
          <h1 className="font-serif text-4xl font-semibold leading-tight text-ink sm:text-5xl">
            Aynil Aybaba
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">
            I help people explore their minds, emotions, and stories, both theirs and my own.
            When I'm not guiding sessions or writing, you'll find me riding horses or strolling
            through nature.
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-ink/60">
            These days that curiosity also takes me into the lab, exploring how technology,
            virtual reality, and artificial intelligence might support the way we understand and
            care for the mind, and into fiction, where I'm writing my debut novel.
          </p>
          <p className="mt-10 text-sm text-ink/45">{credentials.join(' · ')}</p>
        </div>
      </div>

      <div className="mt-32 max-w-2xl">
        <Eyebrow className="mb-4">Research & Interests</Eyebrow>
        <p className="leading-relaxed text-ink/65">
          My academic background is in psychology and applied neuroscience, and I'm currently
          involved in exploratory research at Vrije Universiteit Amsterdam's Brain–Computer
          Interface Lab. My interests sit at the intersection of human–AI interaction, immersive
          virtual reality, and emotionally adaptive technology, asking how these tools might be
          designed to genuinely support psychological wellbeing, rather than just measure it.
          This work is ongoing and exploratory, not a body of completed or published research.
        </p>
      </div>

      <div className="mt-32 grid gap-x-16 gap-y-10 sm:grid-cols-2">
        {experience.map((group) => (
          <div key={group.category}>
            <h2 className="mb-3 font-serif text-lg text-ink">{group.category}</h2>
            <ul className="space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-ink/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-32 text-ink/70">
        Want to work together?{' '}
        <Link
          to="/contact"
          className="text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-ink/60"
        >
          Get in touch
        </Link>
        .
      </p>
    </section>
  )
}
