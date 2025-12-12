export default function Projects() {
  const projects = [
    {
      title: "Big Data based Stock Market Analysis",
      description: "Efficient processing and analysis of large-scale stock market data to gain valuable insights using distributed computing frameworks.",
      technologies: ["Apache Kafka", "Apache Spark", "Hadoop", "Docker"],
      highlights: [
        "Real-time data streaming and processing",
        "Distributed computing for large datasets",
        "Containerized deployment pipeline"
      ]
    },
    {
      title: "Story Weaver: Interactive Storytelling",
      description: "An interactive storytelling model that utilizes NLP techniques to comprehend user inputs and maintain context of evolving storylines in real-time.",
      technologies: ["NLP", "GPT-3", "Reinforcement Learning", "TensorFlow", "PyTorch"],
      highlights: [
        "Context-aware story generation",
        "Reinforcement Learning for coherent continuations",
        "Real-time user interaction processing"
      ]
    },
    {
      title: "Parking Management System using Computer Vision",
      description: "Automated parking management system based on computer vision aiming to streamline the overall parking process.",
      technologies: ["OpenCV", "YOLO", "EasyOCR", "Python"],
      highlights: [
        "Real-time parking spot detection",
        "Automated vehicle recognition",
        "License plate reading system"
      ]
    }
  ]

  return (
    <section id="projects" className="section-spacing px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">projects</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-1 gap-8 ml-8 md:ml-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-terminal-dim p-6 md:p-8 rounded-lg hover:border-terminal-accent transition-all card-hover"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-terminal-accent mb-3">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-terminal-text mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-terminal-dim text-sm md:text-base">
                    <span className="text-terminal-accent">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

