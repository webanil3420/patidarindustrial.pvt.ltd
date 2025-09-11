import React from 'react';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export default function FloatingCall() {
  return (
    <div>
      {/* Call Button */}
      <a
        href="tel:9329244777"
        className="fixed left-4 bottom-6 z-50 bg-gradient-to-r from-indigo-600 to-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <FaPhoneAlt className="h-5 w-5" />
        Call
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/9329244777"
        target="_blank"
        rel="noreferrer"
        className="fixed left-4 bottom-20 z-50 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform"
      >
        <FaWhatsapp className="h-5 w-5" />
        WhatsApp
      </a>
    </div>
  );
}
