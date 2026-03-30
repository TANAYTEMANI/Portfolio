import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

export function ScrollReveal({ children, delay = 0, direction = 'up', className = '' }) {
  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HeadingReveal({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={`pb-1 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({ children, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, index = 0, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: EASE,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
