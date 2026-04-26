import { ScrollReveal, HeadingReveal, StaggerContainer, StaggerItem } from './ScrollReveal'
import MagneticCard from './MagneticCard'

export default function Interests() {
  const interests = [
    {
      title: 'Pickleball',
      accent: 'from-emerald-500/15 to-emerald-600/10',
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      description:
        'A 20-second rally that trains reflex, timing, and sharp pattern reading. Hands-down my favourite reset after a day of wrangling agents.',
      quote: 'Patience wins more points than power.',
      videoPath: '/pickleball.mp4',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <circle cx="9" cy="9" r="6" />
          <path strokeLinecap="round" d="M13.5 13.5l6 6" />
          <circle cx="9" cy="9" r="2.25" fill="currentColor" opacity="0.25" />
        </svg>
      ),
    },
    {
      title: 'Coffee',
      accent: 'from-amber-500/15 to-orange-600/10',
      iconColor: 'text-amber-700 dark:text-amber-400',
      description:
        'Constantly chasing the “perfect cup” like it’s a startup idea. Caffeine is less a drink, more a dependency at this point.',
      quote: 'Not brewed with intent? Just hot water with opinions.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5h12.75a3.75 3.75 0 010 7.5H15m-12 0h12a3 3 0 003-3v-4.5a3 3 0 00-3-3H3v10.5z" />
          <path strokeLinecap="round" d="M8 3c-.5 1 .5 2 0 3M12 3c-.5 1 .5 2 0 3" />
        </svg>
      ),
    },
    {
      title: 'Formula 1',
      accent: 'from-rose-500/15 to-red-600/15',
      iconColor: 'text-red-600 dark:text-rose-400',
      description:
        'Sundays belong to F1. A loyal tifoso watching Ferrari invent new ways to lose, while grudgingly respecting Max Verstappen\u2019s dominance.',
      quote: 'Forza Ferrari \u2014 hope is the strategy.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h14l3-2h-2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 14l2-3h3l2 3" />
          <circle cx="7" cy="14" r="2.5" />
          <circle cx="17" cy="14" r="2.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 10v4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 10h4" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h2" />
          <circle cx="12.5" cy="10.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
  ]

  const smallerInterests = [
    {
      name: 'Badminton',
      blurb: 'Started for fun, stayed for the smashes and silent rivalries.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.5 16.5L5 5c2-1.5 5-2 7-2s5 .5 7 2l-4.5 11.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 10h10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13.5h7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v13.5" />
        </svg>
      ),
    },
    {
      name: 'Travelling',
      blurb: 'Mostly planned around food. Cities are secondary.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 19l-6.5-10.5a1 1 0 00-1.7 0L8.5 14" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 19l5.5-9a1 1 0 011.7 0L14 16" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2 19h20" />
        </svg>
      ),
    },
    {
      name: 'Stargazing',
      blurb: 'Touching grass, but at night under the stars.',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l1.8 4.6L18.5 9l-3.7 3 1.1 4.8L12 14.8 8.1 16.8 9.2 12 5.5 9l4.7-1.4L12 3z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="interests" className="section-padding bg-[#F0EDE6] dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 mb-5">
            <span className="section-label">/ Interests</span>
            <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
          </div>
        </ScrollReveal>

        <HeadingReveal delay={0.1}>
          <h2 className="section-title mb-10">Off the clock</h2>
        </HeadingReveal>

        <StaggerContainer className="grid md:grid-cols-3 gap-5 md:gap-6">
          {interests.map((item, i) => (
            <StaggerItem key={i} index={i}>
              <MagneticCard intensity={5} className="h-full group">
                <div className={`card h-full relative overflow-hidden bg-gradient-to-br ${item.accent} flex flex-col`}>
                  
                  {/* Background Video */}
                  {item.videoPath && (
                    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                      <video 
                        src={item.videoPath} 
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                        className="w-full h-full object-cover opacity-20 group-hover:opacity-50 transition-opacity duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 dark:to-black/60 pointer-events-none" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    <div className={`w-12 h-12 rounded-xl bg-white/80 dark:bg-[#161616]/80 border border-bone dark:border-[#2A2A2A] flex items-center justify-center mb-5 ${item.iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="font-display font-bold text-charcoal dark:text-white text-2xl mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted dark:text-[#999] text-[15px] md:text-base leading-[1.7] flex-1">
                      {item.description}
                    </p>
                    <div className="pt-4 mt-5 border-t border-bone/70 dark:border-[#2A2A2A]">
                      <p className="font-display italic text-forest dark:text-mint text-[15px] md:text-base leading-snug">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>
                  </div>

                </div>
              </MagneticCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.2}>
          <div className="mt-14">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[13px] md:text-sm tracking-[0.22em] uppercase text-muted dark:text-[#888] font-medium">
                Also into
              </span>
              <div className="flex-1 h-px bg-bone dark:bg-[#2A2A2A]" />
            </div>

            <StaggerContainer className="grid sm:grid-cols-3 gap-4">
              {smallerInterests.map((item, i) => (
                <StaggerItem key={i} index={i}>
                  <div className="flex items-center gap-4 px-5 py-4 rounded-2xl border border-bone dark:border-[#2A2A2A] bg-white/50 dark:bg-[#161616]/60 hover:border-forest/30 dark:hover:border-mint/25 transition-colors">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-forest/[0.06] dark:bg-mint/[0.08] text-forest dark:text-mint flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display font-semibold text-charcoal dark:text-white text-base md:text-lg leading-tight">
                        {item.name}
                      </p>
                      <p className="text-muted dark:text-[#888] text-[13px] md:text-sm mt-0.5">
                        {item.blurb}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
