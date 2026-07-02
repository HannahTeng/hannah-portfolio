'use client'

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
  return (
    <section id="skills" className="relative py-28 md:py-36 px-6 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="label mb-6 text-honey">04 / Skills</p>
          <SplitReveal
            as="h2"
            text="What I work with"
            className="font-display font-normal text-4xl md:text-6xl text-ink tracking-tight"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-linen border border-linen mb-12">
          {groups.map((g, i) => (
            <Reveal key={g.cat} index={i % 3} className="bg-ivory p-6">
              <p className="label !text-honey mb-4">{g.cat}</p>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    data-hover
                    className="font-body text-xs text-charcoal bg-parchment border border-linen px-2.5 py-1 hover:border-honey hover:text-honey transition-colors duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="border border-linen bg-ivory p-7 md:p-8">
          <p className="label !text-honey mb-6">Certifications & Awards</p>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
            {certs.map((c) => (
              <div key={c} className="flex items-start gap-3 border-t border-linen pt-3">
                <span className="text-honey mt-1 text-[10px]">◆</span>
                <p className="font-body text-charcoal text-sm">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
