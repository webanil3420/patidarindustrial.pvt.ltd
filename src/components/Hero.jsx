import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="w-full h-screen relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/India's Renewable Energy Sector (1 MIN).mp4" 
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45"></div>

      {/* Content */}
      <div className="max-w-6xl mx-auto relative z-10 h-full flex flex-col justify-center items-start px-6">
        <motion.h2 
          initial={{ opacity: 0, x: -40 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }} 
          className="text-4xl md:text-6xl font-extrabold text-white text-shadow leading-tight drop-shadow-lg"
        >
          PATIDAR<br />Industrial Controls & Utilities
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, x: -20 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.2, duration: 0.8 }} 
          className="mt-4 text-white/90 text-shadow max-w-xl"
        >
          Project, Planning, Operation & Maintenance of Electric HT/LT Substation, DG Sets, Electric M/c, Optical Fibre Network for Telecom, Solar Systems and Facility Managements.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4 }} 
          className="mt-6 flex gap-3"
        >
          <a href="#services" className="px-5 py-3 bg-gradient-to-r from-indigo-600 to-green-500 rounded text-white text-shadow shadow hover:scale-105 transition">
            Our Services
          </a>
          <a href="#contact" className="px-5 py-3 bg-white rounded text-indigo-700 shadow hover:scale-105 transition">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
