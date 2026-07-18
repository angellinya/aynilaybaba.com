import { Link } from 'react-router-dom'

export default function Card({ to, lift = true, className = '', children }) {
  const base =
    'rounded-2xl border border-ink/10 bg-white/50 p-8 transition-all hover:border-clay/40 hover:shadow-xl hover:shadow-ink/5'
  const classes = `${base} ${lift ? 'hover:-translate-y-1' : ''} ${className}`

  if (to) {
    return (
      <Link to={to} className={`group block ${classes}`}>
        {children}
      </Link>
    )
  }

  return <div className={classes}>{children}</div>
}
