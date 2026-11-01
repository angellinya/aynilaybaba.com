import Seo from '../components/Seo'
import { Button, Eyebrow } from '../components/ui'
import aynilPortrait from '../assets/images/aynilmain.jpg'
import aynilSecondary from '../assets/images/idefix2.jpg'

const credentials = [
  'BSc Psychology, University of Surrey',
  "MSc Applied Neuroscience, King's College London",
  'Creative Writing, University of Oxford',
]

const sections = [
  {
    title: 'In the Room',
    paragraphs: [
      "Here's what I actually do: I sit with people while they do the slow, unglamorous work of changing a pattern that's been running their life for years. Not a breakthrough moment, an actual process, which takes longer and is far less photogenic than therapy looks on TV.",
      "I work in ACT, CBT, and mindfulness-based approaches, because different problems need different tools and I'm not precious about which one wins. I've done this with more than a hundred people now, and I still find it the most interesting thing I do, including, honestly, the fantasy novel.",
      'I also build workshops through HappySpace Wellbeing, the company I co-founded, on things like anxiety, self-compassion, and the actual mechanics of changing a habit.',
    ],
  },
  {
    title: "Questions I Can't Stop Asking",
    paragraphs: [
      "I don't have a lab, a research post, or a tidy answer to any of this, just a psychologist's stubborn interest in the questions that keep nagging at me: What is the mind? How does it affect the body, and how does the body affect it right back? Is the soul the thing noticing all of it? What actually makes healing happen? And what's the best way to bring technology and mental health together without losing the human part?",
      "I read about these the way other people read true crime: compulsively, and slightly too late at night. If you want the unfiltered version of my brain, that's what my social media is for.",
    ],
  },
  {
    title: "The World I'm Building",
    paragraphs: [
      "I'm writing a book about a girl who's worshipped for a lie. She must defy the people who raised her to discover who she really is. But when the world has already decided who she should be, what if the truth is more dangerous than the lie?",
      "The Rise of Chaos is a YA fantasy inspired by Central Asian mythology and the spirit of Avatar: The Last Airbender. It's the most purely fun thing I make, and also, somehow, the thing I take most seriously.",
      "Targeting 2027. I'll tell you more when I'm allowed to.",
    ],
  },
  {
    title: 'On Stage',
    paragraphs: [
      'I was a national public speaking champion before I was a psychologist, which tells you something about where my instincts actually started.',
      "Now I use that instinct for work that matters more: making psychology and neuroscience make sense to actual rooms of actual people. 200+ professionals at İTÜ's ACT Days Conference, a workshop for ACT Türkiye on chronic illness, sessions for HappySpace Wellbeing on anxiety and self-compassion. I'm not interested in talks that sound smart. I'm interested in talks people still think about on the drive home.",
    ],
  },
]

export default function About() {
  return (
    <>
      <Seo
        title="About | Aynil Aybaba"
        description="Aynil Aybaba is a psychologist, writer, and speaker based in Amsterdam, working across psychology, neuroscience, and a debut fantasy novel, The Rise of Chaos."
      />

      <section className="px-6 pb-12 pt-32 text-center">
        <h1 className="font-serif text-5xl font-semibold leading-tight text-ink sm:text-6xl md:text-7xl">
          Aynil Aybaba
        </h1>
      </section>

      <div className="sm:px-6">
        <div className="relative h-[65vh] min-h-[420px] w-full overflow-hidden sm:mx-auto sm:h-auto sm:max-w-5xl sm:aspect-[16/9] sm:rounded-[2rem] sm:border sm:border-ink/10 sm:shadow-xl">
          <img
            src={aynilPortrait}
            alt="Aynil Aybaba"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent sm:hidden" />
        </div>
      </div>

      <section className="bg-cream px-6 py-20">
        <div className="mx-auto max-w-xl space-y-5 text-ink/70">
          <p className="leading-relaxed">
            I spend most of my week helping people figure out why they keep doing the thing
            that isn't working. Then I go home and invent people who do the same thing, except
            with magic and significantly higher stakes.
          </p>
          <p className="leading-relaxed">Both jobs run on the same instinct, if I'm honest.</p>
          <p className="leading-relaxed">
            I'm a psychologist, BSc in Psychology, MSc in Applied Neuroscience from King's
            College London, trained in ACT, CBT, and mindfulness, which mostly means I've spent
            years learning that "just think positive" is not, in fact, a treatment plan. I was
            also a world finalist speaker, which explains a lot about how I ended up on stages
            talking about the brain to rooms full of strangers. And somewhere in the gaps, I'm
            writing a YA fantasy novel I think about more than is strictly healthy.
          </p>
          <p className="leading-relaxed">
            Based in Amsterdam. Probably on a horse, or about to be, when I'm not doing any of
            the above.
          </p>
          <p className="pt-4 font-serif text-2xl italic text-ink">— Aynil</p>
        </div>
        <p className="mx-auto mt-10 max-w-xl text-sm text-ink/45">{credentials.join(' · ')}</p>
      </section>

      <div className="sm:mt-20 sm:px-6">
        <div className="relative h-[55vh] min-h-[380px] w-full overflow-hidden sm:mx-auto sm:h-auto sm:max-w-5xl sm:aspect-[16/9] sm:rounded-[2rem] sm:border sm:border-ink/10 sm:shadow-xl">
          <img
            src={aynilSecondary}
            alt="Aynil Aybaba"
            className="h-full w-full origin-left scale-[1.3] object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-ink/10" />
          <div className="absolute inset-0 flex items-start justify-start px-6 pt-6 sm:px-16 sm:pt-16">
            <blockquote className="max-w-xs rounded-2xl bg-cream/95 p-6 font-serif text-xl leading-snug text-ink shadow-2xl backdrop-blur-sm sm:max-w-sm sm:p-8 sm:text-2xl">
              "Turns out most growth looks suspiciously like standing still and refusing to
              bolt."
            </blockquote>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-24">
        {sections.map((section, i) => (
          <div
            key={section.title}
            className={i > 0 ? 'mt-20 border-t border-ink/10 pt-20' : ''}
          >
            <h2 className="mb-5 font-serif text-3xl font-semibold text-ink sm:text-4xl">
              {section.title}
            </h2>
            <div className="space-y-4 leading-relaxed text-ink/65">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="border-t border-ink/10 bg-white/40 px-6 py-20 text-center">
        <div className="mx-auto max-w-xl">
          <Eyebrow className="mb-3">Let's Talk</Eyebrow>
          <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Say hello.</h2>
          <p className="mx-auto mt-4 max-w-md text-ink/65">
            If any of this is interesting to you, a session, a talk, the book, or just a good
            conversation, get in touch. I reply to most things, usually with more enthusiasm than
            the message warranted.
          </p>
          <Button to="/contact" variant="primary" className="mt-8">
            Get in Touch
          </Button>
        </div>
      </section>
    </>
  )
}
