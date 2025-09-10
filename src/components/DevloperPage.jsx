import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";

const DeveloperPage = () => {
  return (
    <div
      id="developer"
      className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-indigo-200 flex flex-col items-center py-8 px-4"
    >
      {/* Developer Card */}
      <div className="bg-white shadow-lg rounded-2xl max-w-3xl w-full p-6 flex flex-col md:flex-row items-center gap-4">
        {/* Developer Image */}
        <img
          src="/assets/anilpatidar.jpg"
          alt="Anil Patidar"
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-2 border-indigo-500 object-cover shadow-md"
        />

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          {/* Name & Title */}
          <h1 className="text-xl md:text-2xl font-bold text-indigo-700 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Anil Patidar
          </h1>
          <h2 className="text-sm md:text-md text-gray-700 mb-2" style={{ fontFamily: "'Roboto', sans-serif" }}>
            Software Developer at SWAPAC INFOTECH PVT LTD
          </h2>

          {/* Bio */}
          <p className="text-gray-700 text-xs md:text-sm mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
            Anil Patidar is an experienced Frontend Developer with over 1 year of professional experience. He has independently developed this website over 2 months, handling all aspects of design and functionality. 
          </p>
          <p className="text-gray-700 text-xs md:text-sm mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
            He is skilled in React, Tailwind CSS, and modern frontend technologies, and takes pride in writing clean, maintainable code. This website showcases his work, with the backend currently under development.
          </p>
          <p className="text-gray-700 text-xs md:text-sm mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
            The website is publicly accessible for demonstration purposes, but all code remains proprietary. Call or WhatsApp to connect directly for projects or collaborations.
          </p>

          {/* Social Links */}
          <div className="flex gap-2 mb-2 justify-center md:justify-start">
            <a href="https://github.com/webanil3420" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1.5 rounded-full hover:bg-gray-800 transition">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/in/anilpatidar" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1.5 rounded-full hover:bg-gray-800 transition">
              <FaLinkedin size={16} />
            </a>
            <a href="https://instagram.com/anilpatidar" target="_blank" rel="noopener noreferrer" className="text-white bg-black p-1.5 rounded-full hover:bg-gray-800 transition">
              <FaInstagram size={16} />
            </a>
          </div>

          {/* Call & WhatsApp */}
          <div className="flex gap-2 justify-center md:justify-start mt-1">
            <a href="tel:+917489893420" className="flex items-center gap-1 px-3 py-1 bg-black text-white text-xs font-semibold rounded-full hover:bg-gray-800 transition">
              <FaPhone size={14} /> Call
            </a>
            <a href="https://wa.me/917489893420" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 px-3 py-1 bg-green-600 text-white text-xs font-semibold rounded-full hover:bg-green-700 transition">
              <FaWhatsapp size={14} /> WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-6 text-gray-600 text-xs text-center">
        © 2025 Anil Patidar. All Rights Reserved.
      </footer>
    </div>
  );
};

export default DeveloperPage;
