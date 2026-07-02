'use client'

import { useEffect, useRef } from 'react'

/* ────────────────────────────────────────────────────────────────────────
   CanvasTrail — translucent "jellyfish bell" cursor particles (Canvas 2D)
   ------------------------------------------------------------------------
   Emits soft, translucent particles in a radial DOME (hemisphere) around the
   cursor so they read as a jellyfish bell rather than a motion trail. Each
   particle is a soft radial-gradient sprite (bright core → transparent edge),
   drawn at low opacity so overlaps glow softly instead of stacking into blobs.
   Particles live briefly, fade out on an ease-out curve, and scale up as they
   age to mimic a bell pulsing and dissipating. A faint persistent core marks
   the cursor while idle (native cursor stays hidden).

   Reduced-motion → renders nothing. Coarse pointer → no cursor to emit from.
   ──────────────────────────────────────────────────────────────────────── */

// ── Tweak these ──────────────────────────────────────────────────────────
const CONFIG = {
  particleCount: 3, // particles emitted per move tick
  emitThrottleMs: 18, // min ms between emissions (density control)
  domeRadius: 46, // px — radius of the jellyfish-bell dome
  baseOpacity: 0.3, // translucency of each particle (0.2–0.4)
  lifetime: 780, // ms — base particle lifespan (short dwell)
  fadeCurve: 2, // ease-out exponent for alpha → 0 (higher = snappier fade)
  startScale: 0.55, // sprite scale at birth
  endScale: 1.75, // sprite scale at death (bell expanding as it dissipates)
  particleSize: 26, // px — base sprite draw size (before scale)
  drift: 0.35, // outward drift speed along the dome direction
  buoyancy: -0.14, // slight upward drift (jellyfish rising)
  color: '201, 169, 110', // honey RGB
  blend: 'source-over' as GlobalCompositeOperation, // 'lighter' for additive glow
  showCore: true, // faint persistent dot at the cursor while idle
  coreSize: 15, // px — persistent core sprite size
  maxParticles: 420, // hard cap (perf safety)
}

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  age: number
  life: number
  size: number
}

// Pre-render a soft radial-gradient sprite once (bright center → transparent).
function makeSprite(color: string): HTMLCanvasElement {
  const size = 64
  const c = document.createElement('canvas')
  c.width = c.height = size
  const g = c.getContext('2d')!
  const grad = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0, 'rgba(245, 228, 194, 0.95)') // bright warm core
  grad.addColorStop(0.45, `rgba(${color}, 0.5)`)
  grad.addColorStop(1, `rgba(${color}, 0)`) // fully transparent edge
  g.fillStyle = grad
  g.fillRect(0, 0, size, size)
  return c
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export default function CanvasTrail({ enableCanvasTrail = true }: { enableCanvasTrail?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!enableCanvasTrail) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const fine = window.matchMedia('(pointer: fine)').matches
    if (reduced || !fine) return

    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    const sprite = makeSprite(CONFIG.color)
    document.body.classList.add('trail-host') // hide native cursor

    let dpr = Math.min(window.devicePixelRatio, 2)
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const particles: Particle[] = []
    let cx = -100
    let cy = -100
    let hasCursor = false
    let lastEmit = 0

    // Emit a small burst positioned across the upper-hemisphere dome.
    const emit = (x: number, y: number) => {
      for (let i = 0; i < CONFIG.particleCount; i++) {
        const a = Math.random() * Math.PI // 0..π → upper semicircle (dome)
        const r = CONFIG.domeRadius * Math.sqrt(Math.random()) // area-uniform
        const ox = Math.cos(a) * r
        const oy = -Math.sin(a) * r // up = negative
        const spread = 0.5 + Math.random()
        particles.push({
          x: x + ox,
          y: y + oy,
          vx: Math.cos(a) * CONFIG.drift * spread,
          vy: -Math.sin(a) * CONFIG.drift * spread + CONFIG.buoyancy,
          age: 0,
          life: CONFIG.lifetime * (0.7 + Math.random() * 0.6),
          size: CONFIG.particleSize * (0.6 + Math.random() * 0.8),
        })
      }
      if (particles.length > CONFIG.maxParticles) {
        particles.splice(0, particles.length - CONFIG.maxParticles)
      }
    }

    const onMove = (e: PointerEvent) => {
      cx = e.clientX
      cy = e.clientY
      hasCursor = true
      const now = performance.now()
      if (now - lastEmit >= CONFIG.emitThrottleMs) {
        emit(cx, cy)
        lastEmit = now
      }
    }
    window.addEventListener('pointermove', onMove, { passive: true })

    let raf = 0
    let prev = performance.now()

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame)
      const dt = Math.min(now - prev, 50) // clamp dt after tab switches
      prev = now

      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      ctx.globalCompositeOperation = CONFIG.blend

      // Update + draw particles; keep survivors.
      let w = 0
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.age += dt
        if (p.age >= p.life) continue
        p.x += p.vx * (dt / 16)
        p.y += p.vy * (dt / 16)

        const t = p.age / p.life
        const alpha = CONFIG.baseOpacity * Math.pow(1 - t, CONFIG.fadeCurve) // ease-out → 0
        const s = p.size * lerp(CONFIG.startScale, CONFIG.endScale, t) // expand while fading

        ctx.globalAlpha = alpha
        ctx.drawImage(sprite, p.x - s / 2, p.y - s / 2, s, s)

        particles[w++] = p // compact live particles in place
      }
      particles.length = w

      // Faint persistent core so the cursor is locatable when idle.
      if (CONFIG.showCore && hasCursor) {
        ctx.globalAlpha = CONFIG.baseOpacity * 1.4
        ctx.drawImage(sprite, cx - CONFIG.coreSize / 2, cy - CONFIG.coreSize / 2, CONFIG.coreSize, CONFIG.coreSize)
      }

      ctx.globalAlpha = 1
    }

    const start = () => {
      if (raf) return
      prev = performance.now()
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }
    start()

    const onVisibility = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
      document.body.classList.remove('trail-host')
    }
  }, [enableCanvasTrail])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[60] pointer-events-none hidden md:block"
      aria-hidden
    />
  )
}
