import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-10">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Why Solar Energy?</h2>
          <p className="text-[blue]">Solar energy reduces electricity bills, lowers carbon footprint and provides a reliable, low-maintenance power source for industries and communities. Our end-to-end services include site assessment, system design, installation, and Operation & Maintenance (O&M).</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="p-3 bg-white rounded shadow-sm">
              <div className="font-semibold text-gray-900">Residential & Commercial</div>
              <div className="text-sm text-gray-600">Rooftop and ground-mounted systems.</div>
            </div>
            <div className="p-3 bg-white rounded shadow-sm">
              <div className="font-semibold text-gray-900">Industrial Scale</div>
              <div className="text-sm text-gray-600">Large solar farms and captive power plants.</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} className="rounded overflow-hidden">
          <img src="/assets/solar2.jpg" alt="solar" className="w-full h-64 object-cover rounded img-smooth" />
        </motion.div>
      </div>

      <div className="mt-8 grid md:grid-cols-3 gap-4">
        <div className="p-4 bg-white rounded shadow-sm">
          <h4 className="font-bold text-gray-900">Our Solutions</h4>
          <p className="text-sm text-gray-600 mt-2">Solar panels, inverters, DG integration, battery storage, and hybrid systems.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-sm">
          <h4 className="font-bold text-gray-900">Sustainability</h4>
          <p className="text-sm text-gray-600 mt-2">We focus on low-carbon solutions and responsible sourcing.</p>
        </div>
        <div className="p-4 bg-white rounded shadow-sm">
          <h4 className="font-bold text-gray-900">Certifications</h4>
          <p className="text-sm text-gray-600 mt-2">ISO, MNRE, and industry-standard test certificates available upon request.</p>
        </div>
      </div>
    </section>
  )
}
