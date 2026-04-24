'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  rootMargin?: string
}

export const LazySection = ({ children, className = '', rootMargin = '300px' }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = domRef.current
    if (!el) return

    // Use requestIdleCallback for non-critical sections
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div
      ref={domRef}
      className={className}
      // Reserve minimum height to prevent CLS
      style={isVisible ? undefined : { minHeight: '200px' }}
    >
      {isVisible ? children : null}
    </div>
  )
}
