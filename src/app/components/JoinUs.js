import Image from 'next/image';
import { Fade } from 'react-reveal';
import Link from 'next/link';
import { FaEnvelope, FaLinkedin } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { useTranslation } from 'react-i18next';

const JoinUs = () => {
  const {t} = useTranslation()
  return (
    <section className="bg-section-100 relative pt-16 md:pt-20 lg:pt-24 pb-10">
      <div className="container-main relative z-10">

        <div className="section-header flex flex-col items-center mb-12 md:mb-16 lg:mb-16 w-full md:w-3/4 lg:w-1/2 xl:w-1/2 mx-auto">
          <h2 className="sec-title text-body mb-6">
            <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">{t("home.joinUs_title")} </span> {t("home.joinUs_subtitle")}
          </h2>
          <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-7 lg:leading-9 xl:leading-9 2xl:leading-9 font-normal font-sec tracking-04 border-l-3 border-gray-600 text-center pl-3">
      {t("home.joinUs_description")}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center">
          <Fade cascade>
            <div className="w-full md:w-auto lg:w-1/2 xl:w-1/2">
              <div className="relative mx-4 mb-4">
                <div className="border-3 border-sec-100 hover:border-sec-200 relative z-10 bg-sec-100 rounded-3 p-4 sm:p-6 md:p-7 xl:p-8 rounded-2xl">
                  <Link href="https://www.linkedin.com/in/luis-alfonso-reyes-094222129/" target="_blank" className="text-sec-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-main font-medium leading-loose flex items-center gap-4 mb-4 md:mb-5">
                    <FaLinkedin />
                    <span className="relative">
                      {t("home.luisAlfonso_name")}
                      <svg className="absolute left-0 -bottom-1 h-1.5 md:h-2 lg:h-2.5" viewBox="0 0 163 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.08135 8.35071C29.9825 4.54355 56.0478 2.9508 84.1779 2.43419C104.966 2.05242 128.04 1.24057 148.621 3.31104C152.744 3.50921 156.509 4.19637 161.119 4.98938" stroke="#4F5B62" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>

                    -
                    <span className="text-body-dark text-xs sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-extrabold leading-loose"> {t("home.luisAlfonso_position")} </span>
                  </Link>

                  <Link href="tel:5633330404" className="text-body hover:text-main-700 text-lg font-light font-main leading-loose flex items-center gap-4 transition-colors">
                    <IoCall />
                    56 3333 0404
                  </Link>
                  <Link href="mailto:catherine@zoiheadhunter.com" className="text-body hover:text-main-700 text-lg font-light font-main leading-loose flex items-center gap-4 transition-colors">
                    <FaEnvelope />
                    luisalfonso@zoiheadhunter.com
                  </Link>
                </div>
                <div className="w-3/4 relative bottom-3 bg-zinc-700 rounded-full blur-2xl h-5 z-0 mx-auto"></div>
              </div>
            </div>
          </Fade>
          <Fade cascade>
            <div className="w-full md:w-auto lg:w-1/2 xl:w-1/2">
              <div className="relative mx-4 mb-4">
                <div className="border-3 border-white hover:border-main-200 relative z-10 bg-white rounded-3 p-4 sm:p-6 md:p-7 xl:p-8 rounded-2xl transition-colors">
                  <Link href="https://www.linkedin.com/in/juan-jose-ruiz-curiel-476672186/" target="_blank" className="text-sec-500 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-main font-medium leading-loose flex items-center gap-4 mb-4 md:mb-5">
                    <FaLinkedin />
                    <span className="relative">
                      {t("home.juanJose_name")}
                      <svg className="absolute left-0 -bottom-1 h-1.5 md:h-2 lg:h-2.5" viewBox="0 0 163 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.08135 8.35071C29.9825 4.54355 56.0478 2.9508 84.1779 2.43419C104.966 2.05242 128.04 1.24057 148.621 3.31104C152.744 3.50921 156.509 4.19637 161.119 4.98938" stroke="#4F5B62" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>

                    -
                    <span className="text-body-dark text-xs sm:text-sm  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-extrabold leading-loose"> {
                      t("home.juanJose_position")
                    } </span>
                  </Link>

                  <Link href="tel:juanjose@zoiheadhunter.com" className="text-body hover:text-main-700 text-lg font-light font-main leading-loose flex items-center gap-4 transition-colors">
                    <IoCall />
                    56 1041 3797
                  </Link>
                  <Link href="mailto:juanjose@zoiheadhunter.com" className="text-body hover:text-main-700 text-lg font-light font-main leading-loose flex items-center gap-4 transition-colors">
                    <FaEnvelope />
                    juanjose@zoiheadhunter.com
                  </Link>
                </div>
                <div className="w-3/4 relative bottom-3 bg-zinc-700 rounded-full blur-2xl h-5 z-0 mx-auto"></div>
              </div>
            </div>
          </Fade>
          <Fade cascade>
            <div className="w-full md:w-auto lg:w-1/2 xl:w-1/2">
              <div className="relative mx-4 mb-4">
                <div className="border-3 border-gray-500 hover:border-gray-600 relative z-10 bg-gray-500 rounded-3 p-4 sm:p-6 md:p-7 xl:p-8 rounded-2xl">
                  <Link href="https://www.linkedin.com/in/catherine-ramo-5064034b/" target="_blank" className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-main font-medium leading-loose flex items-center gap-4 text-truncate mb-4 md:mb-5">
                    <FaLinkedin />
                    <span className="relative">
                      {t("home.catherine_name")}
                      <svg className="absolute left-0 -bottom-1 h-1.5 md:h-2 lg:h-2.5" viewBox="0 0 163 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.08135 8.35071C29.9825 4.54355 56.0478 2.9508 84.1779 2.43419C104.966 2.05242 128.04 1.24057 148.621 3.31104C152.744 3.50921 156.509 4.19637 161.119 4.98938" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                      </svg>
                    </span>

                    -
                    <span className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-extrabold leading-loose">  {t("home.catherine_position")} </span>
                  </Link>

                  <Link href="tel:5569691993" className="text-white hover:text-main-100 text-lg font-light font-main leading-loose flex items-center gap-4 transition-colors">
                    <IoCall />
                    55 6969 1993
                  </Link>
                  <Link href="mailto:catherine@zoiheadhunter.com" className="text-white hover:text-main-100 text-lg font-light font-main leading-loose flex items-center gap-4 transition-colors">
                    <FaEnvelope />
                    catherine@zoiheadhunter.com
                  </Link>
                </div>
                <div className="w-3/4 relative bottom-3 bg-zinc-700 rounded-full blur-2xl h-5 z-0 mx-auto"></div>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      <Image
        className="absolute top-1/2 right-5 transform -translate-x-5 -translate-y-1/2 z-0"
        src="/about-bg.png"
        alt="about-bg Image"
        layout="fixed"
        loading="lazy"
        width={600}
        height={600}
      />
    </section>
  );
};

export default JoinUs;
