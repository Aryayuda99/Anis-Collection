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
      className="bg-[#F5EDE0] py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-primary">
            Contact Us
          </span>

          <h2 className="mt-7 font-serif text-[44px] font-bold text-dark">
            Get In Touch
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-[150px] bg-secondary"></span>

            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>

            <span className="h-px w-[150px] bg-secondary"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[576px] text-[18px] leading-[29px] text-text/70">
            Visit our store, reach out on WhatsApp, or connect on social
            media. We would love to hear from you.
          </p>

        </div>

        {/* Content */}

        <div className="mt-20 grid gap-12 lg:grid-cols-[500px_1fr]">

          {/* Left */}

          <div>

            {/* Address */}

            <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#FFFCF7] px-5 py-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>

              <p className="text-[14px] font-medium text-text">
                Jl. Raya Mas No. 29,
                Ubud, Gianyar, Bali 80571,
                Indonesia
              </p>

            </div>

            {/* Phone */}

            <div className="mb-6 flex items-center gap-4 rounded-xl bg-[#FFFCF7] px-5 py-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>

              <p className="text-[14px] font-medium text-text">
                083116088433
              </p>

            </div>

            {/* Email */}

            <div className="mb-8 flex items-center gap-4 rounded-xl bg-[#FFFCF7] px-5 py-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>

              <p className="text-[14px] font-medium text-text">
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
              Chat on WhatsApp
            </a>

            {/* Social */}

            <div className="mt-10">

              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[1.2px] text-text">
                Follow Us
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

          <div className="overflow-hidden rounded-[35px] shadow-lg">

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.3998450259787!2d115.27265190000001!3d-8.5574946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23dfad8286d65%3A0x67d9c3efec81d46e!2sJl.%20Raya%20Mas%20No.29%2C%20Mas%2C%20Kecamatan%20Ubud%2C%20Kabupaten%20Gianyar%2C%20Bali%2080571!5e0!3m2!1sid!2sid!4v1783737749346!5m2!1sid!2sid"
            className="h-[481px] w-full rounded-[35px]"
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
