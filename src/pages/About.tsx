import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionWrapper } from '../components/SectionWrapper'
import { COMPANY, ROUTES } from '../utils/constants'

const principles = [
  {
    title: 'Clarity over cleverness',
    body: 'We write code and docs for the team you’ll have in two years—not just the sprint ahead.',
  },
  {
    title: 'Velocity with guardrails',
    body: 'Automation, typing, and lightweight reviews keep us fast without turning process into theater.',
  },
  {
    title: 'Design is how it works',
    body: 'Interfaces earn trust through feedback, performance, and accessibility—not only pixels.',
  },
] as const

const team = [
  { role: 'Product & engineering', name: 'Cross-functional leads' },
  { role: 'Design & research', name: 'Systems + UX craft' },
  { role: 'Cloud & reliability', name: 'SRE-minded builders' },
] as const

export function About() {
  return (
    <>
      <SectionWrapper
        eyebrow="About"
        title="We help teams ship software they’re proud to own"
        subtitle={`${COMPANY.name} is a remote-first software development agency partnering with founders, product leaders, and engineering orgs who want senior execution without hiring lag.`}
        align="center"
        className="pb-8 pt-12 md:pt-16"
      >
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Our engagements range from greenfield builds to rescuing tricky
              legacy surfaces. What stays constant is a bias for transparent
              communication, measurable outcomes, and respectful collaboration
              with your in-house team.
            </p>
          </ScrollReveal>
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="principles"
        eyebrow="How we work"
        title="Principles you’ll feel in every sprint"
        className="bg-slate-50/80 dark:bg-slate-900/40"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((p, i) => (
            <ScrollReveal key={p.title} delayMs={i * 70}>
              <Card interactive className="h-full">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {p.body}
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper
        id="team"
        eyebrow="Collective"
        title="A senior bench, assembled for your roadmap"
        subtitle="We scale involvement up or down—prototype, delivery squad, or advisory—without losing continuity."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {team.map((t, i) => (
            <ScrollReveal key={t.role} delayMs={i * 80}>
              <Card>
                <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-400">
                  {t.role}
                </p>
                <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                  {t.name}
                </p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  Embedded rituals: weekly demos, shared roadmap docs, and
                  async-friendly decision logs.
                </p>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button to={ROUTES.contact} size="lg">
            Plan a working session
          </Button>
        </div>
      </SectionWrapper>
    </>
  )
}
