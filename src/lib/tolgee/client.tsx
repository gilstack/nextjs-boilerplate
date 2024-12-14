'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { TolgeeProvider, TolgeeStaticData } from '@tolgee/react'
import { TolgeeBase } from '@/lib/tolgee/shared'

type Props = {
  language: string
  staticData: TolgeeStaticData
  children: React.ReactNode
}

export const TolgeeNextProvider = ({
  language,
  staticData,
  children
}: Props) => {
  const router = useRouter()

  const tolgee = TolgeeBase().init({
    language,
    staticData,
    observerOptions: {
      fullKeyEncode: true
    }
  })

  useEffect(() => {
    const { unsubscribe } = tolgee.on('permanentChange', () => {
      router.refresh()
    })
    return () => unsubscribe()
  }, [router, tolgee])

  return (
    <TolgeeProvider
      tolgee={tolgee}
      options={{ useSuspense: false }}
      fallback="Loading..."
    >
      {children}
    </TolgeeProvider>
  )
}
