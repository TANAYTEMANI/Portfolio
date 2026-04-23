import { motion } from 'framer-motion'
import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

const EASE = [0.22, 1, 0.36, 1]

export default function Contact() {
  const contactInfo = [
    {
      label: 'Email',
      value: 'agarwal.tanay28@gmail.com',
      link: 'mailto:agarwal.tanay28@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: 'Phone',
      value: '+91 9136863765',
      link: 'tel:+919136863765',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: 'Location',
      value: 'Mumbai, India',
      link: null,
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/tanay-agarwal-43b39520b/',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/TANAYTEMANI',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Contact</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-charcoal dark:text-white tracking-tight leading-[1.05] mt-5 mb-6">
            Let&apos;s build something
            <br />
            <span className="text-forest dark:text-mint">together.</span>
          </h2>
        </HeadingReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-muted dark:text-[#888] text-lg md:text-xl font-mono leading-relaxed max-w-2xl mb-14">
            Have an idea, a project, or just want to chat about AI and multi-agent systems? I&apos;d love to hear from you.
          </p>
        </ScrollReveal>

        <div className="space-y-12">
          <StaggerContainer className="grid sm:grid-cols-3 gap-4">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index} index={index}>
                <MagneticCard intensity={8}>
                  {info.link ? (
                    <a href={info.link} className="card block group">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-forest/[0.06] dark:bg-mint/[0.08] flex items-center justify-center text-forest dark:text-mint group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-muted dark:text-[#888] text-[12px] md:text-[13px] font-mono uppercase tracking-[0.18em] mb-1.5">
                            {info.label}
                          </p>
                          <p className="font-display font-semibold text-charcoal dark:text-white text-base md:text-lg break-words">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div className="card">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-forest/[0.06] dark:bg-mint/[0.08] flex items-center justify-center text-forest dark:text-mint">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-muted dark:text-[#888] text-[12px] md:text-[13px] font-mono uppercase tracking-[0.18em] mb-1.5">
                            {info.label}
                          </p>
                          <p className="font-display font-semibold text-charcoal dark:text-white text-base md:text-lg break-words">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </MagneticCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.03 }}
                  transition={{ duration: 0.2, ease: EASE }}
                  className="inline-flex items-center gap-2.5 px-6 py-3 border border-charcoal/15 dark:border-[#333] rounded-full text-charcoal dark:text-white hover:border-forest dark:hover:border-mint hover:text-forest dark:hover:text-mint transition-colors duration-300 hover:shadow-md font-mono text-sm uppercase tracking-wider"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <motion.a
              href="/Tanay_Agarwal_Resume.pdf"
              download="Tanay_Agarwal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-forest dark:bg-mint text-white dark:text-[#0C0C0C] font-mono font-medium text-base uppercase tracking-wider rounded-full hover:bg-forest-deep dark:hover:bg-[#5BC67B] transition-colors duration-300 hover:shadow-xl hover:shadow-forest/15 dark:hover:shadow-mint/15"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              Download Resume
            </motion.a>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.3}>
          <div className="mt-24 pt-10 border-t border-bone dark:border-[#222] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-muted/50 dark:text-[#555] text-[13px] md:text-sm font-mono">
              &copy; {new Date().getFullYear()} Tanay Agarwal
            </p>
            <p className="text-muted/50 dark:text-[#555] text-[13px] md:text-sm font-mono">
              Designed & crafted in Mumbai
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
