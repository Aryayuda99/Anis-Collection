import aboutImage from "../../assets/images/about.jpeg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-background py-16 sm:py-20 lg:py-[90px]"
    >
      <div className="mx-auto max-w-[1147px] px-6 lg:px-0">

        <div className="grid items-start gap-12 lg:grid-cols-[525px_545px] lg:gap-[77px]">

          {/* IMAGE */}
          <div className="relative mx-auto w-full max-w-[525px] lg:mx-0 lg:w-[525px]">

            {/* Top Left Corner */}
            <span className="absolute -left-3 -top-3 h-14 w-14 rounded-tl-[20px] border-l border-t border-secondary sm:-left-6 sm:-top-6 sm:h-[79px] sm:w-[78px]" />

            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              className="aspect-square h-auto w-full rounded-[24px] object-cover object-center sm:rounded-[30px] lg:h-[525px] lg:w-[525px]"
            />

            {/* Bottom Right Corner */}
            <span className="absolute -bottom-3 -right-3 h-14 w-14 rounded-br-[20px] border-b border-r border-secondary sm:-bottom-6 sm:-right-6 sm:h-[79px] sm:w-[78px]" />

          </div>

          {/* CONTENT */}
          <div className="w-full lg:w-[545px]">

            <h2
              className="
                w-full
                font-serif
                font-bold
                text-[34px]
                leading-[46px]
                tracking-[1px]
                text-dark
                sm:text-[42px]
                sm:leading-[56px]
                lg:w-[401px]
                lg:text-[48px]
                lg:leading-[64px]
              "
            >
              {t("about.title")}
            </h2>

            {/* Divider */}
            <div className="mt-7 mb-9 flex items-center gap-4">

              <span className="h-px w-[104px] bg-primary"></span>

              <span className="h-[14px] w-[14px] rotate-45 bg-primary"></span>

            </div>

            <div className="w-full space-y-6 lg:w-[545px] lg:space-y-7">

              <p className="text-[16px] leading-8 text-text/80 lg:leading-[38px]">
                {t("about.paragraph1")}
              </p>

              <p className="text-[16px] leading-8 text-text/80 lg:leading-[38px]">
                {t("about.paragraph2")}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
