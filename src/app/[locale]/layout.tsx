import { MainLayout } from '@/components/templates'
import { getLanguage } from '@/lib/tolgee/language'

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export const metadata = {
  title: 'Home - MyApp',
  description: 'A brief description of the application.'
}

export default async function RootLayout({ children }: Props) {
  const locale = await getLanguage()

  return (
    <html lang={locale}>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
