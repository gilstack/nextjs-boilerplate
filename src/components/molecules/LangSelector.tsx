'use client'

import React, { ChangeEvent } from 'react'
import { useRouter } from 'next/navigation'
import { useTolgee } from '@tolgee/react'
import { setLanguage } from '@/lib/tolgee/language'
import { AVAILABLE_LANGUAGES } from '@/lib/tolgee/shared'

// Language name mapping
const LANGUAGE_NAMES: Record<string, string> = {
  en: 'English',
  pt: 'Português'
}

export const LangSelector: React.FC = () => {
  const tolgee = useTolgee(['language'])
  const locale = tolgee.getLanguage()
  const router = useRouter()

  async function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value
    await setLanguage(nextLocale)
    router.push(`/${nextLocale}`)
  }

  // Filtra apenas as linguagens que estão disponíveis
  const availableOptions = Object.entries(LANGUAGE_NAMES).filter(([code]) =>
    AVAILABLE_LANGUAGES.includes(code)
  )

  return (
    <select
      className="rounded-md bg-zinc-700 text-white"
      onChange={onSelectChange}
      value={locale}
    >
      {availableOptions.map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </select>
  )
}
