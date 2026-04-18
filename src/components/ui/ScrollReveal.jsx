import { useScrollReveal } from '../../hooks/useScrollReveal'

export function ScrollReveal({ children, delay = 0, className = '' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: isVisible ? `${delay}ms` : '0ms' } : undefined}
    >
      {children}
    </div>
  )
}
