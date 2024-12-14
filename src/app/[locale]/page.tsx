'use client'

// External
import { useTranslate } from '@tolgee/react'
import Link from 'next/link'

// Components
import { LangSelector } from '@/components/molecules/LangSelector'

const GitHubIcon = () => (
  <svg
    height="20"
    width="20"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
  >
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
)

const githubUsers = [
  { username: 'luas10c', url: 'https://github.com/luas10c' },
  { username: 'gilstack', url: 'https://github.com/gilstack' }
]

export default function HomePage() {
  const { t } = useTranslate('common')

  return (
    <>
      <header>
        <LangSelector />
      </header>

      <div className="flex h-screen flex-col items-center justify-center gap-y-8">
        <h1 className="text-2xl font-semibold">{t('hello_developer')} 🖖</h1>

        <div className="flex flex-col items-center justify-center gap-6">
          <span className="text-base font-semibold tracking-wide text-violet-400">
            {t('follow_our')}
          </span>

          <div className="flex gap-x-10">
            {githubUsers.map((user) => (
              <Link
                href={user.url}
                target="_blank"
                rel="noopener noreferrer"
                key={user.username}
                className="group relative inline-flex overflow-hidden rounded-full text-black"
              >
                {/* Ajuste no gradiente */}
                <div className="absolute -inset-x-2 -inset-y-14 size-40 animate-buttonGradient rounded-full bg-buttonGradient blur-sm" />
                <p className="relative z-10 m-1 flex items-center gap-x-2 rounded-full bg-white/75 px-4 py-2 backdrop-blur-sm transition-all duration-300 group-hover:bg-white">
                  <GitHubIcon />
                  <span className="font-semibold">@{user.username}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
