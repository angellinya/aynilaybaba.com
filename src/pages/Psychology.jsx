import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { Button, Eyebrow } from '../components/ui'

const credentials = [
  'Oxford',
  "King's College London",
  'University of Surrey',
  '100+ Clients Guided',
  'National Speaking Champion',
]

const services = [
  {
    title: 'Wellbeing Sessions',
    lead: 'One-on-one, psychology-informed sessions to help you understand yourself, navigate life transitions, and build a more intentional life.',
    paragraphs: [
      'Drawing on psychology, neuroscience, and evidence-based approaches such as Acceptance and Commitment Therapy (ACT), Cognitive Behavioural Therapy (CBT), and mindfulness, we explore the patterns, habits, and choices that shape your everyday life.',
      "These are wellbeing sessions grounded in psychological science, not clinical psychotherapy. The exact scope of our work together, and whether it's the right fit, is always discussed and agreed upfront.",
    ],
    listTitle: 'What we can explore',
    listItems: [
      'Self-understanding and personal growth',
      'Life transitions and decision-making',
      'Habits, motivation, and behaviour change',
      'Stress management and everyday wellbeing',
      'Values-based living and psychological flexibility',
    ],
    noteTitle: 'How it works',
    note: "We begin with an initial consultation to understand your goals, explore what you're looking for, and confirm whether this approach is a good fit for you. From there, we develop a tailored direction for our work together, with sessions available online or in person.",
    badge: 'bg-gradient-to-br from-plum via-plum/85 to-sage text-cream shadow-lg shadow-plum/30',
    glowA: 'bg-plum/15',
    glowB: 'bg-sage/20',
    ring: 'group-hover:border-plum/30',
    dots: ['bg-plum text-cream', 'bg-sage text-cream'],
    note_border: 'border-plum/15 bg-gradient-to-br from-plum/5 via-transparent to-sage/10',
  },
  {
    title: 'Talks & Workshops',
    lead: 'Making psychology and neuroscience accessible, engaging, and relevant to everyday life.',
    paragraphs: [
      'I design and deliver research-informed talks and workshops that translate scientific insights into practical knowledge. Combining psychological research with real-world applications, each session is tailored to its audience, whether a team, organization, school, or community.',
    ],
    listTitle: 'Topics may include',
    listItems: [
      'The science of habits and behaviour change',
      'Stress, wellbeing, and emotional regulation',
      'Understanding the mind and human behaviour',
      'Psychological flexibility and resilience',
      'Building healthier, more intentional ways of living and working',
    ],
    closing: true,
    badge: 'bg-gradient-to-br from-clay via-amber/90 to-clay text-cream shadow-lg shadow-amber/30',
    glowA: 'bg-clay/15',
    glowB: 'bg-amber/15',
    ring: 'group-hover:border-clay/30',
    dots: ['bg-clay text-cream', 'bg-amber text-cream'],
  },
]

export default function Psychology() {
  return (
    <>
      <Seo
        title="Psychology & Wellbeing | Aynil Aybaba"
        description="Psychology-informed wellbeing sessions, talks, and workshops grounded in evidence-based approaches like ACT, CBT, and mindfulness."
      />
      <section className="relative overflow-hidden px-6 pb-24 pt-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-plum/10 blur-[130px]" />
          <div className="absolute -right-24 top-20 h-80 w-80 rounded-full bg-clay/15 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sage/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-4">
            <span className="h-px w-10 bg-clay" />
            <Eyebrow>Psychology & Wellbeing</Eyebrow>
          </div>
          <h1 className="max-w-2xl font-serif text-5xl font-semibold leading-[1.05] text-ink sm:text-6xl">
            Thoughtful guidance for a more intentional life.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/60">
            Psychology-informed wellbeing sessions and audience talks, grounded in evidence and
            shaped around what you actually need.
          </p>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-white/40 py-8">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-3 text-center">
            {credentials.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="font-serif text-sm uppercase tracking-[0.15em] text-ink/50">
                  {item}
                </span>
                {i < credentials.length - 1 && <span className="text-clay/40">•</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-6 pb-32 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full bg-sage/10 blur-[150px]" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-amber/10 blur-[150px]" />
        </div>

        <div className="relative mx-auto max-w-6xl space-y-14">
          {services.map((service, i) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-[2.5rem] border border-ink/10 bg-white/60 p-10 shadow-sm backdrop-blur-sm transition-all hover:shadow-2xl hover:shadow-ink/5 sm:p-14"
            >
              <div className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full blur-[100px] ${service.glowA}`} />
              <div className={`pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full blur-[110px] ${service.glowB}`} />

              <div className={`absolute inset-0 rounded-[2.5rem] border-2 border-transparent transition-colors ${service.ring}`} />

              <div className="relative grid gap-8 lg:grid-cols-[5rem_1fr] lg:gap-14">
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl font-serif text-2xl ${service.badge}`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="max-w-3xl">
                  <h2 className="mb-3 font-serif text-3xl font-semibold text-ink sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="font-serif text-xl leading-snug text-ink/80">{service.lead}</p>

                  <div className="mt-6 space-y-4">
                    {service.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="leading-relaxed text-ink/65">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className="mt-10">
                    <Eyebrow className="mb-4 text-xs">{service.listTitle}</Eyebrow>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.listItems.map((item, idx) => (
                        <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink/70">
                          <span
                            className={`mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full text-[10px] ${service.dots[idx % 2]}`}
                          >
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.note && (
                    <div className={`mt-10 rounded-2xl border p-6 ${service.note_border}`}>
                      <h3 className="mb-2 font-serif text-lg font-semibold text-ink">{service.noteTitle}</h3>
                      <p className="text-sm leading-relaxed text-ink/65">{service.note}</p>
                    </div>
                  )}

                  {service.closing && (
                    <p className="mt-10 text-sm leading-relaxed text-ink/55">
                      Available as one-off talks or multi-session workshops. For conferences and
                      larger engagements, see{' '}
                      <Link to="/speaking" className="text-ink underline decoration-ink/20 underline-offset-4 hover:decoration-ink/60">
                        Speaking
                      </Link>
                      .
                    </p>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink/10 bg-white/40 py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
            Not sure which is right for you?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-ink/60">
            Let's talk about what you're looking for and find a good fit.
          </p>
          <Button to="/contact" variant="primary" className="mt-6">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
