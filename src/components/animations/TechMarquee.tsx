import { cn } from '../../utils/cn'

const MARQUEE_ITEMS = [
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'React Native',
  'TypeScript',
  'PostgreSQL',
  'AWS',
  'Docker',
  'GraphQL',
  'Tailwind CSS',
  'Vite',
] as const

type TechMarqueeProps = {
  className?: string
}

/** Infinite horizontal scroll of technologies — common on modern agency sites. */
export function TechMarquee({ className }: TechMarqueeProps) {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <section
      className={cn(
        'border-y border-stone-200/70 bg-white/40 py-5 dark:border-stone-800/80 dark:bg-stone-950/40',
        className,
      )}
      aria-label="Technologies we work with"
    >
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max motion-safe:animate-marquee motion-reduce:animate-none animate-pause-on-hover gap-8 px-4">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex shrink-0 items-center gap-3 text-sm font-semibold tracking-wide text-stone-500 dark:text-stone-400"
            >
              <span
                className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                aria-hidden
              />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
