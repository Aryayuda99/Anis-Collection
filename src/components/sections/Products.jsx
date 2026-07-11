import aboutImage from "../../assets/images/about.jpeg";
import { useTranslation } from "react-i18next";

const products = [
  {
    title: "Hand-Painted Wooden Statues",
    items: 3,
  },
  {
    title: "Balinese Magnets",
    items: 4,
  },
  {
    title: "Airbrushed Magnets",
    items: 4,
  },
  {
    title: "Keychains",
    items: 4,
  },
  {
    title: "Ashtrays",
    items: 4,
  },
  {
    title: "Glassware",
    items: 4,
  },
  {
    title: "Musical Instruments",
    items: 4,
  },
  {
    title: "Balinese Masks",
    items: 4,
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
            Featured Products
          </span>

          <h2 className="mt-7 font-serif text-[44px] font-bold text-dark">
            Handpicked for You
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">
            <span className="h-px w-[150px] bg-secondary"></span>
            <span className="h-[10px] w-[10px] rotate-45 bg-secondary"></span>
            <span className="h-px w-[150px] bg-secondary"></span>
          </div>

          <p className="mx-auto mt-8 max-w-[560px] text-[18px] leading-8 text-text/70">
            A curated selection of our finest Balinese creations, each handmade
            with care and cultural authenticity.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-24 space-y-24">

          {products.map((category) => (

            <div key={category.title}>

              <div className="mb-12 flex items-center justify-center gap-3">

                <span className="text-secondary">✦ ✦</span>

                <h3 className="font-serif text-[24px] font-bold text-dark">
                  {category.title}
                </h3>

                <span className="text-secondary">✦ ✦</span>

              </div>

              <div
                className={`grid gap-8 ${
                  category.items === 3
                    ? "mx-auto max-w-[820px] grid-cols-3"
                    : "grid-cols-2 md:grid-cols-4"
                }`}
              >

                {Array.from({ length: category.items }).map((_, index) => (

                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl"
                  >

                    <img
                      src={aboutImage}
                      alt={category.title}
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
                  Coat Hooks
                </h3>

                <span className="text-secondary">✦ ✦</span>

              </div>

              <div className="grid grid-cols-2 gap-8">

                {[1, 2].map((item) => (

                  <div
                    key={item}
                    className="overflow-hidden rounded-2xl"
                  >

                    <img
                      src={aboutImage}
                      alt="Coat Hooks"
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
                  Hanging Ornaments
                </h3>

                <span className="text-secondary">✦ ✦</span>

              </div>

              <div className="grid grid-cols-2 gap-8">

                {[1, 2].map((item) => (

                  <div
                    key={item}
                    className="overflow-hidden rounded-2xl"
                  >

                    <img
                      src={aboutImage}
                      alt="Hanging Ornaments"
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