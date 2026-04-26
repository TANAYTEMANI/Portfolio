import { motion } from 'framer-motion'
import { ScrollReveal, HeadingReveal } from './ScrollReveal'

const EASE = [0.22, 1, 0.36, 1]

const projects = [
  {
    title: 'CutDraft',
    description: 'CutDraft is an AI video editor that helps creators turn raw footage into ready-to-post short-form videos using plain-language commands for clean cuts, captions, thumbnails, and exports across Reels, Shorts, podcasts, tutorials, and creator workflows.',
    status: 'In Active Development',
    technologies: ['React', 'Next.js', 'FFmpeg', 'OpenAI', 'Python', 'Vision Model', 'FastAPI', 'LangGraph', 'PostgreSQL', 'Qdrant'],
  },
  {
    title: 'FinDocMind',
    description: 'Enterprise-grade AI-Powered Document Intelligence Platform that transforms unstructured financial documents (PDFs, Excel, CSV) into structured Extraction Grids using a sophisticated three-stage AI agent pipeline built on OpenAI\'s GPT models.',
    status: 'Nearing Completion',
    github: 'https://github.com/TANAYTEMANI/FinDocMind',
    technologies: ['OpenAI GPT-4', 'LangChain Agents', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'PostgreSQL'],
  },
]

function ProjectCard({ project }) {
  const statusColor = 'bg-forest/[0.06] dark:bg-mint/[0.08] text-forest dark:text-mint border-forest/[0.12] dark:border-mint/[0.15]'

  return (
    <div className="w-full">
      <div className="card h-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal dark:text-white tracking-tight">
            {project.title}
          </h3>
          <span className={`text-[11px] md:text-xs font-mono uppercase tracking-widest px-3 py-1.5 border rounded-full w-fit shrink-0 ${statusColor}`}>
            {project.status}
          </span>
        </div>

        <p className="text-muted dark:text-[#999] mb-6 text-[15px] md:text-base leading-[1.75]">
          {project.description}
        </p>


        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tag">{tech}</span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-charcoal/20 dark:border-[#444] text-charcoal dark:text-white rounded-full hover:border-forest dark:hover:border-mint hover:text-forest dark:hover:text-mint transition-all text-sm font-mono uppercase tracking-wider hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function WhatIAmBuilding() {
  return (
    <section id="building" className="section-padding bg-[#F0EDE6] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Building</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <div className="flex items-end justify-between mb-4 md:mb-10">
          <HeadingReveal delay={0.1}>
            <h2 className="section-title">What I&apos;m working on</h2>
          </HeadingReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
