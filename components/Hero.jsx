import { useState, useEffect } from 'react'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = "I build intelligent AI systems that automate work and deliver real results."
  
  useEffect(() => {
    let currentIndex = 0
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(intervalId)
      }
    }, 30)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 grid-background">
      <div className="max-w-5xl w-full">
        <div className="space-y-8 fade-in">
          {/* Terminal-style header */}
          <div className="flex items-center gap-3 text-terminal-dim text-sm md:text-base">
            <span className="text-terminal-accent">$</span>
            <span>tanay@portfolio:~$</span>
            <span className="text-terminal-accent">./introduce.sh</span>
          </div>

          {/* Name with terminal prompt */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="text-terminal-accent text-2xl md:text-4xl">&gt;</span>
              <h1 className="text-4xl md:text-7xl font-bold text-terminal-text">
                Tanay Agarwal
              </h1>
              <span className="text-terminal-accent text-4xl md:text-7xl cursor-blink">_</span>
            </div>
          </div>

          {/* Roles with AI emphasis */}
          <div className="flex flex-wrap items-center gap-3 text-lg md:text-xl text-terminal-dim ml-12 md:ml-16">
            <span className="text-terminal-accent glow">AI Engineer</span>
            <span>•</span>
            <span className="text-terminal-text">Multi-Agent Systems</span>
            <span>•</span>
            <span className="text-terminal-dim">LLM Orchestration</span>
          </div>

          {/* Description with typing effect */}
          <div className="text-terminal-text text-base md:text-lg leading-relaxed ml-12 md:ml-16 max-w-3xl">
            <p className="font-mono">
              {displayedText}
              <span className="cursor-blink">|</span>
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap gap-4 ml-12 md:ml-16 pt-6">
            <a 
              href="#experience" 
              className="px-6 py-3 bg-terminal-accent text-terminal-bg font-semibold rounded hover:bg-opacity-90 transition-all hover:scale-105"
            >
              View Experience
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-terminal-accent text-terminal-accent rounded hover:bg-terminal-accent hover:text-terminal-bg transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="flex items-center gap-2 text-terminal-dim text-sm ml-12 md:ml-16 pt-12 animate-bounce">
            <span>↓</span>
            <span>scroll to explore</span>
          </div>
        </div>
      </div>
    </section>
  )
}

