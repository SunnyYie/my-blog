import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'

import { languages } from '../_lib/i18n/setting'
import { dir } from 'i18next'

export async function generateStaticParams() {
  return languages.map(lang => ({ lang }))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SunnyYee - Web Developer',
  description: 'Portfolio of SunnyYee, a Web Developer based in Beijing.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode
  params: {
    lang: string
  }
}) {
  return (
    <html suppressHydrationWarning lang={lang} dir={dir(lang)}>
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
