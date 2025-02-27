'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { usePathname, useRouter } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { useTransition } from 'react'
import { Globe } from 'lucide-react'

export default function LanguageSwitcher() {
  const t = useTranslations('language')
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale prefix from the pathname
      const pathnameWithoutLocale = pathname.replace(`/${locale}`, '')

      // Construct the new path with the new locale
      const newPath = `/${newLocale}${pathnameWithoutLocale}`

      router.push(newPath)
      router.refresh()
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" disabled={isPending}>
          <Globe className="h-4 w-4" />
          <span className="sr-only">{t('switch')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange('en')} className={locale === 'en' ? 'bg-muted' : ''}>
          {t('en')}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange('zh')} className={locale === 'zh' ? 'bg-muted' : ''}>
          {t('zh')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
