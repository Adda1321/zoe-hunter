"use client";
import React, { useState } from "react";
import { Fade } from "react-reveal";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Transition,
} from "@headlessui/react";
import Link from "next/link";
import { FaSortDown } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const OurIndustries = () => {
  const { t } = useTranslation();
  const industries = [
    {
      id: "it_and_digital",
      name: t("home.ourIndustries_list_tile_1"),
      detail: `
      <p><b> ${t("home.ourIndustries_list_bold_1")}  </b></p>
      <p> ${t("home.ourIndustries_list_text_1")} <b>${t(
        "home.ourIndustries_list_bold_2"
      )}</b>,${t("home.ourIndustries_list_text_2")} </p>
      
      <p class="my-2"><b>  ${t("home.ourIndustries_list_bold_3")} </b></p>
      <ul class="text-sm">
        <li>${t("home.ourIndustries_list_point_1")}</li>
        <li>${t("home.ourIndustries_list_point_2")}</li>
        <li>${t("home.ourIndustries_list_point_3")}</li>
        <li>${t("home.ourIndustries_list_point_4")}</li>
      </ul>      
      `,
    },
    {
      id: "automotive",
      name: t("home.ourIndustries_list_2_tile"),
      detail: `
      ${t("home.ourIndustries_list_2_text_1")}
      <p class="my-2"><b>${t("home.ourIndustries_list_2_bold_1")}</b></p>
      <ul class="text-sm">
        <li>${t("home.ourIndustries_list_2_point_1")}</li>
        <li>${t("home.ourIndustries_list_2_point_2")}</li>
        <li>${t("home.ourIndustries_list_2_point_3")}</li>
      </ul>      
      `,
    },
    {
      id: "chemicals",
      name: t("home.ourIndustries_list_3_tile"),
      detail: `
      <p>${t("home.ourIndustries_list_3_text_1")}</p>

      <p>${t("home.ourIndustries_list_3_text_2")}</p>
      
      <p class="my-2"><b>${t("home.ourIndustries_list_3_bold_1")}</b></p>
      <ul class="text-sm">
        <li>${t("home.ourIndustries_list_3_point_1")}</li>
        <li>${t("home.ourIndustries_list_3_point_2")}</li>
        <li>${t("home.ourIndustries_list_3_point_3")}</li>
      </ul>      
      `,
    },
    {
      id: "automation",
      name: t("home.ourIndustries_list_4_tile"),

      detail: `
      ${t("home.ourIndustries_list_4_details")}
      `,
    },
    {
      id: "logistics_operators",
      name: t("home.ourIndustries_list_5_tile"),
      detail: `
          ${t("home.ourIndustries_list_5_details")}
      `,
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="bg-main-500 py-20 md:py-24 lg:py-28"
      id="our_industries"
    >
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-start">
          <div className="col-span-12 md:col-span-12 lg:col-span-6">
            <h2 className="sec-title max-w-fit text-white mb-6">
              <span>{t("home.ourIndustries_title")}</span>
              <span className="relative inline-block text-white py-1 px-2 bg-main-300 font-black font-main mx-0 md:mx-1">
                {t("home.ourIndustries_specialized")}

                <svg
                  className="absolute right-auto lg:right-0 -bottom-3 md:-bottom-5"
                  width="160"
                  height="10"
                  viewBox="0 0 249 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.09381 10.6056C45.0791 6.01698 85.222 3.99512 128.536 3.19966C160.546 2.61181 196.077 1.51174 227.751 3.7534C234.097 3.95267 239.889 4.7184 246.981 5.60021"
                    stroke="#CDD5D8"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span>{t("home.ourIndustries_industries")}</span>
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
                    <FaSortDown
                      className={
                        openIndex === index ? "rotate-180 transform" : ""
                      }
                    />
                  </button>
                  {openIndex === index && (
                    <div className="font-main px-8 py-3">
                      <span
                        dangerouslySetInnerHTML={{ __html: industry.detail }}
                      />
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
                layout="responsive"
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
