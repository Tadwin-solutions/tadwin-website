import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../utils/cn'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Stagger sibling reveals (ms). */
  delayMs?: number
}

/**
 * Fades content in on first intersection. Uses Tailwind transition utilities only.
 */
export function ScrollReveal({
  children,
  className,
  delayMs = 0,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        'transform-gpu transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:opacity-100',
        visible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-6 opacity-0 motion-reduce:translate-y-0',
        className,
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
