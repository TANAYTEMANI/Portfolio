import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'

export default function Education() {
  const education = [
    {
      degree: 'B.Tech in Computer Science (Data Science)',
      institution: 'DJ Sanghvi College of Engineering, Mumbai',
      period: '2024',
      grade: 'CGPA: 8.9',
    },
    {
      degree: 'XII (HSC)',
      institution: 'Pace Junior College, Mumbai',
      period: '2020',
      grade: '83%',
    },
    {
      degree: 'X (ICSE)',
      institution: 'Shri Balaji International School, Mumbai',
      period: '2018',
      grade: '96%',
    },
  ]

  return (
    <section id="education" className="section-padding bg-[#F0EDE6] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Education</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-14">Academic background</h2>
        </HeadingReveal>

        <StaggerContainer className="space-y-5">
          {education.map((edu, index) => (
            <StaggerItem key={index} index={index}>
              <div className="card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex-1">
                    <h3 className="font-display text-lg md:text-xl font-bold text-charcoal dark:text-white mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-muted dark:text-[#999] text-sm">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="flex items-center gap-5">
                    <span className="text-muted dark:text-[#666] text-xs font-mono uppercase tracking-wider">
                      {edu.period}
                    </span>
                    <span className="font-display font-bold text-forest dark:text-mint text-sm px-3 py-1 bg-forest/[0.05] dark:bg-mint/[0.07] rounded-full">
                      {edu.grade}
                    </span>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
