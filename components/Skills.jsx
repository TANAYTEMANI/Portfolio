import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

const ICONS = {
  'CrewAI': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="10" r="2.25" />
      <path d="M4 19a5 5 0 0110 0" />
      <path d="M14 18a4 4 0 016-3.46" />
    </svg>
  ),
  'RAG Pipelines': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="9" height="12" rx="1.5" />
      <path d="M7 8h4M7 11h4" />
      <circle cx="16" cy="15" r="3.5" />
      <path d="M18.5 17.5L21 20" />
    </svg>
  ),
  'Vector Databases': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  ),
  'Knowledge Graphs': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="6" r="1.8" />
      <circle cx="19" cy="6" r="1.8" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="5" cy="18" r="1.8" />
      <circle cx="19" cy="18" r="1.8" />
      <path d="M7 7l3 4M17 7l-3 4M7 17l3-4M17 17l-3-4" />
    </svg>
  ),
  'LLM Orchestration': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5" cy="7" r="1.8" />
      <circle cx="5" cy="17" r="1.8" />
      <circle cx="19" cy="12" r="2" />
      <path d="M6.5 8.5l10.5 2.5M6.5 15.5L17 13" />
    </svg>
  ),
  'Prompt Engineering': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 6h16v10H7l-3 3V6z" />
      <path d="M9 11h.01M12 11h.01M15 11h.01" />
    </svg>
  ),
  'Multimodal AI': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7l8-3.5L20 7l-8 3.5L4 7z" />
      <path d="M4 12l8 3.5 8-3.5" opacity="0.6" />
      <path d="M4 17l8 3.5 8-3.5" opacity="0.3" />
    </svg>
  ),
  'NLP': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 5h16v11H9l-5 4V5z" />
      <path d="M8 9h8M8 12h5" />
    </svg>
  ),
  'Deep Learning': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="7" r="1.5" />
      <circle cx="4" cy="17" r="1.5" />
      <circle cx="12" cy="5" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="19" r="1.5" />
      <circle cx="20" cy="12" r="1.5" />
      <path d="M5.3 7.8l5.4-2.3M5.3 7.8L10.7 12M5.3 16.2L10.7 12M5.3 16.2L10.7 18.5M13.3 5.5L18.5 11M13.5 12L18.5 12M13.3 18.5L18.5 12.5" />
    </svg>
  ),
  'Computer Vision': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12c0-1 4-7 10-7s10 6 10 7-4 7-10 7S2 13 2 12z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  'YOLO': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  ),
  'CNNs': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="4.5" height="16" rx="1" />
      <rect x="9.75" y="7" width="4.5" height="10" rx="1" />
      <rect x="16.5" y="9" width="4" height="6" rx="1" />
    </svg>
  ),
  'Transformers': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 9h5V4" />
      <path d="M8 15H3v5" />
      <path d="M20.5 9A9 9 0 005 6.5M3.5 15A9 9 0 0019 17.5" />
    </svg>
  ),
  'Reinforcement Learning': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5.5" />
      <circle cx="12" cy="12" r="2" fill="currentColor" />
    </svg>
  ),
  'EasyOCR': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7V5a1 1 0 011-1h3M20 7V5a1 1 0 00-1-1h-3M4 17v2a1 1 0 001 1h3M20 17v2a1 1 0 01-1 1h-3" />
      <path d="M8 10h8M8 14h6" />
    </svg>
  ),
}

function SkillPill({ name, slug }) {
  const customIcon = ICONS[name]

  return (
    <span className="tag inline-flex items-center gap-2">
      {slug ? (
        <img
          src={`https://cdn.simpleicons.org/${slug}`}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0"
        />
      ) : customIcon ? (
        <span aria-hidden="true" className="w-4 h-4 md:w-[18px] md:h-[18px] shrink-0 text-forest dark:text-mint">
          {customIcon}
        </span>
      ) : (
        <span
          aria-hidden="true"
          className="w-1.5 h-1.5 rounded-full bg-forest/60 dark:bg-mint/70 shrink-0"
        />
      )}
      <span>{name}</span>
    </span>
  )
}

export default function Skills() {
  const groups = [
    {
      title: 'Agentic AI & LLMs',
      description: 'Frameworks, orchestration, and retrieval systems that power intelligent multi-agent workflows',
      skills: [
        { name: 'PydanticAI', slug: 'pydantic' },
        { name: 'LangChain', slug: 'langchain' },
        { name: 'LangGraph', slug: 'langchain' },
        { name: 'CrewAI' },
        { name: 'RAG Pipelines' },
        { name: 'Vector Databases' },
        { name: 'Knowledge Graphs' },
        { name: 'LLM Orchestration' },
        { name: 'Prompt Engineering' },
        { name: 'Multimodal AI' },
        { name: 'NLP' },
      ],
    },
    {
      title: 'Machine Learning & Computer Vision',
      description: 'Deep learning, neural networks, and vision systems for real-world perception tasks',
      skills: [
        { name: 'TensorFlow', slug: 'tensorflow' },
        { name: 'PyTorch', slug: 'pytorch' },
        { name: 'Hugging Face', slug: 'huggingface' },
        { name: 'Deep Learning' },
        { name: 'Computer Vision' },
        { name: 'YOLO' },
        { name: 'CNNs' },
        { name: 'Transformers' },
        { name: 'Reinforcement Learning' },
        { name: 'OpenCV', slug: 'opencv' },
        { name: 'EasyOCR' },
      ],
    },
    {
      title: 'Programming Languages',
      description: 'Core languages I use to ship production software',
      skills: [
        { name: 'Python', slug: 'python' },
        { name: 'Java', slug: 'openjdk' },
        { name: 'C', slug: 'c' },
        { name: 'JavaScript', slug: 'javascript' },
        { name: 'TypeScript', slug: 'typescript' },
        { name: 'SQL', slug: 'mysql' },
      ],
    },
    {
      title: 'Data Engineering',
      description: 'Pipelines, warehouses, and streaming platforms for enterprise-scale data',
      skills: [
        { name: 'Snowflake', slug: 'snowflake' },
        { name: 'Apache Spark', slug: 'apachespark' },
        { name: 'Kafka', slug: 'apachekafka' },
        { name: 'Hadoop', slug: 'apachehadoop' },
        { name: 'Azure Data Factory', slug: 'microsoftazure' },
        { name: 'Azure Synapse', slug: 'microsoftazure' },
      ],
    },
    {
      title: 'Backend & Databases',
      description: 'APIs, data layers, and services that power real applications',
      skills: [
        { name: 'FastAPI', slug: 'fastapi' },
        { name: 'Pydantic', slug: 'pydantic' },
        { name: 'SQLAlchemy', slug: 'sqlalchemy' },
        { name: 'PostgreSQL', slug: 'postgresql' },
        { name: 'Node.js', slug: 'nodedotjs' },
      ],
    },
    {
      title: 'Frontend',
      description: 'Modern web stacks for building responsive, interactive interfaces',
      skills: [
        { name: 'React', slug: 'react' },
        { name: 'Next.js', slug: 'nextdotjs' },
        { name: 'Tailwind CSS', slug: 'tailwindcss' },
      ],
    },
    {
      title: 'DevOps & Tools',
      description: 'Infrastructure, containers, and developer tooling',
      skills: [
        { name: 'Docker', slug: 'docker' },
        { name: 'Kubernetes', slug: 'kubernetes' },
        { name: 'Linux', slug: 'linux' },
        { name: 'Git', slug: 'git' },
        { name: 'GitHub', slug: 'github' },
        { name: 'Shell', slug: 'gnubash' },
      ],
    },
  ]

  return (
    <section id="skills" className="section-padding bg-[#F0EDE6] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Skills</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-10">Tech stack</h2>
        </HeadingReveal>

        <StaggerContainer className="space-y-12">
          {groups.map((group, i) => (
            <StaggerItem key={i} index={i}>
              <div className="border-l-2 border-forest/20 dark:border-mint/20 pl-6 md:pl-8">
                <h3 className="font-display text-xl md:text-2xl font-bold text-charcoal dark:text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-muted dark:text-[#888] text-[15px] md:text-base mb-6 leading-relaxed max-w-3xl">
                  {group.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {group.skills.map((skill, j) => (
                    <SkillPill key={j} name={skill.name} slug={skill.slug} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
