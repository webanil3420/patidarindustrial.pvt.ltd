import React, {useState} from 'react'
import { motion } from 'framer-motion'

const data = [
  {q: 'How do I apply for solar subsidy?', a: 'We assist with full paperwork submission. Typically you need Aadhaar, electricity bill, and property documents.'},
  {q: 'What is the warranty on solar panels?', a: 'We provide 5-10 years workmanship warranty and 10-25 years panel/ inverter warranty depending on manufacturer.'},
  {q: 'Do you provide O&M contracts?', a: 'Yes — we provide annual preventive maintenance and 24x7 support packages.'},
]

export default function FAQ(){
  const [open, setOpen] = useState(0)
  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-bold mb-4 fade-up">Frequently Asked Questions</h3>
      <div className="space-y-3">
        {data.map((d,i)=>(
          <motion.div key={i} className="bg-white rounded shadow p-4"
            initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <button className="w-full text-left flex justify-between items-center" onClick={()=>setOpen(open===i? -1 : i)}>
              <span className="font-medium">{d.q}</span>
              <span>{open===i? '-' : '+'}</span>
            </button>
            {open===i && <div className="mt-3 text-sm text-gray-600">{d.a}</div>}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
