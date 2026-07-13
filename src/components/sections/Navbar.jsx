import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../../assets/images/Logo.png";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: t("navbar.home") },
    { href: "#about", label: t("navbar.about") },
    { href: "#products", label: t("navbar.products") },
    { href: "#testimonials", label: t("navbar.testimonials") },
    { href: "#contact", label: t("navbar.contact") },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 w-full">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8 lg:py-6">

        {/* Logo */}
        <div className="flex min-w-0 items-center gap-3">

          <img
            src={logo}
            alt={t("navbar.logoAlt")}
            className="h-10 w-10 flex-none object-contain sm:h-12 sm:w-12"
          />

          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold text-red-500 sm:text-base">
              {t("brand.name")}
            </h1>

            <p className="truncate text-[10px] tracking-[2px] text-white/80 sm:text-xs sm:tracking-[3px]">
              {t("navbar.tagline")}
            </p>
          </div>

        </div>

        {/* Menu */}
        <nav className="hidden gap-10 font-medium text-white lg:flex">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-yellow-400"
            >
              {link.label}
            </a>
          ))}

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
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center text-white lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-white/15 bg-[#2b1714]/95 p-4 shadow-2xl backdrop-blur lg:hidden">
            <nav className="flex flex-col gap-3 font-medium text-white">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-yellow-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex w-fit rounded-full bg-white p-1">
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
        )}

      </div>
    </header>
  );
}
