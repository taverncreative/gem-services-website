import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="bg-brand-primary/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl">📍</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-neutral-dark">
          404 - Page Not Found
        </h1>
        <p className="text-xl text-neutral-muted leading-relaxed">
          The page you are looking for has been moved, removed, or never existed. 
          If you are experiencing a pest emergency, please contact our dispatch team immediately.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <a 
            href="tel:07400372204"
            className="bg-brand-primary text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-brand-primary-dark transition-colors shadow-lg w-full sm:w-auto"
          >
            Call 07400 372204
          </a>
          <Link 
            href="/"
            className="bg-white text-neutral-dark border-2 border-neutral-200 px-8 py-4 rounded-md font-bold text-lg hover:bg-neutral-50 transition-colors w-full sm:w-auto"
          >
            Return to Homepage
          </Link>
        </div>
        <div className="pt-12">
           <h2 className="text-xl font-bold mb-4">Popular Local Service Hubs</h2>
           <div className="flex flex-wrap justify-center gap-3">
             <Link href="/services/rat-control" className="text-brand-primary hover:underline font-medium">Rat Control</Link>
             <span className="text-neutral-300">•</span>
             <Link href="/services/wasp-nest-removal" className="text-brand-primary hover:underline font-medium">Wasp Nest Removal</Link>
             <span className="text-neutral-300">•</span>
             <Link href="/services/mouse-control" className="text-brand-primary hover:underline font-medium">Mouse Control</Link>
             <span className="text-neutral-300">•</span>
             <Link href="/commercial" className="text-brand-primary hover:underline font-medium">Commercial Services</Link>
           </div>
        </div>
      </div>
    </div>
  )
}
