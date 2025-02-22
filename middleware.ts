import { fallbackLng, languages } from './app/_lib/i18n/setting'
import acceptLanguage from 'accept-language'
import { NextResponse } from 'next/server'

acceptLanguage.languages(languages)

export const config = {
  // matcher: '/:lng*'
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
}

export function middleware(req: any) {
  const lng = acceptLanguage.get(req.headers.get('Accept-Language')) || fallbackLng
  // Redirect if lng in path is not supported
  if (
    !languages.some(loc => req.nextUrl.pathname.startsWith(`/${loc}`)) &&
    !req.nextUrl.pathname.startsWith('/_next')
  ) {
    return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url))
  }
  return NextResponse.next()
}
