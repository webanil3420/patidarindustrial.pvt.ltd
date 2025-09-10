import React, {useState} from 'react'

export default function CommentBox(){
  const [c,setC]=useState('')
  const submit = (e)=>{
    e.preventDefault()
    if(!c) return console.log('Please write a comment')
    const text = `Comment%20from%20website:%20${encodeURIComponent(c)}`
    window.open(`https://wa.me/919329244777?text=${text}`, '_blank')
  }
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <h3 className="text-xl font-bold mb-2 fade-up tex">Leave a Comment / Feedback</h3>
      <form onSubmit={submit} className="flex gap-2">
        <input value={c} onChange={e=>setC(e.target.value)} placeholder="Write your comment..." className="flex-1 p-3 border rounded" />
        <button className="px-4 py-2 bg-amber-500 rounded text-white">Send</button>
      </form>
      <p className="text-sm text-white mt-2">Comments will open WhatsApp chat with our helpline number for quick follow-up.</p>
    </section>
  )
}
