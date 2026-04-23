import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function Achievements() {
  const achievements = [
    { title: 'Data Warehouse Badge', issuer: 'Snowflake' },
    { title: 'Data Engineering Badge', issuer: 'Snowflake' },
    { title: 'Java (Intermediate)', issuer: 'HackerRank' },
    { title: 'Python (Intermediate)', issuer: 'HackerRank' },
    { title: 'Data Science', issuer: 'Infosys Springboard' },
    { title: 'Artificial Intelligence', issuer: 'Infosys Springboard' },
    { title: 'Cloud Architect', issuer: 'AWS' },
    { title: 'Data Analytics', issuer: 'AWS' },
    { title: 'Data Engineering', issuer: 'AWS' },
  ]

  return (
    <section id="achievements" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Achievements</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-10">Certifications</h2>
        </HeadingReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {achievements.map((a, index) => (
            <StaggerItem key={index} index={index}>
              <MagneticCard intensity={8}>
                <div className="card h-full">
                  <span className="text-[12px] md:text-[13px] font-mono uppercase tracking-[0.2em] text-forest dark:text-mint block mb-3">
                    {a.issuer}
                  </span>
                  <p className="font-display font-semibold text-charcoal dark:text-white text-base md:text-lg leading-snug">
                    {a.title}
                  </p>
                </div>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
