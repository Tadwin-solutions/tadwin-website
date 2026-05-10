import { Link } from 'react-router-dom'
import { COMPANY, NAV_LINKS, ROUTES } from '../utils/constants'

const social = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com',
    icon: LinkedInIcon,
  },
  {
    label: 'X',
    href: 'https://twitter.com',
    icon: XIcon,
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: GitHubIcon,
  },
] as const

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-stone-200/80 bg-white/80 dark:border-stone-800 dark:bg-stone-950/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4 lg:col-span-2">
            <Link to={ROUTES.home} className="inline-flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white shadow-md">
                T
              </span>
              <span className="text-lg font-semibold text-stone-900 dark:text-white">
                {COMPANY.name}
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-stone-600 dark:text-stone-400">
              We partner with ambitious teams to design, build, and scale
              modern software—from first prototype to production-grade
              platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              {social.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-stone-200/80 bg-stone-50 text-stone-600 transition hover:border-sky-300/80 hover:text-blue-900 dark:border-stone-700 dark:bg-stone-900/50 dark:text-stone-300 dark:hover:border-indigo-600/45 dark:hover:text-sky-300"
                  aria-label={label}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900 dark:text-white">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-stone-600 transition hover:text-blue-900 dark:text-stone-400 dark:hover:text-sky-400"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-stone-900 dark:text-white">
              Contact
            </p>
            <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-400">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="transition hover:text-blue-900 dark:hover:text-sky-400"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                  className="transition hover:text-blue-900 dark:hover:text-sky-400"
                >
                  {COMPANY.phone}
                </a>
              </li>
              <li>{COMPANY.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-stone-200/80 pt-8 text-xs text-stone-500 dark:border-stone-800 dark:text-stone-500 sm:flex-row sm:items-center">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-stone-400 dark:text-stone-500">
            Crafted for clarity, speed, and long-term maintainability.
          </p>
        </div>
      </div>
    </footer>
  )
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  )
}
