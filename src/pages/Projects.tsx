import { Button } from '../components/Button'
import { ProjectCard } from '../components/ProjectCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionWrapper } from '../components/SectionWrapper'
import { PROJECTS, ROUTES } from '../utils/constants'

export function Projects() {
  return (
    <>
      <SectionWrapper
        eyebrow="Portfolio"
        title="Projects that balance ambition with maintainability"
        subtitle="Structured case cards (placeholder data) showing how we frame engagements—industry, stack, client context, and the business outcome we optimize for."
        align="center"
        className="pb-8 pt-12 md:pt-16"
      />

      <SectionWrapper id="work" className="-mt-8">
        <div className="grid gap-6 lg:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.name} project={p} delayMs={i * 60} />
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-stone-200/80 bg-gradient-to-br from-stone-50 to-white p-8 dark:border-stone-800 dark:from-stone-900/50 dark:to-stone-950/40 md:p-10">
          <ScrollReveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="text-xl font-semibold text-stone-900 dark:text-white">
                Want a walkthrough under NDA?
              </h3>
              <p className="mt-2 max-w-xl text-sm text-stone-600 dark:text-stone-400">
                We can share architecture diagrams, team topology, and lessons
                learned from similar builds—especially for SaaS, ERP, and
                mobile-heavy programs.
              </p>
            </div>
            <Button to={ROUTES.contact} size="lg">
              Request a deep dive
            </Button>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
