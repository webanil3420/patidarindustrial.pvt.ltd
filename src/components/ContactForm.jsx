import React, {useState} from 'react'

export default function ContactForm(){
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [msg,setMsg]=useState('')

  const send = (e)=>{
    e.preventDefault()
    const text = `Contact%20Request%0AName:%20${encodeURIComponent(name)}%0APhone:%20${encodeURIComponent(phone)}%0AMessage:%20${encodeURIComponent(msg)}`
    // open WhatsApp chat (India number)
    window.open(`https://wa.me/919329244777?text=${text}`, '_blank')
  }

  return (
    <section id="contactform" className="max-w-3xl mx-auto px-6 py-8">
      <h3 className="text-2xl font-bold mb-4 fade-up">Contact / Inquiry Form</h3>
      <form onSubmit={send} className="grid grid-cols-1 gap-3">
        <input value={name} onChange={e=>setName(e.target.value)} required placeholder="Your name" className="p-3 border rounded" />
        <input value={phone} onChange={e=>setPhone(e.target.value)} required placeholder="Phone (eg. 91xxxxxxxxxx)" className="p-3 border rounded" />
        <textarea value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Tell us about your project" className="p-3 border rounded h-32" />
        <div className="flex gap-3">
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Send via WhatsApp</button>
          <a href={`mailto:patidar041214@gmail.com?subject=${encodeURIComponent('Website Inquiry from '+(name||'Guest'))}&body=${encodeURIComponent(msg)}`} className="px-4 py-2 bg-indigo-600 text-white rounded">Send Email</a>
        </div>
        <p className="text-sm text-gray-500">By submitting you agree we may contact you on WhatsApp / Email.</p>
      </form>
    </section>
  )
}
