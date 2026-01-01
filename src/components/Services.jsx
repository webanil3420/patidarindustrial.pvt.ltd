import React from 'react'
import { motion } from 'framer-motion'



const services = [
  {
    title: "Solar Rooftop & Ground Mounted",
    subtitle: "Engineering, Procurement & Construction",
    desc: "Solar Rooftop & Ground-Mounted Solutions\nEngineering, Procurement & Construction (EPC)\nWe provide complete EPC services for residential, commercial, and industrial solar rooftop and ground-mounted systems. Our scope covers the entire project lifecycle—from planning, design, engineering, installation, and commissioning.\n\nWe deliver end-to-end EPC solutions, including:\n• Civil, electrical, and mechanical works\n• Liaisoning, coordination, and statutory approvals\n• Grid connectivity and commissioning support\n• Assistance with loan and financing options",
    img: "/assets/service1.jpg"
  },
  {
    title: "HT/LT Substation & DG Sets",
    subtitle: "Installation & Maintenance",
    desc: "HT/LT Substation & DG Sets – Installation & Maintenance\nWe offer comprehensive solutions for HT/LT substations and DG sets, covering complete project planning, execution, and operational support.\n\nOur scope of services includes:\n• Project planning, execution, and operation of HT/LT substations\n• Installation, testing, commissioning, and maintenance of transformers and DG sets\n• Preventive and periodic maintenance to ensure reliability and efficiency\n• Safety compliance as per statutory and industry standards\n• Preparation and maintenance of technical and safety documentation\n• AMC & CAMC services for substations, transformers, and DG sets",

    img: "/assets/image.png"
  },
  {
    title: "Optical Fibre Network for Telecom",
    subtitle: "Design & Laying",
    desc: "Optical Fibre Network\nTelecom & Enterprise Network Solutions\nWe provide end-to-end Optical Fibre Network solutions for telecom operators and enterprise customers. Our services cover the complete project lifecycle—from planning and design to execution, testing, and commissioning.\n\nOur expertise includes deployment and management of common network types such as:\n• National Long Distance (NLD) networks\n• Metro Area Network (MAN) Ring\n• Last Mile (LM) connectivity\n\nWe ensure reliable, scalable, and high-performance fibre infrastructure tailored to client requirements.",
    img: "/assets/service3.jpg"
  },
  {
    title: "Facility Management & Consulting",
    subtitle: "Operations & Support",
    desc: "Facility Management & Consulting\nWe provide comprehensive operations and support services in facility management, ensuring efficiency, safety, and seamless day-to-day operations.",
    img: "/assets/service4.jpg"
  },
  {
    title: "Energy Audit & Bill Optimization",
    subtitle: "Reduce upto 90% electricity bill",
    desc: "Energy Audit & Electricity Bill Optimization\nReduce your electricity bills with our expert energy solutions.\n\nWe provide:\n• Comprehensive Energy Audits to identify power wastage\n• Load balancing and efficiency improvements\n• Solar integration with assistance in obtaining government subsidies\n• Electrical safety audits and compliance as per applicable electrical safety rules and codes\n\nOptimize energy usage, reduce costs, and ensure complete electrical safety.",
    img: "/assets/service5.jpg"
  },
  {
    title: "Telecom & Electrical Civil Works",
    subtitle: "End-to-End Execution",
    desc: "Telecom & Electrical Civil Works – End-to-End Execution\nWe provide comprehensive civil and electrical works for telecom infrastructure, substations, DG sets, and industrial installations. Our services cover complete project execution with strict adherence to quality standards, safety regulations, and compliance requirements, ensuring reliable and durable infrastructure delivery.\n\nWe also offer preventive, predictive, and breakdown maintenance for:\n• CCTV systems\n• Transformers\n• DG sets\n• UPS systems\n• Fire alarm systems\n• Solar systems\n• Electrical substations, HT/LT panels, circuit breakers, and more",
    img: "/assets/service6.jpg"
  },
   {
    title: "Fire Alarm, CCTV, EPABX & UPS",
    subtitle: "End-to-End Execution",
    desc: "We specialize in installation, maintenance, and repair of \n CCTV Systems – Surveillance and security monitoring \n Fire Alarm Systems – Detection, alerting, and safety compliance \nEPABX Systems – Internal and external telecommunication management\nUPS Systems – Reliable backup power for critical equipment",
    img: "/assets/service7.jpg"
  }
]

export default function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-8">
      <h3 className="text-3xl font-bold mb-6 fade-up">Available Services</h3>
      <p className="text-white mb-8 fade-up">We are a government approved vendor with proven track record. Below are the major services offered</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={i}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer fade-up"
            onClick={() => console.log(s.title + "\n\n" + s.desc)}
          >
            <div className="h-44 md:h-52 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover transform hover:scale-105 transition duration-700" />
            </div>
            <div className="p-4">
              <h4 className="text-xl font-semibold">{s.title}</h4>
              <p className="text-sm text-indigo-600">{s.subtitle}</p>

              {/* Description box with scroll */}
              <div className="mt-2 text-sm text-gray-600 h-24 overflow-y-auto">
                {s.desc.split('\n').map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>

          </motion.div>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-3">Why choose PATIDAR...?</h3>

        <div className="p-6 bg-indigo-50 rounded shadow fade-up">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>Patidar Industrial Controls and Utilities</b> is a Government <b>“A”</b> Class Electrical Contractor and an approved registered vendor for <b>MPPWD, MNRE, MPPKVCL</b>, and multinational companies (MNCs) such as <b>TATA Group, Reliance Communications Ltd., and Vodafone Idea Ltd.</b>
            </li>

            <li>
              The company is involved in <b>project planning, execution, operation, and maintenance</b> (CAMC & AMC) of Electrical HT/LT Substations, DG Sets, Electrical Machines, Optical Fibre Networks for telecom, EPABX systems, Solar Power Systems, CCTV, Fire Alarm Systems, Air Conditioning Systems, System Networking, UPS, Electrical Audits & Compliance, and complete Infrastructure Management for Industrial and Telecom facilities.
            </li>

            <li>
              The company also provides <b>Comprehensive Annual Maintenance Contracts (CAMC)</b> for all electrical and electronic equipment and machinery.
            </li>

            <li>
              The organization is led by a licensed Electrical Engineer, approved by the Licensing Board, with more than <b>35 years of industrial operation and maintenance experience</b> in Government organizations and multinational companies (MNCs).
            </li>

            <li>
              Supported by a skilled manpower team of engineers and technicians, the company follows a <b>safety-first approach</b> with well-defined <b>Standard Operating Procedures (SOPs)</b>.
            </li>

            <li>
              Provides <b>end-to-end annual comprehensive maintenance services</b> including materials and spares.
            </li>

            
            <li>
            Preventive maintenance , predictive maintenance , breakdown maintenance of CCTV , Trasnformer , DG sets , AC / DC Moters and drives , UPS, Fire alarm system, solar system, electrical sub-station . HT/LT Panels , circuit breakers  etc.
            </li>
          </ul>
        </div>

      </div>


      <div className="mt-10">
        <h3 className="text-2xl font-bold mb-3">Succesfully Achievments</h3>

        <div className="p-6 bg-indigo-50 rounded shadow fade-up">
          <ul className="list-disc pl-5 space-y-2">
            <li>
              Successfully executed <b>Operation and Maintenance (O&amp;M)</b> of a
              <b> 33/0.44 kV substation</b> with HT/LT panels,
              <b> 4 × 630 kVA transformers</b> and <b>VCB</b> at
              <b> MY Hospital, Indore</b> under a
              <b> Comprehensive Annual Maintenance Contract (CAMC)</b>.
            </li>

            <li>
              Completed <b>Operation and Maintenance</b> of an
              <b> 11/0.44 kV compact substation</b> with
              <b> 430 kVA transformer</b>, <b>DG set</b> and <b>AMF panels</b> at
              <b> MP Public Service Commission (MPPSC), Indore</b> under CAMC.
            </li>

            <li>
              Managed <b>Operation and Maintenance</b> of
              <b> 4 × 11/0.44 kV substations</b> with
              <b> 125 kVA transformers</b> at
              <b> Chacha Nehru Hospital, Cancer Hospital, New OPD, and MRTB</b>,
              under <b>MGM Medical College, Indore</b> (CAMC).
            </li>

            <li>
              Executed <b>Annual Maintenance Work</b> for
              <b> MP Board of Secondary Education</b>, including
              <b> zonal/divisional office buildings</b> and
              <b> staff quarters</b> at Indore.
            </li>

            <li>
              Successfully provided <b>Annual Comprehensive Maintenance</b> of
              <b> Fire Alarm System (FAS)</b>, <b>Public Address (PA) System</b>,
              <b> CCTV System</b>, <b>Audio System</b>, and
              <b> Door Access Control System</b> at
              <b> Super Specialty Hospital</b> under
              <b> MGM Medical College, Indore</b>.
            </li>

            <li>
              Delivered <b>Annual Comprehensive Maintenance</b> of a
              <b> 210 kW Solar Power System</b> and
              <b> UPS systems</b> comprising
              <b> 3 × 125 kVA</b> and <b>10 × 20 kVA</b> units at
              <b> Super Specialty Hospital</b>,
              under <b>MGM Medical College, Indore</b>.
            </li>

            <li>
              Provided <b>Comprehensive Maintenance</b> of a
              <b> 160 kVA Diesel Generator Set</b> at
              <b> MPPSC Office</b> and <b>Residency Area, Indore</b>.
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
}
