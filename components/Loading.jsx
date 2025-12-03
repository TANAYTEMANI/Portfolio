import { useState, useEffect } from 'react'

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [currentMessage, setCurrentMessage] = useState(0)

  const loadingMessages = [
    "> boot tanay.ai",
    "> initializing neural networks...",
    "> loading AI modules [LangChain, PydanticAI]...",
    "> activating multi-agent systems...",
    "> connecting to knowledge graphs...",
    "> training transformers... [GPT-4, Claude]",
    "> compiling ML pipelines...",
    "> optimizing RAG architecture...",
    "> system online... ready to build AI solutions"
  ]

  useEffect(() => {
    // Progress animation - slower for better visibility
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          // Delay before transitioning out
          setTimeout(() => {
            onComplete()
          }, 800)
          return 100
        }
        // Slower, smoother increment for 4-5 second duration
        return prev + Math.random() * 3 + 1
      })
    }, 100)

    // Message cycling - one message every ~500-600ms
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => {
        if (prev < loadingMessages.length - 1) {
          return prev + 1
        }
        return prev
      })
    }, 550)

    return () => {
      clearInterval(progressInterval)
      clearInterval(messageInterval)
    }
  }, [onComplete, loadingMessages.length])

  return (
    <div className="fixed inset-0 bg-terminal-bg z-50 flex items-center justify-center">
      <div className="max-w-2xl w-full px-6">
        {/* Terminal Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-terminal-accent font-mono glow">
            TANAY.AI
          </h1>
          <p className="text-terminal-dim text-sm mt-2 font-mono">
            v1.0.0 • {new Date().getFullYear()}
          </p>
        </div>

        {/* Loading Messages */}
        <div className="space-y-2 mb-8 min-h-[200px]">
          {loadingMessages.slice(0, currentMessage + 1).map((message, index) => (
            <div
              key={index}
              className="text-terminal-text font-mono text-sm md:text-base flex items-center gap-2 fade-in"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <span className="text-terminal-accent">$</span>
              <span>{message}</span>
              {index === currentMessage && (
                <span className="cursor-blink text-terminal-accent">_</span>
              )}
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-terminal-dim text-sm font-mono">
            <span>Loading modules...</span>
            <span>{Math.min(Math.floor(progress), 100)}%</span>
          </div>
          
          <div className="w-full h-2 bg-terminal-hover rounded-full overflow-hidden border border-terminal-dim">
            <div
              className="h-full bg-terminal-accent transition-all duration-200 ease-out glow"
              style={{
                width: `${Math.min(progress, 100)}%`
              }}
            />
          </div>

          {/* Loading Indicator */}
          <div className="flex items-center gap-2 text-terminal-accent text-xs font-mono">
            <div className="flex gap-1">
              <span className="animate-bounce" style={{ animationDelay: '0s' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>.</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>.</span>
            </div>
            <span className="text-terminal-dim">please wait</span>
          </div>
        </div>
      </div>
    </div>
  )
}

