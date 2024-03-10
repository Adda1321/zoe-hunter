import Image from "next/image";
import Link from "next/link";
import { Fade, LightSpeed } from "react-reveal";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about_us" className="relative pt-16 md:pt-20 lg:pt-24">
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-center">
          <LightSpeed left>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <div className="section-header mb-6 md:mb-8 lg:mb-10">
                <p className="sec-sub-title text-primary mb-6">
                  {t("home.aboutUs_subTitle")}
                </p>
                <h2 className="sec-title text-body mb-6">
                  <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">
                    {t("home.aboutUs_title_highlight")}
                  </span>{" "}
                  {t("home.aboutUs_title_main")}
                  
                  {/* us */}
                </h2>
              </div>
              <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-sec  leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
                {t("home.aboutUs_paragraph1")}
              </p>
              <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3">
              {t("home.aboutUs_paragraph2")}
            
              </p>
              <div className="flex gap-3 mt-6 md:mt-8 lg:mt-10">
                <Link className="btn-main" href="#our_industries">
                  {t("home.aboutUs_visitIndustries")}
                </Link>
                <Link className="btn-sec" href="https://wa.me/+525633330404">
                  {t("home.aboutUs_contactUs")}

                  
                </Link>
              </div>
            </div>
          </LightSpeed>
          <Fade bottom>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <Image
                className="mt-10 md:mt-5 lg:mt-0"
                src="/about.png"
                alt="about Image"
                layout="responsive"
                loading="lazy"
                width={500}
                height={300}
              />
            </div>
          </Fade>
        </div>
      </div>
      <Fade bottom>
        <Image
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src="/about-bg.png"
          alt="about-bg Image"
          layout="fixed"
          loading="lazy"
          width={600}
          height={600}
        />
      </Fade>
    </section>
  );
};

export default AboutUs;
