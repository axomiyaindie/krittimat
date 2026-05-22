// src/app/[lang]/error.jsx
'use client'
export default function Error({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Something went wrong</h2>
        <button onClick={reset} className="px-4 py-2 bg-primary text-white rounded">
          Try again
        </button>
      </div>
    </div>
  )
}