import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Header({ setShowDeveloper }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef()

  useEffect(() => {
    function onDoc(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return () => document.removeEventListener('click', onDoc)
  }, [])

  return (
    <header className="header-lg sticky top-0 z-50 bg-white shadow-sm font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center">
            <img src="/assets/logo.png" alt="logo" className="w-10 h-10 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-lg sm:text-xl font-bold tracking-wide text-gray-900">PATIDAR</div>
            <div className="text-sm sm:text-base text-gray-600">Industrial Controls & Utilities</div>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-base">
          <button onClick={() => setShowDeveloper(false)} className="text-black hover:text-indigo-600">Home</button>
          <a href="#about" className="text-black hover:text-indigo-600">About</a>
          <a href="#services" className="text-black hover:text-indigo-600">Services</a>
          <a href="#projects" className="text-black hover:text-indigo-600">Projects</a>
          <a href="#gallery" className="text-black hover:text-indigo-600">Gallery</a>
          <a href="#clients" className="text-black hover:text-indigo-600">Clients</a>
          <a href="#contact" className="text-black hover:text-indigo-600">Contact</a>
          <button onClick={() => setShowDeveloper(true)} className="text-black hover:text-indigo-600">Developer</button>
          <a href="#contactform" className="ml-3 px-4 py-2 rounded bg-gradient-to-r from-indigo-600 to-green-500 text-white text-sm shadow">
            Enquire
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="lg:hidden relative" ref={menuRef}>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>

          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
            className={`absolute right-4 top-16 w-[92vw] bg-white border rounded-lg shadow-lg p-5 flex flex-col gap-3 ${open ? '' : 'pointer-events-none'}`}
            style={{ display: open ? 'flex' : 'none' }}
          >
            <button onClick={() => { setShowDeveloper(false); setOpen(false) }} className="text-black text-base">Home</button>
            <a href="#about" className="text-black text-base" onClick={() => setOpen(false)}>About</a>
            <a href="#services" className="text-black text-base" onClick={() => setOpen(false)}>Services</a>
            <a href="#projects" className="text-black text-base" onClick={() => setOpen(false)}>Projects</a>
            <a href="#gallery" className="text-black text-base" onClick={() => setOpen(false)}>Gallery</a>
            <a href="#clients" className="text-black text-base" onClick={() => setOpen(false)}>Clients</a>
            <a href="#contact" className="text-black text-base" onClick={() => setOpen(false)}>Contact</a>
            <button onClick={() => { setShowDeveloper(true); setOpen(false) }} className="text-black text-base">Developer</button>
            <a href="#contactform" className="mt-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-green-500 text-white rounded text-center" onClick={() => setOpen(false)}>
              Enquire
            </a>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
