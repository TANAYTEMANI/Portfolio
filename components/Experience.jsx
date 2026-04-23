import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function Experience() {
  const experiences = [
    {
      company: 'TheAgentic',
      subtitle: 'Zenith Software Limited',
      role: 'Artificial Intelligence Developer',
      period: 'May 2025 – Present',
      description:
        'Built and productionized 15+ autonomous agents using PydanticAI for CRM, onboarding, and lifecycle analytics — integrated with HubSpot, Salesforce, Slack, Gmail, and Jira. Designed RAG, policy-intelligence, and multimodal pipelines for insurance and financial clients, shipping production-ready AI automation end-to-end.',
      logo: { src: '/logos/theagentic.jpeg', alt: 'TheAgentic logo' },
    },
    {
      company: 'Saint Gobain',
      subtitle: 'INDEC',
      role: 'Associate Software Engineer',
      period: 'Jun 2024 – May 2025',
      description:
        'Engineered data pipelines with Snowflake, Azure Data Factory, and Synapse Analytics. Built three production Generative AI chatbots — HR, BookOfIT, and ServiceNow — using LangChain, LangGraph, and Knowledge Graphs for context-aware enterprise search.',
      logo: { src: '/logos/saint-gobain.jpeg', alt: 'Saint Gobain INDEC logo' },
    },
    {
      company: 'Shunya Dot Ek',
      role: 'Machine Learning Intern',
      period: 'Feb – Aug 2023',
      description:
        'Built deep learning models for product recognition, object tracking, and movement detection using YOLO, Faster-RCNN, and OpenCV — pushing product accuracy to 97.6% across the computer vision pipeline.',
      logo: { letter: 'Σ', bg: 'from-stone-400/15 to-stone-600/15', text: 'text-stone-600 dark:text-stone-300' },
    },
    {
      company: 'ICICI Prudential',
      role: 'Software Engineer Intern',
      period: 'Aug – Dec 2022',
      description:
        'Automated Bloomberg file transfers and Host-to-Host workflows for the Investment Rationale project, cutting transfer time by 40%+ through SAP-integrated automation.',
      logo: { src: '/logos/icici-prudential.jpg', alt: 'ICICI Prudential logo' },
    },
  ]

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Experience</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-10">Where I&apos;ve worked</h2>
        </HeadingReveal>

        <StaggerContainer className="space-y-5">
          {experiences.map((exp, index) => (
            <StaggerItem key={index} index={index}>
              <MagneticCard intensity={4}>
                <div className="card">
                  <div className="flex items-start gap-4 md:gap-5">
                    {exp.logo.src ? (
                      <div className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-white border border-bone dark:border-[#2A2A2A] flex items-center justify-center p-1.5">
                        <img
                          src={exp.logo.src}
                          alt={exp.logo.alt}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div
                        className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${exp.logo.bg} border border-bone dark:border-[#2A2A2A] flex items-center justify-center font-display font-bold text-xl md:text-2xl ${exp.logo.text}`}
                      >
                        {exp.logo.letter}
                      </div>
                    )}

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4 mb-3">
                        <div className="min-w-0">
                          <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal dark:text-white leading-tight">
                            {exp.company}
                            {exp.subtitle && (
                              <span className="text-muted dark:text-[#666] font-normal text-[15px] ml-2">
                                ({exp.subtitle})
                              </span>
                            )}
                          </h3>
                          <p className="text-muted dark:text-[#888] text-[15px] md:text-base mt-1">
                            {exp.role}
                          </p>
                        </div>
                        <span className="text-forest dark:text-mint text-[13px] md:text-sm font-mono whitespace-nowrap tracking-wide">
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-muted dark:text-[#999] text-[15px] md:text-base leading-[1.75]">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
