'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  rootMargin?: string
}

export const LazySection = ({ children, className = '', rootMargin = '200px' }: Props) => {
  const [isVisible, setIsVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (domRef.current) observer.unobserve(domRef.current)
          }
        })
      },
      { rootMargin }
    )
    
    if (domRef.current) {
      observer.observe(domRef.current)
    }
    
    return () => {
      if (domRef.current) observer.unobserve(domRef.current)
    }
  }, [rootMargin])

  return (
    <div 
      ref={domRef}
      className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {isVisible ? children : null}
    </div>
  )
}
