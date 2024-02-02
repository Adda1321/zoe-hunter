"use client";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import i18n from "../config/localization/i18n";

// import languages from "../data/languages";

export const LANGUAGES = [
  {
    name: "English",
    icon: "/flags/english.svg",
    code: "en",
    active: false,
  },
  {
    name: "Spanish",
    icon: "/flags/spanish.svg",
    code: "sp",
    active: true,
  },
];
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [languages, setLanguages] = useState(LANGUAGES);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    console.log("toggleMenu");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 70);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    {
      name: "Specialization",
      link: "/#our_industries",
    },
    {
      name: "About us",
      link: "/#about_us",
    },
    {
      name: "Schedule the meeting",
      link: "https://calendly.com/d/49d-j7x-xn4/presentacion-de-servicios",
    },
  ];

  const changeLanguageHandler = (lang) => {
    console.log(lang, "language");
    i18n.changeLanguage(lang);
    let duplicateArray = [...languages];
    if (duplicateArray.length) {
      for (let i = 0; i < duplicateArray.length; i++) {
        if (duplicateArray[i].code === lang) {
          duplicateArray[i].active = true;
        } else {
          duplicateArray[i].active = false;
        }
      }
    }
    setLanguages([...duplicateArray]);
  };

  return (
    <header className={`w-full fixed top-0 z-[1000] transition ${isScrolled ? " py-0 bg-white shadow" : "py-3"}`}>
      <div className="container-main">
        <nav className="">
          <div className="flex flex-wrap items-center justify-between p-4 mx-auto">
            <a href="/" className="flex items-center justify-start space-x-3 rtl:space-x-reverse">
              <img src="/logo-main.svg" className="object-contain object-left w-10 h-10" alt="Logo" />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 border rounded-lg md:hidden border-main-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className={`${isMenuOpen ? "block md:block bg-white" : "hidden md:block"}  w-full md:w-auto`} id="navbar-default">
              <ul
                className={`flex justify-end items-center flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 ${
                  isMenuOpen ? " space-y-4 " : ""
                } md:mt-0`}
              >
                {menu.map((item, index) => {
                  return (
                    <li key={index}>
                      <a href={item.link} className="block px-2 text-base font-normal leading-none font-main text-primary hover:text-main-600">
                        {item.name}
                      </a>
                    </li>
                  );
                })}
                <li>
                  <a
                    href="#"
                    className="block px-8 py-3 font-medium leading-none border border-gray-600 md:py-4 font-main text-primary hover:bg-main-200 rounded-3xl"
                  >
                    Login {t("DASHBOARD.HELLO_ADMIN")}
                  </a>
                </li>
                <li>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-2xl bg-main-100 hover:bg-main-200 text-main-400 hover:text-main-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        Language
                        <IoIosArrowDown className="w-5 h-5 ml-2 -mr-1 text-main-400 hover:text-main-700" aria-hidden="true" />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          {languages.map((language, index) => (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={`${
                                    language.active ? "bg-main-500 text-white" : "text-gray-900"
                                  } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                                  onClick={() => changeLanguageHandler(language?.code)}
                                >
                                  <img src={language.icon} className="w-5 h-5 mr-2" alt={language.name} />
                                  {language.name}
                                </a>
                              )}
                            </Menu.Item>
                          ))}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

function EditInactiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#EDE9FE" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13V16H7L16 7L13 4L4 13Z" fill="#8B5CF6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
