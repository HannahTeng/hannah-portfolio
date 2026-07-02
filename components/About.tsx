'use client'

import SplitReveal from '@/components/ui/SplitReveal'
import Reveal from '@/components/ui/Reveal'
import WordFill from '@/components/ui/WordFill'
import Counter from '@/components/ui/Counter'

const stats = [
  { el: <Counter value={3.83} decimals={2} />, label: 'GPA at UCLA' },
  { el: <Counter value={10} suffix="+" />, label: 'Platform surfaces shipped' },
  { el: <Counter value={206} suffix="×" />, label: 'Specialty vs. geography' },
  { el: <Counter value={4} />, label: 'Industries deployed' },
]

const education = [
  { school: 'UCLA', degree: 'MSc Data Science in Health', years: '2025 – 2027', note: 'GPA 3.83 / 4.0' },
  { school: 'University of Nottingham', degree: 'BSc (Hons) Int. Business & Economics / Statistics', years: '2021 – 2025', note: 'Data Scholarship · Top 1%' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="label mb-14 text-honey">01 / About</p>

        {/* Signature scrub statement */}
        <WordFill
          text="I turn messy clinical and business data into products people actually use — the models, the agents, and the interfaces that ship them."
          className="font-display font-light text-3xl sm:text-4xl md:text-6xl leading-[1.12] tracking-tight max-w-5xl"
        />

        {/* Count-up stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-linen border border-linen mt-20">
          {stats.map((s, i) => (
            <Reveal key={i} index={i} className="bg-ivory p-6 md:p-8">
              <p className="font-display font-normal text-4xl md:text-5xl text-honey leading-none">
                {s.el}
              </p>
              <p className="label mt-3">{s.label}</p>
            </Reveal>
          ))}
        </div>

        {/* Bio + education */}
        <div className="grid md:grid-cols-2 gap-14 md:gap-20 mt-24">
          <div className="space-y-6">
            <SplitReveal
              as="h2"
              text="Between data science and product."
              className="font-display font-normal text-3xl md:text-4xl text-ink tracking-tight leading-tight"
            />
            <Reveal index={1}>
              <p className="font-body text-charcoal leading-relaxed">
                I&apos;m a first-year MSc student in Data Science in Health at UCLA, with a Statistics
                background from Nottingham. I model clinical and business data — then design and ship the
                agents, dashboards, and interfaces that put it to work.
              </p>
            </Reveal>
            <Reveal index={2}>
              <p className="font-body text-charcoal leading-relaxed">
                As a forward-deployed engineer I&apos;ve embedded across four industries, run discovery
                directly with non-technical operators, drawn the line between where AI agents act and where
                humans stay in the loop, and owned the frontend that ships it. Currently building an
                in-platform natural-language query agent for clinical data managers at USC-ATRI.
              </p>
            </Reveal>
          </div>

          <div className="space-y-4">
            <p className="label mb-6">Education</p>
            {education.map((edu, i) => (
              <Reveal key={edu.school} index={i}>
                <div className="border-t border-linen pt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-xl text-ink">{edu.school}</p>
                    <p className="font-body text-sm text-warm-gray mt-1">{edu.degree}</p>
                    <p className="label mt-2 !text-honey">{edu.note}</p>
                  </div>
                  <span className="font-mono text-xs text-light-gray whitespace-nowrap">{edu.years}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
