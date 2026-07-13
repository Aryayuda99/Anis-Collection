import { collections } from "../../data/collections";
import CardCollection from "./CardCollection";
import { useTranslation } from "react-i18next";

function Collections() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#3E2723] py-16 sm:py-20 lg:py-24">

      <div className="mx-auto max-w-[1140px] px-6 lg:px-0">

        <div className="text-center">

          <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-white">
            {t("collections.badge")}
          </span>

          <h2 className="mt-6 font-serif text-[34px] font-bold text-[#FFF8F0] sm:mt-8 sm:text-[44px]">
            {t("collections.title")}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">

            <span className="h-px w-20 bg-[#F4B400] sm:w-[153px]" />

            <span className="h-[10px] w-[10px] rotate-45 bg-[#F4B400]" />

            <span className="h-px w-20 bg-[#F4B400] sm:w-[153px]" />

          </div>

          <p className="mx-auto mt-8 max-w-[576px] text-base leading-7 text-white/75 sm:text-[18px] sm:leading-[29px]">
            {t("collections.description")}
          </p>

        </div>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 sm:mt-16 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">

          {collections.map((item) => (
            <CardCollection
              key={item.titleKey}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Collections;
