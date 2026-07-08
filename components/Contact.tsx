'use client'

import { FormEvent, useState } from 'react'
import SplitReveal from '@/components/ui/SplitReveal'
import Reveal from '@/components/ui/Reveal'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const subject = encodeURIComponent('Collaboration inquiry')
    const body = encodeURIComponent(
      [
        `Name: ${name || 'Not provided'}`,
        `Email: ${email || 'Not provided'}`,
        '',
        message || 'Hi Hannah, I would like to discuss a collaboration.',
      ].join('\n'),
    )

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=hannahteng777@gmail.com&su=${subject}&body=${body}`,
      '_blank',
      'noopener,noreferrer',
    )
  }

  return (
    <section id="contact" className="relative py-20 md:py-40 px-6 bg-ink text-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="label mb-5 md:mb-8 !text-honey">05 / Contact</p>

        <SplitReveal
          as="h2"
          text="Let’s build something."
          className="font-display font-light section-title mb-7 md:mb-10"
        />

        <Reveal index={1}>
          <p className="font-body font-light body-copy text-light-gray max-w-xl mb-10 md:mb-14">
            Open to full-time data science, forward-deployed, and AI-product roles from August 2026 —
            plus research collaborations at the intersection of health and AI.
          </p>
        </Reveal>

        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <Reveal index={2}>
            <div>
              <a
                href="mailto:hannahteng777@gmail.com"
                data-hover
                className="group inline-flex items-center gap-3 font-display font-normal text-2xl sm:text-4xl md:text-5xl text-ivory hover:text-honey transition-colors duration-300"
              >
                hannahteng777@gmail.com
                <svg
                  className="w-6 h-6 md:w-8 md:h-8 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>

              <div className="flex flex-wrap items-center gap-3 mt-10">
                {[
                  { label: 'GitHub ↗', href: 'https://github.com/HannahTeng' },
                  { label: 'Email ↗', href: 'mailto:hannahteng777@gmail.com' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    data-hover
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-ivory/80 border border-ivory/20 px-5 py-2.5 hover:border-honey hover:text-honey transition-colors duration-300"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal index={3}>
            <form onSubmit={sendMessage} className="border-y border-ivory/15">
              <div className="grid gap-px bg-ivory/10 md:grid-cols-2">
                <label className="block bg-ink py-4 md:py-5 md:pr-5">
                  <span className="label !text-honey">Name</span>
                  <input
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="mt-3 w-full bg-transparent font-body text-base text-ivory outline-none placeholder:text-light-gray/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="block bg-ink py-4 md:py-5 md:pl-5">
                  <span className="label !text-honey">Reply email</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="mt-3 w-full bg-transparent font-body text-base text-ivory outline-none placeholder:text-light-gray/50"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block border-t border-ivory/10 py-5">
                <span className="label !text-honey">Cooperation message</span>
                <textarea
                  required
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  className="mt-3 min-h-32 w-full resize-none bg-transparent font-body text-base leading-relaxed text-ivory outline-none placeholder:text-light-gray/50"
                  placeholder="Tell me what you are building, where AI/data fits, and what kind of collaboration you have in mind."
                />
              </label>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-ivory/10 py-5">
                <p className="label !text-warm-gray">Opens Gmail composer</p>
                <button
                  type="submit"
                  data-hover
                  className="bg-ivory px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:bg-honey"
                >
                  Send Message ↗
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-14 md:mt-24 pt-8 border-t border-ivory/10">
          <p className="label !text-warm-gray">© 2026 Zihan (Hannah) Teng</p>
          <p className="label !text-warm-gray">Next.js · Three.js · GSAP · Tailwind</p>
        </div>
      </div>
    </section>
  )
}
