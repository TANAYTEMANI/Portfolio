export default function Skills() {
  const skillCategories = [
    {
      category: "AI & LLM Ecosystem",
      description: "Building intelligent systems with Large Language Models",
      skills: [
        "Agentic AI", "PydanticAI", "LangChain", "LangGraph", "CrewAI",
        "RAG Pipelines", "Vector Databases", "Knowledge Graphs",
        "LLM Orchestration", "Prompt Engineering", "NLP",
        "Multimodal AI (Vision + Text)"
      ]
    },
    {
      category: "Machine Learning",
      description: "Deep learning and computer vision expertise",
      skills: [
        "TensorFlow", "PyTorch", "Deep Learning", "Computer Vision",
        "YOLO", "CNNs", "Transformers", "Reinforcement Learning"
      ]
    },
    {
      category: "Data / Backend",
      description: "Data engineering and backend technologies",
      skills: [
        "SQL", "Snowflake", "Azure Data Factory (ADF)",
        "Azure Synapse Analytics", "Apache Spark", "Kafka", "Hadoop"
      ]
    },
    {
      category: "Programming",
      description: "Core programming languages",
      skills: ["Python", "Java", "C", "JavaScript", "TypeScript"]
    },
    {
      category: "DevOps / Tools",
      description: "Development and deployment tools",
      skills: [
        "Docker", "Kubernetes", "Linux", "GitHub", "Shell",
        "React", "Node.js", "Git"
      ]
    }
  ]

  return (
    <section id="skills" className="section-spacing px-6 md:px-12 lg:px-24 bg-terminal-hover">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">tech_stack</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 ml-8 md:ml-12">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="border border-terminal-dim p-6 rounded-lg hover:border-terminal-accent transition-all card-hover"
            >
              {/* Category Header */}
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-bold text-terminal-accent mb-1">
                  {category.category}
                </h3>
                <p className="text-terminal-dim text-sm">
                  {category.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tag text-xs md:text-sm">
                    {skill}
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

