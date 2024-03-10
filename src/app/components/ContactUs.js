"use client";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Notyf } from "notyf";
import { Fade, Bounce, Slide, Roll } from "react-reveal";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const validationSchema = yup.object().shape({
  name: yup.string().required("Full Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  how_help: yup.string().required("This field is required"),
  number: yup.string().required("Phone Number is required"),
  company: yup.string().required("Company Name is required"),
  message: yup.string().required("Message is required"),
});

const ContactUs = () => {
  var notyf;
  const { t } = useTranslation();
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      notyf = new Notyf();
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      // Make Axios request here
      const response = await axios.post("your-api-endpoint", data);

      // Display success notification
      notyf.success("Message sent successfully");
    } catch (error) {
      // Display error notification
      notyf.error("Error sending message. Please try again.");
    }
  };

  return (
    <Fade cascade>
      <section className="py-20 md:py-24 lg:py-28">
        <div className="container-main">
          <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-center">
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <Fade cascade>
                <div className="section-header mb-6 md:mb-8 lg:mb-10">
                  <h2 className="sec-title text-body">
                    <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">
                      {t("contact_us.contact_us_contact")}
                    </span>{" "}
                    {t("contact_us.contact_us_us")}
                  </h2>
                  <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-tight">
                    {t("contact_us.contact_us_paragraph_1")}
                  </p>
                </div>
              </Fade>

              <Fade bottom cascade>
                <div className="flex gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-start mb-6">
                  <div className="group flex flex-col items-start justify-center">
                    <div className="flex items-center justify-center w-16 h-16 p-2 md:p-3 lg:p-3 border-2 border-solid border-gray-200 group-hover:border-dashed group-hover:border-main-200 bg-main-100 rounded-full ">
                      <FaEnvelope className="text-2xl md:text-2xl lg:text-3xl text-main-500" />
                    </div>
                    <h3 className="font-main text-main-500 text-xl font-extrabold mt-2 mb-1">
                      {t("contact_us.contact_us_email")}
                    </h3>
                    <Link
                      href="mailto:Info@zoiheadhunter.com"
                      className="font-main text-sec-500 text-base font-normal capitalize"
                    >
                      Info@zoiheadhunter.com
                    </Link>
                  </div>
                  <div className="group flex flex-col items-start justify-center">
                    <div className="flex items-center justify-center w-16 h-16 p-2 md:p-3 lg:p-3 border-2 border-solid border-gray-200 group-hover:border-dashed group-hover:border-main-200 bg-main-100 rounded-full ">
                      <IoCall className="text-2xl md:text-2xl lg:text-3xl text-main-500" />
                    </div>
                    <h3 className="font-main text-main-500 text-xl font-extrabold mt-2 mb-1">
                      {t("contact_us.contact_us_call")}
                    </h3>
                    <Link
                      href="tel:+25610413797"
                      className="font-main text-sec-500 text-base font-normal capitalize"
                    >
                      +525610413797
                    </Link>
                  </div>
                </div>
              </Fade>
            </div>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <Fade bottom>
                <form className="font-main" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-2 grid-cols-12">
                    {/* Full Name */}
                    <div className="col-span-12 md:col-span-12 lg:col-span-6">
                      <div className="">
                        {/* <label htmlFor="name">Full Name:</label> */}
                        <input
                          {...register("name")}
                          className={`w-full bg-gray-200 text-main-800 focus:outline-1
                    focus:outline-main-400 rounded-3xl px-4 py-3 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                          placeholder={t("contact_us.form_first_name")}
                          type="text"
                          id="name"
                        />
                        <p className="text-red-500 text-xs h-2 mt-1">
                          {errors.name?.message}
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-span-12 md:col-span-12 lg:col-span-6">
                      <div className="">
                        {/* <label htmlFor="email">Your Email:</label> */}
                        <input
                          {...register("email")}
                          className={`w-full bg-gray-200 text-main-800 focus:outline-1
                    focus:outline-main-400 rounded-3xl px-4 py-3 ${
                      errors.email ? "border-red-500" : ""
                    }`}
                          placeholder={t("contact_us.form_email")}
                          type="email"
                          id="email"
                        />
                        <p className="text-red-500 text-xs h-2 mt-1">
                          {errors.email?.message}
                        </p>
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-span-12 md:col-span-12 lg:col-span-6">
                      <div className="">
                        {/* <label htmlFor="number">Phone Number:</label> */}
                        <input
                          {...register("number")}
                          className={`w-full bg-gray-200 text-main-800 focus:outline-1
                    focus:outline-main-400 rounded-3xl px-4 py-3 ${
                      errors.number ? "border-red-500" : ""
                    }`}
                          placeholder={t("contact_us.form_phone")}
                          type="tel"
                          id="number"
                        />
                        <p className="text-red-500 text-xs h-2 mt-1">
                          {errors.number?.message}
                        </p>
                      </div>
                    </div>

                    {/* Company Name */}
                    <div className="col-span-12 md:col-span-12 lg:col-span-6">
                      <div className="">
                        {/* <label htmlFor="company">Company Name:</label> */}
                        <input
                          {...register("company")}
                          className={`w-full bg-gray-200 text-main-800 focus:outline-1
                    focus:outline-main-400 rounded-3xl px-4 py-3 ${
                      errors.company ? "border-red-500" : ""
                    }`}
                          placeholder={t("contact_us.form_company_name")}
                          type="text"
                          id="company"
                        />
                        <p className="text-red-500 text-xs h-2 mt-1">
                          {errors.company?.message}
                        </p>
                      </div>
                    </div>

                    {/* How can we help you? */}
                    <div className="col-span-12">
                      <div className="">
                        {/* <label htmlFor="how_help">How can we help you?</label> */}
                        <input
                          {...register("how_help")}
                          className={`w-full bg-gray-200 text-main-800 focus:outline-1
                    focus:outline-main-400 rounded-3xl px-4 py-3 ${
                      errors.how_help ? "border-red-500" : ""
                    }`}
                          placeholder={t("contact_us.form_question")}
                          type="tel"
                          id="how_help"
                        />
                        <p className="text-red-500 text-xs h-2 mt-1">
                          {errors.how_help?.message}
                        </p>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="col-span-12 md:col-span-12 lg:col-span-12">
                      <div className="">
                        {/* <label htmlFor="message">Your Message:</label> */}
                        <textarea
                          {...register("message")}
                          className={`w-full bg-gray-200 text-main-800 focus:outline-1
                    focus:outline-main-400 rounded-3xl px-4 py-3 ${
                      errors.message ? "border-red-500" : ""
                    }`}
                          placeholder={t("contact_us.form_note")}
                          id="message"
                          rows="6"
                        ></textarea>
                        <p className="text-red-500 text-xs h-2 mt-1">
                          {errors.message?.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className="btn-main mt-5" type="submit">
                    {t("contact_us.contact_us_button")}
                  </button>
                </form>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default ContactUs;
