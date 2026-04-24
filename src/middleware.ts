import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CANONICAL_HOST = 'www.gemservices.uk'

export function middleware(request: NextRequest) {
  const { hostname, pathname, search, protocol } = request.nextUrl

  // Force www + https
  // On Vercel, https is handled at edge, but non-www needs redirect
  if (hostname !== CANONICAL_HOST && hostname !== 'localhost' && !hostname.startsWith('192.168')) {
    const url = new URL(`https://${CANONICAL_HOST}${pathname}${search}`)
    return NextResponse.redirect(url, 301)
  }

  // Strip trailing slashes (except root)
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - _next (static files)
     * - api routes
     * - static files (images, favicons etc)
     */
    '/((?!_next|api|images|icons|favicon|icon\\.svg|og-image|robots\\.txt|sitemap\\.xml).*)',
  ],
}
