import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariantsUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-10 bg-white text-black">
      {/* How solar is used section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariantsLeft} className="space-y-4">
          <h4 className="text-3xl font-bold text-black">How solar is used</h4>
          <p className="font-sans text-base leading-relaxed text-black">
            Solar energy is a very flexible energy technology. It can be built as distributed generation (located at or near the point of use) or as central station, utility-scale solar farms. Both of these are important for powering homes and businesses. Solar can also store the energy they produce for distribution after the sun sets, using cutting-edge battery storage systems. For example, California is planning to install 5.6 GW of electricity solely in the U.S., making alongside other technologies for wind power to provide 60% of its electricity by the year 2030.
          </p>
          <p className="font-sans text-base leading-relaxed text-black">
            All of these applications depend on supportive policy frameworks at the local, state, and federal level that give homeowners and businesses have the access to clean energy technologies like solar.
          </p>
        </motion.div>

        <motion.div variants={itemVariantsRight} className="rounded overflow-hidden">
 <img src="/assets/bcat10-1656781612-uses-of-solar-energy.jpg"  alt="Solar Panel Installation" className="w-full h-96 object-cover rounded img-smooth" />
        </motion.div>
      </motion.div>

      {/* The Solar Market Today section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariantsLeft} className="rounded overflow-hidden">
      <img src="/assets/solar-energy-market-1684137699.png" alt="Rooftop Solar Installation" className="w-full h-96 object-cover rounded img-smooth" />
        </motion.div>

        <motion.div variants={itemVariantsRight} className="space-y-4">
          <p className="text-blue-600 font-semibold uppercase text-sm">Research</p>
          <h4 className="text-3xl font-bold text-black">The Solar Market Today</h4>
          <p className="font-sans text-base leading-relaxed text-black">
            There are more than 200 Gigawatts (GW) of solar installed in the U.S., enough to power 42.5 million homes. More than 45 GW of solar capacity has been installed, and the U.S. has grown at an average rate of 25% each year. There are more than 2.8 million individual solar installations, from small residential rooftop systems to large utility-scale systems that add hundreds of megawatts of clean electricity to the power grid.
          </p>
          <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">Read More →</a>
        </motion.div>
      </motion.div>

      {/* Resources for Solar Customers section */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-start mb-16"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariantsLeft} className="space-y-4">
          <p className="text-blue-600 font-semibold uppercase text-sm">Get Informed</p>
          <h4 className="text-3xl font-bold text-black">Resources for Solar Customers</h4>
          <p className="font-sans text-base leading-relaxed text-black">
            If you're looking to install solar on your home or business, SEIA has a variety of resources to guide you through the process. Browse our customer portal to learn more about your options, what to look for in an offer, questions to ask a solar company, your rights as a consumer, and more.
          </p>
          <div className="space-y-3 mt-6">
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="font-bold text-black">Smart Solar Guide</h4>
              <p className="text-sm text-black mt-1">
                Being solar is a major purchase and you should have a clear understanding of all the solar options available to you before you make a decision for your and your family. This guide is to get you started on your path to going solar.
              </p>
              <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">Read More →</a>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="font-bold text-black">Consumer Guide to Home Solar</h4>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="font-bold text-black">Consumer Guide to the Solar ITC</h4>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="font-bold text-black">SEIA Solar Business Code</h4>
            </div>
            <div className="p-4 bg-gray-50 rounded">
              <h4 className="font-bold text-black">Recursos en Español</h4>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariantsRight} className="rounded overflow-hidden">
                <img src="/assets/images (1).jpeg" alt="Home Solar Panels" className="w-full h-96 object-cover rounded img-smooth" />
        </motion.div>
      </motion.div>

      {/* Additional Solar Aspects - You requested 4 images, so I'm adding one more section here */}
      <motion.div
        className="grid md:grid-cols-2 gap-10 items-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariantsLeft} className="space-y-4">
          <p className="text-blue-600 font-semibold uppercase text-sm">Innovation</p>
          <h4 className="text-3xl font-bold text-black">Advancements in Solar Technology</h4>
          <p className="font-sans text-base leading-relaxed text-black">
            Continuous innovation is driving down costs and improving the efficiency of solar panels. New materials, manufacturing techniques, and energy storage solutions are making solar more accessible and reliable than ever before. From flexible solar cells to integrated smart home energy management, the future of solar is bright.
          </p>
          <a href="#" className="text-blue-600 font-semibold text-sm hover:underline">Explore Innovations →</a>
        </motion.div>

        <motion.div variants={itemVariantsRight} className="rounded overflow-hidden">
         <img src="/assets/Solar-Industry.jpg" alt="Solar Innovation" className="w-full h-96 object-cover rounded img-smooth" />
        </motion.div>
      </motion.div>
    </section>
  );
}