'use client'

import { useState } from 'react'
import ProfileCard from './components/ProfileCard'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import GreetingModal from './components/GreetingModal'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  const [showSkills, setShowSkills] = useState(false)
  const [showModal, setShowModal] = useState(true)

  return (
    <main className="min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <GreetingModal isOpen={showModal} onClose={() => setShowModal(false)} />
      
      <div className="pt-16">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-center items-start gap-10 w-full pt-8 px-4">
          <div className={`transition-all duration-500 ${showSkills ? 'transform -translate-x-16' : ''}`}>
            <ProfileCard onToggleSkills={() => setShowSkills(!showSkills)} />
          </div>
          
          <div className={`transition-all duration-700 ${showSkills ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16 pointer-events-none'}`}>
            <SkillsSection />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center gap-6 w-full pt-8 px-4">
          <ProfileCard onToggleSkills={() => setShowSkills(!showSkills)} />
          
          <div className={`transition-all duration-700 ${showSkills ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
            <SkillsSection />
          </div>
        </div>
        
        <ProjectsSection />
        <ContactSection />
      </div>
      
      <ScrollToTop />
    </main>
  )
}