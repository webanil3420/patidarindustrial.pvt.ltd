import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function Header(){
  const [open, setOpen] = useState(false)
  const menuRef = useRef()

  useEffect(()=>{
    function onDoc(e){
      if(menuRef.current && !menuRef.current.contains(e.target)){
        setOpen(false)
      }
    }
    document.addEventListener('click', onDoc)
    return ()=> document.removeEventListener('click', onDoc)
  },[])

  return (
    <header className="header-lg sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
            <img src="/assets/logo.png" alt="logo" className="w-8 h-8 object-contain" />
          </div>
          <div className="leading-tight">
            <div className="text-base sm:text-lg font-bold tracking-wide text-gray-900 bg-clip-text">PATIDAR</div>
            <div className="text-xs sm:text-sm text-gray-600">Industrial Controls & Utilities</div>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <a href="#about" className="text-sm text-black hover:text-indigo-600">About</a>
          <a href="#services" className="text-sm text-black hover:text-indigo-600">Services</a>
          <a href="#projects" className="text-sm text-black hover:text-indigo-600">Projects</a>
          <a href="#gallery" className="text-sm text-black hover:text-indigo-600">Gallery</a>
          <a href="#clients" className="text-sm text-black hover:text-indigo-600">Clients</a>
          <a href="#contact" className="text-sm text-black hover:text-indigo-600">Contact</a>
          <a href="#contactform" className="ml-2 px-3 py-2 rounded bg-gradient-to-r from-indigo-600 to-green-500 text-white text-sm shadow">Enquire</a>
        </nav>

        <div className="lg:hidden relative" ref={menuRef}>
          <button onClick={()=>setOpen(!open)} aria-label="Toggle menu" className="p-2 rounded-md bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>

          <motion.div initial={{opacity:0, y:-8}} animate={{opacity: open ? 1 : 0, y: open ? 0 : -8}} className={`absolute right-4 top-16 w-[92vw] bg-white border rounded-lg shadow-lg p-4 ${open ? '' : 'pointer-events-none'}`} style={{display: open ? 'block' : 'none'}}>
            <a href="#about" className="block mobile-link text-black" onClick={()=>setOpen(false)}>About</a>
            <a href="#services" className="block mobile-link text-black" onClick={()=>setOpen(false)}>Services</a>
            <a href="#projects" className="block mobile-link text-black" onClick={()=>setOpen(false)}>Projects</a>
            <a href="#gallery" className="block mobile-link text-black" onClick={()=>setOpen(false)}>Gallery</a>
            <a href="#clients" className="block mobile-link text-black" onClick={()=>setOpen(false)}>Clients</a>
            <a href="#contact" className="block mobile-link text-black" onClick={()=>setOpen(false)}>Contact</a>
            <a href="#contactform" className="mt-2 inline-block px-3 py-2 bg-gradient-to-r from-indigo-600 to-green-500 text-white rounded">Enquire</a>
          </motion.div>
        </div>
      </div>
    </header>
  )
}
