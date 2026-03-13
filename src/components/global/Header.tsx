"use client"

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, Phone, X, ChevronDown } from 'lucide-react'
import { visibleServices } from '@/lib/data/services'

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const Header = () => {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const isActive = (path: string) => {
    if (!pathname) return false
    if (path === '/') return pathname === '/'
    return pathname.startsWith(path)
  }
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full py-[2%]">
      <div className="max-w-[1600px] w-[95%] xl:w-[90%] mx-auto px-6 flex items-center justify-between">
        
        {/* Left: Logo (Column 1) */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/" className="flex items-center gap-3 xl:gap-4 shrink-0 group">
            <Image 
              src="/icon.svg" 
              alt="GEM Services Logo" 
              width={72} 
              height={72} 
              priority
              className="h-12 lg:h-[60px] xl:h-[68px] w-auto drop-shadow-sm group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="text-xl lg:text-2xl xl:text-[26px] font-semibold text-neutral-dark tracking-tight whitespace-nowrap">
              GEM <span className="text-brand-primary">Services</span>
            </span>
          </Link>
        </div>

        {/* Centre: Navigation (Column 2) */}
        <nav aria-label="Main Navigation" className="hidden xl:flex shrink-0 justify-center">
          <ul className="flex items-center justify-center gap-5 xl:gap-8 font-medium text-neutral-dark text-sm xl:text-base">
            <li><Link href="/" className={`hover:text-brand-primary transition-colors whitespace-nowrap ${isActive('/') ? 'text-brand-primary' : ''}`}>Home</Link></li>
            
            {/* Services Dropdown */}
            <li className="relative group">
              <Link href="/services" className={`hover:text-brand-primary transition-colors py-4 block whitespace-nowrap ${isActive('/services') ? 'text-brand-primary' : ''}`}>
                Services
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 w-72 xl:w-80 bg-white border border-neutral-100 shadow-xl rounded-xl opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-out z-50 overflow-hidden transform origin-top translate-y-4 group-hover:translate-y-0">
                <ul className="py-3 flex flex-col">
                  {visibleServices.map(service => (
                    <li key={service}>
                      <Link 
                        href={`/services/${service}`} 
                        className={`block px-8 py-3.5 hover:bg-neutral-50 transition-colors text-sm border-b border-neutral-50 last:border-0 ${pathname === `/services/${service}` ? 'text-brand-primary font-semibold' : 'text-neutral-dark hover:text-brand-primary'}`}
                      >
                        {formatTitle(service)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            <li><Link href="/areas" className={`hover:text-brand-primary transition-colors whitespace-nowrap ${isActive('/areas') ? 'text-brand-primary' : ''}`}>Areas</Link></li>
            <li><Link href="/commercial" className={`hover:text-brand-primary transition-colors whitespace-nowrap ${isActive('/commercial') ? 'text-brand-primary' : ''}`}>Commercial</Link></li>
            <li><Link href="/guides" className={`hover:text-brand-primary transition-colors whitespace-nowrap ${isActive('/guides') ? 'text-brand-primary' : ''}`}>Guides</Link></li>
            <li><Link href="/about" className={`hover:text-brand-primary transition-colors whitespace-nowrap ${isActive('/about') ? 'text-brand-primary' : ''}`}>About</Link></li>
            <li><Link href="/contact" className={`hover:text-brand-primary transition-colors whitespace-nowrap ${isActive('/contact') ? 'text-brand-primary' : ''}`}>Contact</Link></li>
          </ul>
        </nav>

        {/* Right: Primary CTA (Desktop) (Column 3) */}
        <div className="hidden xl:flex flex-1 items-center justify-end gap-6">
          <div className="flex flex-col items-end justify-center">
            <a href="tel:07400372204" className="text-base xl:text-lg font-bold text-neutral-dark hover:text-brand-primary transition-colors leading-none tracking-tight whitespace-nowrap">
              07400 372204
            </a>
            <span className="hidden xl:block text-[11px] font-medium text-neutral-muted mt-1 uppercase tracking-wider whitespace-nowrap">Emergency callouts available</span>
          </div>
          <Link 
            href="/contact"
            className="bg-brand-primary text-white rounded-md px-4 xl:px-6 py-2 xl:py-2.5 font-bold hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 text-sm whitespace-nowrap"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Header elements */}
        <div className="xl:hidden flex-1 flex items-center justify-end gap-3">
          <a 
            href="tel:07400372204" 
            className="flex items-center justify-center bg-brand-primary hover:bg-brand-primary-dark hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 text-white min-h-[48px] px-4 rounded-md"
            aria-label="Call Now"
          >
            <Phone className="w-5 h-5 fill-current" />
          </a>
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-neutral-dark p-2 min-h-[48px] min-w-[48px] flex items-center justify-center hover:bg-neutral-100 rounded-md transition-colors" 
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-neutral-dark/80 z-50 transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transition-transform duration-300 ease-out xl:hidden overflow-y-auto flex flex-col ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <span className="font-bold text-lg text-neutral-dark">Menu</span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 min-h-[44px] min-w-[44px] flex items-center justify-center text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200 rounded-md transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-6 py-6" aria-label="Mobile Navigation">
          <ul className="flex flex-col gap-2">
            <li>
              <Link 
                href="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center min-h-[48px] w-full text-lg font-medium border-b border-neutral-100 ${isActive('/') ? 'text-brand-primary' : 'text-neutral-dark'}`}
              >
                Home
              </Link>
            </li>
            
            <li className="py-2">
              <span className={`flex items-center min-h-[48px] w-full text-lg font-medium ${isActive('/services') ? 'text-brand-primary' : 'text-neutral-dark'}`}>
                Services
              </span>
              <ul className="pl-4 mt-2 flex flex-col gap-1 border-l-2 border-neutral-100">
                {visibleServices.map(service => (
                  <li key={service}>
                    <Link 
                      href={`/services/${service}`} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center min-h-[44px] w-full py-2 text-base ${pathname === `/services/${service}` ? 'text-brand-primary font-semibold' : 'text-neutral-600'}`}
                    >
                      {formatTitle(service)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link 
                href="/areas" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center min-h-[48px] w-full text-lg font-medium border-b border-neutral-100 ${isActive('/areas') ? 'text-brand-primary' : 'text-neutral-dark'}`}
              >
                Areas
              </Link>
            </li>
            <li>
              <Link 
                href="/commercial" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center min-h-[48px] w-full text-lg font-medium border-b border-neutral-100 ${isActive('/commercial') ? 'text-brand-primary' : 'text-neutral-dark'}`}
              >
                Commercial
              </Link>
            </li>
            <li>
              <Link 
                href="/guides" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center min-h-[48px] w-full text-lg font-medium border-b border-neutral-100 ${isActive('/guides') ? 'text-brand-primary' : 'text-neutral-dark'}`}
              >
                Guides
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center min-h-[48px] w-full text-lg font-medium border-b border-neutral-100 ${isActive('/about') ? 'text-brand-primary' : 'text-neutral-dark'}`}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center min-h-[48px] w-full text-lg font-medium ${isActive('/contact') ? 'text-brand-primary' : 'text-neutral-dark'}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-6 bg-neutral-50 border-t border-neutral-200">
          <a 
            href="tel:07400372204"
            className="flex items-center justify-center gap-2 bg-brand-primary text-white w-full min-h-[56px] rounded-md font-bold text-lg mb-3 shadow-md"
          >
            <Phone className="w-5 h-5" /> 07400 372204
          </a>
          <Link 
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center justify-center bg-white border border-neutral-300 text-neutral-dark hover:bg-neutral-50 w-full min-h-[56px] rounded-md font-bold"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
