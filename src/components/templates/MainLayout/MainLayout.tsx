import type { MainLayoutProps } from './MainLayout.types'

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <section className="flex min-h-screen flex-col bg-zinc-950">
      <main className="container mx-auto grow px-4 py-8">{children}</main>
    </section>
  )
}
