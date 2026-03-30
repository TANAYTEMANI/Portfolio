import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState('enter')

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const duration = 1200
    let start = null

    function tick() {
      if (!start) start = Date.now()
      const elapsed = Date.now() - start
      const p = Math.min(elapsed / duration, 1)
      setProgress(p)

      if (p < 1) {
        requestAnimationFrame(tick)
      } else {
        setPhase('exit')
        setTimeout(() => {
          document.body.style.overflow = ''
          onComplete()
        }, 1150)
      }
    }

    const timer = setTimeout(() => requestAnimationFrame(tick), 400)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream dark:bg-[#0C0C0C]"
          initial={{ y: 0 }}
          animate={phase === 'exit' ? { y: '-100%' } : { y: 0 }}
          transition={phase === 'exit' ? { duration: 1.1, ease: [0.76, 0, 0.24, 1] } : {}}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="text-center"
          >
            <h1 className="font-display text-4xl md:text-5xl font-extrabold text-charcoal dark:text-white tracking-tight">
              tanay<span className="text-forest dark:text-mint">.</span>
            </h1>

            <div className="mt-8 w-48 md:w-64 h-[3px] bg-bone/40 dark:bg-[#222] rounded-full overflow-hidden mx-auto">
              <div
                className="h-full bg-forest dark:bg-mint rounded-full transition-none"
                style={{ width: `${progress * 100}%` }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
