'use client'

import SplitReveal from '@/components/ui/SplitReveal'
import Reveal from '@/components/ui/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 bg-ink text-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="label mb-8 !text-honey">05 / Contact</p>

        <SplitReveal
          as="h2"
          text="Let’s build something."
          className="font-display font-light section-title mb-10"
        />

        <Reveal index={1}>
          <p className="font-body font-light body-copy text-light-gray max-w-xl mb-14">
            Open to full-time data science, forward-deployed, and AI-product roles from August 2026 —
            plus research collaborations at the intersection of health and AI.
          </p>
        </Reveal>

        <Reveal index={2}>
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
        </Reveal>

        <Reveal index={3}>
          <div className="flex flex-wrap items-center gap-3 mt-16">
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
        </Reveal>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-24 pt-8 border-t border-ivory/10">
          <p className="label !text-warm-gray">© 2026 Zihan (Hannah) Teng</p>
          <p className="label !text-warm-gray">Next.js · Three.js · GSAP · Tailwind</p>
        </div>
      </div>
    </section>
  )
}
