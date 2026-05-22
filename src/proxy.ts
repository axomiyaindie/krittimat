import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { locales, defaultLocale } from '@/config/i18n'

function getLocale(request: NextRequest): string {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value
  if (cookieLocale && locales.includes(cookieLocale as any)) {
    return cookieLocale
  }
  
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage) {
    for (const locale of locales) {
      if (acceptLanguage.toLowerCase().includes(locale)) {
        return locale
      }
    }
  }
  
  return defaultLocale
}

/**
 * Next.js 16 Edge Proxy Engine
 * Intercepts requests to enforce seamless i18n routing across localized sub-directories.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Performance Optimization: Instantly pass through static files, images, and system routes
  const skipPaths = [
    '/api/', '/_next/', '/assets/', '/favicon.ico',
    '.svg', '.png', '.jpg', '.jpeg', '.gif', '.webp',
    '.css', '.js', '.json'
  ]
  
  if (skipPaths.some(path => pathname.includes(path))) {
    return NextResponse.next()
  }

  // Check if the current incoming URL already contains a valid locale prefix
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  // Redirect strategy if no valid locale prefix is explicitly present
  if (!pathnameHasLocale) {
    const locale = getLocale(request)
    
    // Ensure root requests resolve to '/en/' instead of a naked '/en' to prevent Next.js 16 404 router errors
    const normalizedPath = pathname === '/' ? '/' : pathname
    
    const newUrl = new URL(
      `/${locale}${normalizedPath}${request.nextUrl.search}`,
      request.url
    )
    
    const response = NextResponse.redirect(newUrl)
    
    // Set persistent cookie value for subsequent visits
    response.cookies.set('NEXT_LOCALE', locale, {
      maxAge: 365 * 24 * 60 * 60, // 1 year duration
      path: '/',
    })
    
    return response
  }

  return NextResponse.next()
}

// Configuration defining which routes trigger execution of the proxy engine
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (internal API endpoints)
     * - _next/static (built client bundles)
     * - _next/image (image optimization pipeline outputs)
     * - assets (public static layout visual components)
     * - favicon.ico (native app icon target)
     */
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
  ],
}