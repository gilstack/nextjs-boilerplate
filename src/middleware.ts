import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/lib/tolgee/shared'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if there's a language cookie
  const cookieLocale = request.cookies.get('STRG_LOCALE')?.value

  // If it's the root path, detect language and redirect
  if (pathname === '/') {
    // Use cookie language if available and valid
    if (cookieLocale && AVAILABLE_LANGUAGES.includes(cookieLocale)) {
      return NextResponse.redirect(new URL(`/${cookieLocale}`, request.url))
    }

    // Detect browser language
    const acceptLanguage = request.headers.get('accept-language') || ''
    const preferredLanguage = acceptLanguage
      .split(',')[0]
      .split('-')[0]
      .toLowerCase()

    const targetLanguage =
      AVAILABLE_LANGUAGES.includes(preferredLanguage) ? preferredLanguage : (
        DEFAULT_LANGUAGE
      )

    return NextResponse.redirect(new URL(`/${targetLanguage}`, request.url))
  }

  // Check if the pathname starts with a locale
  const pathnameIsMissingLocale = AVAILABLE_LANGUAGES.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  )

  if (pathnameIsMissingLocale) {
    const targetLanguage =
      cookieLocale && AVAILABLE_LANGUAGES.includes(cookieLocale) ?
        cookieLocale
      : DEFAULT_LANGUAGE

    return NextResponse.redirect(
      new URL(`/${targetLanguage}${pathname}`, request.url)
    )
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
