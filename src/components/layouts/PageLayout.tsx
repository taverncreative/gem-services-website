import { ReactNode } from 'react'
import { Header } from '@/components/global/Header'
import { Footer } from '@/components/global/Footer'
import { CallNowBar } from '@/components/global/CallNowBar'
import { Breadcrumbs } from '@/components/global/Breadcrumbs'

type Props = {
  children: ReactNode
  showBreadcrumbs?: boolean
}

export const PageLayout = ({ children, showBreadcrumbs }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <CallNowBar />
      <Header />

      {/* Conditionally render breadcrumbs */}
      <Breadcrumbs />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  )
}
