import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery(){
  const [images, setImages] = useState([
    '/assets/gallery1.jpg','/assets/gallery2.jpg','/assets/gallery3.jpg','/assets/hero.jpg'
  ])
  const [active, setActive] = useState(null)
  const handleUpload = (e)=>{
    const files = Array.from(e.target.files)
    const urls = files.map(f=>URL.createObjectURL(f))
    setImages(prev=>[...urls, ...prev])
  }
  return (
    <section id="gallery" className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-4 fade-up">Gallery</h3>
      <p className="text-gray-600 mb-6 fade-up">Upload photos from site visits or projects — they will show instantly in the gallery preview (client-side only).</p>

      <div className="mb-4 flex gap-3 items-center">
        <label for="gallery-upload" className="upload-btn cursor-pointer">Upload Files</label>
        <input id="gallery-upload" type="file" multiple onChange={handleUpload} className="input-hidden" />
        <span className="text-sm text-gray-500">Tip: Click any image to view larger.</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src,i)=>(
          <motion.div key={i} className="relative overflow-hidden rounded-lg shadow card-hover" whileHover={{scale:1.03}} onClick={()=>setActive(src)}>
            <img src={src} alt={'gallery-'+i} className="w-full h-44 object-cover img-smooth" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition flex items-end p-3">
              <button className="btn-ghost text-sm">View</button>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div key="lightbox" className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={()=>setActive(null)}
            initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <motion.img src={active} className="max-w-3xl max-h-[80vh] rounded" initial={{scale:0.8}} animate={{scale:1}} exit={{scale:0.8}} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
