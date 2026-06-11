const pillars = [
  {
    title: "Vision-led planning",
    text: "The concept, guest experience, budget, and production plan move from one clear point of view.",
  },
  {
    title: "Curated vendor ecosystem",
    text: "Partners are selected for fit, polish, reliability, and the standard the room requires.",
  },
  {
    title: "White-glove communication",
    text: "Clients get calm updates, clear decisions, and a team that protects the experience.",
  },
  {
    title: "Seamless execution",
    text: "Timelines, teams, vendors, and guest flow are managed with discipline onsite.",
  },
  {
    title: "Brand-conscious strategy",
    text: "Every touchpoint is evaluated for audience, reputation, story, and business impact.",
  },
  {
    title: "No template thinking",
    text: "The event is built around the client, the room, and the moment - never a recycled formula.",
  },
];

export function Process() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-28 text-ivory md:py-36">
      <div className="absolute inset-0 -z-20 bg-[url('/images/background-section-4.png')] bg-cover bg-center" />
      <div className="absolute inset-0 -z-10 bg-ink/78 dark:bg-black/82" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(17,16,14,0.58),rgba(22,21,20,0.66)_52%,rgba(21,63,53,0.54))] dark:bg-[linear-gradient(135deg,rgba(5,5,4,0.72),rgba(17,16,14,0.72)_45%,rgba(16,44,38,0.6))]" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-10 top-24 h-px w-80 rotate-12 bg-gradient-to-r from-transparent via-champagne to-transparent" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full border border-champagne/20" />
        <div className="absolute right-[18%] top-20 text-[10px] font-bold tracking-[0.5em] text-champagne/40">
          04 / 13
        </div>
      </div>

      <div className="section-shell relative">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow text-champagne">04 / Why Shofuku</p>
            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
              The room should feel effortless. The work behind it should not.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-ivory/70">
            SHOFUKU pairs the strategic lens of a brand partner with the
            discipline of a production team and the discretion of a luxury
            concierge. Clients get structure without stiffness, creativity
            without chaos, and execution that respects the stakes.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-ivory/10 bg-ivory/10 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className="min-h-56 bg-ink/88 p-7 transition hover:bg-emerald/75 dark:bg-black/35 dark:hover:bg-emerald/60"
            >
              <span className="text-xs font-bold uppercase tracking-[0.26em] text-champagne/80">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-8 text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory/62">{pillar.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
