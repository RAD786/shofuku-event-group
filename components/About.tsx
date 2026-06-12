export function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden border-y border-ink/10 bg-[#fbf8f1] py-28 transition-colors duration-500 dark:border-ivory/10 dark:bg-[#0c0b09] md:py-36"
    >
      <div className="absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full border border-bronze/10 dark:border-champagne/10" />
      <div className="absolute right-[-9rem] top-16 -z-10 h-[34rem] w-[34rem] rounded-full border border-ink/[0.06] dark:border-ivory/[0.07]" />
      <div className="absolute bottom-[-12rem] right-[18%] -z-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(220,197,143,0.2),transparent_64%)] dark:bg-[radial-gradient(circle,rgba(21,63,53,0.34),transparent_64%)]" />

      <div className="section-shell grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="relative">
          <div className="absolute -left-8 top-0 hidden h-64 w-64 -translate-y-10 rounded-full border border-bronze/20 dark:border-champagne/20 md:block" />
          <div className="absolute -left-1 top-8 hidden h-44 w-44 rounded-full border border-dashed border-ink/10 dark:border-ivory/10 md:block" />
          <div className="absolute left-36 top-4 hidden h-3 w-3 rounded-full bg-bronze shadow-[0_0_0_10px_rgba(154,114,74,0.08)] dark:bg-champagne dark:shadow-[0_0_0_10px_rgba(220,197,143,0.1)] md:block" />
          <p className="eyebrow">02 / Vision</p>
          <h2 className="section-heading mt-5">
            Built for moments that need to carry weight.
          </h2>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -right-8 -top-12 hidden h-72 w-72 rounded-full border border-bronze/15 dark:border-champagne/15 lg:block" />
          <div className="pointer-events-none absolute right-14 top-8 hidden h-44 w-44 rounded-full border border-celestial/20 dark:border-celestial/25 lg:block" />
          <div className="pointer-events-none absolute right-1 top-36 hidden h-px w-56 rotate-[-24deg] bg-gradient-to-r from-transparent via-bronze/30 to-transparent dark:via-champagne/25 lg:block" />
          <div className="pointer-events-none absolute right-44 top-3 hidden h-2.5 w-2.5 rounded-full bg-emerald shadow-[0_0_0_9px_rgba(21,63,53,0.08)] dark:bg-celestial dark:shadow-[0_0_0_9px_rgba(143,170,201,0.1)] lg:block" />
          <p className="font-display text-3xl font-semibold leading-tight text-ink dark:text-ivory md:text-5xl">
            &ldquo;SHOFUKU exists to transform moments into movements - delivering
            world-class event experiences while building an ecosystem of
            excellence that empowers businesses, connects communities, and
            defines what is possible.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
