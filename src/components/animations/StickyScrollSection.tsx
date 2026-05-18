import { useEffect, useRef, useState } from 'react'
import { Button } from '../Button'
import { Card } from '../Card'
import { ServiceIcon } from '../ServiceIcon'
import { cn } from '../../utils/cn'
import { ROUTES, SERVICES, type Service } from '../../utils/constants'

const STICKY_TOP_PX = 112
const STACK_OFFSET_PX = 14

type StickyScrollSectionProps = {
  id?: string
  className?: string
}

export function StickyScrollSection({
  id = 'delivery',
  className,
}: StickyScrollSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const panelRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const panels = panelRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!panels.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target) {
          const idx = panels.indexOf(visible[0].target as HTMLDivElement)
          if (idx >= 0) setActiveIndex(idx)
        }
      },
      {
        root: null,
        threshold: [0.25, 0.45, 0.65],
        rootMargin: '-42% 0px -42% 0px',
      },
    )

    panels.forEach((panel) => observer.observe(panel))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id={id}
      className={cn(
        'relative border-y border-stone-200/70 bg-stone-50/50 py-16 dark:border-stone-800/80 dark:bg-stone-950/40 md:py-24',
        className,
      )}
      aria-labelledby={`${id}-heading`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[size:56px_56px] bg-grid-slate opacity-20 dark:bg-grid-slate-dark dark:opacity-15" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Mobile / reduced-motion: simple stack */}
        <div className="space-y-6 lg:hidden motion-reduce:block">
          <SectionIntro id={id} activeIndex={0} total={SERVICES.length} />
          {SERVICES.map((service) => (
            <StickyCard key={service.title} service={service} isActive />
          ))}
          <div className="pt-2">
            <Button to={ROUTES.services} variant="secondary" className="w-full sm:w-auto">
              Explore all services
            </Button>
          </div>
        </div>

        {/* Desktop: sticky scroll stack */}
        <div className="hidden lg:grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16 motion-reduce:hidden">
          <div className="sticky top-28 self-start pb-16">
            <SectionIntro
              id={id}
              activeIndex={activeIndex}
              total={SERVICES.length}
            />
            <ol className="mt-10 space-y-3" aria-label="Delivery steps">
              {SERVICES.map((service, index) => (
                <li key={service.title}>
                  <button
                    type="button"
                    onClick={() =>
                      panelRefs.current[index]?.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center',
                      })
                    }
                    className={cn(
                      'flex w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-300',
                      activeIndex === index
                        ? 'border-blue-500/40 bg-white shadow-md dark:border-sky-500/35 dark:bg-stone-900'
                        : 'border-transparent bg-transparent text-stone-500 hover:border-stone-200/80 hover:bg-white/60 dark:text-stone-400 dark:hover:border-stone-800 dark:hover:bg-stone-900/50',
                    )}
                  >
                    <span
                      className={cn(
                        'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-colors',
                        activeIndex === index
                          ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white'
                          : 'bg-stone-200/80 text-stone-600 dark:bg-stone-800 dark:text-stone-300',
                      )}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'text-sm font-semibold',
                        activeIndex === index
                          ? 'text-stone-900 dark:text-white'
                          : 'text-stone-600 dark:text-stone-400',
                      )}
                    >
                      {service.title}
                    </span>
                  </button>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <Button to={ROUTES.services} variant="secondary">
                Explore all services
              </Button>
            </div>
          </div>

          <div className="relative pb-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                ref={(el) => {
                  panelRefs.current[index] = el
                }}
                className="flex min-h-[88vh] items-start py-6"
              >
                <div
                  className={cn(
                    'sticky w-full transition-[transform,opacity,box-shadow] duration-500 ease-out motion-reduce:transition-none',
                    activeIndex > index && 'opacity-90',
                    activeIndex < index && 'opacity-100',
                  )}
                  style={{
                    top: STICKY_TOP_PX + index * STACK_OFFSET_PX,
                    zIndex: index + 1,
                    transform:
                      activeIndex > index
                        ? `scale(${0.96 - (activeIndex - index - 1) * 0.02})`
                        : 'scale(1)',
                  }}
                >
                  <StickyCard
                    service={service}
                    isActive={activeIndex === index}
                    step={index + 1}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionIntro({
  id,
  activeIndex,
  total,
}: {
  id: string
  activeIndex: number
  total: number
}) {
  return (
    <div className="space-y-4">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-900 dark:text-sky-400">
        How we deliver
      </p>
      <h2
        id={`${id}-heading`}
        className="text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl dark:text-white"
      >
        Scroll through our core capabilities
      </h2>
      <p className="max-w-md text-base leading-relaxed text-stone-600 dark:text-stone-400">
        Each card pins as you scroll—see how we approach web, platform, and mobile
        work as one continuous delivery motion.
      </p>
      <p className="text-sm font-medium text-stone-500 dark:text-stone-500">
        Step{' '}
        <span className="text-blue-900 dark:text-sky-400">
          {activeIndex + 1}
        </span>{' '}
        of {total}
      </p>
    </div>
  )
}

function StickyCard({
  service,
  isActive,
  step,
}: {
  service: Service
  isActive: boolean
  step?: number
}) {
  return (
    <Card
      className={cn(
        'relative overflow-hidden p-8 transition-shadow duration-500',
        isActive
          ? 'shadow-xl ring-1 ring-blue-500/20 dark:ring-sky-500/25'
          : 'shadow-card',
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500"
        aria-hidden
      />
      {step != null && (
        <span className="mb-6 inline-flex rounded-full bg-blue-900/10 px-3 py-1 text-xs font-semibold text-blue-900 dark:text-sky-400">
          Step {String(step).padStart(2, '0')}
        </span>
      )}
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
        <ServiceIcon icon={service.icon} className="h-14 w-14 shrink-0" />
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-stone-900 dark:text-white">
            {service.title}
          </h3>
          <p className="text-base leading-relaxed text-stone-600 dark:text-stone-400">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {service.highlights.map((h) => (
              <span
                key={h}
                className="rounded-lg border border-stone-200/90 bg-stone-50/90 px-3 py-1 text-xs font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-950/50 dark:text-stone-300"
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  )
}
