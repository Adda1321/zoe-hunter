import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { BiSolidCommentDetail } from "react-icons/bi";
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  const { t } = useTranslation();
  const contactLinks = [
    {
      label: "Info@zoiheadhunter.com",
      href: "mailto:Info@zoiheadhunter.com",
      icon: <FaEnvelope />,
    },
    {
      label: "+525610413797",
      href: "tel:+525610413797",
      icon: <IoCall />,
    },
    {
      label: "ZOI Headhunter",
      href: "https://www.linkedin.com/company/zoi-headhunter/?viewAsMember=true",
      icon: <FaLinkedin />,
    },
  ];

  const mainLinks = [
    { label: t("footer.home"), href: "home" },
    { label: t("footer.about_us"), href: "about_us" },
    {
      label: t("footer.booking"),
      href: "https://calendly.com/d/49d-j7x-xn4/presentacion-de-servicios",
      link: true,
    },
  ];

  const legalLinks = [
    { label: t("footer.terms_of_policy"), href: "/legal#terms-of-use" },
    { label: t("footer.privacy_policy"), href: "/legal#privacy-policy" },
    { label: t("footer.cookie_policy"), href: "/legal#cookie-policy" },
  ];

  const productLinks = [
    {
      label: t("footer.live_chat"),
      href: "https://wa.me/+525633330404",
      link: true,
    },
    { label: t("footer.reviews"), href: "value_ur_time" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleItemClick = (item) => {
    if (!item.link) {
      scrollToSection(item.href);
    } else {
      window.location.href = item.href;
    }
  };

  return (
    <>
      <footer className="main-footer bg-primary">
        <div className="container-main">
          <div className="pt-8 md:pt-10 lg:pt-12 xl:pt-16">
            <div className="grid gap-5 grid-cols-24">
              <div className="col-span-22 sm:col-span-12 md:col-span-10 lg:col-span-9 xl:col-span-5">
                <div className="mb-10">
                  <Image
                    className="mb-5 w-auto h-8 sm:h-10 md:h-11 lg:h-11 xl:h-11 object-left object-contain"
                    src="/logo.png"
                    alt="logo Image"
                    loading="lazy"
                    width={155}
                    height={50}
                  />
                  <ul className="space-y-2">
                    {contactLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="font-main text-main-200 hover:text-main-100 text-base font-normal leading-0 transition-colors flex items-center gap-3"
                        >
                          {link.icon} {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-22 sm:col-span-12 md:col-span-7 lg:col-span-5 xl:col-span-4">
                <div className="mb-10">
                  <h4 className="text-white font-main text:lg md:text-xl lg:text-2xl xl:text-3xl tracking-foot-title font-bold mb-5">
                    Links
                  </h4>
                  <ul className="space-y-2">
                    {mainLinks.map((link, index) => (
                      <li key={index} style={{ cursor: "pointer" }}>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            handleItemClick(link);
                          }}
                          className="font-main text-main-200 hover:text-main-100 text-base font-normal capitalize leading-0 transition-colors tracking-foot-text"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-22 sm:col-span-12 md:col-span-7 lg:col-span-5 xl:col-span-4">
                <div className="mb-10">
                  <h4 className="text-white font-main text:lg md:text-xl lg:text-2xl xl:text-3xl tracking-foot-title font-bold mb-5">
                    Legal
                  </h4>
                  <ul className="space-y-2">
                    {legalLinks.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.href}
                          className="font-main text-main-200 hover:text-main-100 text-base font-normal capitalize leading-0 transition-colors tracking-foot-text"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-22 sm:col-span-12 md:col-span-10 lg:col-span-5 xl:col-span-4">
                <div className="mb-10">
                  <h4 className="text-white font-main text:lg md:text-xl lg:text-2xl xl:text-3xl tracking-foot-title font-bold mb-5">
                    {t("footer.product")}
                  </h4>
                  <ul className="space-y-2">
                    {productLinks.map((link, index) => (
                      <li key={index} style={{ cursor: "pointer" }}>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            handleItemClick(link);
                          }}
                          className="font-main text-main-200 hover:text-main-100 text-base font-normal capitalize leading-0 transition-colors tracking-foot-text"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-span-22 sm:col-span-12 md:col-span-14 lg:col-span-10 xl:col-span-7">
                <form
                  className="w-[90%] mb-10 pr-12 md:pr-0"
                  action="https://wa.me/+525633330404"
                >
                  <div className="relative font-main mt-4">
                    <input
                      type="text"
                      className="w-full py-4 pl-10 pr-12 bg-main-100 rounded-3xl justify-start items-center gap-2 inline-flex text-zinc-700 text-xs font-normal focus:ring-main-200 focus:ring-2 focus:outline-none"
                      placeholder={t("footer.enter_email")}
                    />
                    <div className="px-2 py-3 justify-center items-center flex absolute top-1 left-1">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.333 13.6666H4.66634C2.66634 13.6666 1.33301 12.6666 1.33301 10.3333V5.66665C1.33301 3.33331 2.66634 2.33331 4.66634 2.33331H11.333C13.333 2.33331 14.6663 3.33331 14.6663 5.66665V10.3333C14.6663 12.6666 13.333 13.6666 11.333 13.6666Z"
                          stroke="#9A9EA6"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.3337 6L9.24699 7.66667C8.56032 8.21333 7.43366 8.21333 6.74699 7.66667L4.66699 6"
                          stroke="#9A9EA6"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <button className="absolute top-1 right-1 px-9 py-3 bg-main-600 hover:bg-main-500 rounded-3xl text-center text-white text-xs font-bold transition-colors">
                      {t("footer.submit_btn")}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center items-center py-6">
            <p className="text-white font-main">
              Copyright 2023 ZOI Headhunter all rights reserved
            </p>
          </div>
        </div>
      </footer>
      <Link
        className="fixed right-6 lg:right-9 bottom-6 lg:bottom-9 bg-main-700 p-3 rounded-full shadow-lg"
        href="https://wa.me/+525633330404"
      >
        <BiSolidCommentDetail />
      </Link>
    </>
  );
};

export default Footer;
