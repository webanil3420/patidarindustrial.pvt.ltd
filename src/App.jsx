import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Counters from './components/Counters'
import FAQ from './components/FAQ'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Clients from './components/Clients'
import News from './components/News'
import Advertisements from './components/Advertisements'
import Footer from './components/Footer'
import FloatingCall from './components/FloatingCall'
import ContactForm from './components/ContactForm'
import CommentBox from './components/CommentBox'
import DeveloperPage from './components/DevloperPage'


export default function App() {
  const [showDeveloper, setShowDeveloper] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('show')
      })
    }, { threshold: 0.15 })
    document.querySelectorAll('.fade-up').forEach((el) => obs.observe(el))
  }, [])

  return (
    <div className="font-sans antialiased text-gray-800">
      <Header setShowDeveloper={setShowDeveloper} />

      {showDeveloper ? (
        <main className="space-y-24">
          <DeveloperPage />
        </main>
      ) : (
        <main className="space-y-24">
          <Hero />
          <Services />
          <About />
          <Gallery />
          <Counters />
          <Projects />
          <Testimonials />
          <Clients />
          <FAQ />
          <ContactForm />
          <CommentBox />
          <News />
        </main>
      )}

      {/* Pass setShowDeveloper to Footer so Developer button works */}
      <Footer setShowDeveloper={setShowDeveloper} />
      <FloatingCall />
    </div>
  )
}
