import heroBg from "../../assets/images/beranda.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2b1714]/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center pt-12">
        <div className="max-w-5xl px-6 text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-yellow-500 px-6 py-2">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>

            <span className="text-sm uppercase tracking-[4px] text-yellow-400">
              {t("hero.badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif font-bold leading-none">

            <span className="block text-white text-6xl md:text-7xl lg:text-[92px]">
              {t("hero.title1")}
            </span>

            <span className="mt-2 block text-yellow-500 text-6xl md:text-7xl lg:text-[92px]">
              {t("hero.title2")}
            </span>

          </h1>

          {/* Divider */}
          <div className="my-10 flex items-center justify-center gap-5">

            <div className="h-[1px] w-28 bg-yellow-600"></div>

            <div className="h-3 w-3 rotate-45 bg-yellow-600"></div>

            <div className="h-[1px] w-28 bg-yellow-600"></div>

          </div>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-lg leading-10 text-white/90">
            {t("hero.description")}
          </p>

          {/* Buttons */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">

            <button className="rounded-full bg-[#C83C3C] px-12 py-4 font-semibold text-white transition hover:bg-red-800">
              {t("hero.button1")}
            </button>

            <button className="rounded-full border border-white px-12 py-4 font-semibold text-white transition hover:bg-white hover:text-[#3A2622]">
              {t("hero.button2")}
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}