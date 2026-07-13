import { useTranslation } from "react-i18next";

const partners = [
  {
    name: "MPPA",
    descKey: "partners.items.mppa.description",
  },
  {
    name: "COCO MART",
    descKey: "partners.items.cocoMart.description",
  },
  {
    name: "Mega Art",
    descKey: "partners.items.megaArt.description",
  },
  {
    name: "Bali Home Industri",
    descKey: "partners.items.baliHomeIndustri.description",
  },
];

function Partner() {
  const { t } = useTranslation();

  return (
    <section
      id="partner"
      className="bg-background py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Header */}
        <div className="text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-primary">
            {t("partners.badge")}
          </span>

          <h2 className="mt-6 font-serif text-[34px] font-bold text-dark sm:mt-7 sm:text-[44px]">
            {t("partners.title")}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-20 bg-secondary sm:w-[150px]"></span>

            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>

            <span className="h-px w-20 bg-secondary sm:w-[150px]"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[576px] text-base leading-7 text-text/70 sm:text-[18px] sm:leading-[29px]">
            {t("partners.description")}
          </p>

        </div>

        {/* Partner Cards */}

        <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2 sm:gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">

          {partners.map((partner) => (

            <div
              key={partner.name}
              className="
                flex
                h-[112px]
                min-w-0
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

              <h3 className="text-center font-serif text-[20px] font-bold text-dark">
                {partner.name}
              </h3>

              <p className="mt-2 text-center text-[12px] text-text/70">
                {t(partner.descKey)}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Partner;
