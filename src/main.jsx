import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(<App />)

// Mobile menu toggle
window.addEventListener('load', ()=>{
  const btn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')
  if(btn && menu){
    btn.addEventListener('click', ()=>{
      menu.classList.toggle('hidden')
    })
    // hide on click outside
    document.addEventListener('click', (e)=>{
      if(!btn.contains(e.target) && !menu.contains(e.target)) menu.classList.add('hidden')
    })
  }
})
