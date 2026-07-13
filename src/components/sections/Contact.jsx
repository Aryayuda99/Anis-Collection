import {
  MapPin,
  Phone,
  Mail,
  Instagram,
} from "lucide-react";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="bg-[#F5EDE0] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-primary">
            {t("contact.badge")}
          </span>

          <h2 className="mt-6 font-serif text-[34px] font-bold text-dark sm:mt-7 sm:text-[44px]">
            {t("contact.title")}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-secondary sm:w-[150px]"></span>

            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>

            <span className="h-px w-20 bg-secondary sm:w-[150px]"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[576px] text-base leading-7 text-text/70 sm:text-[18px] sm:leading-[29px]">
            {t("contact.description")}
          </p>

        </div>

        {/* Content */}

        <div className="mt-12 grid gap-10 sm:mt-16 lg:mt-20 lg:grid-cols-[500px_1fr] lg:gap-12">

          {/* Left */}

          <div className="min-w-0">

            {/* Address */}

            <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#FFFCF7] px-4 py-4 sm:px-5">

              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <p className="text-[14px] font-medium text-text">
                {t("contact.address")}
              </p>

            </div>

            {/* Phone */}

            <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#FFFCF7] px-4 py-4 sm:px-5">

              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>

              <p className="text-[14px] font-medium text-text">
                083116088433
              </p>

            </div>

            {/* Email */}

            <div className="mb-8 flex items-center gap-4 rounded-xl bg-[#FFFCF7] px-4 py-4 sm:px-5">

              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>

              <p className="min-w-0 break-words text-[14px] font-medium text-text">
                aniscollection@gmail.com
              </p>

            </div>

            {/* WhatsApp */}

            <a
              href="https://wa.me/628113882935"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                h-[68px]
                items-center
                justify-center
                rounded-xl
                bg-[#25D366]
                text-white
                font-semibold
                transition
                hover:bg-[#20bb5b]
              "
            >
              {t("contact.whatsapp")}
            </a>

            {/* Social */}

            <div className="mt-10">

              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[1.2px] text-text">
                {t("contact.followUs")}
              </p>

              <div className="flex gap-4">

                <a
                  href="https://www.instagram.com/aniscollection.bali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-dark/10 bg-[#FFFCF7]"
                >
                  <Instagram
                    size={18}
                    className="text-dark"
                  />
                </a>

              </div>

            </div>

          </div>

          {/* Google Maps */}

          <div className="w-full overflow-hidden rounded-[24px] shadow-lg sm:rounded-[35px]">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.3998450259787!2d115.27265190000001!3d-8.5574946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23dfad8286d65%3A0x67d9c3efec81d46e!2sJl.%20Raya%20Mas%20No.29%2C%20Mas%2C%20Kecamatan%20Ubud%2C%20Kabupaten%20Gianyar%2C%20Bali%2080571!5e0!3m2!1sid!2sid!4v1783737749346!5m2!1sid!2sid"
            className="h-[320px] w-full rounded-[24px] sm:h-[420px] sm:rounded-[35px] lg:h-[481px]"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;
