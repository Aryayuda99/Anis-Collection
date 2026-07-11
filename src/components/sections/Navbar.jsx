import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-full bg-red-700 flex items-center justify-center text-white font-bold">
            A
          </div>

          <div>
            <h1 className="text-red-500 font-semibold">
              Ani's Collection
            </h1>

            <p className="text-white/80 text-xs tracking-[3px]">
              BALI HANDICRAFTS
            </p>
          </div>

        </div>

        {/* Menu */}
        <nav className="hidden lg:flex gap-10 text-white font-medium">

          <a href="#home" className="hover:text-yellow-400 transition">
            {t("navbar.home")}
          </a>

          <a href="#about" className="hover:text-yellow-400 transition">
            {t("navbar.about")}
          </a>

          <a href="#products" className="hover:text-yellow-400 transition">
            {t("navbar.products")}
          </a>

          <a href="#testimonials" className="hover:text-yellow-400 transition">
            {t("navbar.testimonials")}
          </a>

          <a href="#contact" className="hover:text-yellow-400 transition">
            {t("navbar.contact")}
          </a>

        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center gap-4">

          {/* Language Switch */}
          <div className="bg-white rounded-full p-1 flex">

            <button
              onClick={() => i18n.changeLanguage("en")}
              className={`px-4 py-1 rounded-full text-sm transition ${
                i18n.language === "en"
                  ? "bg-red-700 text-white"
                  : "text-gray-700"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => i18n.changeLanguage("id")}
              className={`px-4 py-1 rounded-full text-sm transition ${
                i18n.language === "id"
                  ? "bg-red-700 text-white"
                  : "text-gray-700"
              }`}
            >
              ID
            </button>

          </div>

          {/* WhatsApp Button */}
          <button className="bg-red-700 hover:bg-red-800 duration-300 text-white px-6 py-3 rounded-full">

            {t("navbar.order")}

          </button>

        </div>

        {/* Mobile */}
        <button className="lg:hidden text-white">
          <Menu />
        </button>

      </div>
    </header>
  );
}