import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import { useTranslation } from 'react-i18next';

const AgilityAndQuality = () => {
  const { t } = useTranslation()
  return (
    <section className="bg-section-100 py-20 md:py-24 lg:py-28">
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-center">
          <Zoom left>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <Image
                src="/AgilityAndQuality.png"
                alt="Agility and Quality Image"
                layout="responsive"
                width={500}
                height={300}
              />
            </div>
          </Zoom>
          <Fade bottom>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <h2 className="sec-title text-body mb-6">
                {t("home.agilityAndQuality_title")}
                 <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">
                  {t("home.agilityAndQuality_highlight")}
                 </span>
              </h2>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
             {t("home.agilityAndQuality_paragraph1")}
                </p>
              </Bounce>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
              
             {t("home.agilityAndQuality_paragraph2")}
              
                </p>
              </Bounce>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
             {t("home.agilityAndQuality_paragraph3")}
               
                </p>
              </Bounce>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-tight border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
             {t("home.agilityAndQuality_paragraph4")}
               
                </p>
              </Bounce>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default AgilityAndQuality;
