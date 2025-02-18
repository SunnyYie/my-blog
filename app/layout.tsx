import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SunnyYee - Web Developer',
  description: 'Portfolio of SunnyYee, a Web Developer based in Beijing.',
  generator: 'v0.dev',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

import './globals.css'
