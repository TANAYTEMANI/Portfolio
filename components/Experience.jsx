import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function Experience() {
  const experiences = [
    {
      company: 'TheAgentic',
      subtitle: 'Zenith Software Limited',
      role: 'Artificial Intelligence Developer',
      period: 'May 2025 – Present',
      description: 'Built and productionized multi-agent AI systems using PydanticAI, enabling autonomous document intelligence, structured data extraction, and agent-orchestrated reasoning.',
      highlights: [
        'Developed enterprise-scale autonomous agent ecosystems (15+ agents) for CRM, onboarding, and lifecycle analytics—integrated with HubSpot, Salesforce, Slack, Gmail, Jira.',
        'Designed advanced retrieval-augmented reasoning, policy-intelligence, and strategic-recommendation agents for insurance and financial domains.',
        'Implemented multimodal AI pipelines, including vision-augmented agents and web-intelligence agents for deep research and risk analysis.',
        'Coordinated directly with clients to refine requirements, optimize performance, and deliver production-ready AI solutions.',
      ],
      tags: ['PydanticAI', 'Multi-Agent AI', 'LLMs', 'RAG', 'Enterprise Automation'],
    },
    {
      company: 'Saint Gobain – INDEC',
      role: 'Associate Software Engineer',
      period: 'Jun 2024 – May 2025',
      description: 'Acquired hands-on expertise in Data Engineering tools and designed Generative AI Chatbots for enterprise use.',
      highlights: [
        'Acquired expertise in Snowflake, Azure Data Factory (ADF), and Azure Synapse Analytics.',
        'Designed three Generative AI Chatbots: HR Chatbot, BookOfIT Chatbot, and ServiceNow Chatbot.',
        'Leveraged LangChain, LangGraph, and Knowledge Graphs for efficient, context-aware chatbots.',
      ],
      tags: ['Snowflake', 'Azure ADF', 'LangChain', 'LangGraph', 'Knowledge Graphs'],
    },
    {
      company: 'Shunya Dot Ek',
      role: 'Machine Learning Intern',
      period: 'Feb – Aug 2023',
      description: 'Increased product accuracy to 97.6% using deep learning for computer vision.',
      highlights: [
        'Implemented deep learning models for product recognition, object tracking, and movement recognition.',
        'Utilized YOLO, Faster-RCNN, and OpenCV for computer vision tasks.',
      ],
      tags: ['Computer Vision', 'YOLO', 'Deep Learning', 'OpenCV', 'PyTorch'],
    },
    {
      company: 'ICICI Prudential',
      role: 'Software Engineer Intern',
      period: 'Aug – Dec 2022',
      description: 'Decreased Bloomberg file transfer time by over 40% through automation.',
      highlights: [
        'Automated project payment file transfer, reducing transfer time by 40%+.',
        'Assisted in Host-to-Host File Transfer Automation for Investment Rationale Project.',
      ],
      tags: ['SAP', 'Automation', 'File Transfer', 'Bloomberg'],
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
          <h2 className="section-title mb-14">Where I&apos;ve worked</h2>
        </HeadingReveal>

        <StaggerContainer className="space-y-6">
          {experiences.map((exp, index) => (
            <StaggerItem key={index} index={index}>
              <MagneticCard intensity={4}>
                <div className="card">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal dark:text-white">
                        {exp.company}
                        {exp.subtitle && (
                          <span className="text-muted dark:text-[#666] font-normal text-sm ml-2">
                            ({exp.subtitle})
                          </span>
                        )}
                      </h3>
                      <p className="text-forest dark:text-mint text-sm font-mono mt-1">
                        {exp.role}
                      </p>
                    </div>
                    <span className="text-muted dark:text-[#666] text-xs font-mono whitespace-nowrap tracking-wide uppercase">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-muted dark:text-[#999] mb-5 text-sm md:text-base leading-[1.8]">
                    {exp.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted dark:text-[#888] text-sm">
                        <span className="text-forest dark:text-mint mt-0.5 shrink-0">→</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
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
