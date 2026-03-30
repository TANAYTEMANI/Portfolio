import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function About() {
  const highlights = [
    {
      title: 'Focus',
      items: ['Multi-Agent AI Systems', 'Enterprise Automation', 'Data Engineering'],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: 'Approach',
      items: ['Production-ready AI solutions', 'Strategic decision-making', 'Client-centric development'],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
        </svg>
      ),
    },
    {
      title: 'AI Experiments',
      items: ['Tinkering with new LLMs', 'Building personal AI agents', 'Exploring GPT-4 & Claude'],
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
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
          <h2 className="section-title mb-14">Who I am</h2>
        </HeadingReveal>

        <div className="space-y-6 mb-20">
          <ScrollReveal delay={0.15}>
            <p className="text-muted dark:text-[#999] text-base leading-[1.8] max-w-4xl">
              I&apos;m an AI Engineer who builds production-ready intelligent systems that solve real-world problems.
              Currently at <span className="text-forest dark:text-mint font-semibold">TheAgentic (Zenith Software Limited)</span>,
              I specialize in building multi-agent AI systems using <span className="text-forest dark:text-mint">PydanticAI</span>,
              enabling autonomous document intelligence, structured data extraction, and agent-orchestrated reasoning.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-muted dark:text-[#999] text-base leading-[1.8] max-w-4xl">
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
                  <h3 className="font-display font-bold text-charcoal dark:text-white text-lg mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-1.5">
                    {item.items.map((line, j) => (
                      <li key={j} className="text-muted dark:text-[#888] text-sm leading-relaxed font-mono">
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
