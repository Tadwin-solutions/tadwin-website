import { useEffect, useRef, useState } from 'react'
import { cn } from '../../utils/cn'
import { MockScreenCard } from './MockScreenCard'

const heroStack = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'React Native',
] as const

const progressRows = [
  { label: 'Architecture & APIs', pct: 88 },
  { label: 'Product UI', pct: 92 },
  { label: 'Launch readiness', pct: 76 },
] as const

export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null)
  const [animateBars, setAnimateBars] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setAnimateBars(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="relative mx-auto min-h-[360px] max-w-md px-6 py-10 sm:min-h-[400px] sm:px-8"
    >
      <MockScreenCard
        variant="mobile"
        className="pointer-events-none absolute left-0 top-2 z-0 w-[34%] max-w-[9.5rem] scale-[0.92] opacity-55 motion-safe:animate-drift motion-reduce:animate-none sm:left-1 sm:top-0 sm:max-w-[10.5rem] sm:opacity-60"
        style={{ animationDelay: '0.2s' }}
      />
      <MockScreenCard
        variant="analytics"
        className="pointer-events-none absolute right-0 top-10 z-0 w-[34%] max-w-[9.5rem] scale-[0.92] opacity-55 motion-safe:animate-drift-reverse motion-reduce:animate-none sm:right-1 sm:top-6 sm:max-w-[10.5rem] sm:opacity-60"
        style={{ animationDelay: '0.8s' }}
      />
      <MockScreenCard
        variant="dashboard"
        className="pointer-events-none absolute bottom-4 left-6 z-0 hidden w-[30%] max-w-[8.5rem] scale-90 opacity-45 motion-safe:animate-float-slower motion-reduce:animate-none lg:block"
        style={{ animationDelay: '1.2s' }}
      />

      <div className="relative z-10 mx-auto w-full max-w-sm motion-safe:animate-float-slow motion-reduce:animate-none">
        <div className="relative rounded-3xl border border-stone-200/80 bg-white/80 p-6 shadow-card backdrop-blur-xl dark:border-stone-800 dark:bg-stone-900/75 dark:shadow-card-dark">
          <div className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-blue-500/15 via-transparent to-cyan-400/10 opacity-80" />
          <div className="relative space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-stone-900 dark:text-white">
                  Stack we ship with
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400">
                  Frontend, backend, and mobile—aligned.
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-blue-900/10 px-2.5 py-1 text-xs font-semibold text-blue-900 dark:text-sky-400">
                Agency playbook
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {heroStack.map((tech, i) => (
                <span
                  key={tech}
                  className="rounded-lg border border-stone-200/90 bg-stone-50/90 px-3 py-1.5 text-xs font-semibold text-stone-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300/80 hover:bg-white hover:shadow-md dark:border-stone-700 dark:bg-stone-950/50 dark:text-stone-100 dark:hover:border-indigo-600/45"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-3 rounded-2xl border border-stone-200/60 bg-stone-50/80 p-4 dark:border-stone-800 dark:bg-stone-950/50">
              {progressRows.map((row, i) => (
                <div key={row.label}>
                  <div className="mb-1 flex justify-between text-xs text-stone-600 dark:text-stone-400">
                    <span>{row.label}</span>
                    <span>{row.pct}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-stone-200/80 dark:bg-stone-800">
                    <div
                      className={cn(
                        'h-full origin-left rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-transform duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:scale-x-100',
                        animateBars ? 'scale-x-100' : 'scale-x-0',
                      )}
                      style={{
                        width: `${row.pct}%`,
                        transitionDelay: animateBars ? `${200 + i * 120}ms` : undefined,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <p className="text-xs leading-relaxed text-stone-500 dark:text-stone-500">
              Typical engagements blend web (React / Next.js), services (Node.js /
              Python), and mobile (React Native) under one delivery rhythm.
            </p>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-blue-500/10 via-transparent to-cyan-400/10 blur-2xl motion-safe:animate-gradient-shift motion-reduce:animate-none"
        aria-hidden
      />
    </div>
  )
}
