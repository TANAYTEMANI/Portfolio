import { useState, useEffect } from 'react'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import WhatIAmBuilding from '../components/WhatIAmBuilding'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Achievements from '../components/Achievements'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Loading from '../components/Loading'
import NeuralBackground from '../components/NeuralBackground'
import FunBadge from '../components/AIBadge'

export default function Home() {
  const [loading, setLoading] = useState(true)

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  if (loading) {
    return <Loading onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text relative">
      <NeuralBackground />
      <FunBadge />
      <Navigation />

      <main className="relative z-10">
        <Hero />

        <div id="about">
          <About />
        </div>

        <Experience />

        <WhatIAmBuilding />

        <Projects />

        <Skills />

        <Achievements />

        <Education />

        <Contact />
      </main>
    </div>
  )
}

