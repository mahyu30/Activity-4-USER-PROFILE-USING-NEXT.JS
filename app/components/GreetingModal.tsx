'use client'

import { useState, useEffect } from 'react'

interface GreetingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GreetingModal({ isOpen, onClose }: GreetingModalProps) {
  const [greeting, setGreeting] = useState('')
  const [projectCount, setProjectCount] = useState(0)
  const [techCount, setTechCount] = useState(0)

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours()
      if (hour < 12) return 'Good Morning'
      if (hour < 18) return 'Good Afternoon'
      return 'Good Evening'
    }
    setGreeting(getGreeting())
  }, [])

  useEffect(() => {
    if (isOpen) {
      // Animate counters
      const animateCounter = (setter: (value: number) => void, target: number) => {
        let current = 0
        const increment = target / 100
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          setter(Math.floor(current))
        }, 20)
      }

      setTimeout(() => {
        animateCounter(setProjectCount, 5)
        animateCounter(setTechCount, 10)
      }, 500)

      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose()
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      return () => document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={handleBackdropClick}
    >
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-sm w-11/12 mx-4 animate-slide-in overflow-hidden">
        <div className="flex justify-between items-center p-6 pb-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-primary">
            {greeting} 👋
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-gray-500 dark:text-gray-400"></i>
          </button>
        </div>
        
        <div className="p-6 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Welcome to my personal portfolio! I'm excited to share my journey and projects with you.
          </p>
          
          <div className="flex justify-around mb-6 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{projectCount}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Projects
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{techCount}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Technologies
              </div>
            </div>
          </div>
          
          <div className="text-3xl text-primary animate-wave">
            <i className="fas fa-hand-paper"></i>
          </div>
        </div>
      </div>
    </div>
  )
}