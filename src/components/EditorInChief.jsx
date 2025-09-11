import React from 'react';

const EditorInChief = () => {
  return (
    <div className="bg-[#2a3064] min-h-fit p-6 md:p-10 text-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-center md:justify-start mb-6 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold">Founder & Owner</h2>
        <span className="hidden md:inline mx-4 text-white">|</span>
        <a
          href="#"
          className="text-blue-300 hover:underline mt-2 md:mt-0"
        >
          View full leadership team
        </a>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left">
        {/* Image */}
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-gray-400 flex items-center justify-center overflow-hidden shadow-lg">
          <img
            src="/assets/shared image.jpeg"
            alt="H.S. KATARIYA"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
          <h2 className="text-xl md:text-2xl font-semibold">HS Katariya</h2>
          <p className="text-gray-300">Founder & Owner, Patidar Industrial Controls and Utilities Pvt Ltd</p>
          <p className="text-gray-300">Indore, MP</p>

          {/* Work / Skills */}
          <ul className="mt-3 space-y-1 text-gray-200">
            <li>✔ Solar Energy Installation & Consulting</li>
            <li>✔ Industrial Solar Panel Projects</li>
            <li>✔ Rooftop & Commercial Installations</li>
            <li>✔ Industrial Energy Optimization Solutions</li>
          </ul>

          {/* Vision / Quote */}
          <p className="mt-3 text-gray-300 italic">
            "Leading the way in sustainable energy solutions, combining innovation, efficiency, and reliability for every project."
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditorInChief;
