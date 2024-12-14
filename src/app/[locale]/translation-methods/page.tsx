import { TranslationMethodsServer } from './TranslationMethodsServer'
import { TranslationMethodsClient } from './TranslationMethodsClient'

export default async function AboutPage() {
  return (
    <main className="flex flex-col gap-4">
      <TranslationMethodsClient />
      <TranslationMethodsServer />
    </main>
  )
}
