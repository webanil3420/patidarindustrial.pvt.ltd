import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    title: 'HS Katariya - Solar / Electrical',
    desc: 'Installed rooftop solar system at - 87 Revenue Nagar, Indore. Full EPC execution, commissioning, testing and handover. Capacity: 3 kW.',
    img: '/assets/solar1.jpg'
  },
  {
    title: 'Anil Patidar - Shri Ram Auto Parts',
    desc: 'Installed ground-mounted solar power plant for Shri Ram Auto Parts. Full EPC execution, commissioning, testing and handover. Capacity: 5 kW.',
    img: '/assets/solar2.jpg'
  },
  {
    title: 'Sunil Patidar - Solar / Electrical',
    desc: 'Installed rooftop solar system at 184 A Chetan Nagar. Full EPC execution, commissioning, testing and handover. Capacity: 3 kW.',
    img: '/assets/solar3.jpg'
  }
]

export default function Projects(){
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-6 fade-up">Recent Projects</h3>
      <div className="grid md:grid-cols-3 gap-3">
        {items.map((p,i)=>(
          <motion.div key={i} className="rounded overflow-hidden section-card card-hover fade-up"
            whileHover={{ scale: 1.02 }} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <img src={p.img} className="w-full h-60 object-cover img-smooth" />
            <div className="p-3">
              <h4 className="font-semibold">{p.title}</h4>
              <p className="text-sm text-[#000000] mt-2">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
