import React from 'react';

const EditorInChief = () => {
  return (
    <div className="bg-[#2a3064] min-h-fit p-6 md:p-10 text-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">Editor-in-Chief</h1>
        <span className="hidden md:inline mx-4 text-white">|</span>
        <a
          href="#"
          className="text-blue-300 hover:underline mt-2 md:mt-0"
        >
          View full editorial board
        </a>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Image */}
        <div className="w-28 h-28 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden">
        
             <img src="/assets/IMG_20250910_192220.jpg"
            alt="HS Katariya"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
          <h2 className="text-xl md:text-2xl font-semibold">HS Katariya</h2>
          <p className="text-gray-300">Patidar Industrial Controls and Utilities Pvt Ltd</p>
          <p className="text-gray-300">Indore, MP</p>

          {/* Work / Skills */}
          <ul className="mt-3 space-y-1 text-gray-200">
            <li>✔ Solar Energy Installation Work</li>
            <li>✔ Solar Panel Projects</li>
            <li>✔ Rooftop Installations</li>
            <li>✔ Industrial Energy Solutions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EditorInChief;
