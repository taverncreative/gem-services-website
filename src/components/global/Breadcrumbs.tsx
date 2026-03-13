'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BreadcrumbSchema } from '@/components/seo/schema/BreadcrumbSchema'

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const Breadcrumbs = () => {
  const pathname = usePathname()
  
  if (!pathname || pathname === '/') return null;
  
  // Break down dynamic routing arrays into semantic path objects
  const segments = pathname.split('/').filter(Boolean)
  
  const items = segments.map((segment, index) => {
    const route = `/${segments.slice(0, index + 1).join('/')}`
    return {
      label: formatTitle(segment),
      href: route
    }
  })

  return (
    <>
      <div className="bg-background-soft border-b border-neutral-100">
        <nav className="max-w-7xl mx-auto px-4 py-2" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-[13px] text-neutral-400 overflow-x-auto whitespace-nowrap">
            <li>
              <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            </li>
            
            {items.map((item, idx) => {
              const isLast = idx === items.length - 1
              return (
                <li key={item.href} className="flex items-center space-x-2">
                  <span className="text-neutral-300 font-serif">›</span>
                  {isLast ? (
                    <span className="font-medium text-neutral-500" aria-current="page">{item.label}</span>
                  ) : (
                    <Link href={item.href} className="hover:text-brand-primary transition-colors">
                      {item.label}
                    </Link>
                  )}
                </li>
              )
            })}
          </ol>
        </nav>
      </div>
      
      {/* Map Structural Hierarchy into DOM Metadata safely */}
      <BreadcrumbSchema items={items} />
    </>
  )
}
