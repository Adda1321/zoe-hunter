import Image from 'next/image';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';

const AgilityAndQuality = () => {
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
                Agility and <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">Quality</span>
              </h2>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
                  We recognize that each company is unique and faces particular challenges when searching for the ideal candidate.
                </p>
              </Bounce>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
                  We are dedicated to deeply understanding your talent requirements, company objectives, corporate culture, and the current context of the labor market to propose the profile that best fits your expectations.
                </p>
              </Bounce>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
                  ZOI Headhunter adapts and builds a customized way of working together with your company, with the objective of establishing a close and collaborative long-term relationship.
                </p>
              </Bounce>
              <Bounce>
                <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-tight border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
                  We seek to become an extension of your internal team to achieve exceptional results together.
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
