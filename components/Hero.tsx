'use client'

import { useEffect, useRef } from 'react'
import FlowmapImage from '@/components/effects/FlowmapImage'
import { gsap, ScrollTrigger, prefersReducedMotion } from '@/lib/anim'
import { scrollToSection } from '@/components/providers/SmoothScroll'

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const imgWrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current!
    const words = Array.from(root.querySelectorAll<HTMLElement>('.hero-word'))
    const fades = Array.from(root.querySelectorAll<HTMLElement>('.hero-fade'))

    if (prefersReducedMotion()) {
      gsap.set([...words, ...fades], { y: 0, yPercent: 0, opacity: 1 })
      return
    }

    gsap.set(words, { yPercent: 115 })
    gsap.set(fades, { opacity: 0, y: 18 })

    const intro = () => {
      const tl = gsap.timeline()
      tl.to(words, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.09 })
      tl.to(fades, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.09 }, '-=0.55')
    }

    const done = () => intro()
    window.addEventListener('preloader:done', done, { once: true })
    const fallback = window.setTimeout(intro, 2600)

    // Gentle parallax on the portrait.
    const st = ScrollTrigger.create({
      trigger: root,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        if (imgWrapRef.current) gsap.set(imgWrapRef.current, { yPercent: self.progress * 8 })
      },
    })

    return () => {
      window.removeEventListener('preloader:done', done)
      window.clearTimeout(fallback)
      st.kill()
    }
  }, [])

  return (
    <section ref={rootRef} className="relative md:min-h-svh w-full overflow-hidden bg-ivory flex items-center">
      {/* Grid areas: mobile → [name | photo] / [tagline] / [cta]; desktop → text col
          left, photo spans the right col. Single image, equal top/bottom padding. */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-16 md:py-16 grid grid-cols-[1fr_auto] gap-x-5 sm:gap-x-8 md:gap-x-12 gap-y-6 items-center md:content-center [grid-template-areas:'nm_ph'_'tg_tg'_'ct_ct'] md:[grid-template-areas:'nm_ph'_'tg_ph'_'ct_ph']"
      >
        {/* Name */}
        <div className="[grid-area:nm] min-w-0">
          <p className="hero-fade label mb-4 md:mb-6">Forward-Deployed Engineer · Health Data Science</p>
          <h1 className="font-display font-light text-ink leading-[0.85] tracking-[-0.02em] text-[13vw] sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="block overflow-hidden pb-[0.08em] mb-0 md:-mb-[0.05em]">
              <span className="hero-word inline-block">Hannah</span>
            </span>
            <span className="block overflow-hidden pb-[0.08em] mb-0 md:-mb-[0.05em]">
              <span className="hero-word inline-block italic text-honey">Teng</span>
            </span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="[grid-area:tg] hero-fade font-body font-light text-charcoal text-sm md:text-lg max-w-lg leading-relaxed md:mt-2">
          MSc Data Science in Health @ UCLA. I embed with clients to turn messy, real-world workflows
          into shipped systems — designing the frontend, translating business processes into product,
          and integrating with the tools teams already use.
        </p>

        {/* CTAs */}
        <div className="[grid-area:ct] hero-fade flex flex-wrap items-center gap-3 md:mt-3">
          <a
            href="https://agent.hannahteng.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-20 px-6 md:px-7 py-2.5 md:py-3 bg-ink text-ivory font-mono text-[11px] md:text-xs tracking-widest uppercase transition-colors duration-300 hover:bg-honey hover:text-ink"
            data-hover
          >
            Build Your Agent ↗
          </a>
          <button
            onClick={() => scrollToSection('#work')}
            className="px-6 md:px-7 py-2.5 md:py-3 border border-ink text-ink font-mono text-[11px] md:text-xs tracking-widest uppercase transition-colors duration-300 hover:border-honey hover:text-honey"
            data-hover
          >
            View Work
          </button>
          <a
            href="https://github.com/HannahTeng"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-7 py-2.5 md:py-3 border border-ink text-ink font-mono text-[11px] md:text-xs tracking-widest uppercase transition-colors duration-300 hover:border-honey hover:text-honey"
            data-hover
          >
            GitHub ↗
          </a>
          <span className="hero-fade inline-flex items-center gap-2.5 md:ml-1 md:pl-4 md:border-l border-linen">
            <span className="w-1.5 h-1.5 rounded-full bg-honey live-dot" />
            <span className="label !text-charcoal">Available Aug 2026</span>
          </span>
        </div>

        {/* Portrait — full image, no crop (container matches 3:4); scaled down on mobile */}
        <div className="[grid-area:ph] justify-self-end self-center">
          <div
            ref={imgWrapRef}
            className="relative aspect-[221/296] w-[34vw] max-w-[150px] sm:max-w-[230px] md:w-auto md:max-w-none md:h-[70vh] border border-linen"
          >
            <FlowmapImage src="/hero.jpg" alt="Zihan (Hannah) Teng" className="w-full h-full" />
            {/* thin honey offset frame for editorial depth */}
            <div className="absolute -bottom-2.5 -right-2.5 w-full h-full border border-honey/30 -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none hidden md:flex absolute bottom-8 left-12 z-0 flex-col items-start gap-2">
        <span className="label text-sand">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-sand to-transparent" />
      </div>
    </section>
  )
}
