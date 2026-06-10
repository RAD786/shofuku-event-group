export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-y border-ink/10 bg-[#fbf8f1] py-28 transition-colors duration-500 dark:border-ivory/10 dark:bg-[#0c0b09] md:py-36"
    >
      <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="eyebrow">02 / Vision</p>
          <h2 className="section-heading mt-5">
            Built for moments that need to carry weight.
          </h2>
        </div>
        <div>
          <p className="font-display text-3xl font-semibold leading-tight text-ink dark:text-ivory md:text-5xl">
            &ldquo;SHOFUKU exists to transform moments into movements - delivering
            world-class event experiences while building an ecosystem of
            excellence that empowers businesses, connects communities, and
            defines what is possible.&rdquo;
          </p>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ink/68 dark:text-ivory/68">
            The group operates as a single point of command for experience
            design, vendor alignment, event production, and strategic direction.
            Every event is treated as a brand signal, a relationship moment,
            and a memory engineered with intent.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              "One accountable event ecosystem spanning planning, production, partners, and strategy.",
              "Built for boardrooms, ballrooms, hospitality spaces, cultural rooms, and private residences.",
              "Calm communication, refined creative direction, and high-touch execution from first brief to final guest departure.",
            ].map((item) => (
              <p
                key={item}
                className="border-l border-bronze/35 pl-5 text-sm leading-7 text-ink/68 dark:border-champagne/35 dark:text-ivory/68"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
