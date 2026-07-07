'use client'
import { useState } from 'react'
import SplitReveal from '@/components/ui/SplitReveal'
import Reveal from '@/components/ui/Reveal'

const work = [
  {
    role: 'Data Management Intern',
    company: 'ATRI — Alzheimer’s Therapeutic Research Institute, USC',
    period: 'Jun – Aug 2026',
    location: 'San Diego, USA',
    tag: 'Upcoming',
    bullets: [
      'Designing an in-platform natural-language query agent that lets clinical data managers query large trial datasets (CSV + text) in plain English for data-quality control — replacing manual file/column lookups.',
    ],
  },
  {
    role: 'Forward-Deployed Engineer',
    company: 'BiRoot AI — client-embedded agentic delivery',
    period: '2026 – Present',
    location: 'Los Angeles, USA',
    bullets: [
      'Front-line engineer across four client engagements — own frontend/UX design, business-process implementation, and client-facing consulting from discovery to delivery, integrating with the systems teams already use.',
      'An Irvine international education group: owned frontend/UX for a five-role platform (student, parent, counselor, studio, admin) + marketing site on a shared Next.js / React-Native codebase; scoped study-abroad workflows into an Epic→Story plan (4 architecture layers, 80 features) so the client could self-select priceable scope.',
      'A US customs broker: ran discovery with a 30-year broker (300+ entries/day) and designed a human-in-the-loop “co-pilot” so staff keep the judgment calls while repetitive filing is automated.',
      'A cross-border logistics & trucking operator: designed a Next.js + ag-grid dispatch dashboard (table + kanban) mirroring the client’s ERP UX; locked real load thresholds (100 CBM / 44,000 lb) before implementation.',
    ],
  },
  {
    role: 'Marketing Data Analyst',
    company: 'Wekruit — AI-powered mock interviews',
    period: 'Sep – Dec 2025',
    location: 'Hybrid',
    bullets: [
      'Designed A/B tests and ran cohort & funnel analysis in SQL and Python to locate drop-off — a 85% increase in user engagement.',
      'Applied survival analysis (Kaplan-Meier, Cox regression) in R on 1,500+ users; built a performance scoring model over 100+ creator partnerships, improving marketing spend efficiency by 30%.',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Tritium — Web 3.0 Research',
    period: 'Jan – Jul 2025',
    location: 'Remote',
    bullets: [
      'Built ETL pipelines (SQL + Python) extracting on-chain data from Layer-2 protocols — transaction volume, TVL, and user activity across 50+ DeFi projects.',
      'A/B tested user behavior pre/post protocol upgrades with scipy & statsmodels, quantifying impact on volume and retention.',
    ],
  },
  {
    role: 'Data Scientist Intern',
    company: 'Sinotrans Limited (Fortune 500)',
    period: 'Jul – Sep 2024',
    location: 'Ningbo, China',
    bullets: [
      'Structured 100,000+ datasets into centralized data pools supporting an L2–L3 digital-transformation initiative; contributed operational dashboards for real-time inventory, delivery timelines, and cost.',
      'Integrated fulfilment, returns, and resale inventory across 12 regional sites for RedNote cross-border e-commerce.',
    ],
  },
]

const research = [
  {
    role: 'Medicare Drug Cost Variation Analysis',
    company: 'UCLA',
    period: 'Fall 2025',
    location: 'Los Angeles, USA',
    tag: 'Research',
    bullets: [
      'Built hierarchical linear mixed models on 1 million Medicare Part D records — quantifying that prescriber specialty explains ~206× more oncology-drug cost variance than geography.',
    ],
  },
  {
    role: 'Health Data Visualization (SAS)',
    company: 'UCLA',
    period: 'Fall 2025',
    location: 'Los Angeles, USA',
    tag: 'Research',
    bullets: [
      'Structured and analyzed long-format longitudinal HRS data in SAS; built comparative visualizations of outcome distributions and temporal change across population subgroups.',
    ],
  },
  {
    role: 'Backend Developer — AbleEdu',
    company: 'AI Championship Hackathon',
    period: 'Fall 2025',
    location: 'Los Angeles, USA',
    tag: 'National-level',
    bullets: [
      'Designed backend for an AI educational agent integrating conversational AI with ElevenLabs voice synthesis.',
      'Implemented the Raindrop pedagogical framework supporting 4 learning-accessibility modes (visual, auditory, ADHD, reading).',
    ],
  },
  {
    role: 'Healthcare Operations Management Excellence (HOME) Lab',
    company: 'Research Collaborator',
    period: 'May – Sep 2024',
    location: 'Ningbo, China',
    bullets: [
      'Analyzed city-level emergency-response data with SQL & Python; designed pilot A/B tests with statistical power analysis for ambulance reallocation, and presented recommendations to hospital stakeholders.',
    ],
  },
  {
    role: 'National Award — Mathor Cup',
    company: 'Mathematical Contest',
    period: 'Mar 2024',
    location: 'China',
    tag: 'National Award',
    bullets: [
      'Applied analytical modeling and optimization (Python + Gurobi) to Alibaba Group logistics and distribution data.',
    ],
  },
]

type Tab = 'work' | 'research'

export default function Experience() {
  const [tab, setTab] = useState<Tab>('work')
  const items = tab === 'work' ? work : research

  return (
    <section id="work" className="relative py-28 md:py-36 px-6 bg-parchment">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="label mb-6 text-honey">02 / Experience</p>
          <SplitReveal
            as="h2"
            text="Where I’ve built"
            className="font-display font-normal section-title text-ink"
          />
          </div>

          <div className="flex border border-linen overflow-hidden">
            {(['work', 'research'] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                data-hover
                className={`px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                  tab === t ? 'bg-ink text-ivory' : 'bg-transparent text-warm-gray hover:text-charcoal'
                }`}
              >
                {t === 'work' ? 'Work' : 'Research & Awards'}
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-[7px] top-2 bottom-2 w-px bg-sand/60" />
          <div>
            {items.map((item, i) => (
              <Reveal key={`${tab}-${i}`} index={i} className="relative pl-7 md:pl-16 pb-10 group">
                <div className="absolute left-[-4px] md:left-[3px] top-2.5 w-2.5 h-2.5 rounded-full border border-honey bg-ivory group-hover:bg-honey transition-colors duration-300 z-10" />

                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="font-display card-title text-ink">{item.role}</h3>
                    {'tag' in item && item.tag && (
                      <span className="label !text-honey border border-honey/40 px-2 py-0.5">{item.tag}</span>
                    )}
                  </div>
                  <span className="font-mono text-xs text-warm-gray">{item.period}</span>
                </div>
                <p className="font-body text-sm text-warm-gray mt-1 mb-4">
                  {item.company} · {item.location}
                </p>

                <ul className="space-y-2 max-w-3xl">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-charcoal text-sm md:text-[15px] leading-relaxed">
                      <span className="text-honey mt-1.5 flex-shrink-0 text-[10px]">◆</span>
                      <span className="font-body">{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
