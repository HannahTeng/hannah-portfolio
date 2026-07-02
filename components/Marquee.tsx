'use client'

const ITEMS = [
  'HEALTH DATA SCIENCE',
  '1M+ MEDICARE RECORDS MODELED',
  'AGENTIC AI · HUMAN-IN-THE-LOOP',
  'FORWARD DEPLOYED ENGINEER',
  'NEXT.JS · REACT · TAILWIND',
  'CLINICAL NL-QUERY AGENTS',
  'A/B TESTING · SURVIVAL ANALYSIS',
  'CDMP® CERTIFIED',
]

export default function Marquee() {
  const row = (
    <>
      {ITEMS.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-6 md:gap-10 shrink-0">
          <span className="font-mono text-xs md:text-sm font-bold tracking-[0.18em] uppercase whitespace-nowrap">
            {item}
          </span>
          <span className="text-honey text-base leading-none" aria-hidden>
            ✦
          </span>
        </span>
      ))}
    </>
  )

  return (
    <div
      className="relative z-10 bg-ink text-ivory border-y border-ink py-3.5 md:py-4 overflow-hidden select-none"
      aria-hidden
    >
      <div
        className="marquee-track flex items-center gap-6 md:gap-10 w-max"
        style={{ ['--marquee-speed' as string]: '34s' }}
      >
        {row}
        {row}
      </div>
    </div>
  )
}
