import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function Projects() {
  const projects = [
    {
      title: 'Big Data Stock Market Analysis',
      description: 'Processing and analysis of large-scale stock market data using distributed computing frameworks.',
      technologies: ['Apache Kafka', 'Apache Spark', 'Hadoop', 'Docker'],
      highlights: ['Real-time data streaming', 'Distributed computing at scale', 'Containerized deployment'],
    },
    {
      title: 'Story Weaver',
      description: 'Interactive storytelling model using NLP to maintain context of evolving storylines in real-time.',
      technologies: ['NLP', 'GPT-3', 'Reinforcement Learning', 'TensorFlow', 'PyTorch'],
      highlights: ['Context-aware generation', 'RL for coherent continuations', 'Real-time interaction'],
    },
    {
      title: 'Parking CV System',
      description: 'Automated parking management using computer vision for real-time spot detection and plate reading.',
      technologies: ['OpenCV', 'YOLO', 'EasyOCR', 'Python'],
      highlights: ['Real-time spot detection', 'Vehicle recognition', 'License plate reading'],
    },
  ]

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Projects</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-14">Things I&apos;ve built</h2>
        </HeadingReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <StaggerItem key={index} index={index}>
              <MagneticCard>
                <div className="card h-full flex flex-col">
                  <h3 className="font-display text-lg md:text-xl font-bold text-charcoal dark:text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted dark:text-[#999] mb-5 text-sm leading-[1.8] flex-1">
                    {project.description}
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex gap-2 text-muted dark:text-[#888] text-sm">
                        <span className="text-forest dark:text-mint shrink-0">→</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tag text-[10px]">{tech}</span>
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
