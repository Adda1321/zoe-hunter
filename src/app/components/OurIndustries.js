'use client'
import React, { useState } from 'react';
import { Fade } from 'react-reveal';
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import Link from 'next/link'
import { FaSortDown } from "react-icons/fa6";

const OurIndustries = () => {
  const industries = [
    {
      id: "it_and_digital",
      name: "IT and Digital",
      detail: `
      <p><b>Our Experience in Digitalization and Specialized Hiring Projects</b></p>
      <p>At <b>ZOI HeadHunter</b>, we have spearheaded significant projects in the realm of digitalization, migration, and mass hiring across Latin America. We provide robust support in various domains, including web architecture, mobile development, infrastructure, web, and product.</p>
      
      <p class="my-2"><b>Our Highlighted Projects!</b></p>
      <ul class="text-sm">
        <li>● Migration and implementation of Oracle Fusion Cloud across Latin America for a leading Manufacturing industry company.</li>
        <li>● Digitalization in the hospitality industry using <b>ODOO</b> and <b>PMS Cloud</b>.</li>
        <li>● Support in expansion for a leading cybersecurity consulting company across Latin America.</li>
        <li>● Establishment of development areas for a <b>Fintech</b> company.</li>
      </ul>      
      `
    },
    {
      id: "automotive",
      name: "Automotive",
      detail: `
      <p>At <b>ZOI HeadHunter</b>, we have lead high-impact projects in the automotive sector, focusing on addressing talent challenges for Tier 1, Tier 2, and OEM companies. Our track record spans a wide range of roles and specialized profiles, from experts in different commodities to professionals in embedded software.</p>

      <p class="my-2"><b>Our Highlighted Projects!</b></p>
      <ul class="text-sm">
        <li>● Support in the migration of production plants with a guarantee of timely hires for an efficient transition.</li>
        <li>● Strategic expansion of the production process, encompassing critical areas such as assembly, parts cutting, and painting.</li>
        <li>● Development and establishment of Research and Development (R&D) Hubs throughout Latin America.</li>
      </ul>      
      `
    },
    {
      id: "chemicals",
      name: "Chemicals",
      detail: `
      <p>In our trajectory, we have faced talent challenges across various sectors of the chemical industry, spanning specialized areas such as personal care, petrochemicals, coatings, polymers, agriculture, fragrances, and flavorings. Our collaboration has been focused on identifying and bringing together specialized professionals with the specific needs of each branch.</p>

      <p>We have worked closely with specialized profiles, ranging from technical levels to executives, including chemical analysts, laboratory technicians, and engineers specializing in safety and quality control.</p>
      
      <p class="my-2"><b>Our Highlighted Projects!</b></p>
      <ul class="text-sm">
        <li>● Establishment of an R&D Center in Latin America.</li>
        <li>● Recruitment of highly specialized profiles for a manufacturer of ingredient materials.</li>
        <li>● Expansion in the structure of technical commercial profiles in Mexico and Latin America for a leading company in the commercialization of chemical raw materials.</li>
      </ul>      
      `
    },
    {
      id: "automation",
      name: "Automation",
      detail: `
      <p>At <b>ZOI HeadHunter</b>, we have successfully lead projects in the dynamic field of industrial automation, working closely with key players in the machinery and equipment market.</p>

      <p class="my-2"><b>Our Highlighted Projects!</b></p>
      <ul class="text-sm">
        <li>● Support in the implementation of <b>WMS</b> through specialized profiles in logistics optimization.</li>
        <li>● Design and recruitment of a commercial structure for a leading company in industrial sensors, focused on advanced monitoring and control in production lines.</li>
        <li>● Guidance and selection of highly specialized profiles in advanced robotics for a leading company in the sector.</li>
        <li>● Successful establishment of operations for a prominent Chinese company, a global leader in specialized machinery for the Mining and Oil sectors</li>
      </ul>
      `
    },
    {
      id: "logistics_operators",
      name: "Logistics Operators",
      detail: `
      <p>With a robust 8-year consolidated experience in the logistics sector, we have fostered significant relationships with key players in the industry. Our commitment is reflected in our active participation in specialized events and conferences, enabling us to understand and anticipate the evolving needs of the market.</p>

      <p><b>Among our notable achievements are:</b></p>
      <ul>
        <li>● Transition of the managerial and executive team, originally Japanese, to Mexican professionals for an international logistics operator.</li>
        <li>● Specialization in highly specialized profiles for specific services such as Crossborder, maritime, and air transport.</li>
        <li>● Strategic placement of Country Directors for the establishment of companies dedicated to logistics platforms.</li>
        <li>● Successful launch of operations for a Chinese company focusing on Last Mile Logistics.</li>
      </ul>      
      `
    }
  ]
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-main-500 py-20 md:py-24 lg:py-28" id="our_industries">
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-start">
          <div className="col-span-12 md:col-span-12 lg:col-span-6">

            <h2 className="sec-title max-w-fit text-white mb-6">
              <span>Our</span>
              <span className="relative inline-block text-white py-1 px-2 bg-main-300 font-black font-main mx-0 md:mx-1">Specialised

                <svg className="absolute right-auto lg:right-0 -bottom-3 md:-bottom-5" width="160" height="10" viewBox="0 0 249 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.09381 10.6056C45.0791 6.01698 85.222 3.99512 128.536 3.19966C160.546 2.61181 196.077 1.51174 227.751 3.7534C234.097 3.95267 239.889 4.7184 246.981 5.60021" stroke="#CDD5D8" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> 
              <span>Industries</span>
            </h2>
            
            <ul>
              {industries.map((industry, index) => (
                <div key={index} className="mb-3">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="bg-main-400 rounded-3xl w-full text-left text-lg flex gap-3 items-center justify-between px-4 py-4"
                  >
                    <div className="h-1 w-1 bg-white rounded-full"></div>
                    <span className="mr-auto">{industry.name}</span>
                    <FaSortDown className={openIndex === index ? 'rotate-180 transform' : ''} />
                  </button>
                  {openIndex === index && (
                    <div className="font-main px-8 py-3">
                      <span dangerouslySetInnerHTML={{ __html: industry.detail }} />
                      {/* Add any additional content here */}
                    </div>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="col-span-12 md:col-span-12 lg:col-span-6">
            <Fade cascade>
              <Image
                src="/industries.png"
                alt="industries Image"
                // layout="responsive"
                loading="lazy"
                width={700}
                height={810}
                className="max-w-full w-full pr-4 mt-10 md:mt-5 lg:mt-0"
              />
            </Fade>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurIndustries; 