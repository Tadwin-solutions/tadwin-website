import { cn } from '../../utils/cn'

type FloatingOrbsProps = {
  className?: string
}

/** Ambient gradient blobs for hero and CTA sections. */
export function FloatingOrbs({ className }: FloatingOrbsProps) {
  return (
    <div
      className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}
      aria-hidden
    >
      <div className="absolute -left-32 top-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl motion-safe:animate-pulse-soft dark:bg-blue-500/15" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl motion-safe:animate-pulse-soft dark:bg-cyan-400/10" />
      <div className="absolute left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 rounded-full bg-indigo-400/10 blur-3xl motion-safe:animate-gradient-shift dark:bg-indigo-500/10" />
    </div>
  )
}
