'use client'

import SimpleNavbar from './SimpleNavbar'

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <>
      <SimpleNavbar />
      {children}
    </>
  )
}