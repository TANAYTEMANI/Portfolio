export default function Education() {
  const education = [
    {
      degree: "B.Tech in Computer Science (Data Science)",
      institution: "DJ Sanghvi College of Engineering, Mumbai",
      period: "2024",
      grade: "CGPA: 8.9"
    },
    {
      degree: "XII (HSC)",
      institution: "Pace Junior College, Mumbai",
      period: "2020",
      grade: "83%"
    },
    {
      degree: "X (ICSE)",
      institution: "Shri Balaji International School, Mumbai",
      period: "2018",
      grade: "96%"
    }
  ]

  return (
    <section id="education" className="section-spacing px-6 md:px-12 lg:px-24 bg-terminal-hover">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-2xl md:text-3xl font-bold">
          <span className="text-terminal-accent">&gt;</span>
          <h2 className="text-terminal-text">education</h2>
          <span className="text-terminal-accent cursor-blink">_</span>
        </div>

        {/* Education List */}
        <div className="space-y-6 ml-8 md:ml-12">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="border border-terminal-dim p-6 rounded-lg hover:border-terminal-accent transition-all card-hover"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-bold text-terminal-accent mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-terminal-text">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-terminal-dim text-sm md:text-base">
                    {edu.period}
                  </p>
                  <p className="text-terminal-accent font-semibold">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

