'use client'
import { useTranslate } from '@tolgee/react'

export const TranslationMethodsClient = () => {
  const { t } = useTranslate()

  return (
    <div>
      <h1>t function with params</h1>
      <div>{t('welcome')}</div>
    </div>
  )
}
