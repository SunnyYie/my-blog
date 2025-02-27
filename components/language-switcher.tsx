'use client'

import { Command, CommandEmpty, CommandGroup, CommandItem, CommandList } from '@/components/ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Check, ChevronsUpDown, Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface Language {
  label: string
  value: string
}

const languages: Language[] = [
  { label: 'English', value: 'en' },
  { label: '中文', value: 'zh' },
]

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0])

  // Extract current language from URL path
  useEffect(() => {
    const pathSegments = pathname.split('/')
    const langCode = pathSegments[1]

    const matchedLanguage = languages.find(lang => lang.value === langCode)
    if (matchedLanguage) {
      setCurrentLanguage(matchedLanguage)
    }
  }, [pathname])

  const switchLanguage = (language: Language) => {
    const pathSegments = pathname.split('/')

    // Replace the language segment or add it if it doesn't exist
    if (languages.some(lang => lang.value === pathSegments[1])) {
      pathSegments[1] = language.value
    } else {
      pathSegments.unshift(language.value)
    }

    const newPath = pathSegments.join('/')
    router.push(newPath)
    setCurrentLanguage(language)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[180px] justify-between">
          <Globe className="mr-2 h-4 w-4" />
          {currentLanguage.label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[180px] p-0">
        <Command>
          <CommandList>
            <CommandEmpty>No language found.</CommandEmpty>
            <CommandGroup>
              {languages.map(language => (
                <CommandItem key={language.value} value={language.value} onSelect={() => switchLanguage(language)}>
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      currentLanguage.value === language.value ? 'opacity-100' : 'opacity-0',
                    )}
                  />
                  {language.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
