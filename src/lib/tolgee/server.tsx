import { createServerInstance } from '@tolgee/react/server'
import {
  TolgeeBase,
  AVAILABLE_LANGUAGES,
  getStaticData
} from '@/lib/tolgee/shared'
import { getLanguage } from '@/lib/tolgee/language'

export const { getTolgee, getTranslate, T } = createServerInstance({
  getLocale: getLanguage,

  createTolgee: async (locale: string) =>
    TolgeeBase().init({
      staticData: await getStaticData(AVAILABLE_LANGUAGES, ['common']),
      observerOptions: {
        fullKeyEncode: true
      },
      language: locale,
      defaultNs: 'common',
      fetch: async (input, init) =>
        fetch(input, { ...init, next: { revalidate: 0 } })
    })
})
