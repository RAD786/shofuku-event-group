const galleryItems = [
  {
    label: "Executive Reception",
    meta: "Hospitality / Client Development",
    tone: "from-[#f8f4eb] via-[#dcc58f] to-[#153f35]",
  },
  {
    label: "Private Estate Dinner",
    meta: "Private Client / Fine Dining",
    tone: "from-[#161514] via-[#9a724a] to-[#f8f4eb]",
  },
  {
    label: "Brand Activation",
    meta: "Launch / Audience Engagement",
    tone: "from-[#153f35] via-[#8faac9] to-[#f8f4eb]",
  },
  {
    label: "Live Performance Room",
    meta: "Entertainment / Production",
    tone: "from-[#070706] via-[#153f35] to-[#dcc58f]",
  },
  {
    label: "Hospitality Suite",
    meta: "VIP / Concierge Experience",
    tone: "from-[#f8f4eb] via-[#c9b28a] to-[#161514]",
  },
  {
    label: "Community Benefit",
    meta: "Nonprofit / Cultural Moment",
    tone: "from-[#8faac9] via-[#f8f4eb] to-[#9a724a]",
  },
];

export function Gallery() {
  return (
    <section
      id="gallery"
      className="relative isolate overflow-hidden bg-[#fbf8f1] py-28 dark:bg-[#0d0c0a] md:py-36"
    >
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">05 / Portfolio</p>
            <h2 className="section-heading mt-5">
              Rooms with atmosphere. Moments with intent.
            </h2>
          </div>
        </div>

        <div className="mt-16 grid auto-rows-[18rem] gap-5 md:grid-cols-6">
          {galleryItems.map((item, index) => (
            <article
              key={item.label}
              className={`group relative overflow-hidden rounded-lg border border-ink/10 bg-gradient-to-br ${item.tone} p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-luxury dark:border-ivory/10 dark:hover:shadow-luxury-dark ${
                index === 0 || index === 5
                  ? "md:col-span-3"
                  : "md:col-span-2"
              }`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.38),transparent_24%),linear-gradient(to_top,rgba(0,0,0,0.68),transparent_64%)]" />
              <div className="absolute inset-5 border border-white/18 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="w-fit rounded-full border border-white/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-white/88 backdrop-blur">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.28em] text-white/62">
                    {item.meta}
                  </p>
                  <h3 className="font-display text-4xl font-semibold leading-none text-white">
                    {item.label}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
