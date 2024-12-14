'use server'

import { cookies, headers } from 'next/headers'
import { detectLanguageFromHeaders } from '@tolgee/react/server'
import { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '@/lib/tolgee/shared'

const LANGUAGE_COOKIE = 'STRG_LOCALE'

export async function setLanguage(locale: string) {
  const cookieStore = await cookies()
  cookieStore.set(LANGUAGE_COOKIE, locale, {
    path: '/',
    sameSite: 'strict',
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: process.env.NODE_ENV === 'production'
  })
}

export async function getLanguage() {
  // Get the current URL path
  const headersList = headers()
  const pathname = (await headersList).get('x-invoke-path') || ''

  // Check if the path starts with a language code
  const pathLanguage = AVAILABLE_LANGUAGES.find((lang) =>
    pathname.startsWith(`/${lang}`)
  )
  if (pathLanguage) {
    return pathLanguage
  }

  const cookieStore = await cookies()
  const locale = cookieStore.get(LANGUAGE_COOKIE)?.value
  if (locale && AVAILABLE_LANGUAGES.includes(locale)) {
    return locale
  }

  // try to detect language from headers or use default
  const detected = detectLanguageFromHeaders(
    await headersList,
    AVAILABLE_LANGUAGES
  )
  return detected || DEFAULT_LANGUAGE
}
