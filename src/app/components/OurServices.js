import Image from 'next/image';
import { Fade } from 'react-reveal';

const services = [
  {
    title: 'Recruitment and selection of profiles.',
    icon: 'icon-file'
  },
  {
    title: 'Market mapping',
    icon: 'icon-map'
  },
  {
    title: 'Salary range consulting.',
    icon: 'icon-money'
  },
  {
    title: 'Profiles in trend by industry.',
    icon: 'icon-chart'
  },
  {
    title: 'Internal Diagnosis',
    icon: 'icon-chartup'
  },
  {
    title: 'Outplacement.',
    icon: 'icon-user'
  },
];

const OurServices = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-28" id="our_services">
      <Fade cascade>
        <div className="container-main relative z-10">
          <div className="section-header flex flex-col items-center justify-center text-center mb-12 md:mb-16 lg:mb-16">
            <p className="sec-sub-title text-primary mb-6">
              OUR PRO ONES
            </p>
            <h2 className="sec-title text-body max-w-fit relative mb-6">
              Our  <span className="inline-block text-gray-200 py-1 px-2 bg-gray-900 font-black font-main">Services</span>

              <svg className="absolute right-2 lg:right-3 -bottom-3 md:-bottom-5 w-[65%]" width="240" height="12" viewBox="0 0 249 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.09381 10.6056C45.0791 6.01698 85.222 3.99512 128.536 3.19966C160.546 2.61181 196.077 1.51174 227.751 3.7534C234.097 3.95267 239.889 4.7184 246.981 5.60021" stroke="#2B3F49" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </h2>
          </div>

          <div className="grid grid-cols-12 items-start">
            {services.map((service, index) => (
              <Fade key={index} bottom>
                <div className="col-span-6 sm:col-span-6 md:col-span-6 lg:col-span-4 mb-16 md:mb-16 lg:mb-20 xl:mb-20">
                  <div className="group flex flex-col items-center justify-center px-10 md:px-24 lg:px-28 xl:px-32">
                    <div className="flex items-center justify-center w-24 h-24 p-3 md:p-4 lg:p-6 border-2 border-solid border-gray-200 group-hover:border-dashed group-hover:border-main-200 bg-main-100 rounded-full mb-7">
                      <Image
                        className="transition-all group-hover:scale-110"
                        src={`/icons/${service.icon}.svg`}
                        alt="Agility and Quality Image"
                        layout="fixed"
                        loading="lazy"
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className="text-body text-center text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-sec leading-8 tracking-tight mb-4 md:mb-5">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          <div className="flex justify-center">
            <a href="https://calendly.com/d/49d-j7x-xn4/presentacion-de-servicios" className="btn-main">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M22.7071 15.7929C23.0976 16.1834 23.0976 16.8166 22.7071 17.2071L18.2071 21.7071C17.8166 22.0976 17.1834 22.0976 16.7929 21.7071L14.7929 19.7071C14.4024 19.3166 14.4024 18.6834 14.7929 18.2929C15.1834 17.9024 15.8166 17.9024 16.2071 18.2929L17.5 19.5858L21.2929 15.7929C21.6834 15.4024 22.3166 15.4024 22.7071 15.7929Z" fill="#E8ECEE" />
                <path fillRule="evenodd" clipRule="evenodd" d="M17 2C17 1.44772 16.5523 1 16 1C15.4477 1 15 1.44772 15 2V3H9V2C9 1.44772 8.55229 1 8 1C7.44772 1 7 1.44772 7 2V3.00163C6.52454 3.00489 6.10898 3.01472 5.74818 3.04419C5.18608 3.09012 4.66938 3.18868 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43598 5.18404C2.18868 5.66937 2.09012 6.18608 2.0442 6.74817C1.99998 7.28936 1.99999 7.95373 2 8.75869V17.2413C1.99999 18.0463 1.99998 18.7106 2.0442 19.2518C2.09012 19.8139 2.18868 20.3306 2.43598 20.816C2.81947 21.5686 3.43139 22.1805 4.18404 22.564C4.66938 22.8113 5.18608 22.9099 5.74818 22.9558C6.28937 23 6.95372 23 7.75868 23H13.326C13.9318 23 14.2347 23 14.375 22.8802C14.4967 22.7763 14.5613 22.6203 14.5487 22.4608C14.5342 22.2769 14.32 22.0627 13.8917 21.6343L13.3787 21.1213C12.2071 19.9497 12.2071 18.0503 13.3787 16.8787C14.5095 15.7478 16.3186 15.7085 17.4966 16.7608L19.8787 14.3787C20.2615 13.9959 20.7219 13.7382 21.2093 13.6055C21.5544 13.5116 21.727 13.4647 21.8055 13.4041C21.8891 13.3396 21.9219 13.2966 21.9622 13.199C22 13.1074 22 12.9716 22 12.7V8.75868C22 7.95372 22 7.28936 21.9558 6.74817C21.9099 6.18608 21.8113 5.66937 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C19.3306 3.18868 18.8139 3.09012 18.2518 3.04419C17.891 3.01472 17.4755 3.00489 17 3.00163V2ZM7 6V5.00176C6.55447 5.00489 6.20463 5.01357 5.91104 5.03755C5.47262 5.07337 5.24842 5.1383 5.09202 5.21799C4.7157 5.40973 4.40974 5.7157 4.21799 6.09202C4.1383 6.24842 4.07337 6.47262 4.03755 6.91104C4.00078 7.36113 4 7.94342 4 8.8V9H20V8.8C20 7.94342 19.9992 7.36113 19.9624 6.91104C19.9266 6.47262 19.8617 6.24842 19.782 6.09202C19.5903 5.7157 19.2843 5.40973 18.908 5.21799C18.7516 5.1383 18.5274 5.07337 18.089 5.03755C17.7954 5.01357 17.4455 5.00489 17 5.00176V6C17 6.55228 16.5523 7 16 7C15.4477 7 15 6.55228 15 6V5H9V6C9 6.55228 8.55229 7 8 7C7.44772 7 7 6.55228 7 6Z" fill="#E8ECEE" />
              </svg>

              Schedule a Meeting
            </a>
          </div>

        </div>
      </Fade>

      <svg className="z-0 absolute right-0 bottom-24 lg:top-32 w-[35%]" width="550" height="1000" viewBox="0 0 631 1209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="205.367" height="977.546" rx="102.683" transform="matrix(-0.707107 0.707107 0.707107 0.707107 220.216 78)" fill="#E8ECEE" fillOpacity="0.3" />
        <rect width="205.367" height="977.546" rx="102.683" transform="matrix(-0.707107 0.707107 0.707107 0.707107 493.216 0)" fill="#E8ECEE" fillOpacity="0.3" />
        <rect width="205.367" height="977.546" rx="102.683" transform="matrix(-0.707107 0.707107 0.707107 0.707107 145.216 372)" fill="#E8ECEE" fillOpacity="0.3" />
      </svg>

      <svg className="z-0 absolute left-0 bottom-0 w-[35%]" width="550" height="1000" viewBox="0 0 650 1209" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="440.229" y="78" width="205.367" height="977.546" rx="102.683" transform="rotate(45 440.229 78)" fill="#E8ECEE" fillOpacity="0.3" />
        <rect x="167.229" width="205.367" height="977.546" rx="102.683" transform="rotate(45 167.229 0)" fill="#E8ECEE" fillOpacity="0.3" />
        <rect x="504.229" y="372" width="205.367" height="977.546" rx="102.683" transform="rotate(45 504.229 372)" fill="#E8ECEE" fillOpacity="0.3" />
      </svg>

    </section>
  );
};

export default OurServices;
