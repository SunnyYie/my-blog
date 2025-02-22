'use client'

import { Sun, Moon, Menu, X, Search, Bell } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'

const Navbar = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <nav className="bg-white dark:bg-gray-900 border-b dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800 dark:text-white">
              SunnyBlog
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Feed
              </Link>
              <Link
                href="/popular"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Popular
              </Link>
              <Link
                href="/bookmarks"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Bookmarks
              </Link>
              <Link
                href="/discussions"
                className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Discussions
              </Link>
            </div>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white">
              <Bell className="h-5 w-5" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Feed
            </Link>
            <Link
              href="/popular"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Popular
            </Link>
            <Link
              href="/bookmarks"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Bookmarks
            </Link>
            <Link
              href="/discussions"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Discussions
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
