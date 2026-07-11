const stats = [
  {
    value: "1997",
    label: "Year Founded",
  },
  {
    value: "100+",
    label: "Handmade Products",
  },
  {
    value: "5+",
    label: "Retail Partners",
  },
  {
    value: "25+",
    label: "Years of Experience",
  },
];

function Stats() {
  return (
    <section className="bg-background pb-20 lg:pb-24">
      <div className="container-page">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-[8px] border border-dark/10 bg-white/55 px-6 py-7 text-center shadow-[0_8px_24px_rgba(58,38,34,0.06)]"
            >
              <p className="font-serif text-[30px] font-bold leading-none tracking-normal text-primary sm:text-[34px]">
                {item.value}
              </p>
              <p className="mt-3 text-[12px] font-medium leading-none text-text/60">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
