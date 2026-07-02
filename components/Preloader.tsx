'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap, prefersReducedMotion } from '@/lib/anim'

/**
 * Light editorial preloader: name rises char-by-char, a counter runs 000→100
 * alongside a honey progress rule, then the whole panel slides up to reveal the
 * hero. Dispatches `preloader:done` so the Hero can begin its intro.
 */
export default function Preloader() {
  const rootRef = useRef<HTMLDivElement>(null)
  const countRef = useRef<HTMLSpanElement>(null)
  const [gone, setGone] = useState(false)

  useEffect(() => {
    const finish = () => {
      window.dispatchEvent(new CustomEvent('preloader:done'))
      setGone(true)
      document.body.style.overflow = ''
    }

    if (prefersReducedMotion()) {
      finish()
      return
    }

    document.body.style.overflow = 'hidden'
    const counter = { v: 0 }
    const tl = gsap.timeline({ onComplete: finish })

    tl.to('.pre-char', {
      y: 0,
      opacity: 1,
      stagger: 0.05,
      duration: 0.7,
      ease: 'power3.out',
    })
    tl.to(
      counter,
      {
        v: 100,
        duration: 1.4,
        ease: 'power2.inOut',
        onUpdate: () => {
          if (countRef.current)
            countRef.current.textContent = String(Math.round(counter.v)).padStart(3, '0')
        },
      },
      0.15,
    )
    tl.to('.pre-bar-fill', { scaleX: 1, duration: 1.4, ease: 'power2.inOut' }, 0.15)
    tl.to(rootRef.current, { yPercent: -100, duration: 0.9, ease: 'power4.inOut' }, '+=0.2')

    return () => {
      tl.kill()
      document.body.style.overflow = ''
    }
  }, [])

  if (gone) return null

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[80] bg-ivory flex flex-col justify-between px-6 py-8 md:px-14 md:py-12"
      aria-hidden
    >
      <div className="flex justify-between items-start font-mono text-[10px] tracking-[0.3em] uppercase text-warm-gray">
        <span>Zihan · Hannah Teng</span>
        <span className="hidden sm:inline">Data Science · UCLA</span>
      </div>

      <div className="overflow-hidden">
        <h1 className="font-display font-light text-[15vw] md:text-[10vw] leading-[0.9] tracking-tight text-ink select-none">
          {'HANNAH'.split('').map((c, i) => (
            <span key={i} className="pre-char inline-block translate-y-[110%] opacity-0">
              {c}
            </span>
          ))}
        </h1>
      </div>

      <div className="flex items-end justify-between gap-8">
        <div className="flex-1 h-px bg-ink/10 relative overflow-hidden">
          <div className="pre-bar-fill absolute inset-0 bg-honey origin-left scale-x-0" />
        </div>
        <span ref={countRef} className="font-mono text-sm text-ink tabular-nums">
          000
        </span>
      </div>
    </div>
  )
}
