import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: "Solar Rooftop & Ground Mounted",
    subtitle: "Engineering, Procurement & Construction",
    desc: "Residential and commercial installations of solar rooftop and ground mounted systems. We handle end-to-end EPC including civil, electrical & commissioning.",
    img: "/assets/service1.jpg"
  },
  {
    title: "HT/LT Substation & DG Sets",
    subtitle: "Installation & Maintenance",
    desc: "Project planning, operation and periodic maintenance of HT/LT substations, transformers and DG sets. Safety-compliant work and documentation.",
    img: "/assets/service2.jpg"
  },
  {
    title: "Optical Fibre Network for Telecom",
    subtitle: "Design & Laying",
    desc: "Optical fibre network planning, laying, splicing and testing for telecom and enterprise networks.",
    img: "/assets/service3.jpg"
  },
  {
    title: "Facility Management & Consulting",
    subtitle: "Operations & Support",
    desc: "Facility management services, electric machinery maintenance and consulting for energy optimization and CAPEX reduction.",
    img: "/assets/service4.jpg"
  },
  {
    title: "Energy Audit & Bill Optimization",
    subtitle: "Reduce upto 90% electricity bill",
    desc: "Energy audits, load balancing and solar integration to reduce electricity bills and obtain government subsidies.",
    img: "/assets/service5.jpg"
  },
  {
    title: "Telecom & Electrical Civil Works",
    subtitle: "End-to-End Execution",
    desc: "Civil and electrical works for telecom towers, substations and industrial installations with strict quality control.",
    img: "/assets/service6.jpg"
  }
]

export default function Services(){
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-6 fade-up">Available Services</h3>
      <p className="text-white mb-8 fade-up">We are a government approved vendor with proven track record. Below are the major services offered — click any card to view details.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s,i)=>(
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer fade-up"
            onClick={()=>console.log(s.title + "\n\n" + s.desc)}
          >
            <div className="h-44 md:h-52 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-700" />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold">{s.title}</h4>
              <p className="text-sm text-indigo-600">{s.subtitle}</p>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-3">Why choose PATIDAR?</h3>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <li className="p-4 bg-indigo-50 rounded shadow fade-up">Govt 'A' Class Electrical Contractor and Ministry approved vendor.</li>
          <li className="p-4 bg-indigo-50 rounded shadow fade-up">End-to-end EPC services with strong after-sales support and spares.</li>
          <li className="p-4 bg-indigo-50 rounded shadow fade-up">Skilled technicians, safety-first approach, and documented processes.</li>
        </ul>
      </div>
    </section>
  )
}
