'use client'

import { useReportWebVitals } from 'next/web-vitals'

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in dev
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Web Vital] ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`)
    }

    // Send to analytics endpoint if available
    // Beacon API for reliable delivery
    if (typeof navigator?.sendBeacon === 'function') {
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
        page: window.location.pathname,
      })
      navigator.sendBeacon('/api/vitals', body)
    }
  })

  return null
}
