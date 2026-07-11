import { useTranslation } from "react-i18next";

const partners = [
  {
    name: "MPPA",
    desc: "Matahari Putra Prima",
  },
  {
    name: "COCO MART",
    desc: "Premium Retail Store",
  },
  {
    name: "Mega Art",
    desc: "Art & Crafts Gallery",
  },
  {
    name: "Bali Home Industri",
    desc: "Home Décor Specialist",
  },
];

function Partner() {
  const { t } = useTranslation();

  return (
    <section
      id="partner"
      className="bg-background py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-primary">
            Partners
          </span>

          <h2 className="mt-7 font-serif text-[44px] font-bold text-dark">
            Our Trusted Partners
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-[150px] bg-secondary"></span>

            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>

            <span className="h-px w-[150px] bg-secondary"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[576px] text-[18px] leading-[29px] text-text/70">
            Proud to collaborate with leading retail partners across Indonesia
            and beyond.
          </p>

        </div>

        {/* Partner Cards */}

        <div className="mt-20 grid grid-cols-2 gap-8 lg:grid-cols-4">

          {partners.map((partner) => (

            <div
              key={partner.name}
              className="
                flex
                h-[112px]
                flex-col
                items-center
                justify-center
                rounded-[11px]
                border
                border-dark/10
                bg-[#FFFCF7]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >

              <h3 className="font-serif text-[20px] font-bold text-dark">
                {partner.name}
              </h3>

              <p className="mt-2 text-center text-[12px] text-text/70">
                {partner.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Partner;