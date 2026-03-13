'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Fatal Runtime Error:', error)
  }, [error])

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="bg-red-50 text-red-600 rounded-full w-24 h-24 flex items-center justify-center mb-8 mx-auto border-4 border-red-100">
        <span className="text-4xl font-bold">!</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-dark mb-6">
        Something unexpected went wrong.
      </h2>
      <p className="text-xl text-neutral-muted mb-12 max-w-2xl mx-auto leading-relaxed">
        Our systems experienced a temporary failure loading this page. Our technical team has been notified.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => reset()}
          className="bg-brand-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-primary-dark transition-colors shadow-lg"
        >
          Try loading again
        </button>
        <Link
          href="/"
          className="bg-white text-neutral-dark border-2 border-neutral-200 px-8 py-4 rounded-md font-bold text-lg hover:bg-neutral-50 transition-colors"
        >
          Return Home
        </Link>
      </div>

      <div className="mt-16 bg-neutral-50 border border-neutral-200 p-8 rounded-xl max-w-lg mx-auto">
        <h3 className="font-bold text-xl mb-2 text-neutral-dark">Need emergency pest control?</h3>
        <p className="text-neutral-muted mb-4">Our dispatch lines are still fully operational.</p>
        <a href="tel:07400372204" className="text-brand-primary font-bold text-2xl hover:underline blovck">
          07400 372204
        </a>
      </div>
    </div>
  )
}
