import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal, HeadingReveal } from './ScrollReveal'

const EASE = [0.22, 1, 0.36, 1]

const projects = [
  {
    title: 'VoxAgent',
    description: 'Real-time AI voice telecalling system that runs a fully autonomous outbound sales call pipeline — live microphone capture, streaming speech-to-text, LLM-driven conversation, and instant text-to-speech playback — all with sub-second latency.',
    status: 'In Active Development',
    pipeline: [
      { name: 'Deepgram STT', role: 'Listen', description: 'Streaming speech-to-text with dual-signal turn detection and incomplete-utterance guards' },
      { name: 'Groq LLM', role: 'Think', description: 'Speculative token streaming on Llama 3.3 70B with persona-driven call flow and objection handling' },
      { name: 'Cartesia TTS', role: 'Speak', description: 'Sonic-3 streaming text-to-speech with echo-aware VAD for natural barge-in support' },
    ],
    features: [
      'End-to-end voice loop: Mic → STT → LLM → TTS → Speaker in real-time',
      'Speculative LLM inference — starts generating before STT finalizes for ~300ms head start',
      'Echo-aware VAD enables barge-in without headphones',
      'Structured call logging with delta timestamps for latency debugging',
      'Full call recording and transcript export for review and tuning',
    ],
    technologies: ['Deepgram', 'Groq', 'Cartesia Sonic-3', 'Python AsyncIO', 'Pydantic', 'sounddevice'],
    pipelineLabel: 'Voice Pipeline',
  },
  {
    title: 'FinDocMind',
    description: 'Enterprise-grade AI-Powered Document Intelligence Platform that transforms unstructured financial documents (PDFs, Excel, CSV) into structured Extraction Grids using a sophisticated three-stage AI agent pipeline built on OpenAI\'s GPT models.',
    status: 'Nearing Completion',
    github: 'https://github.com/TANAYTEMANI/FinDocMind',
    pipeline: [
      { name: 'Page Analyzer', role: 'Level 1', description: 'Page-level field discovery with context-aware extraction' },
      { name: 'Doc Consolidator', role: 'Level 2', description: 'Document-level field merging and deduplication' },
      { name: 'Multi-Doc Orchestrator', role: 'Level 3', description: 'Cross-document field standardization and balancing' },
    ],
    features: [
      'Three-Stage AI Agent Pipeline with hierarchical orchestration',
      'GPT-powered field discovery with semantic deduplication',
      'Multi-format processing: PDF, Excel, CSV',
      'Async concurrent processing pipeline with FastAPI',
      'Type-safe Pydantic models, SQLAlchemy ORM, structured logging',
    ],
    technologies: ['OpenAI GPT-4', 'LangChain Agents', 'FastAPI', 'SQLAlchemy', 'Pydantic', 'Python AsyncIO', 'PostgreSQL'],
    pipelineLabel: 'Agent Architecture',
  },
]

function ProjectCard({ project }) {
  const statusColor = 'bg-forest/[0.06] dark:bg-mint/[0.08] text-forest dark:text-mint border-forest/[0.12] dark:border-mint/[0.15]'

  return (
    <div className="w-[85vw] md:w-[70vw] lg:w-[55vw] flex-shrink-0 snap-center">
      <div className="card h-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-3">
          <h3 className="font-display text-2xl md:text-3xl font-extrabold text-charcoal dark:text-white tracking-tight">
            {project.title}
          </h3>
          <span className={`text-[10px] font-mono uppercase tracking-widest px-3 py-1.5 border rounded-full w-fit shrink-0 ${statusColor}`}>
            {project.status}
          </span>
        </div>

        <p className="text-muted dark:text-[#999] mb-8 text-sm md:text-base leading-[1.8]">
          {project.description}
        </p>

        <div className="mb-8">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-mint mb-4">
            {project.pipelineLabel}
          </h4>
          <div className="grid sm:grid-cols-3 gap-3">
            {project.pipeline.map((stage, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-charcoal dark:bg-[#0A0A0A] border border-charcoal/80 dark:border-[#222]"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-6 h-6 rounded-md bg-forest/20 dark:bg-mint/15 text-forest dark:text-mint flex items-center justify-center text-[10px] font-mono font-bold">
                    {i + 1}
                  </span>
                  <h5 className="font-display font-bold text-white text-sm">
                    {stage.name}
                  </h5>
                </div>
                <p className="text-[#888] text-xs font-mono leading-relaxed">{stage.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-forest dark:text-mint mb-3">
            Highlights
          </h4>
          <ul className="space-y-1.5">
            {project.features.map((feature, i) => (
              <li key={i} className="flex gap-2 text-muted dark:text-[#888] text-sm">
                <span className="text-forest dark:text-mint shrink-0">→</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.map((tech, i) => (
            <span key={i} className="tag text-[11px]">{tech}</span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-charcoal/20 dark:border-[#444] text-charcoal dark:text-white rounded-full hover:border-forest dark:hover:border-mint hover:text-forest dark:hover:text-mint transition-all text-xs font-mono uppercase tracking-wider hover:-translate-y-0.5"
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
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    if (!scrollRef.current) return
    const cardWidth = scrollRef.current.firstChild?.offsetWidth || 600
    scrollRef.current.scrollBy({ left: dir * (cardWidth + 24), behavior: 'smooth' })
  }

  return (
    <section id="building" className="section-padding bg-[#F0EDE6] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Building</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <div className="flex items-end justify-between mb-14">
          <HeadingReveal delay={0.1}>
            <h2 className="section-title">What I&apos;m working on</h2>
          </HeadingReveal>

          <ScrollReveal delay={0.2} className="hidden md:flex items-center gap-2 shrink-0 ml-8">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 rounded-full border border-bone dark:border-[#2A2A2A] flex items-center justify-center text-muted hover:text-forest dark:hover:text-mint hover:border-forest dark:hover:border-mint transition-all"
              aria-label="Previous project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 rounded-full border border-bone dark:border-[#2A2A2A] flex items-center justify-center text-muted hover:text-forest dark:hover:text-mint hover:border-forest dark:hover:border-mint transition-all"
              aria-label="Next project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </ScrollReveal>
        </div>
        <ScrollReveal delay={0.15}>
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 no-scrollbar"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
