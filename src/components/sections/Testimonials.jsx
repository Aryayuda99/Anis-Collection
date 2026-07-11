import aboutImage from "../../assets/images/about.jpeg";
import { useTranslation } from "react-i18next";

const testimonials = [
  {
    name: "Emily Johnson",
    countryKey: "testimonials.items.emily.country",
    reviewKey: "testimonials.items.emily.review",
  },
  {
    name: "Alexander Ivanov",
    countryKey: "testimonials.items.alexander.country",
    reviewKey: "testimonials.items.alexander.review",
  },
  {
    name: "Maria Gonzalez",
    countryKey: "testimonials.items.maria.country",
    reviewKey: "testimonials.items.maria.review",
  },
];

function Testimonials() {
  const { t } = useTranslation();

  return (
    <section
      id="testimonials"
      className="bg-dark py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-white">
            {t("testimonials.badge")}
          </span>

          <h2 className="mt-7 font-serif text-[44px] font-bold text-[#FFF8F0]">
            {t("testimonials.title")}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-[125px] bg-secondary"></span>
            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>
            <span className="h-px w-[125px] bg-secondary"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[560px] text-[18px] leading-8 text-white/70">
            {t("testimonials.description")}
          </p>

        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
                rounded-[20px]
                border
                border-white/10
                bg-white/5
                p-8
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-secondary/40
              "
            >

              <p className="min-h-[210px] text-[18px] leading-8 text-white/70">
                "{t(item.reviewKey)}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <img
                  src={aboutImage}
                  alt={item.name}
                  className="
                    h-12
                    w-12
                    rounded-full
                    object-cover
                    border-2
                    border-white/20
                  "
                />

                <div>

                  <h4 className="text-[18px] font-medium text-white">
                    {item.name}
                  </h4>

                  <p className="text-sm text-white/60">
                    {t(item.countryKey)}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
