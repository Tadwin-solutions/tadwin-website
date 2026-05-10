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
        <div className="relative h-32 overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-fuchsia-900 dark:from-slate-950 dark:via-violet-950 dark:to-fuchsia-950">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.2),transparent_55%)] opacity-80" />
          <div className="pointer-events-none absolute -right-8 top-8 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl transition-all duration-500 group-hover:bg-cyan-400/30" />
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
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">
            {project.name}
          </h3>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-slate-200/90 bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 transition-colors duration-200 group-hover:border-violet-200 group-hover:bg-violet-50/80 dark:border-slate-700 dark:bg-slate-950/50 dark:text-slate-300 dark:group-hover:border-violet-500/30 dark:group-hover:bg-violet-950/40"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="mt-5 border-t border-slate-200/80 pt-4 text-sm text-slate-800 dark:border-slate-800 dark:text-slate-200">
            <span className="font-semibold text-violet-600 dark:text-violet-400">
              Outcome
            </span>
            <span className="text-slate-500 dark:text-slate-500"> — </span>
            {project.outcome}
          </p>
        </div>
      </Card>
    </ScrollReveal>
  )
}
