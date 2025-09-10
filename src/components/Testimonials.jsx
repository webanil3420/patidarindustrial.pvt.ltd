import React from 'react'
import { motion } from 'framer-motion'

const data = [
  {name: 'H.S Katariya', note: 'Excellent execution and timely delivery.'},
  {name: 'Sunil Patidar', note: 'Professional team and great after-sales support.'},
  {name: 'Anil Patidar', note: 'Reduced our energy bills by 60%.'},
  {name: 'Shri Ram Patidar', note: 'Very responsive and transparent.'}
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-8 bg-gradient-to-r from-indigo-50 to-white rounded-lg">
      <h4 className="text-3xl font-bold mb-6 fade-up">Client Testimonials</h4>
      <div className="grid md:grid-cols-4 gap-3">
        {data.map((d,i)=>(
          <motion.div key={i} className="p-3 bg-white rounded shadow fade-up section-card flex items-start gap-3"
            whileHover={{scale:1.03}} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:0.2}}>
            <div className="text-sm text-gray-700">"{d.note}"</div>
            <div className="mt-3 font-semibold text-indigo-700">— {d.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
