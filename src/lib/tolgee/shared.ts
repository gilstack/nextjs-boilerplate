import { DevTools, Tolgee } from '@tolgee/react'
import { FormatIcu } from '@tolgee/format-icu'

export const DEFAULT_LANGUAGE = process.env.NEXT_PUBLIC_DEFAULT_LANGUAGE ?? 'en'

export const DEFAULT_NAMESPACE =
  process.env.NEXT_PUBLIC_DEFAULT_NAMESPACE ?? 'common'

export const AVAILABLE_LANGUAGES = (
  process.env.NEXT_PUBLIC_AVAILABLE_LANGUAGES ?? 'en'
).split(',')

/* Tolgee Secrets */
const apiKey = process.env.NEXT_PUBLIC_TOLGEE_API_KEY
const apiUrl = process.env.NEXT_PUBLIC_TOLGEE_API_URL

export async function getStaticData(
  languages: string[],
  namespaces: string[] = ['']
): Promise<Record<string, Record<string, string>>> {
  const result: Record<string, Record<string, string>> = {}

  for (const lang of languages) {
    for (const namespace of namespaces) {
      if (namespace) {
        result[`${lang}:${namespace}`] = (
          await import(`../../../messages/${namespace}/${lang}.json`)
        ).default
      } else {
        result[lang] = (await import(`../../../messages/${lang}.json`)).default
      }
    }
  }

  return result
}

export function TolgeeBase() {
  return Tolgee().use(FormatIcu()).use(DevTools()).updateDefaults({
    apiKey,
    apiUrl,
    defaultLanguage: DEFAULT_LANGUAGE,
    fallbackLanguage: DEFAULT_LANGUAGE,
    defaultNs: DEFAULT_NAMESPACE
  })
}
