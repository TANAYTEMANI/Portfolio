import { useState, useEffect } from 'react'
import { useTheme } from './ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { darkMode, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-cream/90 dark:bg-[#0C0C0C]/90 backdrop-blur-xl border-b border-bone/60 dark:border-[#222]'
            : 'bg-transparent'
        }`}
      >
        <div className="px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto py-4 flex items-center justify-between">
            <a
              href="#"
              className="font-display font-extrabold text-xl tracking-tight text-charcoal dark:text-white hover:text-forest dark:hover:text-mint transition-colors"
            >
              tanay<span className="text-forest dark:text-mint">.</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="link-hover text-muted hover:text-charcoal dark:text-[#888] dark:hover:text-white transition-colors text-sm font-mono"
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={toggleTheme}
                className="ml-2 p-2 rounded-lg border border-bone dark:border-[#2A2A2A] hover:border-forest/30 dark:hover:border-mint/25 transition-all hover:bg-forest/[0.03] dark:hover:bg-mint/[0.04]"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-4 h-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg border border-bone dark:border-[#2A2A2A] transition-all"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <svg className="w-4 h-4 text-mint" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-charcoal dark:text-white"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-cream dark:bg-[#0C0C0C] md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setMobileOpen(false)}
                  className="font-display text-3xl font-bold text-charcoal dark:text-white hover:text-forest dark:hover:text-mint transition-colors tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
