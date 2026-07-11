import { collections } from "../../data/collections";
import CardCollection from "./CardCollection";

function Collections() {
  return (
    <section className="bg-[#3E2723] py-24">

      <div className="mx-auto max-w-[1140px]">

        <div className="text-center">

          <span className="inline-block rounded-full bg-white/10 px-5 py-2 text-[11px] font-semibold uppercase tracking-[2.5px] text-white">
            Our Collections
          </span>

          <h2 className="mt-8 font-serif text-[44px] font-bold text-[#FFF8F0]">
            Explore Our Range
          </h2>

          <div className="mt-6 flex items-center justify-center gap-4">

            <span className="h-px w-[153px] bg-[#F4B400]" />

            <span className="h-[10px] w-[10px] rotate-45 bg-[#F4B400]" />

            <span className="h-px w-[153px] bg-[#F4B400]" />

          </div>

          <p className="mx-auto mt-8 max-w-[576px] text-[18px] leading-[29px] text-white/75">
            Authentic Balinese handicrafts, each piece crafted with devotion
            and cultural pride.
          </p>

        </div>

        <div className="mt-20 grid grid-cols-4 gap-8">

          {collections.map((item) => (
            <CardCollection
              key={item.title}
              item={item}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Collections;