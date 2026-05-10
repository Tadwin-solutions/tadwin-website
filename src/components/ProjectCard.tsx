import type { Project } from '../utils/constants'
import { Card } from './Card'
import { ScrollReveal } from './ScrollReveal'

type ProjectCardProps = {
  project: Project
  delayMs?: number
}

/** Agency-style portfolio tile with hero strip, meta, stack chips, and outcome. */
export function ProjectCard({ project, delayMs = 0 }: ProjectCardProps) {
  return (
    <ScrollReveal delayMs={delayMs}>
      <Card
        interactive
        className="group flex h-full flex-col overflow-hidden p-0 transition-shadow duration-300 hover:shadow-xl"
      >
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-stone-900 via-blue-950 to-indigo-950 dark:from-stone-950 dark:via-blue-950 dark:to-indigo-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.2),transparent_55%)] opacity-80" />
          <div className="pointer-events-none absolute -right-8 top-8 h-32 w-32 rounded-full bg-cyan-500/25 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/35" />
          <div className="relative flex h-full flex-col justify-end p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-xs font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm">
                {project.tag}
              </span>
              <span className="text-xs font-medium text-white/75">
                {project.year}
              </span>
            </div>
            <p className="mt-2 text-xs text-white/70">{project.client}</p>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-semibold tracking-tight text-stone-900 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-stone-200/90 bg-stone-50 px-2 py-1 text-xs font-medium text-stone-700 transition-colors duration-200 group-hover:border-sky-200 group-hover:bg-sky-50/90 dark:border-stone-700 dark:bg-stone-950/50 dark:text-stone-300 dark:group-hover:border-indigo-700/40 dark:group-hover:bg-blue-950/40"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-5 border-t border-stone-200/80 pt-4 text-sm text-stone-800 dark:border-stone-800 dark:text-stone-200">
            <span className="font-semibold text-blue-900 dark:text-sky-400">
              Outcome
            </span>
            <span className="text-stone-500 dark:text-stone-500"> — </span>
            {project.outcome}
          </p>
        </div>
      </Card>
    </ScrollReveal>
  )
}
