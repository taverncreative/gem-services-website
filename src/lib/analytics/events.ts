export const trackEvent = (
  eventName: string, 
  eventParams?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && 'gtag' in window) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).gtag('event', eventName, eventParams)
  }
}
