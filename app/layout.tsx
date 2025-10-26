import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import ClientLayout from './components/ClientLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cloyd Matthew Arabe | Personal Profile',
  description: 'Cloyd Matthew Arabe - Information Technology Student & Developer Portfolio',
  keywords: 'developer, IT student, web development, JavaScript, PHP, Java',
  authors: [{ name: 'Cloyd Matthew Arabe' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}