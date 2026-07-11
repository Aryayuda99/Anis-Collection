import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#2C1A17] pt-20 pb-8">
      <div className="mx-auto max-w-[1220px] px-6">

        {/* Top */}

        <div className="grid gap-14 lg:grid-cols-[1.2fr_1fr_1fr]">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <span className="font-serif text-[16px] font-bold text-white">
                  A
                </span>
              </div>

              <div>

                <h3 className="font-serif text-[18px] font-bold text-white">
                  {t("brand.name")}
                </h3>

                <p className="mt-1 text-[10px] uppercase tracking-[2px] text-white/40">
                  {t("footer.tagline")}
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-[320px] text-[14px] leading-7 text-white/55">
              {t("footer.description")}
            </p>

          </div>

          {/* Links */}

          <div>

            <h4 className="text-[12px] font-semibold uppercase tracking-[2px] text-secondary">
              {t("footer.quickLinks")}
            </h4>

            <div className="mt-6 grid grid-cols-2 gap-y-4">

              <a href="#home" className="text-white/60 transition hover:text-secondary">
                {t("navbar.home")}
              </a>

              <a href="#about" className="text-white/60 transition hover:text-secondary">
                {t("navbar.about")}
              </a>

              <a href="#products" className="text-white/60 transition hover:text-secondary">
                {t("navbar.products")}
              </a>

              <a href="#gallery" className="text-white/60 transition hover:text-secondary">
                {t("footer.gallery")}
              </a>

              <a href="#testimonials" className="text-white/60 transition hover:text-secondary">
                {t("navbar.testimonials")}
              </a>

              <a href="#contact" className="text-white/60 transition hover:text-secondary">
                {t("navbar.contact")}
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h4 className="text-[12px] font-semibold uppercase tracking-[2px] text-secondary">
              {t("footer.followUs")}
            </h4>

            <div className="mt-6 flex gap-3">

            <a
              href="https://www.instagram.com/aniscollection.bali"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-[12px] text-white/70 transition hover:border-secondary hover:text-secondary"
            >
              {t("footer.instagram")}
            </a>

            <a
              href="https://wa.me/628113882935"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 px-5 py-2 text-[12px] text-white/70 transition hover:border-secondary hover:text-secondary"
            >
              {t("footer.whatsapp")}
            </a>

            </div>

            <p className="mt-10 max-w-[330px] text-[12px] leading-6 text-white/30">
              {t("contact.address")}
            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="mt-16 border-t border-white/10"></div>

        {/* Bottom */}

        <div className="mt-6 flex flex-col items-center justify-between gap-4 text-[12px] text-white/40 lg:flex-row">

          <p>
            {t("footer.copyrightPrefix")} {t("footer.copyright")}
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-white/50 transition hover:text-secondary"
          >
            <ArrowUp size={14} />
            {t("footer.backToTop")}
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
