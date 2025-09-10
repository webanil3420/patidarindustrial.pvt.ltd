import React from 'react'

export default function Clients(){
  const logos = ['/assets/client1.png','/assets/client2.png','/assets/client3.png','/assets/client4.png']
  return (
    <section id="clients" className="max-w-7xl mx-auto px-4 sm:px-6 md:px-6 py-8">
      <h3 className="text-2xl font-bold mb-4 fade-up">Our Clients</h3>

      {/* Mobile: horizontal scroll */}
      <div className="lg:hidden clients-scroll">
        {logos.map((l,i)=>(
          <div key={i} className="w-40 h-20 bg-white/6 rounded flex items-center justify-center p-2">
            <img src={l} className="max-h-14 object-contain" alt={'client-'+i} />
          </div>
        ))}
      </div>

      {/* Desktop: marquee */}
      <div className="hidden lg:block overflow-hidden">
        <div className="flex gap-8 animate-marquee">
          {logos.map((l,i)=>(
            <div key={i} className="w-40 h-20 bg-white/6 rounded flex items-center justify-center p-2"><img src={l} className="max-h-14 object-contain" /></div>
          ))}
          {logos.map((l,i)=>(
            <div key={'b'+i} className="w-40 h-20 bg-white/6 rounded flex items-center justify-center p-2"><img src={l} className="max-h-14 object-contain" /></div>
          ))}
        </div>
      </div>
    </section>
  )
}
