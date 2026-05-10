import type { ReactElement } from 'react'
import type { ServiceIconId } from '../utils/constants'
import { cn } from '../utils/cn'

const paths: Record<ServiceIconId, ReactElement> = {
  web: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a15.3 15.3 0 010 18M12 3a15.3 15.3 0 000 18"
    />
  ),
  custom: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 6.75a2.25 2.25 0 012.25-2.25H9A2.25 2.25 0 0111.25 6.75v2.25A2.25 2.25 0 019 11.25H6.75A2.25 2.25 0 014.5 9V6.75zM13.5 6.75a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6.75v2.25A2.25 2.25 0 0118 11.25h-2.25A2.25 2.25 0 0113.5 9V6.75zM4.5 15.75a2.25 2.25 0 012.25-2.25H9a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 019 20.25H6.75A2.25 2.25 0 014.5 18v-2.25zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  ),
  mobile: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-9 18v-1.5a.75.75 0 01.75-.75h10.5a.75.75 0 01.75.75V21"
    />
  ),
}

type ServiceIconProps = {
  icon: ServiceIconId
  className?: string
}

export function ServiceIcon({ icon, className }: ServiceIconProps) {
  return (
    <span
      className={cn(
        'inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/10 text-violet-600 ring-1 ring-violet-500/20 transition-transform duration-300 group-hover:scale-105 dark:from-violet-400/10 dark:to-fuchsia-400/10 dark:text-violet-300 dark:ring-violet-400/25',
        className,
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
        aria-hidden
      >
        {paths[icon]}
      </svg>
    </span>
  )
}
