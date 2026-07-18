export default function Eyebrow({ children, className = '' }) {
  return (
    <p className={`text-sm font-medium uppercase tracking-[0.2em] text-clay ${className}`}>
      {children}
    </p>
  )
}
