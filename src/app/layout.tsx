import { ReactNode } from 'react'
import { TolgeeNextProvider } from '@/lib/tolgee/client'
import {
  DEFAULT_LANGUAGE,
  DEFAULT_NAMESPACE,
  getStaticData
} from '@/lib/tolgee/shared'
import { getLanguage } from '@/lib/tolgee/language'

import './globals.css'

type Props = {
  children: ReactNode
}

export default async function LocaleLayout({ children }: Props) {
  const locale = await getLanguage()

  const staticData = await getStaticData(
    [locale, DEFAULT_LANGUAGE],
    [DEFAULT_NAMESPACE]
  )

  return (
    <TolgeeNextProvider language={locale} staticData={staticData}>
      {children}
    </TolgeeNextProvider>
  )
}
