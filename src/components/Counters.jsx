import React, {useEffect, useState} from 'react'
import { motion } from 'framer-motion'

const stats = [
  {label: 'Projects Completed', value: 15},
  {label: 'Happy Clients', value: 10},
  {label: 'Years Experience', value: 10},
  {label: 'Team Members', value: 38},
]

export default function Counters(){
  const [counts, setCounts] = useState(stats.map(s=>0))

  useEffect(()=>{
    const timers = stats.map((s,idx)=>{
      const step = Math.ceil(s.value / 100)
      return setInterval(()=>{
        setCounts(prev=>{
          const next = [...prev]
          if(next[idx] < s.value) next[idx] = Math.min(s.value, next[idx] + step)
          return next
        })
      }, 30 + idx*10)
    })
    return ()=> timers.forEach(t=>clearInterval(t))
  },[])

  return (
    <section className="max-w-6xl mx-auto px-6 py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s,i)=>(
          <motion.div key={i} className="p-6 bg-gradient-to-br from-indigo-600 to-violet-600 text-white rounded shadow-lg fade-up"
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
            <div className="text-4xl font-bold">{counts[i]}+</div>
            <div className="mt-2 text-sm">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
