import type { CSSProperties } from 'react'
import { cn } from '../../utils/cn'

type MockVariant = 'dashboard' | 'mobile' | 'analytics'

type MockScreenCardProps = {
  variant: MockVariant
  className?: string
  style?: CSSProperties
}

const labels: Record<MockVariant, string> = {
  dashboard: 'Ops dashboard',
  mobile: 'Mobile app',
  analytics: 'Analytics',
}

export function MockScreenCard({ variant, className, style }: MockScreenCardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-2xl border border-stone-200/80 bg-white/90 shadow-lg shadow-stone-900/10 backdrop-blur-md dark:border-stone-700/80 dark:bg-stone-900/90 dark:shadow-black/30',
        className,
      )}
      style={style}
      aria-hidden
    >
      <WindowChrome label={labels[variant]} />
      <ScreenBody variant={variant} />
    </div>
  )
}

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-stone-200/70 bg-stone-50/90 px-3 py-2 dark:border-stone-800 dark:bg-stone-950/80">
      <div className="flex gap-1" aria-hidden>
        <span className="h-2 w-2 rounded-full bg-rose-400/90" />
        <span className="h-2 w-2 rounded-full bg-amber-400/90" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/90" />
      </div>
      <span className="truncate text-[10px] font-medium text-stone-500 dark:text-stone-400">
        {label}
      </span>
    </div>
  )
}

function ScreenBody({ variant }: { variant: MockVariant }) {
  if (variant === 'mobile') {
    return (
      <div className="space-y-2 bg-gradient-to-b from-stone-100 to-white p-3 dark:from-stone-900 dark:to-stone-950">
        <div className="mx-auto h-1 w-8 rounded-full bg-stone-300 dark:bg-stone-700" />
        <div className="rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 p-3 text-white shadow-md">
          <p className="text-[9px] font-semibold opacity-90">Ship faster</p>
          <p className="mt-1 text-lg font-bold leading-none">24%</p>
          <p className="text-[8px] opacity-75">release velocity</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <div className="h-8 rounded-lg bg-stone-200/80 dark:bg-stone-800" />
          <div className="h-8 rounded-lg bg-stone-200/80 dark:bg-stone-800" />
        </div>
        <div className="h-6 rounded-lg bg-blue-900/10 dark:bg-sky-500/15" />
      </div>
    )
  }

  if (variant === 'analytics') {
    return (
      <div className="space-y-2 bg-gradient-to-b from-stone-100 to-white p-3 dark:from-stone-900 dark:to-stone-950">
        <div className="flex h-10 items-end justify-between gap-1">
          {[40, 65, 45, 80, 55, 72].map((h, i) => (
            <div
              key={i}
              className="w-full rounded-sm bg-gradient-to-t from-blue-600 to-cyan-400 opacity-90"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="h-px bg-stone-200 dark:bg-stone-800" />
        <div className="flex gap-2">
          <div className="h-2 flex-1 rounded bg-stone-200/80 dark:bg-stone-800" />
          <div className="h-2 w-8 rounded bg-emerald-400/70" />
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-[4.5rem_1fr] gap-2 bg-gradient-to-b from-stone-100 to-white p-3 dark:from-stone-900 dark:to-stone-950">
      <div className="space-y-1.5">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={cn(
              'h-2 rounded',
              i === 1
                ? 'bg-blue-600/80'
                : 'bg-stone-200/90 dark:bg-stone-800',
            )}
          />
        ))}
      </div>
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-400/10 dark:from-blue-500/25" />
          <div className="h-10 rounded-lg bg-stone-200/80 dark:bg-stone-800" />
        </div>
        <div className="space-y-1">
          <div className="h-1.5 w-full rounded bg-stone-200/80 dark:bg-stone-800" />
          <div className="h-1.5 w-4/5 rounded bg-stone-200/80 dark:bg-stone-800" />
          <div className="h-1.5 w-3/5 rounded bg-stone-200/80 dark:bg-stone-800" />
        </div>
      </div>
    </div>
  )
}
