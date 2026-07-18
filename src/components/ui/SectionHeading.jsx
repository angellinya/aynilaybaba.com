import Eyebrow from './Eyebrow'

export default function SectionHeading({ eyebrow, title, as: Tag = 'h1', className = '' }) {
  return (
    <div className={className}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <Tag className="font-serif text-4xl font-semibold text-ink sm:text-5xl">{title}</Tag>
    </div>
  )
}
