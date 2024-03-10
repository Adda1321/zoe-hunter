import { useTranslation } from "react-i18next";

const LegalHeading = () => {
  const { t } = useTranslation();

  return (
    <section className="relative bg-section-100 pb-16 md:pb-20 lg:pb-24 pt-28 md:pt-28 lg:pt-32 z-0">
      <div className="container-main">
        <div className="grid gap-x-0 md:gap-6 lg:gap-4 grid-cols-12 items-center">
          <div className="col-span-12 md:col-span-12 lg:col-span-12">
            <div className="section-header mb-6 md:mb-8 lg:mb-10">
              <h2 className="sec-title text-body mb-6">
                {t("legal.intro_heading")}
              </h2>
            </div>
            <p className="text-body text-base lg:text-base xl:text-lg 2xl:text-xl font-normal font-sec  leading-8 lg:leading-10 xl:leading-10 2xl:leading-10 tracking-0 mb-4 md:mb-5">
              {t("legal.intro_description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalHeading;
