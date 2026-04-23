import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function About() {
  const highlights = [
    {
      title: 'When I Unplug',
      description: 'Reading books, following cricket, and hunting for the best filter coffee in town',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 8.25c0 3.314-1.679 6-3.75 6s-3.75-2.686-3.75-6M3 10.5h12.75a3.75 3.75 0 010 7.5H15m-12 0h12a3 3 0 003-3v-4.5a3 3 0 00-3-3H3v10.5zM15.75 5.25v.008h.008V5.25h-.008zM12 5.25v.008h.008V5.25H12zM8.25 5.25v.008h.008V5.25H8.25z" />
        </svg>
      ),
    },
    {
      title: 'Based In',
      description: 'Exploring Mumbai — from Marine Drive mornings to late-night street food runs',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
    {
      title: 'Philosophy',
      description: 'Ship real things, stay curious, and let agents do the boring work',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      ),
    },
  ]

  return (
    <section id="about" className="section-padding bg-[#F0EDE6] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ About</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-10">Who I am</h2>
        </HeadingReveal>

        <div className="space-y-6 mb-14">
          <ScrollReveal delay={0.15}>
            <p className="text-muted dark:text-[#999] text-lg md:text-xl leading-[1.75] max-w-4xl">
              I&apos;m an AI Engineer who builds production-ready intelligent systems that solve real-world problems.
              Currently at <span className="text-forest dark:text-mint font-semibold">TheAgentic (Zenith Software Limited)</span>,
              I specialize in building multi-agent AI systems using <span className="text-forest dark:text-mint">PydanticAI</span>,
              enabling autonomous document intelligence, structured data extraction, and agent-orchestrated reasoning.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted dark:text-[#999] text-lg md:text-xl leading-[1.75] max-w-4xl">
              I&apos;ve developed enterprise-scale autonomous agent ecosystems (15+ agents) for CRM, onboarding, and lifecycle
              analytics—delivering <span className="text-forest dark:text-mint font-semibold">end-to-end AI automation</span> for
              business operations across platforms like HubSpot, Salesforce, Slack, Gmail, and Jira.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <StaggerItem key={i} index={i}>
              <MagneticCard>
                <div className="card h-full">
                  <div className="w-10 h-10 rounded-xl bg-forest/[0.07] dark:bg-mint/[0.08] flex items-center justify-center text-forest dark:text-mint mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display font-bold text-charcoal dark:text-white text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted dark:text-[#888] text-[15px] md:text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.15}>
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-8">
              <span className="section-label">/ Words I live by</span>
              <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
            </div>

            <MagneticCard>
              <div className="card relative overflow-hidden">
                <svg
                  aria-hidden="true"
                  className="absolute top-6 left-6 w-10 h-10 text-forest/15 dark:text-mint/15"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.17 6C4.32 6 2 8.32 2 11.17v6.83h6.83v-6.83H5.5c0-1.84 1.49-3.33 3.33-3.33V6H7.17zm10 0c-2.85 0-5.17 2.32-5.17 5.17v6.83h6.83v-6.83h-3.33c0-1.84 1.49-3.33 3.33-3.33V6h-1.66z" />
                </svg>
                <p className="relative z-10 pl-14 pr-4 py-4 text-xl md:text-2xl font-display italic text-charcoal dark:text-white leading-relaxed">
                  Build with intent. Automate the noise. Keep the human in the loop.
                </p>
              </div>
            </MagneticCard>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
