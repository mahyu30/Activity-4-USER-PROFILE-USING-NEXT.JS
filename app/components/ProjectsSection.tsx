'use client'

import Image from 'next/image'

export default function ProjectsSection() {
  const projects = [
    {
      title: 'GC Pulse',
      description: 'A comprehensive web-based platform that revolutionizes organizational communication by enabling seamless creation, management, and sharing of announcements, events, and updates. Features include appointment scheduling with OSWS for paperwork submission, user role management, and real-time notifications.',
      image: '/img/gc_pulse.png',
      technologies: ['PHP', 'HTML', 'CSS', 'JavaScript', 'MySQL'],
      githubUrl: 'https://github.com/kloydmatyo',
      liveUrl: 'https://github.com/kloydmatyo/GC-Pulse'
    },
    {
      title: 'OCPL Barcode Attendance System',
      description: 'A high-performance desktop application that modernizes attendance tracking for Olongapo City Public Library. Built with Electron for cross-platform compatibility, featuring barcode scanning, real-time data synchronization with Supabase, and comprehensive reporting dashboard.',
      image: '/img/ocpl.png',
      technologies: ['Electron', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL', 'Supabase'],
      githubUrl: 'https://github.com/kloydmatyo',
      liveUrl: 'https://github.com/Swif7ify/OCPL-Barcode'
    },
    {
      title: 'PYVA Prime Number Calculator',
      description: 'An elegant Java application demonstrating advanced algorithm implementation with the Sieve of Eratosthenes for efficient prime number generation. Features input validation, performance optimization, and an intuitive JavaFX interface with real-time calculation progress.',
      image: '/img/pyva.png',
      technologies: ['Java', 'JavaFX', 'MySQL'],
      githubUrl: '',
      liveUrl: 'https://github.com/kloydmatyo/Prime-Number-Calculator'
    }
  ]

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-xl p-6 border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 relative overflow-hidden group"
            >
              {/* Animated top border */}
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex-1">
                  {project.title}
                </h3>
                <div className="flex space-x-2 ml-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-dark transition-colors"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                  )}
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark transition-colors"
                  >
                    <i className="fas fa-external-link-alt text-lg"></i>
                  </a>
                </div>
              </div>

              <div className="mb-4">
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  width={300}
                  height={180}
                  className="w-full h-44 object-cover rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-700"
                />
              </div>

              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
          <a
            href="https://github.com/kloydmatyo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 btn-primary"
          >
            <i className="fab fa-github text-lg"></i>
            <span>See More Projects on GitHub</span>
            <i className="fas fa-external-link-alt text-sm opacity-80"></i>
          </a>
        </div>
      </div>
    </section>
  )
}