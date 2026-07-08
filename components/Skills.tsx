'use client'

import { useState } from 'react'
import SplitReveal from '@/components/ui/SplitReveal'
import Reveal from '@/components/ui/Reveal'

const groups = [
  { cat: 'Languages & Analysis', skills: ['Python', 'R', 'TypeScript', 'SQL', 'SAS', 'MATLAB'] },
  { cat: 'Frontend / UX', skills: ['Next.js', 'React', 'React Native', 'Tailwind', 'ag-grid', 'Figma'] },
  { cat: 'Agentic System Design', skills: ['Agent / Human Boundaries', 'Human-in-the-loop', 'Workflow Decomposition', 'Browser Automation', 'Escalation Design'] },
  { cat: 'Machine Learning & Stats', skills: ['Survival Analysis', 'Mixed Models', 'Random Forest', 'LASSO', 'A/B Testing', 'scikit-learn'] },
  { cat: 'Data Engineering & BI', skills: ['Pandas', 'ETL Pipelines', 'GeoPandas', 'Tableau', 'Power BI', 'ggplot2'] },
  { cat: 'Delivery & Consulting', skills: ['Requirements Discovery', 'Epic-to-Story Scoping', 'Build-vs-Reuse', 'Client Consulting', 'US–China Delivery'] },
]

const certs = [
  'Certified Data Management Professional (CDMP)®',
  'ASA — Associate Professional Member',
  'Google Data Analytics Professional Certificate',
  'IBM Data Science Professional Certificate',
  'IBM Business Analysis Professional Certificate',
  'International Business Certificate — X-Culture',
]

export default function Skills() {
  const [openKey, setOpenKey] = useState('Agentic System Design')
  const [certsOpen, setCertsOpen] = useState(false)

  return (
    <section id="skills" className="relative py-20 md:py-36 px-6 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 md:mb-16">
          <p className="label mb-4 md:mb-6 text-honey">04 / Skills</p>
          <SplitReveal
            as="h2"
            text="What I work with"
            className="font-display font-normal text-4xl md:text-6xl text-ink tracking-tight"
          />
        </div>

        <div className="border-y border-linen">
          {groups.map((g, i) => (
            <Reveal key={g.cat} index={i % 3}>
              <div className="border-b border-linen last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenKey(openKey === g.cat ? '' : g.cat)}
                  className="group flex w-full items-center justify-between gap-5 py-5 md:py-6 text-left"
                  aria-expanded={openKey === g.cat}
                  data-hover
                >
                  <span className="flex min-w-0 items-baseline gap-4 md:gap-6">
                    <span className="font-mono text-[11px] text-light-gray">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-display text-2xl md:text-3xl leading-none text-ink transition-colors duration-300 group-hover:text-honey">
                      {g.cat}
                    </span>
                  </span>
                  <span className="font-mono text-xs text-warm-gray transition-colors duration-300 group-hover:text-honey">
                    {openKey === g.cat ? '-' : '+'}
                  </span>
                </button>

                {openKey === g.cat && (
                  <div className="pb-5 md:pb-6 pl-[2.7rem] md:pl-[3.25rem] -mt-1">
                    <p className="font-body text-sm md:text-[15px] leading-relaxed text-warm-gray">
                      {g.skills.join(' · ')}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="border-b border-linen">
          <div>
            <button
              type="button"
              onClick={() => setCertsOpen(!certsOpen)}
              className="group flex w-full items-center justify-between gap-5 py-5 md:py-6 text-left"
              aria-expanded={certsOpen}
              data-hover
            >
              <span className="flex min-w-0 items-baseline gap-4 md:gap-6">
                <span className="font-mono text-[11px] text-light-gray">07</span>
                <span className="font-display text-2xl md:text-3xl leading-none text-ink transition-colors duration-300 group-hover:text-honey">
                  Certifications & Awards
                </span>
              </span>
              <span className="font-mono text-xs text-warm-gray transition-colors duration-300 group-hover:text-honey">
                {certsOpen ? '-' : '+'}
              </span>
            </button>

            {certsOpen && (
              <div className="pb-5 md:pb-6 pl-[2.7rem] md:pl-[3.25rem] -mt-1">
                <p className="font-body text-sm md:text-[15px] leading-relaxed text-warm-gray">
                  {certs.join(' · ')}
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
