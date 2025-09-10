import React from 'react'

export default function FloatingCall(){
  return (
    <div>
      <a href="tel:9329244777" className="fixed left-4 bottom-6 z-50 bg-gradient-to-r from-indigo-600 to-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 7h10l1 10H6L7 7z" /></svg>
        Call
      </a>
      <a href="https://wa.me/9329244777" target="_blank" rel="noreferrer" className="fixed left-4 bottom-20 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.47A11.88 11.88 0 0012.05.02C6.01.02.98 5.05.98 11.09c0 1.95.52 3.85 1.51 5.52L.02 23l6.6-1.69c1.63.9 3.5 1.39 5.42 1.39 6.04 0 11.07-5.04 11.07-11.08 0-3.01-1.18-5.83-3.59-7.15z"/></svg>
        WhatsApp
      </a>
    </div>
  )
}
