'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface ProfileCardProps {
  onToggleSkills: () => void
}

export default function ProfileCard({ onToggleSkills }: ProfileCardProps) {
  const [colorIndex, setColorIndex] = useState(0)
  const [greeting, setGreeting] = useState('')

  const colors = [
    { 
      gradient: 'from-red-500 to-orange-500',
      text: 'Fiery Red'
    },
    { 
      gradient: 'from-purple-600 to-indigo-600',
      text: 'Royal Purple'
    },
    { 
      gradient: 'from-cyan-500 to-blue-500',
      text: 'Ocean Blue'
    },
    { 
      gradient: 'from-purple-700 to-cyan-500',
      text: 'Cosmic Gradient'
    },
    { 
      gradient: 'from-pink-400 to-pink-600',
      text: 'Pink Sunset'
    },
    { 
      gradient: 'from-yellow-400 to-pink-400',
      text: 'Golden Pink'
    },
    { 
      gradient: 'from-primary to-secondary',
      text: 'Original Theme'
    }
  ]

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) return 'Good Morning'
      if (hour < 18) return 'Good Afternoon'
      return 'Good Evening'
    }
    setGreeting(getGreeting())
  }, [])

  const handleColorChange = () => {
    setColorIndex((prev) => (prev + 1) % colors.length)
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div id="profile" className="card p-8 text-center max-w-sm w-full">
      <div className="hidden text-primary text-xl mb-4 animate-wave">
        {greeting} 👋
      </div>
      
      <div className="relative mb-6">
        <Image
          src="/img/Arabe_CloydMatthew.png"
          alt="Profile Picture"
          width={140}
          height={140}
          className="rounded-full mx-auto border-4 border-primary shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>

      <h1 className={`text-3xl font-bold mb-3 bg-gradient-to-r ${colors[colorIndex].gradient} bg-clip-text text-transparent transition-all duration-300`}>
        Cloyd Matthew Arabe
      </h1>

      <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 leading-relaxed">
        I'm an Information Technology student passionate about creating exceptional digital experiences.
      </p>

      <div className="card bg-gray-50 dark:bg-gray-700/50 p-4 mb-6">
        <h3 className="text-primary font-semibold mb-3">Connect with me</h3>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/kloydmatyo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-primary hover:text-primary-dark transition-colors duration-300 hover:scale-110 transform"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/cloyd-matthew-arabe-b53563334"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-primary hover:text-primary-dark transition-colors duration-300 hover:scale-110 transform"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.facebook.com/cloyd.matthew.arabe.2024"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-primary hover:text-primary-dark transition-colors duration-300 hover:scale-110 transform"
          >
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>

      <div className="space-y-3">
        <button
          onClick={handleColorChange}
          className="btn-primary w-full"
        >
          Color: {colors[colorIndex].text}
        </button>
        
        <button
          onClick={onToggleSkills}
          className="btn-primary w-full"
        >
          Skills
        </button>
        
        <button
          onClick={scrollToProjects}
          className="btn-primary w-full"
        >
          Projects
        </button>
      </div>
    </div>
  )
}