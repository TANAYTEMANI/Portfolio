export default function Achievements() {
  const achievements = [
    "Snowflake Data Warehouse Badge",
    "Snowflake Data Engineering Badge",
    "Hackerrank Certified in Java (Intermediate)",
    "Hackerrank Certified in Python (Intermediate)",
    "Infosys Springboard Data Science Certificate",
    "Infosys Springboard Artificial Intelligence Certificate",
    "AWS Cloud Architect Certificate",
    "AWS Data Analytics Certificate",
    "AWS Data Engineering Certificate"
  ]

  return (
    <section id="achievements" className="section-spacing px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">achievements</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-4 ml-8 md:ml-12">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="border border-terminal-dim p-4 rounded-lg hover:border-terminal-accent transition-all card-hover"
            >
              <p className="text-terminal-text text-sm md:text-base">
                {achievement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

