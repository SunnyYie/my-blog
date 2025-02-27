import { LanguageSwitcher } from '@/components/language-switcher'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Inter } from 'next/font/google'
import type React from 'react'
import './globals.css'

import { getLocale, getMessages } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SunnyYee - Web Developer',
  description: 'Portfolio of SunnyYee, a Web Developer based in Beijing.',
  generator: 'v0.dev',
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <div className="fixed top-4 right-4 z-50">
              <ModeToggle />
              <LanguageSwitcher />
            </div>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
