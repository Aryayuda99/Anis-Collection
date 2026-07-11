import { useTranslation } from "react-i18next";

import patung1 from "../../assets/images/patung kayu warna/patung 1.png";
import patung2 from "../../assets/images/patung kayu warna/patung 2.png";
import patung3 from "../../assets/images/patung kayu warna/patung 3.png";

import topeng1 from "../../assets/images/topeng/topeng 1.png";
import topeng2 from "../../assets/images/topeng/topeng 2.png";
import topeng3 from "../../assets/images/topeng/topeng 3.png";
import topeng4 from "../../assets/images/topeng/topeng 4.png";

import magnetbali1 from "../../assets/images/magnet bali/magnetbali 1.png";
import magnetbali2 from "../../assets/images/magnet bali/magnetbali 2.png";
import magnetbali3 from "../../assets/images/magnet bali/magnetbali 3.png";
import magnetbali4 from "../../assets/images/magnet bali/magnetbali 4.png";

import magnetairbrush1 from "../../assets/images/magnet airbrush/magnetairbrush 1.png";
import magnetairbrush2 from "../../assets/images/magnet airbrush/magnetairbrush 2.png";
import magnetairbrush3 from "../../assets/images/magnet airbrush/magnetairbrush 3.png";
import magnetairbrush4 from "../../assets/images/magnet airbrush/magnetairbrush 4.png";

import kalender1 from "../../assets/images/kalender/kalender 1.png";
import kalender2 from "../../assets/images/kalender/kalender 2.png";
import kalender3 from "../../assets/images/kalender/kalender 3.png";
import kalender4 from "../../assets/images/kalender/kalender 4.png";

import gelas1 from "../../assets/images/gelas/gelas 1.png";
import gelas2 from "../../assets/images/gelas/gelas 2.png";
import gelas3 from "../../assets/images/gelas/gelas 3.png";
import gelas4 from "../../assets/images/gelas/gelas 4.png";

import gantunganbaju1 from "../../assets/images/gantungan baju/gantunganbaju 1.png";
import gantunganbaju2 from "../../assets/images/gantungan baju/gantunganbaju 2.png";

import gantung1 from "../../assets/images/gantung/gantung 1.png";
import gantung2 from "../../assets/images/gantung/gantung 2.png";

import ganci1 from "../../assets/images/ganci/ganci 1.png";
import ganci2 from "../../assets/images/ganci/ganci 2.png";

import asbak1 from "../../assets/images/asbak/asbak 1.png";
import asbak2 from "../../assets/images/asbak/asbak 2.png";
import asbak3 from "../../assets/images/asbak/asbak 3.png";
import asbak4 from "../../assets/images/asbak/asbak 4.png";

import alatmusik1 from "../../assets/images/alat musik/musik 1.png";
import alatmusik2 from "../../assets/images/alat musik/musik 2.png";
import alatmusik3 from "../../assets/images/alat musik/musik 3.png";
import alatmusik4 from "../../assets/images/alat musik/musik 4.png";

const products = [
  {
    titleKey: "products.categories.woodenStatues",
    images: [patung1, patung2, patung3],
  },
  {
    titleKey: "products.categories.balineseMagnets",
    images: [magnetbali1, magnetbali2, magnetbali3, magnetbali4],
  },
  {
    titleKey: "products.categories.airbrushedMagnets",
    images: [
      magnetairbrush1,
      magnetairbrush2,
      magnetairbrush3,
      magnetairbrush4,
    ],
  },
  {
  titleKey: "products.categories.calendar",
  images: [
    kalender1,
    kalender2,
    kalender3,
    kalender4,
  ],
},
  {
    titleKey: "products.categories.keychains",
    images: [ganci1, ganci2, kalender1, kalender2],
  },
  {
    titleKey: "products.categories.ashtrays",
    images: [asbak1, asbak2, asbak3, asbak4],
  },
  {
    titleKey: "products.categories.glassware",
    images: [gelas1, gelas2, gelas3, gelas4],
  },
  {
    titleKey: "products.categories.musicalInstruments",
    images: [alatmusik1, alatmusik2, alatmusik3, alatmusik4],
  },
  {
    titleKey: "products.categories.balineseMasks",
    images: [topeng1, topeng2, topeng3, topeng4],
  },
];

function Products() {
  const { t } = useTranslation();

  return (
    <section
      id="products"
      className="bg-white py-28"
    >
      <div className="mx-auto max-w-[1180px] px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex rounded-full bg-primary/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-primary">
            {t("products.badge")}
          </span>

          <h2 className="mt-7 font-serif text-[44px] font-bold text-dark">
            {t("products.title")}
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-[150px] bg-secondary"></span>
            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>
            <span className="h-px w-[150px] bg-secondary"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[560px] text-[18px] leading-8 text-text/70">
            {t("products.description")}
          </p>

        </div>

        {/* Categories */}

        <div className="mt-24 space-y-24">

          {products.map((category) => (

            <div key={category.titleKey}>

              <div className="mb-12 flex items-center justify-center gap-3">

                <span className="text-secondary">✦ ✦</span>

                <h3 className="font-serif text-[24px] font-bold text-dark">
                  {t(category.titleKey)}
                </h3>

                <span className="text-secondary">✦ ✦</span>

              </div>

<div
  className={`grid gap-8 ${
    category.images.length === 3
      ? "mx-auto max-w-[820px] grid-cols-3"
      : "grid-cols-2 md:grid-cols-4"
  }`}
>
  {category.images.map((image, index) => (
    <div
      key={index}
      className="overflow-hidden rounded-2xl"
    >
      <img
        src={image}
        alt={`${t(category.titleKey)} ${index + 1}`}
        className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
      />
    </div>
  ))}
</div>

            </div>

          ))}

          {/* Coat Hooks + Hanging Ornaments */}

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Coat Hooks */}

            <div>

              <div className="mb-10 flex items-center justify-center gap-3">

                <span className="text-secondary">✦ ✦</span>

                <h3 className="font-serif text-[24px] font-bold text-dark">
                  {t("products.categories.coatHooks")}
                </h3>

                <span className="text-secondary">✦ ✦</span>

              </div>

              <div className="grid grid-cols-2 gap-8">

                {[gantunganbaju1, gantunganbaju2].map((image, index) => (

                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl"
                  >

                    <img
                      src={image}
                      alt={t("products.categories.coatHooks")}
                      className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
                    />

                  </div>

                ))}

              </div>

            </div>

            {/* Hanging Ornaments */}

            <div>

              <div className="mb-10 flex items-center justify-center gap-3">

                <span className="text-secondary">✦ ✦</span>

                <h3 className="font-serif text-[24px] font-bold text-dark">
                  {t("products.categories.hangingOrnaments")}
                </h3>

                <span className="text-secondary">✦ ✦</span>

              </div>

              <div className="grid grid-cols-2 gap-8">

                {[gantung1, gantung2].map((image, index) => (

                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl"
                  >

                    <img
                      src={image}
                      alt={t("products.categories.hangingOrnaments")}
                      className="aspect-square w-full object-cover transition duration-500 hover:scale-105"
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Products;
