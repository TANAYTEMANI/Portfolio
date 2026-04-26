import { useEffect, useRef } from 'react'

const CODE_CHARS = ['{', '}', '<', '>', '/', '(', ')', '=', ';', ':', '[', ']', '0', '1', '*', '&', '|', '+', '.', '#', '=>', 'fn', 'AI', '01', '&&', '::']

export default function CursorEffects() {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if ('ontouchstart' in window && navigator.maxTouchPoints > 0) return

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let particles = []
    let animId
    let lastSpawn = 0

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function getColor() {
      const isDark = document.documentElement.classList.contains('dark')
      return isDark ? [250, 204, 21] : [45, 95, 59]
    }

    function onMouseMove(e) {
      const absoluteY = e.clientY + window.scrollY
      if (absoluteY > window.innerHeight) return

      const now = Date.now()
      if (now - lastSpawn < 30) return
      lastSpawn = now

      const count = 1 + Math.floor(Math.random() * 2)
      for (let i = 0; i < count; i++) {
        particles.push({
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          char: CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)],
          opacity: 0.35 + Math.random() * 0.25,
          vx: (Math.random() - 0.5) * 1,
          vy: -Math.random() * 1.2 - 0.4,
          size: 9 + Math.random() * 5,
          life: 1,
          decay: 0.012 + Math.random() * 0.018,
        })
      }
    }

    document.addEventListener('mousemove', onMouseMove)

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const [r, g, b] = getColor()

      particles = particles.filter(p => p.life > 0)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.life -= p.decay

        const alpha = p.life * p.opacity
        ctx.font = `${p.size}px 'JetBrains Mono', monospace`
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
        ctx.fillText(p.char, p.x, p.y)
      }

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      document.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[35]"
      style={{ opacity: 0.7 }}
    />
  )
}
