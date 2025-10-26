'use client'

export default function SkillsSection() {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS']
    },
    {
      title: 'Backend & Database',
      skills: ['PHP', 'Java', 'MySQL', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git & GitHub', 'VS Code', 'Figma', 'Electron', 'JavaFX']
    },
    {
      title: 'Currently Learning',
      skills: ['TypeScript', 'React', 'Next.js', 'Python', 'Node.js', 'Supabase', 'Git & GitHub']
    }
  ]

  return (
    <div className="card p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
      
      <div className="space-y-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-primary font-semibold text-lg">{category.title}</h3>
            <div className="grid grid-cols-2 gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="relative pl-6 py-1 text-gray-600 dark:text-gray-400 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-md transition-all duration-300 cursor-pointer hover:translate-x-1 hover:scale-105"
                >
                  <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-primary">
                    ▶
                  </span>
                  {skill}
                </div>
              ))}
            </div>
            {index < skillCategories.length - 1 && (
              <hr className="border-gray-200 dark:border-gray-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}