import type { ReactNode } from 'react'
import { cn } from '../utils/cn'

type CardProps = {
  children: ReactNode
  className?: string
  /** Adds lift + shadow on hover (great for grids). */
  interactive?: boolean
}

export function Card({ children, className, interactive }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-stone-200/80 bg-white/80 p-6 shadow-card backdrop-blur-md dark:border-stone-800 dark:bg-stone-900/50 dark:shadow-card-dark',
        interactive &&
          'transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/55 hover:shadow-xl dark:hover:border-indigo-600/35',
        className,
      )}
    >
      {children}
    </div>
  )
}
