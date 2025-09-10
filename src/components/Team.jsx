import React from 'react'
export default function Team(){
  const members = Array.from({length:8}).map((_,i)=>({
    name: 'Member '+(i+1),
    role: ['Engineer','Technician','Project Manager','Supervisor'][i%4]
  }))
  return (
    <section id="team" className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-6 fade-up">Our Team</h3>
      <div className="grid md:grid-cols-4 gap-4">
        {members.map((m,i)=>(
          <div key={i} className="p-4 bg-white rounded shadow fade-up">
            <div className="h-28 bg-gray-100 rounded mb-3 flex items-center justify-center">Photo</div>
            <div className="font-semibold">{m.name}</div>
            <div className="text-sm text-gray-500">{m.role}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
