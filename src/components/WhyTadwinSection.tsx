import { Card } from './Card'
import { ScrollReveal } from './ScrollReveal'
import { SectionWrapper } from './SectionWrapper'
import { WHY_TADWIN } from '../utils/constants'

type WhyTadwinSectionProps = {
  id?: string
  className?: string
}

export function WhyTadwinSection({
  id = 'why-tadwin',
  className,
}: WhyTadwinSectionProps) {
  return (
    <SectionWrapper
      id={id}
      eyebrow="Why Tadwin Solutions"
      title="Engineering discipline with agency agility"
      subtitle="We’re structured like a product team: clear ownership, tight feedback loops, and delivery that holds up after launch—not just in the demo."
      className={className}
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_TADWIN.map((point, i) => (
          <ScrollReveal
            key={point.title}
            delayMs={i * 70}
            className={
              i === WHY_TADWIN.length - 1
                ? 'sm:col-span-2 lg:col-span-3 lg:mx-auto lg:max-w-3xl'
                : undefined
            }
          >
            <Card
              interactive
              className="group h-full border-stone-200/90 dark:border-stone-800"
            >
              <div className="flex gap-4">
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white shadow-md shadow-blue-900/25 transition-transform duration-300 group-hover:scale-105"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {point.description}
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </SectionWrapper>
  )
}
