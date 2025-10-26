'use client'

import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [success, setSuccess] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' }
    let isValid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.'
      isValid = false
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim())) {
      newErrors.email = 'Enter a valid email.'
      isValid = false
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (validateForm()) {
      setSuccess('Thank you! Your message has been sent.')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(''), 4000)
    } else {
      setSuccess('')
    }
  }

  return (
    <section id="contact" className="max-w-md mx-auto px-4 py-16">
      <div className="card p-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Me
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-primary font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              required
            />
            {errors.name && (
              <span className="text-red-500 text-sm mt-1 block">{errors.name}</span>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-primary font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>
            )}
          </div>

          <div>
            <label htmlFor="message" className="block text-primary font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-vertical"
              required
            />
            {errors.message && (
              <span className="text-red-500 text-sm mt-1 block">{errors.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="btn-primary w-full"
          >
            Send
          </button>

          {success && (
            <div className="text-green-600 dark:text-green-400 text-center mt-3">
              {success}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}