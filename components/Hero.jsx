import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]
const FIRST = 'TANAY'
const LAST = 'AGARWAL'

function AnimatedChar({ char, delay }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 80, rotateX: -90 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
      className="inline-block"
      style={{ transformOrigin: 'bottom center' }}
    >
      {char}
    </motion.span>
  )
}

export default function Hero() {
  const baseDelay = 0.2
  const charDelay = 0.04

  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
          >
            <span className="section-label">/ Hello, I&apos;m</span>
          </motion.div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-charcoal dark:text-white leading-[0.92] tracking-[-0.03em]">
            <span className="block overflow-hidden pb-2">
              {FIRST.split('').map((char, i) => (
                <AnimatedChar key={`f${i}`} char={char} delay={baseDelay + i * charDelay} />
              ))}
            </span>
            <span className="block overflow-hidden pb-2">
              {LAST.split('').map((char, i) => (
                <AnimatedChar
                  key={`l${i}`}
                  char={char}
                  delay={baseDelay + (FIRST.length + i) * charDelay}
                />
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: baseDelay + (FIRST.length + LAST.length) * charDelay + 0.1,
                  ease: EASE,
                }}
                className="text-forest dark:text-mint inline-block"
              >
                .
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85, ease: EASE }}
            className="text-muted dark:text-[#888] text-lg md:text-xl leading-relaxed max-w-2xl font-mono"
          >
            I build intelligent AI systems that automate work and deliver real results.
            Currently crafting production-ready multi-agent ecosystems at TheAgentic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95, ease: EASE }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <a
              href="#experience"
              className="px-6 py-3 bg-forest dark:bg-mint text-white dark:text-[#0C0C0C] font-semibold rounded-lg hover:bg-forest-deep dark:hover:bg-[#5BC67B] transition-all duration-300 hover:shadow-lg hover:shadow-forest/15 dark:hover:shadow-mint/15 hover:-translate-y-0.5"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-charcoal/20 dark:border-[#444] text-charcoal dark:text-white font-semibold rounded-lg hover:border-forest dark:hover:border-mint hover:text-forest dark:hover:text-mint transition-all duration-300 hover:-translate-y-0.5"
            >
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2, ease: EASE }}
            className="pt-16 md:pt-24"
          >
            <a href="#about" className="inline-flex items-center gap-2 text-muted/60 dark:text-[#555] text-[15px] font-mono hover:text-forest dark:hover:text-mint transition-colors group">
              <span>scroll to explore</span>
              <svg className="w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
