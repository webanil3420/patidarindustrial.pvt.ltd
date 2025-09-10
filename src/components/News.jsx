import React from 'react'

const ads = [
  {title: 'Govt Subsidy Available for Solar', body: 'Get upto ₹78,000 subsidy. Contact our office for application assistance. Documents support and application help provided.'},
  {title: 'New Solar Project Completed', body: '200 kW rooftop project completed for a manufacturing client.'},
  {title: 'Free Energy Audit Camp', body: 'Join our free energy audit camp; limited seats available.'}
]

export default function News(){
  return (
    <section id="news" className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-4 fade-up">News & Advertisements</h3>

      {/* Self-Hosted Video */}
      <div className="mb-6">
        <video width="100%" height="400" autoPlay loop muted playsInline>
          <source src="/assets/India's Renewable Energy Sector (1 MIN).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Ads Grid */}
      <div className="grid md:grid-cols-3 gap-4">
        {ads.map((a,i)=>(
          <div key={i} className="p-4 bg-white rounded shadow fade-up">
            <h4 className="font-semibold">{a.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{a.body}</p>
            <div className="mt-3">
              <a href="tel:9329244777" className="text-indigo-600 underline">Call us for details</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
