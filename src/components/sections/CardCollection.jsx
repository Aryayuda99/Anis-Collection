import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

function CardCollection({ item }) {
  const { t } = useTranslation();

  return (
    <div
      className="
      h-[235px]
      rounded-2xl
      border border-white/10
      bg-white/5
      p-7
      transition-all
      duration-300
      hover:-translate-y-2
      hover:bg-white/10
    "
    >
      <div className="text-4xl">{item.icon}</div>

      <h3 className="mt-4 font-serif text-[22px] font-bold text-[#FFF8F0]">
        {t(item.titleKey)}
      </h3>

      <p className="mt-3 text-[14px] leading-6 text-white/60">
        {t(item.descriptionKey)}
      </p>

      <button className="mt-6 flex items-center gap-2 text-sm font-medium text-[#F4B400]">
        {t("collections.explore")}
        <ArrowRight size={16} />
      </button>
    </div>
  );
}

export default CardCollection;
