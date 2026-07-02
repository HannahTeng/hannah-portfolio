'use client'

import SplitReveal from '@/components/ui/SplitReveal'
import Reveal from '@/components/ui/Reveal'

const projects = [
  {
    no: '01',
    title: 'Clinical NL-Query Agent',
    subtitle: 'USC-ATRI · Natural Language → Data QC',
    description:
      'An in-platform agent that lets clinical data managers query large trial datasets (CSV + text) in plain English for data-quality control — replacing manual file and column lookups.',
    tags: ['Agentic AI', 'Clinical Data', 'Python', 'NL Interface'],
    highlight: 'In progress',
  },
  {
    no: '02',
    title: 'Agentic Dispatch Dashboard',
    subtitle: 'Biroot AI · Logistics · Human-in-the-loop',
    description:
      'Encoded real dispatcher load thresholds (100 CBM / 44,000 lb) as an agent’s decision rules, then designed and shipped an ag-grid dashboard surfacing agent-proposed loads for one-click human approval.',
    tags: ['Next.js', 'ag-grid', 'Agentic AI', 'Frontend'],
  },
  {
    no: '03',
    title: 'Medicare Drug Cost Variation',
    subtitle: 'UCLA · Hierarchical Modeling · R / SAS',
    description:
      'Hierarchical linear mixed models on 1 million Medicare Part D records, quantifying that prescriber specialty explains ~206× more oncology-drug cost variance than geography.',
    tags: ['R', 'SAS', 'Mixed Models', 'Health Policy'],
    highlight: '1M records',
  },
  {
    no: '04',
    title: 'AbleEdu — AI Educational Agent',
    subtitle: 'Hackathon · Backend · ElevenLabs',
    description:
      'Backend for an AI educational agent integrating conversational AI with ElevenLabs voice synthesis, plus the Raindrop pedagogical framework supporting 4 learning-accessibility modes.',
    tags: ['TypeScript', 'ElevenLabs', 'AI Agent', 'Raindrop'],
    highlight: 'National-level',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="label mb-6 text-honey">03 / Projects</p>
          <SplitReveal
            as="h2"
            text="Selected work"
            className="font-display font-normal text-4xl md:text-6xl text-ink tracking-tight"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-linen border border-linen">
          {projects.map((p, i) => (
            <Reveal key={p.no} index={i % 2}>
              <a
                href="https://github.com/HannahTeng"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="group relative block bg-ivory p-7 md:p-9 h-full hover:bg-parchment transition-colors duration-500"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="font-mono text-xs text-light-gray">{p.no}</span>
                  {p.highlight && (
                    <span className="label !text-honey border border-honey/40 px-2 py-0.5">{p.highlight}</span>
                  )}
                </div>

                <h3 className="font-display font-normal text-2xl md:text-3xl text-ink group-hover:text-honey transition-colors duration-300 leading-tight">
                  {p.title}
                </h3>
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-warm-gray mt-2">
                  {p.subtitle}
                </p>

                <p className="font-body text-charcoal text-sm leading-relaxed mt-5 mb-7">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="label bg-linen px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>

                <svg
                  className="absolute top-7 right-7 md:top-9 md:right-9 w-4 h-4 text-sand opacity-0 group-hover:opacity-100 group-hover:text-honey group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
