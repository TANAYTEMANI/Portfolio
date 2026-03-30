import { ScrollReveal, HeadingReveal } from './ScrollReveal'

function MarqueeRow({ skills, reverse = false, speed = 35 }) {
  const tripled = [...skills, ...skills, ...skills]

  return (
    <div className="overflow-hidden py-1.5">
      <div
        className={`flex gap-3 whitespace-nowrap ${reverse ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {tripled.map((skill, i) => (
          <span key={i} className="tag shrink-0">{skill}</span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const rows = [
    { skills: ['Agentic AI', 'PydanticAI', 'LangChain', 'LangGraph', 'CrewAI', 'RAG Pipelines', 'Vector Databases', 'Knowledge Graphs', 'LLM Orchestration', 'Prompt Engineering', 'NLP', 'Multimodal AI'], speed: 40 },
    { skills: ['TensorFlow', 'PyTorch', 'Deep Learning', 'Computer Vision', 'YOLO', 'CNNs', 'Transformers', 'Reinforcement Learning', 'Snowflake', 'Apache Spark', 'Kafka', 'Hadoop'], speed: 35, reverse: true },
    { skills: ['Python', 'Java', 'C', 'JavaScript', 'TypeScript', 'SQL', 'Azure Data Factory', 'Azure Synapse', 'FastAPI', 'Pydantic', 'SQLAlchemy', 'PostgreSQL'], speed: 38 },
    { skills: ['Docker', 'Kubernetes', 'Linux', 'GitHub', 'Shell', 'React', 'Node.js', 'Git', 'OpenCV', 'EasyOCR', 'Next.js', 'Tailwind CSS'], speed: 32, reverse: true },
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
          <h2 className="section-title mb-14">Tech stack</h2>
        </HeadingReveal>

        <ScrollReveal delay={0.2}>
          <div className="space-y-3">
            {rows.map((row, i) => (
              <MarqueeRow
                key={i}
                skills={row.skills}
                reverse={row.reverse}
                speed={row.speed}
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
