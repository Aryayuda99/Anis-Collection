import heroBg from "../../assets/images/beranda.png";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-[640px] h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2b1714]/70"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4 pt-16 sm:px-6 lg:pt-12">
        <div className="w-full max-w-5xl text-center">

          {/* Badge */}
          <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-yellow-500 px-4 py-2 sm:mb-8 sm:px-6">
            <span className="h-2 w-2 rounded-full bg-yellow-500"></span>

            <span className="text-xs uppercase tracking-[2.5px] text-yellow-400 sm:text-sm sm:tracking-[4px]">
              {t("hero.badge")}
            </span>
          </div>

          {/* Title */}
          <h1 className="font-serif font-bold leading-none">

            <span className="block text-white text-[42px] sm:text-6xl md:text-7xl lg:text-[92px]">
              {t("hero.title1")}
            </span>

            <span className="mt-2 block text-yellow-500 text-[42px] sm:text-6xl md:text-7xl lg:text-[92px]">
              {t("hero.title2")}
            </span>

          </h1>

          {/* Divider */}
          <div className="my-7 flex items-center justify-center gap-4 sm:my-10 sm:gap-5">

            <div className="h-[1px] w-20 bg-yellow-600 sm:w-28"></div>

            <div className="h-2.5 w-2.5 rotate-45 bg-yellow-600 sm:h-3 sm:w-3"></div>

            <div className="h-[1px] w-20 bg-yellow-600 sm:w-28"></div>

          </div>

          {/* Description */}
          <p className="mx-auto max-w-3xl text-base leading-8 text-white/90 sm:text-lg sm:leading-10">
            {t("hero.description")}
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-6">

            <a href="#products" className="w-full rounded-full bg-[#C83C3C] px-8 py-4 font-semibold text-white transition hover:bg-red-800 sm:w-auto sm:px-12">
              {t("hero.button1")}
            </a>

            <a
              href="https://wa.me/628113882935"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#3A2622] sm:w-auto sm:px-12"
            >
              {t("hero.button2")}
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
