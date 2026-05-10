import type { ReactNode } from 'react'
import { useId } from 'react'
import { cn } from '../utils/cn'
import { ScrollReveal } from './ScrollReveal'

type SectionWrapperProps = {
  id?: string
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  children?: ReactNode
}

export function SectionWrapper({
  id,
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  children,
}: SectionWrapperProps) {
  const autoHeadingId = useId()
  const hasHeader = Boolean(eyebrow || title || subtitle)
  const headingId = title ? (id ? `${id}-heading` : autoHeadingId) : undefined

  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 lg:py-28', className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {hasHeader && (
          <ScrollReveal
            className={cn(
              'mb-12 max-w-2xl space-y-3 md:mb-16',
              align === 'center' && 'mx-auto text-center',
            )}
          >
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 dark:text-sky-400">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                id={headingId}
                className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white"
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-base leading-relaxed text-stone-600 md:text-lg dark:text-stone-400">
                {subtitle}
              </p>
            )}
          </ScrollReveal>
        )}
        {children}
      </div>
    </section>
  )
}
