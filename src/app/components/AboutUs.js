import Image from 'next/image';
import Link from 'next/link';
import { Fade, LightSpeed } from 'react-reveal';

const AboutUs = () => {
  return (
    <section id="about_us" className="relative pt-16 md:pt-20 lg:pt-24">
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-center">
          <LightSpeed left>
            <div className="col-span-12 md:col-span-12 lg:col-span-6">
              <div className="section-header mb-6 md:mb-8 lg:mb-10">
                <p className="sec-sub-title text-primary mb-6">
                  WHO WE ARE?
                </p>
                <h2 className="sec-title text-body mb-6">
                  <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">About</span> us
                </h2>
              </div>
              <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-sec  leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 tracking-04 border-l-3 border-gray-600 pl-3 mb-4 md:mb-5">
                At ZOI Headhunter, we are dedicated to providing customized recruitment and selection solutions for companies in search of exceptional talent.
              </p>
              <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 font-normal font-sec tracking-04 border-l-3 border-gray-600 pl-3">
                We are proud to be a company with a presence in Latin America, the United States and Europe, which stands out for having the best turnaround times, and deep understanding of the current environment, in the company and in the market.
              </p>
              <div className="flex gap-3 mt-6 md:mt-8 lg:mt-10">
                <Link className="btn-main" href="#our_industries">
                  Visit our Industries
                </Link>
                <Link className="btn-sec" href="https://wa.me/+525633330404">
                  Contact us
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
