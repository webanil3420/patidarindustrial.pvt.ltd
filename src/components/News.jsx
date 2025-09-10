import React from 'react'

const news = [
  {
    title: 'Govt Subsidy Available for Solar',
    body: 'Get up to ₹78,000 subsidy. Check out the official govt announcement.',
    link: 'https://www.youtube.com/embed/Ba3teq9KZj8'
  },
  {
    title: 'New Solar Project Completed',
    body: '200 kW rooftop project completed for a manufacturing client.',
    link: 'https://www.youtube.com/embed/Ba3teq9KZj8'
  },
  {
    title: 'Free Energy Audit Camp',
    body: 'Join our free energy audit camp; limited seats available.',
    link: 'https://www.youtube.com/embed/Ba3teq9KZj8'
  }
]

export default function News() {
  return (
    <section id="news" className="max-w-6xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-4 fade-up">News & Updates</h3>

      {/* Optional video banner */}
      <div className="mb-6">
        <video width="100%" height="400" autoPlay loop muted playsInline>
          <source src="/assets/India's Renewable Energy Sector (1 MIN).mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* News Grid with embedded YouTube videos */}
      <div className="grid md:grid-cols-3 gap-4">
        {news.map((item, i) => (
          <div
            key={i}
            className="block p-4 bg-white rounded shadow hover:shadow-lg transition fade-up"
          >
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{item.body}</p>
            <div className="mt-3">
              <iframe
                width="100%"
                height="180"
                src={item.link}
                title={item.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
