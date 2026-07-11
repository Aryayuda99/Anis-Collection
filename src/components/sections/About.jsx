import aboutImage from "../../assets/images/about.jpeg";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="bg-background py-[90px]"
    >
      <div className="mx-auto max-w-[1147px]">

        <div className="grid grid-cols-[525px_545px] items-start gap-[77px]">

          {/* IMAGE */}
          <div className="relative w-[525px]">

            {/* Top Left Corner */}
            <span className="absolute -left-6 -top-6 h-[79px] w-[78px] rounded-tl-[20px] border-l border-t border-secondary" />

            <img
              src={aboutImage}
              alt={t("about.imageAlt")}
              className="h-[525px] w-[525px] rounded-[30px] object-cover object-center"
            />

            {/* Bottom Right Corner */}
            <span className="absolute -bottom-6 -right-6 h-[79px] w-[78px] rounded-br-[20px] border-b border-r border-secondary" />

          </div>

          {/* CONTENT */}
          <div className="w-[545px]">

            <h2
              className="
                w-[401px]
                font-serif
                font-bold
                text-[48px]
                leading-[64px]
                tracking-[1px]
                text-dark
              "
            >
              {t("about.title")}
            </h2>

            {/* Divider */}
            <div className="mt-7 mb-9 flex items-center gap-4">

              <span className="h-px w-[104px] bg-primary"></span>

              <span className="h-[14px] w-[14px] rotate-45 bg-primary"></span>

            </div>

            <div className="w-[545px] space-y-7">

              <p className="text-[16px] leading-[38px] text-text/80">
                {t("about.paragraph1")}
              </p>

              <p className="text-[16px] leading-[38px] text-text/80">
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
