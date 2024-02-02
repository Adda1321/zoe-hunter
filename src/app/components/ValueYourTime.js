'use client'
import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react';
import Link from 'next/link'
import { IoChevronDownSharp } from "react-icons/io5";
import Tilt from 'react-parallax-tilt';

const ValueYourTime = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonialsData = [
    {
      name: 'Ellison Mark',
      position: 'Head of content marketing',
      message: 'Their outstanding adaptability to our work methods, communication channels, and changes in job requirements was crucial to smoothly carry out our internal process without setbacks and in a seamless manner.',
    },
    {
      name: 'Jane Smith',
      position: 'CTO, Tech Solutions',
      message: 'Their outstanding adaptability to our work methods, communication channels, and changes in job requirements was crucial to smoothly carry out our internal process without setbacks and in a seamless manner.',
    },
    {
      name: 'Bob Johnson',
      position: 'Lead Developer, WebDev Co.',
      message: 'Their outstanding adaptability to our work methods, communication channels, and changes in job requirements was crucial to smoothly carry out our internal process without setbacks and in a seamless manner.',
    },
  ];

  return (
    <section id="value_ur_time" className="relative bg-section-300 py-20 md:py-24 lg:py-28">
      <div className="container-main">
        <Image
          className="max-w-full absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0"
          src="/bg-map.png"
          alt="Image"
          layout="fixed"
          loading="lazy"
          width={880}
          height={480}
        />

        <div className="section-header flex flex-col items-center mb-12 md:mb-16 lg:mb-16 w-full md:w-3/4 lg:w-1/2 xl:w-1/2 mx-auto">
          <p className="sec-sub-title text-primary mb-6">
            GET VALUE FROM US
          </p>
          <h2 className="sec-title text-body max-w-fit mb-6">
            We
            <span className="relative inline-block py-1 px-2 bg-white font-black font-main mx-2"> Value
              <svg className="absolute right-3 -bottom-5" width="249" height="13" viewBox="0 0 249 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.09381 10.6056C45.0791 6.01698 85.222 3.99512 128.536 3.19966C160.546 2.61181 196.077 1.51174 227.751 3.7534C234.097 3.95267 239.889 4.7184 246.981 5.60021" stroke="#CDD5D8" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span> your time
          </h2>
          <p className="font-main text-body-dark text-base lg:text-lg xl:text-xl 2xl:text-2xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal tracking-tight mb-4 md:mb-5">
            In today's competitive business world, the time factor is key.
          </p>
          <p className="text-body text-center text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
            Therefore, we have designed a recruitment model accompanied by Lean methodologies, unique in the market, which allows us to streamline the process without compromising quality.
          </p>
        </div>

        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-14 items-center">
          <div className="col-span-14 md:col-span-14 lg:col-span-4">
            <div className="ml-0 md:ml-8 lg:ml-12 flex flex-row lg:flex-col gap-5 md:gap-12 lg:gap-16 items-center justify-center mb-5 md:mb-0 -lg:mb-16 -xl:mb-12">
              <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glareBorderRadius="100%"
                perspective={500} glarePosition="all"
                trackOnWindow={true}
                className="ml-0 lg:ml-9"
              >
                <Image
                  src="/avatar-4.png"
                  alt="avatar Image"
                  layout="fixed"
                  loading="lazy"
                  width={70}
                  height={70}
                  className="max-w-full"
                />
              </Tilt>
              <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glareBorderRadius="100%"
                perspective={500} glarePosition="all"
                trackOnWindow={true}
                className="mr-0 lg:mr-9 mb-12">
                <Image
                  src="/avatar-5.png"
                  alt="avatar Image"
                  layout="fixed"
                  loading="lazy"
                  width={70}
                  height={70}
                  className="max-w-full"
                />
              </Tilt>
              <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glareBorderRadius="100%"
                perspective={500} glarePosition="all"
                trackOnWindow={true}
                className="ml-2 lg:ml-9"
              >
                <Image
                  src="/avatar-6.png"
                  alt="avatar Image"
                  layout="fixed"
                  loading="lazy"
                  width={70}
                  height={70}
                  className="max-w-full"
                />
              </Tilt>
            </div>
          </div>
          <div className="col-span-14 md:col-span-14 lg:col-span-6">

            <Fade cascade>
              <div className="glide">
                <Slider {...settings}>
                  {testimonialsData.map((testimonial, index) => (
                    <div className="py-2" key={index}>
                      <div key={index} className="text-center font-main bg-white rounded-2xl shadow overflow-visible p-8">
                        {/* <div className="flex justify-center relative -top-16">
                          <Image
                            src="/avatar-1.png"
                            alt=" Image"
                            layout="fixed"
                            loading="lazy"
                            width={100}
                            height={100}
                            className="max-w-full"
                          />
                        </div> */}
                        <p className="text-center text-body text-base font-light leading-5">
                          {testimonial.message}
                        </p>
                        <div className="mt-4">
                          <p className="text-primary text-2xl font-black leading-snug">
                            {testimonial.name}
                          </p>
                          <p className="text-sec-500 text-sm font-light uppercase leading-none tracking-widest">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </Fade>

          </div>
          <div className="col-span-14 md:col-span-14 lg:col-span-4">
            <Tilt glareEnable={false} glareMaxOpacity={0.8} glareColor="#ffffff" glareBorderRadius="100%"
              perspective={500} glarePosition="all"
              trackOnWindow={true}>
              <div className="flex flex-row lg:flex-col gap-5 lg:gap-10 items-center justify-center mt-6 lg:mt-0">
                <Image
                  src="/avatar-2.png"
                  alt="avatar Image"
                  layout="fixed"
                  loading="lazy"
                  width={70}
                  height={70}
                  className="max-w-full ml-2 md:ml-7 lg:ml-12"
                />
                <Image
                  src="/avatar-3.png"
                  alt="avatar Image"
                  layout="fixed"
                  loading="lazy"
                  width={70}
                  height={70}
                  className="max-w-full mr-2 lg:mr-9 mt-6 lg:mt-0"
                />
                <Image
                  src="/avatar-4.png"
                  alt="avatar Image"
                  layout="fixed"
                  loading="lazy"
                  width={70}
                  height={70}
                  className="max-w-full"
                />
              </div>
            </Tilt>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ValueYourTime;
