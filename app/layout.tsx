import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/providers/SmoothScroll'
import CanvasTrail from '@/components/effects/CanvasTrail'
import Preloader from '@/components/Preloader'
import Nav from '@/components/Nav'

export const metadata: Metadata = {
  title: 'Hannah Teng — Data Scientist & Builder',
  description:
    'Zihan (Hannah) Teng — MSc Data Science in Health at UCLA. Building data & AI products end to end, from clinical NL-query agents to the dashboards and interfaces that ship them.',
  keywords: [
    'Hannah Teng',
    'Zihan Teng',
    'Data Scientist',
    'Health Data Science',
    'Forward Deployed Engineer',
    'Agentic AI',
    'UCLA',
    'Next.js',
  ],
  openGraph: {
    title: 'Hannah Teng — Data Scientist & Builder',
    description: 'Health Data Science · Agentic AI · Frontend that ships',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* `.grain` overlays animated film grain; `trail-host` toggled by CanvasTrail */}
      <body className="grain">
        {/* Effect B — the glowing ribbon is the cursor (flip enableCanvasTrail to disable) */}
        <CanvasTrail enableCanvasTrail />
        <Preloader />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  )
}
