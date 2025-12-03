import { useState, useEffect } from 'react'

export default function FunBadge() {
  const [currentMessage, setCurrentMessage] = useState(0)
  
  const funMessages = [
    "> coffee.exe running...",
    "> building AI agents...",
    "> neural networks activated",
    "> code compiling...",
    "> ideas generating...",
    "> ready to build!",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % funMessages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <div className="relative group">
        {/* Glowing effect */}
        <div className="absolute inset-0 bg-terminal-accent rounded-lg blur-xl opacity-30 animate-pulse"></div>
        
        {/* Badge */}
        <div className="relative bg-terminal-bg border border-terminal-accent rounded-lg px-4 py-3 hover:border-terminal-accent hover:shadow-lg hover:shadow-terminal-accent/50 transition-all cursor-pointer">
          <div className="flex items-center gap-2">
            <span className="text-terminal-accent font-mono text-xs">
              {funMessages[currentMessage]}
            </span>
            <span className="text-terminal-accent cursor-blink">_</span>
          </div>
          
          {/* Tooltip on hover */}
          <div className="absolute bottom-full right-0 mb-2 w-56 bg-terminal-hover border border-terminal-accent rounded p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <p className="text-terminal-accent text-xs font-mono mb-1">
              $ whoami
            </p>
            <p className="text-terminal-text text-xs font-mono">
              AI Engineer • Problem Solver • Code Enthusiast
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

