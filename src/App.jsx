import React, { useEffect } from 'react'
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

export default function App(){
  useEffect(()=>{
    // simple scroll anim: add .show to .fade-up elements when in viewport
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting) e.target.classList.add('show')
      })
    }, {threshold: 0.15})
    document.querySelectorAll('.fade-up').forEach(el=>obs.observe(el))
  },[])
  return (
    <div className="font-sans antialiased text-gray-800">
      <Header />
      <Hero />
      <main className="space-y-24">
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
      <Footer />
      <FloatingCall />
    </div>
  )
}
