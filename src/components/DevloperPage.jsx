import React from "react";

const DeveloperPage = () => {
  return (
    <div
      id="developer"
      className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-100 to-indigo-200 flex flex-col items-center py-16 px-4 transition-all duration-500"
    >
      {/* Developer Card */}
      <div className="bg-white shadow-2xl rounded-3xl max-w-3xl w-full p-10 flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
        {/* Developer Image */}
        <img
          src="/assets/anilpatidar.jpg"
          alt="Anil Patidar"
          className="w-44 h-44 rounded-full border-4 border-indigo-500 object-cover mb-6 shadow-lg transition-transform duration-500 hover:scale-110"
        />

        {/* Developer Name */}
        <h1
          className="text-5xl font-extrabold text-indigo-700 mb-2"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Anil Patidar
        </h1>
        <h2
          className="text-xl sm:text-2xl text-gray-700 mb-6"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Software Developer at SWAPAC INFOTECH PVT LTD
        </h2>

        {/* Developer Bio */}
        <p className="text-gray-700 text-lg mb-4 px-4 sm:px-10" style={{ fontFamily: "'Lato', sans-serif" }}>
          Anil Patidar is an experienced Frontend Developer with over 1 year of professional experience. He has independently developed this website over 2 months. He possesses excellent knowledge of Frontend Development and completed this project without any external help.
        </p>

        <p className="text-gray-700 text-lg mb-6 px-4 sm:px-10" style={{ fontFamily: "'Lato', sans-serif" }}>
          This website is publicly accessible but intended for personal business use. All code access remains with the developer. Unauthorized changes may result in copyright claims. The website is live for demonstration purposes. Backend is under development and frontend improvements will continue. Making it fully dynamic may take over 1 year.
        </p>

        {/* Social & Contact Links */}
        <div className="flex flex-wrap justify-center gap-5 mb-6">
          <a
            href="https://github.com/webanil3420"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transform hover:-translate-y-1 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/anilpatidar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transform hover:-translate-y-1 transition-all"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com/anilpatidar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transform hover:-translate-y-1 transition-all"
          >
            Instagram
          </a>
        </div>

        {/* Call & WhatsApp */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:+917489893420"
            className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all"
          >
            Call: 7489893420
          </a>
          <a
            href="https://wa.me/917489893420"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-black text-white font-bold rounded-full hover:bg-gray-800 transform hover:scale-105 transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm text-center">
        © 2025 Anil Patidar. All Rights Reserved. This website is for personal business use.
      </footer>
    </div>
  );
};

export default DeveloperPage;
