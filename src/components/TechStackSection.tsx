import { Card } from './Card'
import { ScrollReveal } from './ScrollReveal'
import { SectionWrapper } from './SectionWrapper'
import { TECH_STACK } from '../utils/constants'

type TechStackSectionProps = {
  id?: string
  className?: string
}

/** Dedicated band showcasing core technologies (frontend, backend, mobile). */
export function TechStackSection({ id = 'tech-stack', className }: TechStackSectionProps) {
  return (
    <SectionWrapper
      id={id}
      eyebrow="Tech stack"
      title="Built with the tools modern teams standardize on"
      subtitle="We align engineering around a pragmatic core—fast iteration on the frontend, dependable services on the backend, and mobile surfaces that share patterns with the web."
      className={className}
    >
      <div className="grid gap-6 md:grid-cols-3">
        {TECH_STACK.map((group, i) => (
          <ScrollReveal key={group.label} delayMs={i * 90}>
            <Card
              interactive
              className="group relative h-full overflow-hidden pt-8"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 dark:text-sky-400">
                {group.label}
              </p>
              <ul className="mt-5 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm font-medium text-stone-800 dark:text-stone-100"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
