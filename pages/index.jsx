import { useState, useCallback } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import WhatIAmBuilding from '../components/WhatIAmBuilding'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Education from '../components/Education'
import Interests from '../components/Interests'
import Contact from '../components/Contact'
import CursorEffects from '../components/CursorEffects'
import Loader from '../components/Loader'

export default function Home() {
  const [loading, setLoading] = useState(true)
  const handleComplete = useCallback(() => setLoading(false), [])

  return (
    <div className="min-h-screen bg-cream dark:bg-[#0C0C0C] text-charcoal dark:text-[#EDEDED] transition-colors duration-300">
      {loading && <Loader onComplete={handleComplete} />}
      <CursorEffects />
      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <WhatIAmBuilding />
        <Skills />
        <Achievements />
        <Education />
        <Interests />
        <Contact />
      </main>
    </div>
  )
}
