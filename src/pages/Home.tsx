import { FloatingOrbs } from '../components/animations/FloatingOrbs'
import { HeroVisual } from '../components/animations/HeroVisual'
import { StickyScrollSection } from '../components/animations/StickyScrollSection'
import { TechMarquee } from '../components/animations/TechMarquee'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ProjectCard } from '../components/ProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionWrapper } from '../components/SectionWrapper'
import { ServiceIcon } from '../components/ServiceIcon'
import { TechStackSection } from '../components/TechStackSection'
import { WhyTadwinSection } from '../components/WhyTadwinSection'
import { COMPANY, PROJECTS, ROUTES, SERVICES } from '../utils/constants'

const previewProjects = PROJECTS.slice(0, 3)

export function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-stone-100 dark:from-stone-950 dark:via-stone-950 dark:to-stone-900/80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[size:56px_56px] bg-grid-slate opacity-[0.35] dark:bg-grid-slate-dark dark:opacity-25"
          aria-hidden
        />
        <FloatingOrbs />

        <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-20 lg:px-8 lg:pb-32 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="space-y-8">
              <ScrollReveal>
                <p className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-900 shadow-sm backdrop-blur dark:border-sky-500/30 dark:bg-stone-900/70 dark:text-sky-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400 motion-safe:animate-pulse" />
                  Software development agency
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={80} variant="fade-blur">
                <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] dark:text-white">
                  We Build Scalable Digital Products{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent dark:from-sky-400 dark:to-cyan-300">
                    That Power Businesses
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delayMs={140}>
                <p className="max-w-xl text-lg leading-relaxed text-stone-600 dark:text-stone-400">
                  {COMPANY.name} designs and ships production-grade web and mobile
                  experiences using{' '}
                  <span className="font-medium text-stone-800 dark:text-stone-200">
                    React
                  </span>
                  ,{' '}
                  <span className="font-medium text-stone-800 dark:text-stone-200">
                    Next.js
                  </span>
                  ,{' '}
                  <span className="font-medium text-stone-800 dark:text-stone-200">
                    Node.js
                  </span>
                  ,{' '}
                  <span className="font-medium text-stone-800 dark:text-stone-200">
                    Python
                  </span>
                  , and{' '}
                  <span className="font-medium text-stone-800 dark:text-stone-200">
                    React Native
                  </span>
                  —so your product stays fast, maintainable, and ready to scale.
                </p>
              </ScrollReveal>

              <ScrollReveal delayMs={200} className="flex flex-wrap gap-3">
                <Button to={ROUTES.contact} size="lg">
                  Get in Touch
                </Button>
                <Button to={ROUTES.services} variant="secondary" size="lg">
                  View Services
                </Button>
              </ScrollReveal>

              <ScrollReveal delayMs={260}>
                <dl className="grid max-w-lg grid-cols-3 gap-6 border-t border-stone-200/80 pt-8 dark:border-stone-800">
                  {[
                    { k: 'Delivery', v: 'Sprint-based' },
                    { k: 'Focus', v: 'B2B & SaaS' },
                    { k: 'Model', v: 'Embedded team' },
                  ].map((item) => (
                    <div key={item.k}>
                      <dt className="text-xs font-medium uppercase tracking-wide text-stone-500 dark:text-stone-500">
                        {item.k}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-stone-900 dark:text-white">
                        {item.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </ScrollReveal>
            </div>

            <ScrollReveal delayMs={120} variant="fade-scale" className="relative">
              <HeroVisual />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <TechMarquee />

      <StickyScrollSection />

      <SectionWrapper
        id="services-preview"
        eyebrow="Services"
        title="Software your business can run on"
        subtitle="From customer-facing web apps to internal systems and mobile—one partner accountable for architecture, delivery, and long-term maintainability."
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ScrollReveal key={s.title} delayMs={i * 80} variant="fade-scale">
              <Card
                interactive
                className="group flex h-full flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
              >
                <ServiceIcon icon={s.icon} />
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                    {s.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {s.highlights.map((h) => (
                      <span
                        key={h}
                        className="rounded-md border border-stone-200/90 bg-white/80 px-2 py-0.5 text-xs font-medium text-stone-700 dark:border-stone-700 dark:bg-stone-950/50 dark:text-stone-300"
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
        <div className="mt-10 flex justify-center">
          <Button to={ROUTES.services} variant="secondary">
            Explore services in detail
          </Button>
        </div>
      </SectionWrapper>

      <TechStackSection className="bg-white/50 dark:bg-stone-900/30" />

      <WhyTadwinSection />

      <SectionWrapper
        id="portfolio-preview"
        eyebrow="Portfolio"
        title="Selected client work"
        subtitle="Placeholder case studies structured the way we present real engagements—context, stack, and measurable outcomes."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {previewProjects.map((p, i) => (
            <ProjectCard key={p.name} project={p} delayMs={i * 90} />
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button to={ROUTES.projects}>View full portfolio</Button>
        </div>
      </SectionWrapper>

      <section
        id="contact-cta"
        className="py-16 md:py-24 lg:py-28"
        aria-labelledby="contact-cta-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal variant="fade-scale">
            <div className="group relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-600 p-10 text-center shadow-glow md:p-14 dark:border-sky-500/25">
              <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-white/25 to-transparent opacity-40 motion-safe:animate-shimmer motion-reduce:opacity-0 dark:via-white/10" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.35),transparent_55%)] opacity-60 motion-safe:animate-gradient-shift motion-reduce:animate-none dark:opacity-30" />
              <div className="relative mx-auto max-w-2xl space-y-6">
                <h2
                  id="contact-cta-heading"
                  className="text-3xl font-semibold tracking-tight text-white md:text-4xl"
                >
                  Start your next release with a senior agency team
                </h2>
                <p className="text-base leading-relaxed text-stone-200 md:text-lg">
                  Share your roadmap, constraints, and success metrics. We’ll
                  respond with a pragmatic plan—scope, timeline, and tech
                  choices you can defend to stakeholders.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button
                    to={ROUTES.contact}
                    variant="secondary"
                    className="border-0 bg-white text-stone-900 shadow-lg hover:bg-stone-50"
                  >
                    Get in Touch
                  </Button>
                  <Button
                    href={`mailto:${COMPANY.email}`}
                    variant="ghost"
                    className="!text-white ring-1 ring-white/40 hover:bg-white/10 hover:!text-white"
                  >
                    Email us directly
                  </Button>
                </div>
                <p className="text-xs text-sky-200/90">
                  Typical response time:{' '}
                  <span className="font-semibold">one business day</span>.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
