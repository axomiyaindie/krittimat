// src/app/[lang]/not-found.jsx
import Link from 'next/link'

export default function NotFound() {
  // Can't access params here - use client-side detection or default to 'en'
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-6">Page not found</p>
        <Link href="/en" className="text-primary hover:underline">
          Go home →
        </Link>
      </div>
    </div>
  )
}