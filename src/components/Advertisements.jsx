import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {title:'Govt announces new solar subsidy scheme', src:'/assets/solar1.jpg', type:'News'},
  {title:'Product Launch: New DG series for heavy loads', src:'/assets/dg1.jpg', type:'Ad'},
  {title:'Free energy audit for educational institutions', src:'/assets/solar2.jpg', type:'Offer'}
]

export default function Advertisements(){
  return (
    <section id="ads" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-8">
      <h3 className="text-2xl font-bold mb-4 fade-up">News & Advertisements</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {items.map((it,i)=>(
          <motion.div key={i} className="p-3 section-card card-hover" initial={{opacity:0, y:12}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <img src={it.src} className="w-full h-40 object-cover img-smooth mb-3" />
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold">{it.title}</div>
                <div className="text-xs text-gray-300 mt-1">{it.type}</div>
              </div>
              <a href="#" className="px-3 py-1 rounded bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm">Read</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
