export default function WhatIAmBuilding() {
    const currentProjects = [
        {
            title: "FinDocMind",
            description: "Enterprise-grade AI-Powered Document Intelligence Platform that transforms unstructured financial documents (PDFs, Excel, CSV) into structured Extraction Grids using a sophisticated three-stage AI agent pipeline. Built on OpenAI's GPT models, the system employs hierarchical agent orchestration to intelligently identify, consolidate, and extract data fields across multi-page, multi-format document sets without manual configuration.",
            status: "In Active Development",
            github: "https://github.com/TANAYTEMANI/FinDocMind",
            aiAgents: [
                {
                    name: "Page Analyzer Agent",
                    role: "Level 1: Page-level field discovery",
                    description: "Analyzes individual document pages to identify potential data fields using context-aware extraction"
                },
                {
                    name: "Document Consolidator Agent",
                    role: "Level 2: Document-level field merging",
                    description: "Consolidates fields across all pages of a single document, deduplicating similar fields (e.g., 'CEO' and 'Chief Executive')"
                },
                {
                    name: "Multi-Doc Orchestrator Agent",
                    role: "Level 3: Cross-document field standardization",
                    description: "Creates a unified field set across all documents while maintaining quantitative/qualitative balance"
                }
            ],
            features: [
                "Three-Stage AI Agent Pipeline: Hierarchical agent orchestration from page → document → multi-document level",
                "Auto-Field Generation: GPT-powered field discovery with semantic understanding and deduplication",
                "Intelligent Field Balancing: Maintains optimal 60/40 split between quantitative metrics and qualitative context",
                "Multi-Format Processing: Handles PDF text extraction, Excel multi-sheet analysis, and CSV structured data",
                "Async Agent Execution: Concurrent processing pipeline with FastAPI for high-throughput document analysis",
                "Production-Ready Architecture: Type-safe Pydantic models, SQLAlchemy ORM, structured logging with context tracking"
            ],
            technologies: ["OpenAI GPT-4", "LangChain Agents", "FastAPI", "SQLAlchemy", "Pydantic", "Python AsyncIO", "PostgreSQL"]
        }
    ]

    return (
        <section id="building" className="section-spacing px-6 md:px-12 lg:px-24">
            <div className="max-w-5xl mx-auto space-y-12">
                {/* Section Header */}
                <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
                    <span className="text-terminal-accent">&gt;</span>
                    <h2 className="text-terminal-text">what_i_am_building</h2>
                    <span className="text-terminal-accent cursor-blink">_</span>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-1 gap-8 ml-8 md:ml-12">
                    {currentProjects.map((project, index) => (
                        <div
                            key={index}
                            className="border border-terminal-dim p-6 md:p-8 rounded-lg hover:border-terminal-accent transition-all card-hover"
                        >
                            {/* Title and Status */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 gap-2">
                                <h3 className="text-xl md:text-2xl font-bold text-terminal-accent">
                                    {project.title}
                                </h3>
                                <span className="text-sm md:text-base px-3 py-1 bg-terminal-accent/10 border border-terminal-accent text-terminal-accent rounded-md w-fit">
                                    {project.status}
                                </span>
                            </div>

                            {/* Description */}
                            <p className="text-terminal-text mb-5 leading-relaxed">
                                {project.description}
                            </p>

                            {/* AI Agents Architecture */}
                            {project.aiAgents && (
                                <div className="mb-5">
                                    <h4 className="text-terminal-accent font-semibold mb-3 text-sm md:text-base">
                                        AI Agent Architecture:
                                    </h4>
                                    <div className="space-y-3 pl-2">
                                        {project.aiAgents.map((agent, i) => (
                                            <div key={i} className="border-l-2 border-terminal-accent/40 pl-4 py-2">
                                                <div className="flex items-start gap-2 mb-1">
                                                    <span className="text-terminal-accent font-mono text-xs md:text-sm mt-0.5">▸</span>
                                                    <div className="flex-1">
                                                        <h5 className="text-terminal-accent font-semibold text-sm md:text-base">{agent.name}</h5>
                                                        <p className="text-terminal-dim text-xs md:text-sm italic mb-1">{agent.role}</p>
                                                        <p className="text-terminal-text text-xs md:text-sm">{agent.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Features */}
                            <div className="mb-5">
                                <h4 className="text-terminal-accent font-semibold mb-2 text-sm md:text-base">Technical Highlights:</h4>
                                <ul className="space-y-2">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="flex gap-3 text-terminal-dim text-sm md:text-base">
                                            <span className="text-terminal-accent">•</span>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 pt-2 mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="tag">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub Link */}
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-terminal-accent hover:text-terminal-text transition-colors border border-terminal-accent hover:bg-terminal-accent/10 px-4 py-2 rounded-md text-sm md:text-base"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                    View on GitHub
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
