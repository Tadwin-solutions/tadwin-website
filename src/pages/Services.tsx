import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionWrapper } from '../components/SectionWrapper'
import { ServiceIcon } from '../components/ServiceIcon'
import { TechStackSection } from '../components/TechStackSection'
import { ROUTES, SERVICES } from '../utils/constants'

const process = [
  {
    step: 'Discover',
    detail:
      'We align on users, constraints, and the smallest slice that proves value.',
  },
  {
    step: 'Design & define',
    detail:
      'UX flows, technical spikes, and API contracts so engineering stays unblocked.',
  },
  {
    step: 'Build & instrument',
    detail:
      'Iterative releases with tracing, error budgets, and dashboards your team can read.',
  },
  {
    step: 'Handoff & elevate',
    detail:
      'Runbooks, onboarding sessions, and optional ongoing partnership.',
  },
] as const

export function Services() {
  return (
    <>
      <SectionWrapper
        eyebrow="Services"
        title="A full-service software development agency"
        subtitle="We build web platforms, custom business systems, and mobile apps—using React, Next.js, Node.js, Python, and React Native—so your product, ops, and customer touchpoints stay in sync."
        align="center"
        className="pb-8 pt-12 md:pt-16"
      />

      <SectionWrapper
        id="capabilities"
        eyebrow="What we deliver"
        title="Core offerings"
        className="-mt-8"
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delayMs={i * 70}>
              <Card
                interactive
                className="group flex h-full flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <ServiceIcon icon={s.icon} />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-slate-200/90 bg-white/80 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-950/40 dark:text-slate-300"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <TechStackSection className="bg-slate-50/80 dark:bg-slate-900/40" />

      <SectionWrapper
        id="process"
        eyebrow="Process"
        title="A delivery model that respects your calendar"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {process.map((p, i) => (
            <ScrollReveal key={p.step} delayMs={i * 70}>
              <Card className="flex gap-4 transition-shadow duration-300 hover:shadow-lg">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-sm font-bold text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                    {p.step}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {p.detail}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-violet-200/60 bg-white/80 p-8 text-center dark:border-violet-500/25 dark:bg-slate-900/50">
          <ScrollReveal>
            <p className="text-lg font-semibold text-slate-900 dark:text-white">
              Not sure where to start?
            </p>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
              Send a brief, a deck, or a backlog export. We’ll help you sequence
              the work and propose a sensible first engagement.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button to={ROUTES.contact}>Book a consult</Button>
              <Button to={ROUTES.projects} variant="secondary">
                See portfolio
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
