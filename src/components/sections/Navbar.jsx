import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/Logo.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt={t("navbar.logoAlt")}
            className="h-12 w-12 object-contain"
          />

          <div>
            <h1 className="font-semibold text-red-500">
              {t("brand.name")}
            </h1>

            <p className="text-xs tracking-[3px] text-white/80">
              {t("navbar.tagline")}
            </p>
          </div>

        </div>

        {/* Menu */}
        <nav className="hidden gap-10 font-medium text-white lg:flex">

          <a href="#home" className="transition hover:text-yellow-400">
            {t("navbar.home")}
          </a>

          <a href="#about" className="transition hover:text-yellow-400">
            {t("navbar.about")}
          </a>

          <a href="#products" className="transition hover:text-yellow-400">
            {t("navbar.products")}
          </a>

          <a href="#testimonials" className="transition hover:text-yellow-400">
            {t("navbar.testimonials")}
          </a>

          <a href="#contact" className="transition hover:text-yellow-400">
            {t("navbar.contact")}
          </a>

        </nav>

        {/* Right */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Language Switch */}
          <div className="flex rounded-full bg-white p-1">

            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`rounded-full px-4 py-1 text-sm transition ${
                i18n.language === "en"
                  ? "bg-red-700 text-white"
                  : "text-gray-700"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => i18n.changeLanguage("id")}
              className={`rounded-full px-4 py-1 text-sm transition ${
                i18n.language === "id"
                  ? "bg-red-700 text-white"
                  : "text-gray-700"
              }`}
            >
              ID
            </button>

          </div>

        </div>

        {/* Mobile */}
        <button className="text-white lg:hidden">
          <Menu />
        </button>

      </div>
    </header>
  );
}
