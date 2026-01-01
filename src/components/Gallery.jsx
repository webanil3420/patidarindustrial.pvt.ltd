import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Gallery() {
  const [images, setImages] = useState([

    '/assets/gallery2.jpg',
     '/assets/solar1.jpg',
    '/assets/gallery3.jpg',
    '/assets/hero.jpg'
  ])
  const [active, setActive] = useState(null)

  const handleUpload = (e) => {
    const files = Array.from(e.target.files)
    const urls = files.map(f => URL.createObjectURL(f))
    setImages(prev => [...urls, ...prev])
  }

  const handleDelete = (src) => {
    setImages(prev => prev.filter(img => img !== src))
    if (active === src) setActive(null) // close lightbox if deleted
  }

  return (
    <section id="gallery" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
      <h3 className="text-3xl font-bold mb-4">Gallery</h3>
      <p className="text-white mb-6">
        Upload photos from site visits or projects — they will show instantly in the gallery preview.
      </p>

      <div className="mb-4 flex flex-col sm:flex-row gap-3 items-start sm:items-center">
        <label htmlFor="gallery-upload" className="upload-btn cursor-pointer px-4 py-2 bg-blue-600 text-white rounded">Upload Files</label>
        <input id="gallery-upload" type="file" multiple onChange={handleUpload} className="hidden" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((src, i) => (
          <motion.div
            key={i}
            className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={src}
              alt={'gallery-' + i}
              className="w-full h-48 sm:h-44 object-cover"
              onClick={() => setActive(src)}
            />
            <div className="absolute inset-0 bg-black/30 flex items-end justify-between opacity-100 sm:opacity-0 hover:opacity-100 transition p-2 sm:p-3">
              <button
                className="bg-white/90 text-black text-xs sm:text-sm px-2 py-1 rounded"
                onClick={(e) => { e.stopPropagation(); setActive(src) }}
              >
                View
              </button>
              <button
                className="bg-red-500 text-white text-xs sm:text-sm px-2 py-1 rounded"
                onClick={(e) => { e.stopPropagation(); handleDelete(src) }}
              >
                Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setActive(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={active}
              className="max-w-full max-h-[90vh] rounded shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // prevent closing on image click
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
