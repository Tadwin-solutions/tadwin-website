import { Link } from 'react-router-dom'
import { cn } from '../utils/cn'

/** Primary action control: use `to` for in-app navigation, `href` for external/mailto. */
const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-500 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 dark:shadow-glow',
  secondary:
    'border border-slate-200/80 bg-white/80 text-slate-900 backdrop-blur-sm hover:border-violet-300/80 hover:bg-white dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-violet-500/40',
  ghost:
    'text-slate-700 hover:bg-slate-100/90 dark:text-slate-200 dark:hover:bg-slate-800/80',
} as const

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm md:text-base',
  lg: 'px-6 py-3 text-base',
} as const

export type ButtonProps = {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  className?: string
  children: React.ReactNode
  to?: string
  href?: string
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'className'>

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  to,
  href,
  type = 'button',
  ...buttonProps
}: ButtonProps) {
  const cls = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} {...buttonProps}>
      {children}
    </button>
  )
}
