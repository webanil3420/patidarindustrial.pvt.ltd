import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer({ setShowDeveloper }) {
  return (
    <footer className="footer-dark border-t border-white/10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold text-white">PATIDAR Industrial Controls & Utilities</h3>
          <p className="text-sm text-gray-300 mt-2">
            Project, Planning, Operation & Maintenance of Electric HT/LT Substation, DG Sets, Optical Fibre Network, Solar Systems and Facility Management.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-white">Contact</h3>
          <div className="text-sm text-gray-300 mt-2">
            <div>H.S. Katariya</div>
            <div>Phone: <a href="tel:9329244777" className="text-indigo-600">9329244777,</a></div>
            <div>Email: <a href="mailto:patidar041214@gmail.com" className="text-indigo-600">patidar041214@gmail.com</a></div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-white">Address</h3>
          <div className="text-sm text-gray-300 mt-2">
            F-104, Shree Ji Trade Centre, Shri Mangal Nagar, Bicholi Hapsi Road, Indore (M.P) 452016
          </div>

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
          <button
            onClick={() => setShowDeveloper(true)}
            className="mt-4 w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-800 transition"
          >
            Developer
          </button>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 py-3">
        © {new Date().getFullYear()} PATIDAR — All rights reserved.
      </div>
    </footer>
  )
}
