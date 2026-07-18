import { Card, SectionHeading } from '../components/ui'

const services = [
  {
    title: 'Psychology Sessions',
    description:
      'One-on-one therapy grounded in ACT and CBT, tailored to help you understand patterns and move through them with intention.',
    details:
      "Sessions are available in person or online, typically weekly or bi-weekly. We start with an initial consultation to understand what you're looking for, then build a plan around your specific goals.",
  },
  {
    title: 'Wellbeing Sessions',
    description:
      'Science-backed guidance on stress, sleep, and emotional regulation — practical tools drawn from neuroscience research.',
    details:
      'Less clinical, more practical: these sessions focus on building sustainable daily habits around stress, sleep, and emotional regulation, using tools grounded in current research.',
  },
  {
    title: 'Expert Talks & Workshops',
    description:
      'Engaging, research-driven talks on psychology and the brain, designed for teams, schools, and communities.',
    details:
      'Available as one-off talks or multi-session workshops, customized to your audience — from corporate wellbeing days to school programs.',
  },
]

export default function Services() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading
        className="mb-16 max-w-xl"
        eyebrow="What I Offer"
        title="Support built on evidence, delivered with care."
      />

      <div className="space-y-6">
        {services.map((service, i) => (
          <Card
            key={service.title}
            lift={false}
            className="grid gap-6 md:grid-cols-[auto_1fr] md:items-start md:gap-10 md:p-10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-plum/10 font-serif text-sm text-plum">
              {String(i + 1).padStart(2, '0')}
            </span>
            <div>
              <h2 className="mb-3 font-serif text-2xl font-semibold text-ink">{service.title}</h2>
              <p className="mb-3 leading-relaxed text-ink/70">{service.description}</p>
              <p className="text-sm leading-relaxed text-ink/55">{service.details}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
