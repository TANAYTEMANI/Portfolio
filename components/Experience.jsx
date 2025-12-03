export default function Experience() {
  const experiences = [
    {
      company: "TheAgentic (Zenith Software Limited)",
      role: "Artificial Intelligence Developer",
      period: "May 2025-Present",
      description: "Built and productionized multi-agent AI systems using PydanticAI, enabling autonomous document intelligence, structured data extraction, and agent-orchestrated reasoning across documents and enterprise knowledge bases.",
      highlights: [
        "Developed enterprise-scale autonomous agent ecosystems (15+ agents) for CRM, onboarding, and lifecycle analytics—integrated with HubSpot, Salesforce, Slack, Gmail, Jira, and more—delivering end-to-end AI automation for business operations.",
        "Designed advanced retrieval-augmented reasoning, policy-intelligence, and strategic-recommendation agents that generate insights, summarize complex artifacts, and support expert decision-making in insurance and other financial domains.",
        "Implemented multimodal AI pipelines, including vision-augmented agents and web-intelligence agents for deep research, data collection, and risk analysis.",
        "Coordinated directly with clients to refine requirements, optimize performance, and deliver robust, production-ready AI solutions across multiple high-impact initiatives."
      ],
      tags: ["PydanticAI", "Multi-Agent AI", "LLMs", "RAG", "Enterprise Automation"]
    },
    {
      company: "Saint Gobain - INDEC",
      role: "Associate Software Engineer",
      period: "Jun 2024-May 2025",
      description: "Acquired hands-on expertise in Data Engineering tools and designed Generative AI Chatbots for enterprise use.",
      highlights: [
        "Acquired expertise in Snowflake, Azure Data Factory (ADF), and Azure Synapse Analytics, earning two Snowflake Badges.",
        "Designed three Generative AI Chatbots: HR Chatbot for employee queries, BookOfIT Chatbot using Knowledge Graph and LangGraph Agents for IT support, and ServiceNow Chatbot with sequential step-finding capabilities.",
        "Leveraged LangChain, LangGraph (Agentic Approach), and Knowledge Graphs to ensure chatbots are efficient, context-aware, and aligned with business needs."
      ],
      tags: ["Snowflake", "Azure ADF", "LangChain", "LangGraph", "Knowledge Graphs"]
    },
    {
      company: "Shunya Dot Ek",
      role: "Machine Learning Intern",
      period: "Feb 2023 - Aug 2023",
      description: "Increased product (Divya Drishti) accuracy to 97.6% using deep learning models for computer vision tasks.",
      highlights: [
        "Implemented deep learning models for product recognition, object tracking, and movement recognition.",
        "Utilized YOLO, Faster-RCNN, and OpenCV for various computer vision tasks."
      ],
      tags: ["Computer Vision", "YOLO", "Deep Learning", "OpenCV", "PyTorch"]
    },
    {
      company: "ICICI Prudential Life Insurance",
      role: "Software Engineer Intern",
      period: "Aug 2022 - Dec 2022",
      description: "Decreased the average Bloomberg job file transfer time by over 40% through automation.",
      highlights: [
        "Automated project payment file transfer, reducing transfer time by 40%+.",
        "Collaborated with IT-SAP team to ensure business requirements were met.",
        "Assisted in Host-to-Host File Transfer Automation for Investment Rationale Project."
      ],
      tags: ["SAP", "Automation", "File Transfer", "Bloomberg Integration"]
    }
  ]

  return (
    <section id="experience" className="section-spacing px-6 md:px-12 lg:px-24 bg-terminal-hover">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">build_logs.experience</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* Experience List */}
        <div className="space-y-8 ml-8 md:ml-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="border border-terminal-dim p-6 md:p-8 rounded-lg hover:border-terminal-accent transition-all card-hover"
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-terminal-accent">
                    {exp.company}
                  </h3>
                  <p className="text-terminal-text text-base md:text-lg mt-1">
                    {exp.role}
                  </p>
                </div>
                <span className="text-terminal-dim text-sm md:text-base whitespace-nowrap">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-terminal-text mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-terminal-dim text-sm md:text-base">
                    <span className="text-terminal-accent mt-1">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
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

