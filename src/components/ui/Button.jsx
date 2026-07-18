import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-plum text-cream hover:shadow-lg hover:shadow-plum/20',
  accent: 'bg-clay text-ink hover:shadow-lg hover:shadow-clay/30',
  outline: 'border border-ink/15 text-ink hover:border-clay hover:text-clay',
}

export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const classes = `inline-block rounded-full px-7 py-3 text-sm font-medium transition-transform hover:-translate-y-0.5 ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  )
}
