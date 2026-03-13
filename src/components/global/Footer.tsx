import Link from 'next/link'
import Image from 'next/image'
import { visibleServices } from '@/lib/data/services'
import { towns } from '@/lib/data/towns'

const formatTitle = (slug: string) => slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')

export const Footer = () => {
  const displayTowns = [...towns].sort().slice(0, 10)

  return (
    <footer className="bg-neutral-dark text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-brand-primary">Services</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              {visibleServices.map(service => (
                <li key={service}>
                  <Link href={`/services/${service}`} className="hover:text-white transition-colors">
                    {formatTitle(service)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-brand-primary">Areas</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              {displayTowns.map(town => (
                <li key={town}>
                  <Link href={`/areas/${town}`} className="hover:text-white transition-colors">
                    {formatTitle(town)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-brand-primary">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
              </li>
              <li>
                <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
              </li>
            </ul>
          </div>
          {/* Company & Legal Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-brand-primary">Information</h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-neutral-300 mb-2">
              <p>GEM Services Pest Control</p>
              <p>Serving Kent, United Kingdom</p>
              <p>Phone: <a href="tel:07400372204" className="hover:text-white transition-colors">07400 372204</a></p>
            </address>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300 mt-2">
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-use" className="hover:text-white transition-colors">Terms of Use</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-neutral-muted/30 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-8 md:mb-0">
            <Link href="/">
              <Image 
                src="/logo-white.png" 
                alt="GEM Pest Control" 
                width={360} 
                height={90} 
                className="h-20 md:h-[120px] w-auto opacity-90" 
              />
            </Link>
            <Image
              src="/images/bpca-logo.png"
              alt="BPCA Certified"
              width={250}
              height={125}
              className="h-20 md:h-[100px] w-auto object-contain"
            />
          </div>
          <div className="text-center md:text-right text-xs leading-relaxed max-w-sm">
            GEM Services is a trading name of GREEN ENVIRONMENTAL MANAGEMENT LTD.<br />
            Company number 16671563<br /><br />
            &copy; {new Date().getFullYear()} GEM Services. Website by <a href="https://www.businesssortedkent.co.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">BSK</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
