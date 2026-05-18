import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '../utils/cn'

type RevealVariant = 'fade-up' | 'fade-scale' | 'fade-blur'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  /** Stagger sibling reveals (ms). */
  delayMs?: number
  variant?: RevealVariant
}

const variantClasses: Record<
  RevealVariant,
  { hidden: string; visible: string }
> = {
  'fade-up': {
    hidden: 'translate-y-6 opacity-0',
    visible: 'translate-y-0 opacity-100',
  },
  'fade-scale': {
    hidden: 'translate-y-4 scale-[0.97] opacity-0',
    visible: 'translate-y-0 scale-100 opacity-100',
  },
  'fade-blur': {
    hidden: 'translate-y-5 opacity-0 blur-sm',
    visible: 'translate-y-0 opacity-100 blur-0',
  },
}

/**
 * Fades content in on first intersection. Uses Tailwind transition utilities only.
 */
export function ScrollReveal({
  children,
  className,
  delayMs = 0,
  variant = 'fade-up',
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

  const motion = variantClasses[variant]

  return (
    <div
      ref={ref}
      className={cn(
        'transform-gpu transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:blur-0',
        visible ? motion.visible : motion.hidden,
        !visible && 'motion-reduce:translate-y-0 motion-reduce:scale-100',
        className,
      )}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
