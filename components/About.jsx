export default function About() {
  return (
    <section className="section-spacing px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">about</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* About Content */}
        <div className="space-y-8 ml-8 md:ml-12">
          <p className="text-terminal-text text-base md:text-lg leading-relaxed">
            I&apos;m an AI Engineer who builds production-ready intelligent systems that solve real-world problems. 
            Currently at <span className="text-terminal-accent font-semibold">TheAgentic (Zenith Software Limited)</span>, 
            I specialize in building multi-agent AI systems using <span className="text-terminal-accent">PydanticAI</span>, 
            enabling autonomous document intelligence, structured data extraction, and agent-orchestrated reasoning.
          </p>

          <p className="text-terminal-text text-base md:text-lg leading-relaxed">
            I&apos;ve developed enterprise-scale autonomous agent ecosystems (15+ agents) for CRM, onboarding, and lifecycle 
            analytics—delivering <span className="text-terminal-accent font-semibold">end-to-end AI automation</span> for 
            business operations across platforms like HubSpot, Salesforce, Slack, Gmail, and Jira.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 border border-terminal-dim hover:border-terminal-accent transition-all card-hover rounded">
              <div className="text-terminal-accent text-3xl mb-3">💡</div>
              <h3 className="text-terminal-accent font-semibold mb-2">Focus</h3>
              <p className="text-terminal-dim text-sm">
                Multi-Agent AI Systems<br/>
                Enterprise Automation<br/>
                Data Engineering
              </p>
            </div>

            <div className="p-6 border border-terminal-dim hover:border-terminal-accent transition-all card-hover rounded">
              <div className="text-terminal-accent text-3xl mb-3">🌟</div>
              <h3 className="text-terminal-accent font-semibold mb-2">Approach</h3>
              <p className="text-terminal-dim text-sm">
                Building robust, production-ready AI solutions<br/>
                Strategic decision-making<br/>
                Client-centric development
              </p>
            </div>

            <div className="p-6 border border-terminal-accent hover:border-terminal-accent transition-all card-hover rounded ai-glow">
              <div className="text-terminal-accent text-3xl mb-3">🧪</div>
              <h3 className="text-terminal-accent font-semibold mb-2">AI Experiments</h3>
              <p className="text-terminal-dim text-sm">
                Tinkering with new LLMs<br/>
                Building personal AI agents<br/>
                Exploring GPT-4, Claude & more
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

