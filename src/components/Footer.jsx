import React from 'react'

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn ,FaWhatsapp } from 'react-icons/fa'

export default function Footer({ setShowDeveloper }) {
  return (
    <footer className="footer-dark border-t border-white/10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">PATIDAR Industrial Controls & Utilities</h3>
            <div className="text-lg font-bold !text-[#ff0000]">
  (Govt 'A' Class Electrical Contractor)
</div>

          <p className="text-sm text-gray-300 mt-2">
 Project, Planning ,Execution , Operation & Maintenance (CAMC, AMC) of Electric HT/LT Substation, DG Sets, Electric M/c, Optical fibre Network for telecom, EPABX System, Solar system, CCTV, UPS , Battery Bank , Fire alarm system, Air Conditioners, System Networking, Electric Audit, All infrastructures management of Industrial & Telecomm , Facility managements and Consulting chartered Engineers.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <div className="text-sm text-gray-300 mt-2">
            <div>H.S. KATARIYA</div>
            <div className="flex items-center space-x-2 ">
      <FaWhatsapp className="" />
      <span className='!text-gray-300'>Phone:</span>
      <a href="tel:9329244777" className="text-indigo-600 font-medium">
        9329244777
      </a>
    </div>
             <div>Phone: <a href="tel:7000438378" className="text-indigo-600">7000438378,</a></div>
            <div>Email: <a href="mailto:patidar041214@gmail.com" className="text-indigo-600">patidar041214@gmail.com</a></div>
            <h1>
  <a
    href="https://patidar-industrial-pvt-ltd.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    https://patidar-industrial-pvt-ltd.vercel.app/
  </a>
</h1>
          </div>
        </div>
        

        <div>
          <h3 className="font-semibold text-white">Indore Office</h3>
          <div className="text-sm text-gray-300 mt-2">
            F-104, Shree Ji Trade Centre, Shri Mangal Nagar, Bicholi Hapsi Road, Indore (M.P) 452016
          </div>

               <h3 className="font-semibold text-white">Regd. Office</h3>
          <div className="text-sm text-gray-300 mt-2">
          87, Revenue Nagar, Bicholi Hapsi Road, Indore (M.P) 452016
          </div>

          <h1>
  <a
    href="https://patidar-industrial-pvt-ltd.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 hover:underline"
  >
    https://patidar-industrial-pvt-ltd.vercel.app/
  </a>
</h1>


          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500">
              <FaFacebookF size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500">
              <FaInstagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-indigo-500">
              <FaLinkedinIn size={20} />
            </a>
          </div>

          {/* Developer Button */}
          {/* <button
            onClick={() => setShowDeveloper(true)}
            className="mt-4 w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-800 transition"
          >
            Developer
          </button> */}
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-3">
        © {new Date().getFullYear()} PATIDAR — All rights reserved.
      </div>
    </footer>
  )
}
