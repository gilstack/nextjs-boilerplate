import { getTranslate } from '@/lib/tolgee/server'

export const TranslationMethodsServer = async () => {
  const t = await getTranslate()

  return <div>{t('welcome')}</div>
}
