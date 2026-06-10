const services = [
  {
    number: "01",
    name: "SHOFUKU EXPERIENCES",
    role: "Flagship event execution",
    description:
      "End-to-end production for elevated private events, corporate gatherings, launch moments, receptions, VIP experiences, and high-touch celebrations.",
    capabilities: [
      "Private celebrations and executive events",
      "Corporate receptions and hospitality moments",
      "Launches, premieres, and curated guest experiences",
      "Run-of-show, production flow, and onsite execution",
    ],
  },
  {
    number: "02",
    name: "SHOFUKU CONNECT",
    role: "Premium vendor network",
    description:
      "A vetted partner ecosystem that connects clients with the right creative, hospitality, logistics, entertainment, and production vendors.",
    capabilities: [
      "Florists, photographers, caterers, and rentals",
      "Transport, limo, lodging, and hotel coordination",
      "DJs, live music, MCs, entertainers, and talent",
      "Audio, visual, lighting, staging, and technical teams",
    ],
  },
  {
    number: "03",
    name: "SHOFUKU STRATEGY",
    role: "Brand and activation consulting",
    description:
      "Strategic direction for brands, founders, organizations, and teams building an event around audience, reputation, launch, or legacy.",
    capabilities: [
      "Brand activation and experiential marketing strategy",
      "Audience engagement and guest journey concepts",
      "Event positioning, launch planning, and narrative",
      "Concept development for cross-industry moments",
    ],
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-ivory py-28 dark:bg-[#070706] md:py-36"
    >
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">03 / Divisions</p>
            <h2 className="section-heading mt-5">
              Three divisions. One elevated standard.
            </h2>
          </div>
          <p className="section-kicker">
            Whether the brief begins with a guest list, a brand launch, a
            vendor need, or an ambitious idea, SHOFUKU gives the project a
            clear operating system.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              className="group relative flex min-h-[36rem] flex-col justify-between overflow-hidden rounded-lg border border-ink/10 bg-[#fbf8f1] p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-bronze/45 hover:shadow-luxury dark:border-ivory/10 dark:bg-white/[0.045] dark:hover:border-champagne/45 dark:hover:shadow-luxury-dark"
            >
              <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-bronze/12 transition group-hover:scale-110 dark:border-champagne/15" />
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display text-6xl font-semibold text-bronze/45 transition group-hover:text-bronze dark:text-champagne/40 dark:group-hover:text-champagne">
                    {service.number}
                  </span>
                  <span className="text-right text-[10px] font-bold uppercase tracking-[0.24em] text-ink/42 dark:text-ivory/42">
                    {service.role}
                  </span>
                </div>
                <h3 className="mt-9 text-xl font-extrabold uppercase tracking-[0.18em] text-ink dark:text-ivory">
                  {service.name}
                </h3>
                <p className="mt-5 text-sm leading-7 text-ink/66 dark:text-ivory/66">
                  {service.description}
                </p>
              </div>
              <ul className="mt-10 space-y-4">
                {service.capabilities.map((capability) => (
                  <li
                    key={capability}
                    className="flex gap-3 text-sm text-ink/76 dark:text-ivory/76"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-bronze dark:bg-champagne" />
                    {capability}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
