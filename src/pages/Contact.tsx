import { useState, type FormEvent } from 'react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionWrapper } from '../components/SectionWrapper'
import { COMPANY } from '../utils/constants'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const subject = encodeURIComponent(`Project inquiry from ${name || 'website'}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    )
    window.location.href = `mailto:${COMPANY.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <SectionWrapper
        eyebrow="Contact"
        title="Tell us what you’re building"
        subtitle="Share context, links, and your ideal timeline. We read every message and reply with next steps—not an automated funnel."
        align="center"
        className="pb-8 pt-12 md:pt-16"
      />

      <SectionWrapper id="form" className="-mt-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <ScrollReveal>
            <Card className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  Direct lines
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-stone-600 dark:text-stone-400">
                  <li>
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      Email
                    </span>
                    <br />
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="text-blue-900 hover:underline dark:text-sky-400"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      Phone
                    </span>
                    <br />
                    <a
                      href={`tel:${COMPANY.phone.replace(/\D/g, '')}`}
                      className="text-blue-900 hover:underline dark:text-sky-400"
                    >
                      {COMPANY.phone}
                    </a>
                  </li>
                  <li>
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      Location
                    </span>
                    <br />
                    {COMPANY.address}
                  </li>
                </ul>
              </div>
              <p className="text-xs leading-relaxed text-stone-500 dark:text-stone-500">
                Prefer a calendar link? Mention your timezone in the message and
                we&apos;ll coordinate a working session.
              </p>
            </Card>
          </ScrollReveal>

          <ScrollReveal delayMs={80}>
            <Card className="p-0 overflow-hidden">
              <form
                onSubmit={handleSubmit}
                className="space-y-5 p-6 sm:p-8"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-sm">
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      Name
                    </span>
                    <input
                      name="name"
                      required
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-stone-200/90 bg-white/90 px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none ring-blue-600/20 transition placeholder:text-stone-400 focus:border-blue-600 focus:ring-2 dark:border-stone-700 dark:bg-stone-900/60 dark:text-white dark:placeholder:text-stone-500"
                      placeholder="Alex Rivera"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-stone-800 dark:text-stone-200">
                      Work email
                    </span>
                    <input
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="mt-2 w-full rounded-xl border border-stone-200/90 bg-white/90 px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none ring-blue-600/20 transition placeholder:text-stone-400 focus:border-blue-600 focus:ring-2 dark:border-stone-700 dark:bg-stone-900/60 dark:text-white dark:placeholder:text-stone-500"
                      placeholder="you@company.com"
                    />
                  </label>
                </div>
                <label className="block text-sm">
                  <span className="font-medium text-stone-800 dark:text-stone-200">
                    Project details
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y rounded-xl border border-stone-200/90 bg-white/90 px-3 py-2.5 text-sm text-stone-900 shadow-sm outline-none ring-blue-600/20 transition placeholder:text-stone-400 focus:border-blue-600 focus:ring-2 dark:border-stone-700 dark:bg-stone-900/60 dark:text-white dark:placeholder:text-stone-500"
                    placeholder="Goals, stack, timeline, links to briefs or Figma..."
                  />
                </label>
                <div className="flex flex-wrap items-center gap-3">
                  <Button type="submit" size="lg">
                    Open email draft
                  </Button>
                  {submitted && (
                    <p className="text-xs text-blue-900 dark:text-sky-400">
                      If your mail client didn&apos;t open, email us directly at{' '}
                      {COMPANY.email}.
                    </p>
                  )}
                </div>
                <p className="text-xs text-stone-500 dark:text-stone-500">
                  By submitting, you agree to us storing your message for follow
                  up. We never sell contact data.
                </p>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </SectionWrapper>
    </>
  )
}
